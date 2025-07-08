// JS Assignment Part 7 Solutions
// q1
let arr = [2, 4, 5, 6, 54 ];

const getAvg = (arr) => {
    let total = 0;
    for(number of arr) {
        total += number;
    }
    return total / arr.length;
};

console.log(getAvg(arr));


// q2

const isEven = n => (n % 2 == 0)

console.log(isEven(6));

// q3

const object = {
    message: "Hello, World",
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage(), 2000); 

// q4

let length = 4;
function callback() {
    console.log(this.length);
}
const objectQ4 = {
    length: 5,
    method(callback){
        callback();
    }
};

objectQ4.method(callback);      // 0