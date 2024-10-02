const bcrypt = require("bcrypt");
const express = require("express");
const {UserModel,todoModel}=require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "anotherRandomPassword@0612";
const { z } = require("zod");

mongoose.connect("mongodb+srv://overforge:overforgedatabase@cluster0.s8cvx.mongodb.net/todo-app-database");
const app = express();
app.use(express.json());



app.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email: z.string().min(5).max(100).email(),
        name:z.string().min(2).max(100),
        password: z.string().min(8).max(100),
    })
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess){
        res.json({
            message:"Incorrect Format",
            error: parsedDataWithSuccess.error 
        })
        return;
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password , 5 );
    console.log(hashedPassword);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name:name
    })

    res.json({
        message:"You are signed In"
    })

});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email:email,
    })

    if(!response){
        res.status(403).json({
            message:"User does not exist"
        })
    }

    const matchPassword = await bcrypt.compare(password,response.password);

    if(matchPassword){
        const token=jwt.sign({
            id:response._id.toString()
        },JWT_SECRET);
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
});


app.post("/todo", auth,function(req, res) {
    const userId = req.userId;

    res.json({
        userId: userId
    })
});


app.get("/todos",auth, function(req, res) {
    const userId = req.userId;

    res.json({
        userId:userId
    })
});


function auth(req,res,next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
}

app.listen(3000);