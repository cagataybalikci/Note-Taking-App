const express = require("express");
const date = require(__dirname + "/date.js")
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"))

let day = date()

app.get("/", (req, res) => {

    
    res.render("index", {currentDate : day})
});

app.get("/create",(req,res)=>{
    res.render("create", {currentDate : day})
})

app.listen(3000, () => {
  console.log("Server start at port 3000.");
});
