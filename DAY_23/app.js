const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
// middleware
// app.use((req, res, next)=>{
//     console.log("Hi, i am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("hi, i am 2nd middleware");
//     next();
// });

// Looger Middleware
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })

// app.use("/api", (req, res, next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess") next();
//     res.send("ACCESS DENIED!");
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") next();
  throw new ExpressError(401, "ACCESS DENIED!");
};

// Middleware as a callback in function

app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden.");
})
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
  res.send("Hi, I am random route");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

// Error handling middleware

app.use((err, req, res, next) => {
  console.log("----Error----");
  let { status = 500, message = "Some error" } = err;
  res.status(status).send(message);
});

// for 404 error
// app.use((req, res)=>{
//     res.status(404).send("page not found");
// });

app.listen(3000, () => {
  console.log("Listening.....");
});
