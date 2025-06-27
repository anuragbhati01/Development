let todo = [];

let req = prompt("Enter Request");
while(true){
    if(req == "quit"){
        console.log("Quiting form ToDo app");
        break;
    }
    if(req == "list"){
        console.log("---------------");
        for(task of todo){
            console.log(task);
        }
        console.log("---------------");
    }
    else if(req == "add"){
        let task = prompt("Enter task to add in ToDo");
        todo.push(task);
        console.log("Task Added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter task idx which you want to delete");
        todo.splice(idx, 1);
        console.log("Task Deleted");
    }
    else{
        console.log("Wrong entered request");
    }
    req = prompt("Enter request");
}