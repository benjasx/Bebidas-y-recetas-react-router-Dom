import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteSlice: (id:Recipe['idDrink']) => boolean
};

//sliceParent
export const createfavoritesSlices: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (
      get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)
    ) {
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      }))
    } else {
      console.log("No existe");
      set((state)=> ({
        favorites: [...state.favorites, recipe],
      }))
      console.log("se agrega...");
    }
  },

  favoriteSlice: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id)
  }
});
