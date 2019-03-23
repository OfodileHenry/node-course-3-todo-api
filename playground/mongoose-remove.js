const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");


// Todo.remove({}).then((result)=>{
//   console.log(JSON.stringify(result,undefined,2));
// })

Todo.findOneAndRemove({_id:"5c95e7088b98854b7558db29"}).then((todo)=>{
  console.log(JSON.stringify(todo,undefined,2));
})

// Todo.findByIdAndRemove("5c95e7088b98854b7558db29").then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// })
