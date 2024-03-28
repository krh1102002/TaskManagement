import axios from "axios";
import {
  addTaskSuccess,
  allTaskSuccess,
  deleteTaskSuccess,
  taskFail,
  taskRequest,
  updateTaskSuccess,
} from "../reducers/taskReducer";
import { updateUserSuccess } from "../reducers/userReducer";

export const getAllTasks = () => async (dispatch) => {
  try {
    dispatch(taskRequest());

    const task = await axios({
      method: "GET",
      url: "https://taskmanagement-3.onrender.com/task",
    });

    dispatch(allTaskSuccess(task.data));
  } catch (error) {
    dispatch(taskFail(error.response.data.message));
  }
};

export const addTask = (data) => async (dispatch) => {
  try {
    const task = await axios({
      method: "POST",
      url: "https://taskmanagement-3.onrender.com/task",
      data,
    });

    dispatch(updateUserSuccess("created"));

    dispatch(addTaskSuccess(task.data));
  } catch (error) {
    dispatch(taskFail(error.response.data.message));
  }
};

export const updateTask = (data) => async (dispatch) => {
  try {
    console.log(data);
    const task = await axios({
      method: "PUT",
      url: "https://taskmanagement-3.onrender.com/task",
      data,
    });
    if (data.status === "completed") {
      dispatch(updateUserSuccess("completed"));
    }
    dispatch(updateTaskSuccess(task.data));
  } catch (error) {
    dispatch(taskFail(error.response.data.message));
  }
};

export const deleteTask = (task) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: "https://taskmanagement-3.onrender.com/task",
      data: { _id: task._id },
    });
    if (task.status === "completed")
      dispatch(updateUserSuccess("deleteCompleted"));
    else dispatch(updateUserSuccess("deleteCreated"));

    dispatch(deleteTaskSuccess(task._id));
  } catch (error) {
    dispatch(taskFail(error.response.data.message));
  }
};
