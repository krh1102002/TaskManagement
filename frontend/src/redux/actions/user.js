import axios from "axios";
import { userFail, userRequest, userSuccess } from "../reducers/userReducer";

export const signIn = (data) => async (dispatch) => {
  try {
    const user = await axios({
      method: "POST",
      url: "https://taskmanagement-3.onrender.com/user/signin",
      data,
    });
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.data.token}`;
    localStorage.setItem(
      "userToken",
      JSON.stringify({ userToken: user.data.token })
    );
    dispatch(userSuccess(user.data));
  } catch (error) {
    dispatch(userFail(error.response.data.message));
  }
};

export const signUp = (data) => async (dispatch) => {
  try {
    const user = await axios({
      method: "POST",
      url: "https://taskmanagement-3.onrender.com/user/signup",
      data,
    });
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.data.token}`;
    localStorage.setItem(
      "userToken",
      JSON.stringify({ userToken: user.data.token })
    );
    dispatch(userSuccess(user.data));
  } catch (error) {
    dispatch(userFail(error.response.data.message));
  }
};

export const getUserDetail = (data) => async (dispatch) => {
  try {
    dispatch(userRequest());

    const user = await axios({
      method: "GET",
      url: "https://taskmanagement-3.onrender.com/user",
    });

    dispatch(userSuccess(user.data));
  } catch (error) {
    dispatch(userFail(error.response.data.message));
  }
};
