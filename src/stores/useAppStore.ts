import {create} from 'zustand'
import { createReciprdSlice, RecipesSliceType } from './recipeSlice' 


export const useAppStore = create<RecipesSliceType> ((...a) => ({
    ...createReciprdSlice(...a)
}))