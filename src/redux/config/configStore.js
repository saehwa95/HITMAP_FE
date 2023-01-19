import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/userSlice";
import snsSlice from "../modules/snsSlice";

const store = configureStore({
  reducer: { userSlice, snsSlice },
  devTools: false,
});

export default store;
