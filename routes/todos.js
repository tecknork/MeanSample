// "use strict";
// var express = require('express');

// var router = express.Router();

// var Todo = require('../models/todo');


// router.get('/todos',function(req,res,next){
//      res.io.emit("socketToMe", "users");

//     res.io.emit('message',{type:'new-message',text:"Works"});

//       res.send('respond with a resource.');
//     //res.send('TODOS API ');

// });


// router.post('/addtodo',function(req,res,next){
//         console.log(req);
//         console.log(req.body.title);
        
//         var newTodo = Todo({
//         title: req.body.title,
//         completed: false
//         });

//         Todo.addTodo(newTodo,function(err,todo){
//             if(err) res.send('failed');

//             res.send('worked');
//         });
// });


// module.exports =router;

