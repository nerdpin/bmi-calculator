import { Link } from "react-router-dom"
import "../CSS/Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import { LOGOUT } from "../Redux/AuthReducer/auth.ActionTypes"
import { ERASE_BMI } from "../Redux/BMI/bmi.action.types"
import { useEffect, useState } from "react"
export const Navbar =()=>{  
const {token}=useSelector(state=>state.authReducer)
 console.log(token)
 const [state,setState]=useState({})
const dispatch=useDispatch()
const handelLogout=()=>{
dispatch({type:LOGOUT})
dispatch({type:ERASE_BMI})
}
useEffect(()=>{
  fetch('https://bmi-backend-rc8r.onrender.com/auth/getProfile', {
method: 'GET',
headers: new Headers({
  'Content-Type': 'application/json',  
  'Authorization': 'Bearer ' + token  
}),
})
.then(response => {
  return response.json();
}).then(response => {
console.log(response.data )   
  setState(response.data)
})
.catch(error => {
  console.log(error)
//   alert("ERROR IN HISTORY")
}); 

 },[token]) 


    return <div>
     
      <nav>
      <div id="logo">
         <img src="https://www.shutterstock.com/image-vector/indikator-bmi-on-white-background-260nw-2100889945.jpg" alt="" />
      </div>
         {token?<Link to="/bmi"><p className="navlink">BMI</p></Link>:null}   
         {token?<Link to="/history"><p className="navlink">History</p></Link>:null}  
         {!token?<Link to="/"><p className="navlink">Login</p></Link>:<p className="navlink" onClick={handelLogout}>Logout</p>}
          {!token? <Link to="signup"> <p className="navlink" id="sign">Signup</p></Link>: state? null :"Signup"}
         {token&&state?<p className="navlink" id="sign">{state.name}</p>:null}
      </nav>
         
    </div>
}