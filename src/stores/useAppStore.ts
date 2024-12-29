import {create} from 'zustand'
import { createReciprdSlice } from './recipeSlice' 


export const useAppStore = create ((...a) => ({
    ...createReciprdSlice(...a)
}))