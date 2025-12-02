const mongoose = require("mongoose");
const {Schema} = require("mongoose");

main()
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// One to Few Relationship in mongo // Approach 1

const userSchema = new Schema({
    username: String,
    addresses : [
        {
            _id: false,
            location: String,
            city : String
        },
    ]
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User ({
        username: "Humpy",
        addresses: [
            {
            location: "F55 New Park",
            city: "Toronto",
            }
        ]
    });

    user1.addresses.push({location:"G88 WallStreet", city: "London"});
    let result = await user1.save();
    console.log(result);
}

addUsers();