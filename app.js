var express=require("express");
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json());

/*
let room={
  "id":
  "seats":
  "amenitites":
  "price":
  "status":
  "roomName":
}

let customer={
  "customerName":
  "Date":
  "startTime":
  "endTime":
  "roomID":
}

let correlation={
  "roomName":
  "status":
  "customerName":
  "Date":
  "startTime":
  "endTime"
}

let correlation1={
   "customerName":
   "roomName":
   "Date":
   "startTime":
   "endTime":
}
*/

let room=[];

let customer=[];

let correlation=[];

let correlation1=[];

app.get("/room",function(req,res){
    res.json(room);
})

app.post("/room",function(req,res){
  room.push(req.body);
  res.json({
      "message":"Room Pushed"
  });
});

app.get("/customer",function(req,res){
  res.json(customer);
});

app.post("/customer",function(req,res){
   customer.push(req.body);
   res.json({
       "message": "Customer pushed"
   })
});

app.get("/listings/:id",function(req,res){
     let paramid=req.params.id;
     room.forEach(element=>{
       if(element.id==paramid){
        customer.forEach(element1=>{
          if(element.id==element1.roomID){
            let obj={
              "roomName":element.roomName,
              "status":element.status,
              "customerName":element1.status,
              "startTime":element1.startTime,
              "endTime":element1.endTime
            }
            correlation.push(obj);
          }
        })
      }
     });
     res.json(correlation);
});

app.listen(3000,function(err){
    console.log("Server has started!");
})