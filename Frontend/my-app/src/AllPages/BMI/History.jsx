import { useEffect, useState } from "react"
import "../../CSS/BmiTable.css"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"



export const History =()=>{
const [state,setState]=useState([])
const {token}=useSelector(state=>state.authReducer);



useEffect(()=>{
    fetch('https://bmi-backend-rc8r.onrender.com/bmi/getAllHistory', {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json',  
    'Authorization': 'Bearer ' + token  
  }),
})
.then(response => {
    return response.json();
}).then(response => {
  console.log(response.data)   
    setState(response.data)
})
.catch(error => {
    console.log(error)
//   alert("ERROR IN HISTORY")
}); 

   },[token])
   
   


    return  <div>
    <h1>BMI Calculator</h1>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Height (m)</th>
          <th>Weight (kg)</th>
          <th>BMI</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        
        {state.length!==0?state.map((item,i) =>{ 
          return <tr   >
            <td>{i+1}</td>
            <td>{item.height}</td>
            <td>{item.weight}</td>
            <td>{item.calculatedBMI}</td>
            <td>  {item.calculatedBMI==null?null:  item.calculatedBMI  < 18.5
                ? 'Underweight'
                : item.calculatedBMI  >= 18.5 &&
                item.calculatedBMI  <= 24.9
                ? 'Normal weight'
                : item.calculatedBMI  >= 25 &&
                item.calculatedBMI  <= 29.9
                ? 'Overweight'
                : 'Obese'}</td>
          </tr>})
        :"NO RECORD"} 
      </tbody>
    </table>
  </div>
}