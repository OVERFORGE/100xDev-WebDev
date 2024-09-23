const express = require('express');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "randomstring"
const app = express();

app.use(express.json());

const users = [];

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

// function logger(req,res,next){
//     console.log(req.method +"request came");
//     next();
// }


//To host the front end on the same domain as the backend this method is used 

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})


app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        "username": username,
        "password": password
    })

    res.json({
        message:"You are signed Up"
    })
    // console.log(users );
})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }
    
    if (!foundUser){
        res.json({
            message: "Credentials are Invalid"
        })
        return;
        
    }else{
        const token =jwt.sign({
            username 
        },JWT_SECRET);
        res.json({
            token:token
        })
    }
        // console.log(users);
})



function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }else{
        res.json({
            message:"You are not logged in!"
        })
    }
    // console.log(req.username);
}


app.get("/me",auth,function(req,res){

    let foundUser = null;

    for(let i = 0;i<users.length;i++){
        if(users[i].username === req.username){
            foundUser = users[i];
        }
        
    }

    console.log(foundUser);
    if(foundUser!=null){
        res.json({
            username: foundUser.username,
            password: foundUser.password            
        })
    }
    
    

    // console.log(users );
})

app.listen(3000);