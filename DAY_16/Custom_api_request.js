// Custom API Request


// fetch() with only Promisis

let url = 'https://catfact.ninja/fact';

// console.log(fetch(url));
// fetch(url)
// .then( (response)=>{
//     console.log(response);
//     return response.json();     // to read data we used .json() method
// })
// .then( (data)=>{
//     console.log("Data1 :", data.fact);
//     return fetch(url);
// })
// .then( (response)=>{
//     return response.json();
// })
// .then ( (data)=>{
//     console.log("Data2 :", data.fact);
// })

// .catch( (err)=>{
//     console.log("ERROR -", err);
// })

// fetch() with Promisis, asnyc and await

// async function getFacts(){
//     try{
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log("Data 1 :", data.fact);

//         let response2 = await fetch(url);
//         let data2 = await response2.json();
//         console.log("Data 2 :", data2.fact);

//     } 
//     catch(err){
//         console.log("ERROR -", err);
//     }
// }

// getFacts();

// Request using Axios 

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact; 
    }
    catch(err){
        console.log("ERROR -", err);
        return "No fact found";
    }
}

// With Dog Api
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#dog");

btn2.addEventListener("click", async ()=>{
    let image =  await getImage();
    let img = document.querySelector("img");
    img.src = image;
});

async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(err){
        console.log(err);
        return "no image found";
    }
}

// Sending Headers with the Request

const url3 = "https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        const config = { headers : {Accept : "application/json"}};
        let res = await axios.get(url3, config);
        console.log(res.data.joke);
    }
    catch(err){
        console.log(err);
    }
}

getJoke();
