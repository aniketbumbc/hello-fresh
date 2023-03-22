import {
  parseRawPrice,
  calculateRecipeBoxTotal,
  getUniqueRecipes,
  convertCentsToDollar,
  calculateExtraPrice,
  calculateBasePrice,
} from './price';
import {
  baseRecipePrice,
  shippingPrice,
  selectedRecipesInBox,
  expectedResultUniqueRecipes,
  recipeSelected,
  extraCharge,
} from '../../test data/helloFreshTestData';

describe('price', () => {
  describe('parseRawPrice', () => {
    test('should return the raw price with the currency symbol and converted to decimals', () => {
      const price = 1798;
      const parsedPrice = parseRawPrice(price);

      expect(parsedPrice).toBe('$17.98');
    });

    test('should not return the raw price without the currency symbol', () => {
      const price = 1798;
      const parsedPrice = parseRawPrice(price);

      expect(parsedPrice).not.toBe('17.98');
    });
    test('should not return the raw price with the currency symbol and integer', () => {
      const price = 1798;
      const parsedPrice = parseRawPrice(price);

      expect(parsedPrice).not.toBe('$1798');
    });
  });

  describe('calculateBoxTotal', () => {
    test('should calculate correct box total based on selected recipes,basePrice,shippingPrice parameters', () => {
      const boxTotal = calculateRecipeBoxTotal(
        baseRecipePrice,
        shippingPrice,
        selectedRecipesInBox
      );

      expect(boxTotal).toBe('$120.86');
    });

    test('should not be calculate incorrect box total based selected recipes,basePrice,shippingPrice parameters', () => {
      const boxTotal = calculateRecipeBoxTotal(
        baseRecipePrice,
        shippingPrice,
        selectedRecipesInBox
      );

      expect(boxTotal).not.toBe('$138.86');
    });
  });

  describe('getUniqueRecipes', () => {
    test('should return unique recipes from selectedRecipesInBox', () => {
      const uniqueRecipes = getUniqueRecipes(selectedRecipesInBox);

      expect(uniqueRecipes.length).toBe(3);
      expect(uniqueRecipes).toEqual(expectedResultUniqueRecipes);
    });

    test('should not retun  incorrect recipes from selectedRecipesInBox', () => {
      const uniqueRecipes = getUniqueRecipes(selectedRecipesInBox);

      expect(uniqueRecipes.length).not.toBe(4);
      expect(uniqueRecipes).not.toBe(expectedResultUniqueRecipes);
    });
  });

  describe('convertCentsToDollar', () => {
    test('should convert correct cents into dollar and return number', () => {
      const dollarPrice = convertCentsToDollar(1798);

      expect(dollarPrice).toBe(17.98);
      expect(typeof dollarPrice).toBe('number');
    });

    test('should not retun string when converting into dollar', () => {
      const dollarPrice = convertCentsToDollar(1798);

      expect(typeof dollarPrice).not.toBe('string');
    });
  });

  describe('calculateExtraPrice', () => {
    test('should calculate correct recipe price when extra charge is apply to recipes', () => {
      const totalPriceWithExtraCharge = calculateExtraPrice(
        baseRecipePrice,
        recipeSelected,
        extraCharge
      );

      expect(totalPriceWithExtraCharge).toBe('$89.88');
    });

    test('should not incorrect recipe price when extra charge is apply to recipes', () => {
      const totalPriceWithExtraCharge = calculateExtraPrice(
        baseRecipePrice,
        recipeSelected,
        extraCharge
      );

      expect(totalPriceWithExtraCharge).not.toBe('$66.92');
    });
  });

  describe('calculateBasePrice', () => {
    test('should calculate correct base price of recipes', () => {
      const totalBasePrice = calculateBasePrice(baseRecipePrice, recipeSelected);

      expect(totalBasePrice).toBe('$53.94');
    });

    test('should not calculate incorrect recipe base price', () => {
      const totalBasePrice = calculateBasePrice(baseRecipePrice, recipeSelected);

      expect(totalBasePrice).not.toBe('$66.94');
    });
  });
});
