// Promisis and Async Methods

// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } 
//     else{
//         failure();
//     }
// }

// saveToDb("Namaste Balak",
//     ()=>{
//         console.log("Data is Saved to DB");
//         saveToDb("Always Do Something",
//             ()=>{
//                 console.log("Data2 Saved to DB");
//             },
//             ()=>{
//                 console.log("Data2 failed to upload on DB");
//             }
//         );
//     },
//     ()=>{
//         console.log("Poor Speed Connection, Try Again");
//     }
// );

// Optimization Using Promisis

function saveToDb(data){
    return new Promise( (resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("data is saved to DB");
        }
        else{
            reject("Weak Connection");
        }
    });
}

// then() & catch() methods of Promise Object

saveToDb("hello")
.then( (result)=>{
    console.log("Data1 saved");
    console.log("result of promise :", result);
    return saveToDb("hi");   // This is Promise Chaining
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promise :", result);
    return saveToDb("Namaskar");
})
.then( (result)=>{
    console.log("data3 was saved");
    console.log("result of promise :", result);
})
.catch( (error)=>{
    console.log("Promise was rejected");
    console.log("Error is :", error);
});