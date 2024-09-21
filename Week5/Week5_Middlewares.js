const express = require("express");
const app = express();

let requestCount = 0;

//To log the method , url , timestamp

function loggerMiddleware(req,res,next){
    console.log("Method is: "+ req.method);
    console.log("Host is: "+ req.hostname);
    console.log("Route is: "+ req.url);
    console.log("Timestamp is: "+ new Date());
    next();
}

app.use(loggerMiddleware); 


function requestIncreaser(req,res,next){
    requestCount = requestCount+1;
    console.log("Total number of requests = "+ requestCount);
    next();
}

function realSumHandler(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a+b,
    });
}


//app.use(requestIncreaser)  //On using this all the route handlers will have to use this middleware that is below this 

app.get("/sum",requestIncreaser,realSumHandler);

app.listen(3000);