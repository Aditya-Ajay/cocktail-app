import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialValue = {
  cocktail: [],
  status: "idle",
};

export const fetchItem = createAsyncThunk("item/fetchItem", async () => {
  const data = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  const response = await data.json();
  console.log(response);
  return response;
});

const CocktailSlice = createSlice({
  name: "cocktail",
  initialState: initialValue,
  reducers: {},
  extraReducers: {
    [fetchItem.pending]: (state) => {
      state.status = "PENDING";
    },
    [fetchItem.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "FULLFILED";
      state.cocktail = action.payload;
    },
  },
});

export const CocktailReducer = CocktailSlice.reducer;
