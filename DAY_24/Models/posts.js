const mongoose = require("mongoose");
const {Schema} = require("mongoose");

main()
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username : String,
    email : String
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);


// const addData = async() => {
//     let user1 = new User({
//         username: "Amit Kumar",
//         email: "amit@gmail.com",
//     });

//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 4
//     })
//     post1.user = user1;

//     await user1.save();
//     await post1.save();
// }

// addData();

// adding another post data

// const addData = async () => {
//     let user = await User.findOne({username: "Amit Kumar"});

//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 2,
//     });

//     post2.user = user;
//     await post2.save();
// }

// addData();

// To get Data

const getData = async () => {
    let res = await Post.find({}).populate("user");

    console.log(res);
}

getData();