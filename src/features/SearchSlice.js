import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialValue = {
  cocktail: [],
  status: "idle",
};

export const SearchfetchItem = createAsyncThunk(
  "item/fetchItem",
  async ({ search }) => {
    const data = await fetch(
      `www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    const response = await data.json();
    console.log(response);
    return response;
  }
);

const SearchCocktailSlice = createSlice({
  name: "cocktail search",
  initialState: initialValue,
  reducers: {},
  extraReducers: {
    [SearchfetchItem.pending]: (state) => {
      state.status = "PENDING";
    },
    [SearchfetchItem.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "FULLFILED";
      state.cocktail = action.payload;
    },
  },
});

export const SearchCocktailReducer = SearchCocktailSlice.reducer;
