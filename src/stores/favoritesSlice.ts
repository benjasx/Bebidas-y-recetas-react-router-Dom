import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createCreateNotificationSlice, NotificationSliceType } from "./notificationsSlise";



export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoritExist: (id:Recipe['idDrink']) => boolean
  loadFromStorage: () => void

};

//sliceParent
export const createfavoritesSlices: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [] ,[], FavoritesSliceType> = (
  set,
  get,
  api
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (
      get().favoritExist(recipe.idDrink)
    ) {
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
      }))
      createCreateNotificationSlice(set,get,api).showNotification({
        text:'Se elimino de favoritos', 
        error:false
      })
    } else {
      
      set((state)=> ({
        favorites: [...state.favorites, recipe],
      }))
      createCreateNotificationSlice(set,get,api).showNotification({
        text:'Se agregó a favoritos', 
        error:false
      })
    }

    createRecipesSlice(set, get, api).closeModal()
    localStorage.setItem('favoritos', JSON.stringify(get().favorites))
  },

  favoritExist: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id)
  },

  loadFromStorage: () =>{
    const storedFavorites = localStorage.getItem('favoritos')
    if(storedFavorites){
      set({
        favorites: JSON.parse(storedFavorites)
      })
    }

  }
});
