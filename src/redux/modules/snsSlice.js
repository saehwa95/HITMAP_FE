import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const snsSlice = createSlice({
  name: "sns",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default snsSlice.reducer;
