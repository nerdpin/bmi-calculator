import axios from "axios";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCESS, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCESS } from "./auth.ActionTypes";

const BaseUrl = "https://bmi-backend-rc8r.onrender.com";
export const login = (info) => async (dispatch) => {
  console.log(info)
  try {
    dispatch({ type: LOGIN_REQUEST });
    let data = await axios.post(`${BaseUrl}/auth/login`,info);
    alert("LOGIN SUCESS")
    console.log(data.data.token);

    dispatch({ type: LOGIN_SUCESS, payload: data.data.token });
  } catch (e) {
    console.log(e.response.data ,"SSS")
    alert(`LOGIN FAILED":${e.response.data}`)
    console.log(e)
    dispatch({ type: LOGIN_FAILED });
  }
};

export const signup = (info) => async (dispatch) => {
  // console.log(info)
  try {
    dispatch({ type: SIGNUP_REQUEST });
    let data = await axios.post(`${BaseUrl}/auth/signup`,info);
    alert("SIGNUP SUCESS")
    // console.log(data.data.token);

    dispatch({ type: SIGNUP_SUCESS,   });
  } catch (e) {
    // console.log(e.response.data ,"SSS")
    alert(`SIGNUPFAILED":${e.response.data}`)
    // console.log(e)
    dispatch({ type: SIGNUP_FAILED });
  }
};