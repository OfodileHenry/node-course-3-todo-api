const {Object ID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const (User) = require("./../server/models/user");
var id = "5c91f8e123403ea83126916f"

Todo.find({
  _id:id,
}).then((todos)=>{
  console.log("Todos",todos)
});
