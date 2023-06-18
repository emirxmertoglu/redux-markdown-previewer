import { configureStore } from "@reduxjs/toolkit";
import parserReducer from "@/reducers/parserSlice";

const store = configureStore({
  reducer: {
    parser: parserReducer,
  },
});

export default store;
