const express = require('express');
var path = require("path");
var fs = require('fs');

var app = express();
var PORT = process.env.PORT || 3000;
let nextId = 0;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let db = fs.readFileSync(__dirname + '/db/db.json', 'utf8', (err)=> {
 if (err)    throw err;
  })



db = JSON.parse(db);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  

  app.get("/api/notes", function(req, res) {
    nextId = db.length;
    return res.json(db);
   
    });

  app.post("/api/notes", function(req, res){
    var newNote = req.body;
    newNote.id = nextId;
    console.log(newNote);
    db.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(db), 'utf8', err =>{
      if (err){
        throw err;
      }
    })


  })
  
  app.delete("/api/notes/:id", function(req, res) {
    var chosen = req.params.id;
  
    console.log(chosen);
  
    for (var i = 0; i < db.length; i++) {
      if (chosen == db[i].id) {
        db.splice(db[i], 1);
      
      
      }
      for (let i = 0; i <db.length; i++){
        db[i].id = 0 + i;
      }
    }
  
    return res.json(false);
  });

  
 

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  