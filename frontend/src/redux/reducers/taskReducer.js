import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
  currentTask: undefined,
  loading: false,
  error: "",
};
const handleUpdateTask = (state, task) => {
  const updatedTasks = state.allTasks.map((t) => {
    if (t._id === task._id) return task;
    else return t;
  });
  return updatedTasks;
};
const handleDeleteTask = (state, id) => {
  const updatedTasks = state.allTasks.filter((task) => task._id !== id);

  if (!updatedTasks || updatedTasks.length === 0) return [];

  return updatedTasks;
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    taskRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    allTaskSuccess: (state, action) => {
      state.loading = false;
      state.allTasks = action.payload.tasks;
      state.error = "";
    },
    addTaskSuccess: (state, action) => {
      state.allTasks.push(action.payload.task);
    },
    updateTaskSuccess: (state, action) => {
      const updatedTasks = handleUpdateTask(
        current(state),
        action.payload.task
      );
      state.allTasks = updatedTasks;
    },
    deleteTaskSuccess: (state, action) => {
      const updatedTasks = handleDeleteTask(current(state), action.payload);
      console.log(updatedTasks);
      state.allTasks = updatedTasks;
    },
    clearTasks: (state) => {
      state.allTasks = [];
      state.currentTask = undefined;
    },
    taskFail: (state, action) => {
      state.loading = false;
      state.currentTask = undefined;
      state.error = action.payload;
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
  },
});

export const {
  taskRequest,
  allTaskSuccess,
  addTaskSuccess,
  updateTaskSuccess,
  deleteTaskSuccess,
  clearTasks,
  taskFail,
  setCurrentTask,
} = taskSlice.actions;

export default taskSlice.reducer;
