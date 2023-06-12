import { createSlice } from '@reduxjs/toolkit';

export type FavouritesState = {
  recipes: Recipe[];
};

const initialState: FavouritesState = {
  recipes: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addRecipeToFavourites: (state, action) => {
      state.recipes.push(action.payload);
    },

    removeRecipeFromFavourites: (state, action) => {
      const recipeURI = action.payload;
      const recipeIndex = state.recipes.findIndex(
        (recipe) => recipe.uri === recipeURI,
      );

      state.recipes.splice(recipeIndex, 1);
    },
  },
});

export const { addRecipeToFavourites, removeRecipeFromFavourites } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
