const mongoose = require("mongoose");
const {Schema} = require("mongoose");

main()
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


// One to Many // Approach 2 
const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
});

const orderSchema = new Schema({
    item: String,
    price: Number,
});


// Pre and Post middlewares for handling deletions

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("Pre middleware activated......");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length){
        let res = await Order.deleteMany({_id : { $in : customer.orders}});
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name: "Raman Singh",
//     });

//     let order1 = await Order.findOne({item: "Kitchen Set"});

//     cust1.orders.push(order1);
//     let res = await cust1.save();
//     console.log(res);
// }

// addCustomer();

const addOrders = async() => {
    let res = await Order.insertMany([
        {
            item: "Sofa",
            price: "12000",
        },
        {
            item: "Kitchen Set",
            price: 13800,
        },
    ]);
    console.log(res);
}

// addOrders();

const findCutomer = async () => {
    let res = await Customer.find({}).populate("orders")
    console.log(res);
}

// findCutomer();

// Handling Deletions

// Functions

const addData = async() => {
    let newCust = new Customer({
        name: "Karan",   
    });

    let newOrder = new Order({
        item: "Pizza",
        price: 349,
    });

    newCust.orders.push(newOrder);

    await newCust.save();
    await newOrder.save();
    console.log("Successfully logged in>>>");
}

const delData = async () => {
    await Customer.findByIdAndDelete('692c5618aba93dd65a26436a');
}

// addData();

delData();