// Assignment Solutions of JS Part 6

// q1

let arr = [8, 5, 39, 2, 45, 7, 4, 8, 34, 57];

function getLargest(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}

getLargest(arr, 7);
// q2
let str1 = "abaacdd";   // Desired ouptut "abaacdd" --> "abcd";

function getUnique(str){
    let ans = "";
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

console.log(getUnique(str1));
// q3

let country = ["Australia", "India", "NewZealand", "United States of America"];

function longestName(arr){
    let ansIdx = 0;
    for(let i=0; i<arr.length; i++){
        let ansLen = arr[ansIdx].length;
        let currLen = arr[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return arr[ansIdx];
}

console.log(longestName(country));


// q4
let str = "Rajiv Hangerkar Malhotra";
console.log("Total Vowels in the String are :", countVowels(str));
function countVowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if( str[i]=="a" ||
            str[i]=="i" ||
            str[i]=="o" ||
            str[i]=="u" ||
            str[i]=="e" ){
            count++;
        }
    }
    return count;
}

//q5  Random no. within a range

function Random(i, r){
    let randomNo = Math.floor(Math.random() * (r-i)) + (i+1);
    return randomNo;
}
console.log(Random(20, 40));

