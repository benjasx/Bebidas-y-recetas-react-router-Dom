import { StateCreator } from "zustand";
import { Recipe} from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
}

//sliceParent
export const createfavoritesSlices : StateCreator<FavoritesSliceType> = () => ({
    favorites:[]
})
