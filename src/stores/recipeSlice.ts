import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipi, SearchFilter } from "../types";


export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipi: Recipi;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipies: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipies: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipi: {} as Recipi,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipies: async (filters) => {
    const drinks = await getRecipes(filters);
    set({
      drinks,
    });
  },
  selectRecipies: async (id) => {
    const selectedRecipi = await getRecipeById(id);
    set({
      selectedRecipi,
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipi: {} as Recipi,
    });
  },
});
