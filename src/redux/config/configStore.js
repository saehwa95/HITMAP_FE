import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/userSlice";

const store = configureStore({
  reducer: { userSlice },
  devTools: false,
});

export default store;
