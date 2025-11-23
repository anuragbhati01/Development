const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection done.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

// const chat1 = new Chat({
//   from: "priya",
//   to: "neha",
//   msg: "send me your exam sheets",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Index Route

app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (error) {
    next(err);
  }
});

// New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// wrapAsync function

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// Show Route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
  })
);

// Create Route
app.post("/chats", async (req, res, next) => {
  try {
    let { from, msg, to } = req.body;
    // creating
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });

    // saving to database
    await newChat.save();

    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// Edit Route
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (error) {
    next(error);
  }
});

// Update route
app.put("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true },
      { new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// Delete Route
app.delete("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

app.get("/", (req, res) => {
  res.send("Root Route");
});


const handleValidationErr = (err) => {
  console.log("This was Validation Error. Follow the rules buddy!");
  console.dir(err.message);
  return err;
}
// Mongoose Error handler

app.use((err, req, res, next)=>{
  console.log(err.name);
  if(err.name == "ValidationError"){
    err = handleValidationErr(err);
  }
  next(err);
})

// Error handling middleware

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error has occurred" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("app is listening....");
});
