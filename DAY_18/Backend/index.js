const express = require("express");
const app = express();

// for post request
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res)=>{
    res.send("Standard GET response")
});

app.post("/register", (req, res)=>{
    const {user, pass} = req.body;
    res.send(`Standard POST response. Welcome ${user}`);
});

app.listen(3000, ()=>{
    console.log("Listening....");
});