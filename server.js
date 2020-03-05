const express = require('express');
const db = require(__dirname, '/db/db.json');
var path = require("path");

var app = express();
var PORT = 3000;
app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./notes.html"));
  });
  

//   app.get("/api/characters", function(req, res) {
//     return res.json(characters);
//   });
  
//   app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
  // C:\Users\Aranel\Desktop\code\homework\noteTaker\public\index.html
//   app.post("/api/characters", function(req, res) {

//     var newCharacter = req.body;
  

//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  
//     res.json(newCharacter);
//   });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  