import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCESS, LOGOUT, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCESS } from "./auth.ActionTypes";
let x=JSON.parse(localStorage.getItem("token"))||null;

const init={
    isAuth:false,
    token:x,
    loading:false,
    error:false,
    
}

 
const authReducer=(state=init,action)=>{
    
 switch (action.type) {
 
    
 case LOGIN_REQUEST:{
    return {
        ...state,loading:true
    }
 }

 case LOGIN_SUCESS:{
   localStorage.setItem("token",JSON.stringify(action.payload)) 
    return {
        
        ...state,loading:false,token:action.payload,isAuth:true
    }
 }

 case LOGIN_FAILED :{
    return {
        ...state,loading:false,token:null,error:false,isAuth:false
    }

 }

 case SIGNUP_FAILED :{
    return {
        ...state,loading:false,token:null,error:false,isAuth:false,  
    }

 }

 case SIGNUP_REQUEST:{
    return {
        ...state,loading:true,   
    }
 }

 case SIGNUP_SUCESS:{
    return {
        
        ...state,loading:false,token:null,isAuth:false, 
    }
 }

 case LOGOUT:{
    localStorage.setItem('token',null);
    return {
        state
    }
 }

 default : {
    return state
 }  

}
}

export default authReducer;