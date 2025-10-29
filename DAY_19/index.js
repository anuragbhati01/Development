const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "anurag",
    content: "Hello i am new here!",
  },
  {
    id: uuidv4(),
    username: "ansh",
    content: "Hello i am here for few months.",
  },
  {
    id: uuidv4(),
    username: "ankit",
    content: "Welcome both of you!",
  },
];


// This is main route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// This is create route
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// This is for creating new route

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  console.log(req.body);
  res.redirect("/posts");
});

// This is View route

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

// This is Update Route

app.patch("/posts/:id", (req, res)=>{
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find( (p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

// This is Edit route

app.get("/posts/:id/edit", (req, res)=>{
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

// This is Delete route

app.delete("/posts/:id", (req, res)=>{
  let {id} = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
})

app.listen(3000, () => {
  console.log("Listening......");
});
