//complete program AND find the average of natural numbers
//variable holding a prompt 
//convert that prompt entry into number
//for loop , loop through our numbers
//calculate sum of the number
//divide whole sum with the count of num to find average

// let num = prompt("Enter whole number");
// let convertNum = Number.parseInt(num);
// let sum = 0;

// for(let i =1; i <=convertNum; i++){
//     sum += i;

// }
// console.log(sum / convertNum);


// let num = prompt("Enter whole number");
// let convertNum = Number.parseInt(num);
// let i = 1;
// let sum = 0;

// while(i <= convertNum){
//     sum +=i;
//     i++;
// }
// console.log(sum / convertNum);


// let num = prompt("Enter whole number");
// let convertNum = Number.parseInt(num);
// let product = 1;

// for(let i = 1; i<= convertNum; i++){
//     product *= i;
// }

// console.log(product);


// let num = prompt("Enter whole number");
// let convertNum = Number.parseInt(num);
// let product = 1;
// let i = 1;

// while(i <= convertNum){
//     product *= i;
//     i++
// }
// console.log(product);

//take an array
//write function to get an array as an output, to double the mount within the arry
// let arr = [1,2,3,4,5];

// const multiplyArr = arr.map((num)=> num * 2);
// console.log(multiplyArr);


//binary representation

// const binaryRep = arr.map((num) => num.toString(2));
// console.log(binaryRep);

// const users = [
//     {firstName: "John", lastName:"Doe", age: 24},
//     {firstName: "Jane", lastName:"Doe", age: 30},
//     {firstName: "Jack", lastName:"Doe", age: 35},
//     {firstName: "Joe", lastName:"Doe", age: 45}
// ]

// const output = users.filter((age) => ( age > 30));

const arr = [3, 1, 2, 4, 5, 7, 8];

// Sum ==> acc
// arr[i] ==> curr

const output = arr.reduce((acc, curr) => {
    if (curr > acc){
        acc = curr;
    } return acc;
}, 0)

console.log(output);


// function maxNum(){
//     const arr = [3, 1, 2, 4, 5, 7, 8];
//     var max = 0;

//     for( i = 0; i < arr.length ; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         } return max;
    
//     }
// }