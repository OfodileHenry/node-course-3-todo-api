const validator = require("validator");
const express = require("express");
const bodyParser = require("body-parser");
const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");
const {ObjectID} = require("mongodb");

var app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post("/todos",(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc)
  },(e)=>{
    res.send(e);
  })
});

app.get("/todos",(req,res)=>{
  Todo.find().then((todos)=>{
    res.status(200).send(todos)
  },(e)=>{
    res.status(400).send(e);
  })
})

app.get("/todos/:id",(req,res)=>{
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
  // res.send(req.params);
})
app.listen(port,()=>{
  console.log(`The app is up and running!${port}`)
});

module.exports = {app}
