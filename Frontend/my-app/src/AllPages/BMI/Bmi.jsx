import { useEffect, useState } from "react";
import "../../CSS/Login.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calculate } from "../../Redux/BMI/bmi.action";
 
const init={
    height:"",
    weight:"",
    token:""
}

export const Bmi=()=>{
const dispatch= useDispatch();  
const {token}=useSelector(state=>state.authReducer);
const {bmi}=useSelector(state=>state.bmiReducer)
const navigate=useNavigate();

if(!token){
   navigate("/")
}


const [data,setData]= useState(init)
const handelChange=(e)=>{
 const {name,value}=e.target;
 setData({...data,[name]:value})
}

const handelSubmit=(e)=>{
   e.preventDefault();
   dispatch(Calculate({...data,token}))
}
 


return  <div id="container">
 
<div className="Login-form-Box">
       <h2>B-M-I ={bmi?bmi:null}  {bmi==null?null:  bmi  < 18.5
                ? 'Underweight'
                : bmi  >= 18.5 &&
                bmi  <= 24.9
                ? 'Normal weight'
                : bmi  >= 25 &&
                bmi  <= 29.9
                ? 'Overweight'
                : 'Obese'} </h2>
      <form action="">
         <label htmlFor="height">
            Height:
            <input type="number" name="height" onChange={handelChange} placeholder="Enter your Height in Meter"/>
         </label>
            Weight:
         <label htmlFor="weight">
            <input type="number" name="weight" onChange={handelChange} placeholder="Enter your Weight in KG"/>
         </label>  
          <button  id="btn" onClick={handelSubmit} >  Calculate </button>      
      </form>
    
</div>

</div>
}