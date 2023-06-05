import { useState } from "react";
import "../../CSS/Login.css"
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { signup } from "../../Redux/AuthReducer/auth.Action";
import { useNavigate } from "react-router-dom";
const init={
    name:"",
    email:"",
    password:""
}

export const Signup=()=>{
 const {signup_status}=useSelector(state=>state.authReducer)  
 const navigate=useNavigate()
const dispatch = useDispatch();
const [data,setData]= useState(init)
const handelChange=(e)=>{
 const {name,value}=e.target;
 setData({...data,[name]:value})
}

if(signup_status){
   navigate("/")
}

const handelSubmit=(e)=>{
e.preventDefault();
dispatch(signup(data))
}

console.log(data);
return  <div id="container">
 
<div className="Login-form-Box">
       <h2>Sign-up </h2>
      <form action="">
      <label htmlFor="name">
            Name:
            <input type="text" name="name" onChange={handelChange} placeholder="Enter your name"/>
         </label>

         <label htmlFor="email">
            Email:
            <input type="email" name="email" onChange={handelChange} placeholder="Enter your Email"/>
         </label>
            Password:
         <label htmlFor="password">
            <input type="text" name="password" onChange={handelChange} placeholder="Enter your Password"/>
         </label>  
         
          <button id="btn" onClick={handelSubmit}>Signup</button> 
          <Link to="/"><h5 id="reg">Login Here...</h5> </Link>
      </form>
    
</div>

</div>
}