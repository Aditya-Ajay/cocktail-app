import { configureStore } from "@reduxjs/toolkit";
import { CocktailReducer } from "../features/CocktailSlice";
import { SingleCocktailReducer } from "../features/SpecificChannnelCard";
import { SearchCocktailReducer } from "../features/SearchSlice";

export const store = configureStore({
  reducer: {
    cocktail: CocktailReducer,
    SingleCocktail: SingleCocktailReducer,
    search: SearchCocktailReducer,
  },
});
