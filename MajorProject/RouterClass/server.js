const express = require("express");
const app = express();
const users = require("./Routes/user");
const posts = require("./Routes/post");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretCode"));


// Web Cookies
app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.send("Now you get your cookies");
});

app.get("/getsignedcookie", (req, res) => {
    res.cookie("made-in", "India", {signed: true});
    res.send("You get Signed Cookie, check out mate");
});

app.get("/verify", (req, res) => {
    console.log(req.signedCookies); // To see signed cookies we use req.signedCookies
    res.send("Verified");
});

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Root Route")
})

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, ()=> {
    console.log("App is listening............");
})