//Creating HTTP servers
//This is not a node default library
const express = require('express');
const app = express();
const users=[{
    name:"John",
    kidneys:[{
        healthy:true 
    }]
}];

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys= users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    }) 
})


app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done!"
    }) 
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg: "All kidneys are now healthy"
    });
})

app.delete("/",function(req,res){
    if(isUnhealthyKidney()){
        const newKidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"Done"})
    }else{
        res.status(411).json({
            msg:"You have no bad kidneys"
        })
    }
    
})


function isUnhealthyKidney(){
    let atleastUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastUnhealthyKidney = true;
        }
    }
    return atleastUnhealthyKidney
}

app.listen(3000);