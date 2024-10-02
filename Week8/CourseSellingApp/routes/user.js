const express = require("express");
const Router = express.Router;
const {userModel} = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");
userRouter.post("/signup",async function(req,res){
    const {email, password,firstName,lastName} = req.body;
    try{
        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })
    } catch(e){
        console.log("Your Signup has failed");
    }  
    res.json({
        message:"signup succeeded"
    })
})

userRouter.post("/signin",async function(req,res){
    const {email, password} = req.body;
    const user = await userModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)

        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect Credentials"
        })
    }
    
})

userRouter.get("/Purchases",function(req,res){
    res.json({
        message:"Purchases Endpoint"
    })
})

module.exports ={
    userRouter: userRouter
}