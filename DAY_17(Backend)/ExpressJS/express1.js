const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   res.send({
//     name : "Apple",
//     color : "red"
//   });
// });

// Routing
app.get("/help", (req, res) => {
  res.send("need help?");
});

app.get("/shopping", (req, res) => {
  res.send("Buy what you love");
});

app.get("/", (req, res) => {
  res.send("Hello this is main path");
});

app.post("/", (req, res)=>{
  res.send("This is response of Post request");
});

// Path parameters

app.get("/:username/:id", (req, res)=>{
  let {username, id} = req.params;
  res.send(`welcome to the page of @${username} with id ${id}`);
})

// Query Parameters

app.get("/search", (req, res) =>{
  let {q} = req.query;
  if(!q){
    res.send("nothing searched");
  }
  res.send(`Search Results for query : ${q}`);
});

app.use((req, res) => {
  res.send("path didn't exist");
});