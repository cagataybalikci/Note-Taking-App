const fs = require("fs");
const express = require("express");
const app = express();

var bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
var Note = require("./note.js");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

let notes = []

let day = date();


app.get("/", (req, res) => {
  res.render("index", { currentDate: day, notesArray: notes });
});

app.get("/create", (req, res) => {
  res.render("create", { currentDate: day });
});

app.post("/create", (req, res) => { 
  var note_t = req.body.title;
  var note_desc = req.body.desc;
  var addNote = new Note(note_t, note_desc, day);
  notes.push(addNote)
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server start at port 3000.");
});
