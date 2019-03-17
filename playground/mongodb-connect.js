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

  db.collection("Users").insertOne({
    name:"Henry",
    Age:24,
    Location:"Ivy League Yaba Lagos"
  },(err,result)=>{
    if(err){
      return console.log("Unable to insert user",err)
    }
    console.log(JSON.stringify(result.ops));
  });

  db.close();
})
