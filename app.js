const { response } = require("express");
var express=require("express");
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json());

let room=[];

let customer=[];

app.get("/room",function(req,res){
    res.json(room);
})

app.post("/room",function(req,res){
  room.push(req.body);
  res.json({
      "message":"Room Pushed"
  });
});

app.get("/customers",function(req,res){
  res.json(customer);
});

app.post("/customers",function(req,res){
   customer.push(req.body);
   res.json({
       "message": "Customer pushed"
   })
});



app.listen(3000,function(err){
    console.log("Server has started!");
})