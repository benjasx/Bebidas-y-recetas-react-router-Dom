import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";

// Combinar slices en la tienda principal
export const useAppStore = create<RecipesSliceType>()(
  devtools(
    (...args) => ({
      ...createRecipesSlice(...args),
    }),
    { name: "AppStore" } // Nombre personalizado para devtools
  )
);
