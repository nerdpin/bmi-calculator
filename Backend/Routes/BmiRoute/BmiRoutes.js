const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../../Model/UserModel/user.model");

const BmiRoutes = express.Router();

BmiRoutes.get("/", (req, res) => {
    res.send("HIkkk");
});

 
BmiRoutes.post("/calculate",async (req, res) => {
  const {height,weight,token}= req.body;
   
if(!token){
  return res.status(401).send("NOT-Authinticated")
}

 if(!height||!weight){
  return res.status(400).send("Height or Weight Missing")
 }

 const {email}=jwt.decode(token);
 if(!email){
  return res.status(401).send("Not Authorized")
 }

 
 try{
       const findUser= await User.findOne({email}) 
       const calculatedBMI= (weight/(height*height)).toFixed(2);           
       findUser.cart.push({calculatedBMI,height,weight});
       findUser.save()
       return res.status(201).send( {calculatedBMI} )
 }catch(e){
  console.log(e)
      return res.sendStatus(500).send(e)
 }
});

BmiRoutes.get("/getAllHistory",async (req, res) => {
  
 
 try{
       const calculatedBMI= weight/(height*height); 
       return res.status(201).send( {calculatedBMI} )
 }catch(e){
      return res.sendStatus(500).send(e)
 }
});
 
 
 


module.exports = BmiRoutes;
