import { configureStore } from "@reduxjs/toolkit";
import { CocktailReducer } from "../features/CocktailSlice";
import { SingleCocktailReducer } from "../features/SpecificChannnelCard";

export const store = configureStore({
  reducer: {
    cocktail: CocktailReducer,
    SingleCocktail: SingleCocktailReducer,
  },
});
