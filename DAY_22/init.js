const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("Connections Done!");
  })
  .catch((err) => console.log(err));

async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
    {
        from : "raj",
        to : "ram",
        msg: "happy birthday",
        created_at : new Date()
    },
    {
        from : "krish",
        to : "harsh",
        msg: "hi brother!",
        created_at : new Date()
    },
    {
        from : "amit",
        to : "ranja",
        msg: "congratulations on your birthday",
        created_at : new Date()
    },
    {
        from : "ashok",
        to : "shivam",
        msg: "give me my files",
        created_at : new Date()
    },
    {
        from : "gill",
        to : "will",
        msg: "we have same name",
        created_at : new Date()
    }
]

Chat.insertMany(allChats);


