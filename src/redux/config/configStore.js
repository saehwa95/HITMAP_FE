import { configureStore } from "@reduxjs/toolkit";
import snsSlice from "../modules/snsSlice";

const store = configureStore({
  reducer: { snsSlice },
});

export default store;
