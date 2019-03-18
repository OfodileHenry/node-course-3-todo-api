// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db)=>{
  if(err){
  return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

// db.collection("Todos").deleteMany({text:"Eat lunch"}).then((result)=>{
//   console.log("deleted todos");
//   console.log(JSON.stringify(result,undefined,2));
// })

// db.collection("Todos").deleteOne({completed:false}).then((result)=>{
//   console.log("deleted one todo item");
//   console.log(JSON.stringify(result,undefined,2));
// });

// db.collection("Users").deleteMany({name:"henry_ford"}).then((result)=>{
//   console.log(JSON.stringify(result,undefined,2));
// })

db.collection("Users").findOneAndDelete({ "_id" : new ObjectID("5c8e74556df6ca1490b76131")}).then((results)=>{
  console.log(JSON.stringify(results,undefined,2));
});
  // db.close();
});
