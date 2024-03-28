import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  loading: false,
  error: "",
};

const updateUser = (state, action) => {
  let updatedUser = {};
  if (action === "completed") {
    updatedUser = {
      ...state.user,
      taskCompleted: state.user.taskCompleted + 1,
    };
  } else if (action === "deleteCompleted") {
    updatedUser = {
      ...state.user,
      taskCreated: state.user.taskCreated - 1,
      taskCompleted: state.user.taskCompleted - 1,
    };
  } else if (action === "deleteCreated") {
    updatedUser = { ...state.user, taskCreated: state.user.taskCreated - 1 };
  } else {
    updatedUser = { ...state.user, taskCreated: state.user.taskCreated + 1 };
  }

  return updatedUser;
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    userSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = "";
    },
    updateUserSuccess: (state, action) => {
      state.user = updateUser(current(state), action.payload);
    },
    userFail: (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.user = undefined;
    },
    clearError: (state) => {
      state.error = "";
    },
    userLogout: (state) => {
      state.loading = false;
      state.user = undefined;
      state.error = "";
    },
  },
});

export const {
  userRequest,
  userSuccess,
  clearUser,
  updateUserSuccess,
  userFail,
  clearError,
  userLogout,
} = userSlice.actions;

export default userSlice.reducer;
