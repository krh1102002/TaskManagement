import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import taskReducer from "./reducers/taskReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});
