//never ending loop
// let n = prompt("Enter a number");
// n = Number.parseInt(n);
// let i = 0;
// while (i >= n) {  
//     console.log(i)
//     i++; 
// }

//for in loop
// const myObj = {
//     name:"John",
//     age: 28,
//     city:"Houston"
// };

// for( let key in myObj){
//     console.log("Hi" + key + ",you are" + myObj[key] + "years old.");
// }

//write a program to print try again, until the user enters the correct number

// let number = 3;
// let n ;

// while(n != number){
//     console.log('TRY AGAIN');
//  n = prompt("Enter a number");
    
// }

// console.log("You have entered the correct number");

// function findTheMean(a,b,c){
//     return (a + b + c) / 3
    
// }

// console.log(findTheMean(1,2,3));


// function getSum(a,b,c){
//      return (a + b + c);
// }

// console.log(getSum(5,6,1));


// var multiply = function(x, y){
//     return x*y;
// }
// console.log(multiply(2, 3))



// const multiply = (x,y) => {
//     return x*y;
// } 
// console.log(multiply(2,3));



// const radius = [3, 1, 2, 4];

// const area = function(r){
//     return Math.PI * r * r;
// }

// const diameter = function(r){
//     return 2 * r;
// }


// const calculate = function(radius, logic){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, (r) => {return 2 * Math.PI * r }))
// console.log(calculate(radius, diameter))




// const calculateArea = function(radius){





const radius = [3, 1, 2, 4];

const area = function(r){
    return Math.PI * r * r;
}

const diameter = function(r){
    return 2 * r;
}


const calculate = function(radius, logic){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, (r) => {return 2 * Math.PI * r }))
console.log(calculate(radius, diameter))




const calculateArea = function(radius){