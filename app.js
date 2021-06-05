const express = require("express");
const date = require(__dirname + "/date.js")
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", (req, res) => {

    let day = date()
    console.log(day);
    res.render("index", {currentDate : day})
});

app.listen(3000, () => {
  console.log("Server start at port 3000.");
});
