import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createfavoritesSlices } from "./favoritesSlice";
import { NotificationSliceType,createCreateNotificationSlice } from "./notificationsSlise"; 


// Combinar slices en la tienda principal
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(
  devtools(
    (...args) => ({
      ...createRecipesSlice(...args),
      ...createfavoritesSlices(...args),
      ...createCreateNotificationSlice(...args),
    }),
    { name: "AppStore" } // Nombre personalizado para devtools
  )
);


