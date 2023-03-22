const currency = '$';

/**
 * Method called getUniqueRecipes and calculateSelectedRecipesTotal method
 * based on output return boxTotal including shippipng price which is display on UI
 * @param {*} baseRecipePrice
 * @param {*} shippingPrice
 * @param {*} selectedRecipesInBox
 * @return {* boxTotal }
 */
export const calculateRecipeBoxTotal = (baseRecipePrice, shippingPrice, selectedRecipesInBox) => {
  let uniqueRecipes = [];
  if (selectedRecipesInBox && selectedRecipesInBox.length) {
    uniqueRecipes = getUniqueRecipes(selectedRecipesInBox);
  }
  const calculateRecipesTotal = calculateSelectedRecipesTotal(uniqueRecipes, baseRecipePrice);
  const boxTotal = calculateRecipesTotal + convertCentsToDollar(shippingPrice);
  return `${currency}${boxTotal.toFixed(2)}`;
};

/**
 *  Method return total $ of unique (same type recipes) in the box without shippingPrice.
 * @param {*} uniqueRecipes
 * @param {*} baseRecipePrice
 * @return {* calculateRecipesTotal}
 */

export const calculateSelectedRecipesTotal = (uniqueRecipes, baseRecipePrice) => {
  let calculateRecipesTotal = 0;
  uniqueRecipes &&
    uniqueRecipes.forEach((recipe) => {
      calculateRecipesTotal += convertCentsToDollar(baseRecipePrice) * recipe.selected;
      calculateRecipesTotal += recipe.extraCharge
        ? convertCentsToDollar(recipe.extraCharge) * recipe.selected
        : 0;
    });
  return calculateRecipesTotal;
};

/**
 * Method removed duplicate recipes from box
 * @param {*} selectedRecipesInBox
 * @return {* tempUniqueRecipes}
 */

export const getUniqueRecipes = (selectedRecipesInBox) => {
  let tempUniqueRecipes = [];
  tempUniqueRecipes = [...selectedRecipesInBox];
  const uniqueRecipesInBox = Object.values(
    tempUniqueRecipes.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
  );
  return uniqueRecipesInBox;
};

/**
 * Method return correct price with @$ contain at start of price
 * @param {*} price
 * @return{* $17.98}
 */

export const parseRawPrice = (price) => {
  return `${currency}${convertCentsToDollar(price)}`;
};

/**
 * Method convert cents into dollars upto 2 decimals.
 * @param {*} price
 */
export const convertCentsToDollar = (price) => {
  return Number(price, 10) / 100;
};

/**
 *  Method calculate recipes price when extraCharge is present.
 *  (baseRecipeCharge + extraCharge) * selected
 * @param {*} baseRecipePrice
 * @param {*} recipeSelected
 * @param {*} extraCharge
 */

export const calculateExtraPrice = (baseRecipePrice, recipeSelected, extraCharge) => {
  const totalPriceIncudeExtraCharge =
    convertCentsToDollar(baseRecipePrice) * recipeSelected +
    convertCentsToDollar(extraCharge) * recipeSelected;
  return `$${totalPriceIncudeExtraCharge.toFixed(2)}`;
};

/**
 *  Method calculate recipe price based baseRecipePrice and selected
 * @param {*} baseRecipePrice
 * @param {*} recipeSelected
 */

export const calculateBasePrice = (baseRecipePrice, recipeSelected) => {
  const totalBasePrice = convertCentsToDollar(baseRecipePrice) * recipeSelected;
  return `$${totalBasePrice.toFixed(2)}`;
};
