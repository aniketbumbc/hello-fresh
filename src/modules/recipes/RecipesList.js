import React, { useState } from 'react';

import { Row, Col } from '../../components/Grid';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import RecipeCard from './RecipeCard';
import PriceInfo from './PriceInfo';
import { calculateRecipeBoxTotal, getUniqueRecipes } from './price';
import useFetchHelloFreshBox from '../../hooks/useFetchHelloFreshBox';

const Recipes = () => {
  // This state stores the array of recipes with the changes performed by the customer.
  const [recipes, setRecipes] = useState([]);
  const { data, loading } = useFetchHelloFreshBox();
  const [selectedRecipesInBox, setSelectedRecipesInBox] = useState([]);

  /**
   * Metohd handleAddRecipe accept recipeId.
   * Increment newly added recipe selected by one.
   * added on selectedRecipesInBox.
   * @param {*} recipeId
   */

  const handleAddRecipe = (recipeId) => {
    const newlyAddedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (newlyAddedRecipe.id === recipeId) {
      newlyAddedRecipe.selected += 1;
    }
    setSelectedRecipesInBox([...selectedRecipesInBox, newlyAddedRecipe]);
  };

  /**
   * Metohd handleAddRecipe accept recipeId.
   * decrement selected recipe selected by one.
   * removed from selectedRecipesInBox.
   * @param {*} recipeId
   */

  const handleRemoveRecipe = (recipeId) => {
    const removedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (removedRecipe.id === recipeId) {
      removedRecipe.selected -= 1;
    }
    const reomveRecipeIndex = selectedRecipesInBox.findIndex((recipe) => recipe.id === recipeId);
    setSelectedRecipesInBox(
      selectedRecipesInBox.filter((recipe, index) => index !== reomveRecipeIndex)
    );
  };

  /**
   * totalPrice is based on @selectedRecipesInBox @baseRecipePrice @shippingPrice
   */

  const totalPrice =
    selectedRecipesInBox &&
    !!selectedRecipesInBox.length &&
    calculateRecipeBoxTotal(data.baseRecipePrice, data.shippingPrice, selectedRecipesInBox);

  /**
   * Method setSelectedRecipesInBox which is selected.
   * @param {*} fetchedRecipes
   */

  const handleSelectedRecipes = (fetchedRecipes) => {
    setSelectedRecipesInBox(fetchedRecipes.filter((recipe) => recipe.selected > 0));
  };

  React.useEffect(() => {
    const { recipes: fetchedRecipes } = data;

    if (fetchedRecipes) {
      setRecipes(fetchedRecipes);
      handleSelectedRecipes(fetchedRecipes);
    }
  }, [setRecipes, data]);

  if (loading) {
    return null;
  }

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>{data.headline}</h3>
        </Col>
        <Col sm={6}>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box textAlign="right" mr="xs">
              <h3>{totalPrice}</h3>
            </Box>
            <PriceInfo
              summary={getUniqueRecipes(selectedRecipesInBox)}
              totalPrice={totalPrice}
              baseRecipePrice={data.baseRecipePrice}
              shippingPrice={data.shippingPrice}
            />
          </Flex>
        </Col>
      </Row>

      <Row>
        {recipes.map((recipe) => (
          <Col sm={12} md={6} xl={4} key={recipe.id}>
            <Box mb="md">
              <RecipeCard
                {...recipe}
                handleAddRecipe={handleAddRecipe}
                handleRemoveRecipe={handleRemoveRecipe}
                minRecipesSelected={selectedRecipesInBox.length >= data.min}
                maxRecipesSelected={selectedRecipesInBox.length >= data.max}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
