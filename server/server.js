var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
 
var app = express();
var jsonParser = bodyParser.json();

// app.use(express.static(__dirname + "/app"));
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// получение списка задач
app.get("/api/tasks", function(req, res){
      
    var content = fs.readFileSync("tasks.json", "utf8");
    var tasks = JSON.parse(content);
    res.send(tasks);
});

// получение задачи по id
app.get("/api/tasks/:id", function(req, res){
      
    var id = req.params.id; 
    var content = fs.readFileSync("tasks.json", "utf8");
    var tasks = JSON.parse(content);
    var task = null;
    
    for(var i=0; i<tasks.length; i++){
        if(tasks[i].id==id){
            task = tasks[i];
            break;
        }
    }
    
    if(task){
        res.send(task);
    }
    else{
        res.status(404).send();
    }
});

// добавление задачи
app.post("/api/tasks", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var taskTitle = req.body.title,
        taskDescription = req.body.description,
        taskDate = req.body.date,
        taskContacts = req.body.contacts;
     
    var data = fs.readFileSync("tasks.json", "utf8"),
        tasks = JSON.parse(data);
    
    if (tasks.length > 0) {
        // находим максимальный id
        var id = Math.max.apply(Math,tasks.map(function(o){return o.id;}))
    } else {
        id = 0;
    }
    taskId = id + 1;
    var task = {
        id: taskId,
        title: taskTitle, 
        description: taskDescription,
        date: taskDate,
        contacts: taskContacts
    };
    
    // добавляем пользователя в массив
    tasks.push(task);
    var data = JSON.stringify(tasks);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("tasks.json", data);
    res.send(task);
});

 // удаление задачи по id
app.delete("/api/tasks/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("tasks.json", "utf8");
    var tasks = JSON.parse(data);
    var index = -1;
    // находим индекс пользователя в массиве
    for(var i=0; i<tasks.length; i++){
        if(tasks[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        var task = tasks.splice(index, 1)[0];
        var data = JSON.stringify(tasks);
        fs.writeFileSync("tasks.json", data);
        // отправляем удаленного пользователя
        res.send(task);
    }
    else{
        res.status(404).send();
    }
});

// изменение задачи
app.put("/api/tasks", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var taskId = req.body.id,
        taskTitle = req.body.title,
        taskDescription = req.body.description,
        taskDate = req.body.date,
        taskContacts = req.body.contacts;
     
    var data = fs.readFileSync("tasks.json", "utf8");
    var tasks = JSON.parse(data);
    var task;
    for(var i=0; i<tasks.length; i++){
        if(tasks[i].id==taskId){
            task = tasks[i];
            break;
        }
    }
    // изменяем данные у задачи
    if(task){
        task.title = taskTitle; 
        task.description = taskDescription;
        task.date = taskDate;
        task.contacts = taskContacts;

        var data = JSON.stringify(tasks);
        fs.writeFileSync("tasks.json", data);
        res.send(task);
    }
    else{
        res.status(404).send(task);
    }
});
  
app.listen(4000, function(){
    console.log("Сервер ожидает подключения...");
});