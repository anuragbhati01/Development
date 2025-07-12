// APIs (JS part 12 and 13)


// json data always is in string form
// To access json Data we use 2 methods 

// 1. JSON.parse(data)

let jsonData = '{"fact":"When a cat drinks, its tongue - which has tiny barbs on it - scoops the liquid up backwards.","length":92}';

let validResult = JSON.parse(jsonData);
console.log(validResult.fact);

// 2. JSON.stringify(data)  it is opposite of .parse() method

let student = {
    firstName : "Anurag",
    marks: 95
};

console.log(JSON.stringify(student));