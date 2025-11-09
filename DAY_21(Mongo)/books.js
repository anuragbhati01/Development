const mongoose = require("mongoose");

main()
    .then(() =>{
        console.log("Connection Successful");
    })
    .catch((err)=>{
        console.log(err)
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    discount: {
        type: Number,
        default: 10,
    },
    category:{
        type: String,
        enum: ["fiction", "non-fiction"]
    }
});

const Book = mongoose.model("Book", booksSchema);

let book1 = new Book({
    title: "Marvel Comics",
    author: "Stan Lee",
    price: 200,
    category: "fiction",
});

book1.save().then(()=> console.log("Done")).catch(err => console.log(err));