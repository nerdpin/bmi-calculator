import { useState } from "react";
import "../../CSS/Login.css"
import {useDispatch,useSelector} from "react-redux"
import { login } from "../../Redux/AuthReducer/auth.Action";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const init={
    email:"",
    password:""
}

export const Login=()=>{
  const navigate=useNavigate() 
  const dispatch=useDispatch(); 
  const {token,loading}=useSelector(state=>state.authReducer)
const [data,setData]= useState(init)
const handelChange=(e)=>{
 const {name,value}=e.target;
 setData({...data,[name]:value})
}

if(token){
   navigate("/bmi")
}
const handelSubmit=(e)=>{
e.preventDefault();
dispatch(login(data))
}
 

return  <div id="container">
 
<div className="Login-form-Box">
       <h2>Login </h2>
      <form action="">
         <label htmlFor="email">
            Email:
            <input type="email" name="email" onChange={handelChange} placeholder="Enter your Email"/>
         </label>
            Password:
         <label htmlFor="password">
            <input type="text" name="password" onChange={handelChange} placeholder="Enter your Password"/>
         </label>  
         
          <button  id="btn" onClick={handelSubmit} > {loading?"Loading":"Login"} </button> 
       <Link to="/signup"><h5 id="reg">Register Here...</h5> </Link>
      </form>
    
</div>

</div>
}