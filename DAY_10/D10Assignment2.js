// Assignment Questions

// q1

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
// q2

const car = {
    carName: "Mustang",
    model: 2027,
    color: "Black",
    price: "$100"
};
console.log(car.carName);
console.log(car["carName"]);

// q3

const Person = {
    firstname : "Anurag",
    city: "Padampur",
    age: 19
};

Person.city = "New York";
Person.country = "USA";
console.log(Person);