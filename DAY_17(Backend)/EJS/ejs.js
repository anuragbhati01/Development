const express = require("express");
const app = express();
let path = require("path");
let port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
  res.render("home.ejs");
})

app.get("/rolldice", (req, res)=>{
  let diceVal = Math.floor(Math.random() * 6) + 1
  res.render("rolldice", { diceVal});
});

app.get("/ig/:username", (req, res)=>{
  let { username } = req.params;
  const instadata = require("./data.json");
  let data = instadata[username];
  (data) ? res.render("instagram", { data }) : res.render("error")
});

app.listen( port, ()=>{
  console.log(`Listening to port ${port}`);
})