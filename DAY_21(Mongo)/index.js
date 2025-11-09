const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema); // class or Collection

// Inserting One

// const user1 = new User({  // object or document
//     name: "Adam",
//     email: "adam@gmail.com",
//     age: 20,
// });

// const user2 = new User({
//     name: "Eve",
//     email: "eve@gmail.com",
//     age: 34,
//     __v: false,
// })

// user1.save();
// user2.save();

// Inserting Many

// User.insertMany([
//   { name: "Mukesh", email: "mukesh@gmail.com", age: 32 },
//   { name: "Rajesh", email: "rajesh@gamil.com", age: 34 },
//   { name: "Rakesh", email: "rakesh@gmail.com", age: 28 },
// ]).then((data) => {
//   console.log(data);
// });

// Find

// User.find({ age: {$gt : 30}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// User.findOne({ age: {$gt : 30}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// User.findById("691020bd4b98a49abade8f62")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Update

// Update one
// User.updateOne({name: "Mukesh"}, {age: 36}).then(res => console.log(res)).catch(err => console.log(err));

// Update Many
// User.updateMany({ age: { $gt: 32 } }, { age: 50 }).then((res) =>
//   console.log(res)
// );

// find and update

// User.findOneAndUpdate({ name: "Adam" }, { age: 54 }, { new: true })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));


// Delete

// User.deleteOne({name: "Mukesh"}).then((res)=> console.log(res));

// User.deleteMany({name: "Mukesh"}).then((res)=> console.log(res));

User.findOneAndDelete({name: "Rajesh"}, {new: true}).then(res => console.log(res)).catch(err => console.log(err));