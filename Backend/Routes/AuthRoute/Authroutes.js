const express = require("express");
const {
  createUser,
  login,
  getUserByID,
  getAllUsers,
} = require("../../Controller/Auth.Controller.js/auth.controller");
const authRoute = express.Router();

authRoute.get("/getAllusers", async (req, res) => {
  try {
    const allUser = await getAllUsers();
     res.status(200).send(allUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

authRoute.post("/getusers/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send("Require [id] to search ");
  }

  try {
    const user = await getUserByID(id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// login api
authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("MISSING EMAIL&PASSWORD");
  }
  try {
    const token = await login(email, password);
    console.log(token)
    if (token!==false) {
      // res.set("Authorization", `Bearer ${token}`);
    return    res.status(200).send({ token: token, status: "ok" });
    } else {
     return  res.status(400).send("check email & password");
    }
  } catch (e) {
    return  res.send(e);
  }
});

// create new-user api
authRoute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
   return  res.status(400).send("missing-name, email, password");
  }
  try {
    const newUser = await createUser(name, email, password);
    if(!newUser){
     return res.status(400).send("Already Registered")      
    }
   return  res.status(201).send(newUser);
  } catch (e) {
   return  res.status(500).send(e);
  }
});

module.exports = authRoute;
