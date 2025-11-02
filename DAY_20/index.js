const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Anurag@2930",
});


// Home Page
app.get("/", (req, res)=>{
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, results)=>{
            if(err) throw err;
            let count = results[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (error) {
        console.log(err);
        res.send("Error in Database.");
    }
});

// Show all users route
app.get("/user", (req, res)=>{
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users)=>{
            if(err) throw err;
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("error occured");
    }
});
 
// Edit route  (To show only form)
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q =  `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, results) => {
            if(err) throw err;
            let user = results[0];
            res.render("edit.ejs", { user });
        });
    } catch (error) {
        res.send(err);
    }
});

// Update route (updation in DB)

app.patch("/user/:id", (req, res) =>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    let { password: formPass, username : newUsername} = req.body;
    try {
        connection.query(q, (err, results) => {
            if(err) throw err;
            let user = results[0];
            console.log(user);
            if(formPass != user.password){
                res.send("Wrong Password!");
            }
            else{
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) =>{
                    res.redirect("/user");
                });
            }
            
        })
    } catch (error) {
        res.send(err);
    }
})

app.post("/user", (req, res) => {
    // let { username, email, password } = req.body;
    res.render("newuser.ejs");
});

app.post("/user/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES ( '${id}', '${username}', '${email}', '${password}')`;
    try {
        connection.query(q, (err, results) => {
            if(err) throw err;
            res.redirect("/user");
        })
    } catch (error) {
        res.send(err);
    }
});

// Delete data route

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user });
        });
    } catch (error) {
        res.send(err);
    }
});

app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            
            if( user.password != password){
                res.send("wrong password");
            }
            else{
                let q2 = `DELETE FROM user WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    else{
                        console.log("Deleted!")
                        res.redirect("/user");
                    }
                });
            }
        });
    } catch (error) {
        res.send(err);
    }
});

app.listen(3000, ()=>{
    console.log("listening...");
});


// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// }


// // Inserting info in table 

// // Inserting for single array(user);
// // let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// // let user = ["123", "123_newuser", "123@gmail.com", "abc"];

// // Inserting for multiple users
// let q = `INSERT INTO user(id, username, email, password) VALUES ?`;
// // let users = [ ["246", "246_user2", "246@gmail.com", "246"], ["136", "abc_user3", "abc@gmail.com", "abc3"] ];


// // Inserting data in bulk

// let data = [];
// for (let i=1; i<=100; i++){
//     data.push(getRandomUser());   // generates 100 fake users
// }

// try {
//     connection.query(q, [ data ], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();