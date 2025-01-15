import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createfavoritesSlices } from "./favoritesSlice";


// Combinar slices en la tienda principal
export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
  devtools(
    (...args) => ({
      ...createRecipesSlice(...args),
      ...createfavoritesSlices(...args),
    }),
    { name: "AppStore" } // Nombre personalizado para devtools
  )
);


