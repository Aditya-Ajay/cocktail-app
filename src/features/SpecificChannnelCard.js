import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialValue = {
  singleCocktail: [],
  status: "idle",
};

export const fetchSingleItem = createAsyncThunk(
  "item/singlefetchItem",
  async ({ id }) => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const response = await data.json();
    console.log(response);
    return response;
  }
);

const SingleCocktailSlice = createSlice({
  name: "individualCocktail",
  initialState: initialValue,
  reducers: {},
  extraReducers: {
    [fetchSingleItem.pending]: (state) => {
      state.status = "PENDING";
    },
    [fetchSingleItem.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "FULLFILED";
      state.singleCocktail = action.payload;
    },
  },
});

export const SingleCocktailReducer = SingleCocktailSlice.reducer;
