import React from 'react';
import Box from '../../components/Box';
import {
  parseRawPrice,
  calculateExtraPrice,
  calculateBasePrice,
} from '../../modules/recipes/price';
import { DisplayPrice, Divider, TotalPrice } from '../../components/SummaryDetails';
import List, { ListItem } from '../../components/List';

const PriceSummary = ({ summary, totalPrice, baseRecipePrice, shippingPrice }) => (
  <>
    {summary && !!summary.length ? (
      <Box width={['290px', '450px']} margin={'16px'}>
        <List>
          {summary.map((recipe) => (
            <ListItem key={recipe.id}>
              {recipe.name} {recipe.selected > 1 ? ` X  ${recipe.selected}` : null}
              {recipe.extraCharge ? (
                <DisplayPrice>
                  {calculateExtraPrice(baseRecipePrice, recipe.selected, recipe.extraCharge)}
                </DisplayPrice>
              ) : (
                <DisplayPrice>{calculateBasePrice(baseRecipePrice, recipe.selected)}</DisplayPrice>
              )}
            </ListItem>
          ))}
          <ListItem>
            Shipping <DisplayPrice> {parseRawPrice(shippingPrice)} </DisplayPrice>
          </ListItem>
        </List>
        <Divider></Divider>
        <TotalPrice>
          Total <DisplayPrice> {totalPrice} </DisplayPrice>
        </TotalPrice>
      </Box>
    ) : (
      <Box width={['200px', '450px']} textAlign="center">
        <p> OHH!! It's Empty , Please Add Recipes</p>
      </Box>
    )}
  </>
);

export default PriceSummary;
