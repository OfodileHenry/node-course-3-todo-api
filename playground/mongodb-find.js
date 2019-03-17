// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db)=>{
  if(err){
  return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos").insertOne({
  //   text:"Something to do",
  //   completed:true
  // },(err,result)=>{
  //   if(err){
  //     return console.log("Unable to insert todo",err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection("Todos").find({_id:new ObjectID("5c8e7173afdf4e10585c2162")}).count().then((count)=>{
  //   console.log("Todos count: ",count);
  // },(err)=>{
  //   console.log("Unable to fetch todos",err);
  // })

  db.collection("Users").find({name:"henry_ford"}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  })
  // db.close();
})
