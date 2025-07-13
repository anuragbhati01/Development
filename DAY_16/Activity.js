// API Request for Universities Accros World
let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("#btn");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("#inp");
    country = inp.value;
    let colArr = await getUniversity(country);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("ul");
    list.innerText = "";
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getUniversity(country) {
    try{
        let res =  await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }
}


