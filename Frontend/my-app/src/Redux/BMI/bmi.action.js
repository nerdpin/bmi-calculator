import axios from "axios";
import { CALCULATE_FAILED, CALCULATE_REQUEST, CALCULATE_SUCESS } from "./bmi.action.types";
 

const BaseUrl = "https://bmi-backend-rc8r.onrender.com";

 

export const Calculate = (info) => async (dispatch) => {
    // console.log(info)
    try {
      dispatch({ type: CALCULATE_REQUEST });
      let data = await axios.post(`${BaseUrl}/bmi/calculate`,info);
      alert(`YOUR_BMI : ${data.data.calculatedBMI}` )
      console.log(data.data.calculatedBMI );
      dispatch({ type: CALCULATE_SUCESS ,payload:data.data.calculatedBMI  });
    } catch (e) {
      // console.log(e.response.data ,"SSS")
      alert(`BMI FAILED":${e.response.data}`)
      // console.log(e)
      dispatch({ type: CALCULATE_FAILED });
    }
  };