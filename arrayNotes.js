//intro to arrays

// create
let students = ['adam', 'casey', 'brad', 'david'];
let values = [1, 2, 3, 4];

//accessing items in arrays
// console.log(students);
// console.log(students[0]); //beginning item has index 0, adam=0
// console.log(students[1]); // casey = index 1
// console.log(students[2]); // brad index 2
// console.log(students[3]); // david index 3
// console.log(students[4]); //error, as there is no 5th item
// console.log(students[4-2]); // index 2 -> brad

//formatting items in array
// console.log('Student 1: ' + students[0]);
// console.log(`Student 2: ${students[1]}`);

//changing an item
// students[1]='Stephanie';
// console.log(students);

// //push adds to the end
// students.push('Eve');
// console.log(students);
// students.push('Fred', 'Georgia'); //you can push more than 1 item at a time
// console.log(students);
//
// //pop removes the last item from the end
// students.pop()
// console.log(students);
//
// //shift removes the beginning item
// students.shift();
// console.log(students);
//
// //unshift adds an item to the beginning
// students.unshift('Zeke');
// console.log(students);
// students.unshift('Yvonne', 'Xavier'); //you can unshift more than 1 item
// console.log(students);
//
// //length of array = number of items in it
// console.log('the number of items in the array:');
// console.log(students.length);
//
// console.log(students[students.length-1]); // gives last item

//slice up a piece of the original array
// let fruits = ['apple', 'banana', 'orange', 'lemon', 'grape'];
// let citrus = fruits.slice(2, 4);
// console.log(citrus);

//first number is the starting index, which we include
//second number is the index we stop BEFORE. Does not include.

//Arrays are 'pass-by-reference'
//This means you can change an array
//unknowingly if you change another that
//was equal to it

// let nums = [5, 4, 3, 2, 1]
// let newNums = nums
// newNums[0] = 12
// console.log('nums: ' + nums)
// console.log('newNums: ' + newNums)

//notice both changed?
//this is because newNums is NOT a new
//array, it is another name for the SAME
//array in memory on your PC
//to avoid changes to one affecting the
//other, make a NEW array
//option 1: Use a for loop to push individual items
//allows you to manipulate individual items as you
//add them into the new array

let vals = [5, 4, 3, 2, 1]
let newVals = []
for (let i=0; i<vals.length; i++){
    newVals.push(vals[i]);
}
newVals[0]=12
console.log('vals: ' + vals)
console.log('newVals: ' + newVals)

//option 2: make a shallow copy
//(only works for 1d arrays)
//does not allow you to manipulate each item as you
//add it to the new list, but is faster

// let ages = [5, 4, 3, 2, 1]
// let newAges = [...ages]
// newAges[0] = 12
// console.log('ages: ' + ages)
// console.log('newAges: ' + newAges)
//
// //to write a function to do the above
//
// let values = [5, 4, 3, 2, 1]
// compareArrays(values)
// function compareArrays(arr){
//     let newVals = []
//     for (let i=0; i<arr.length; i++){
//         newVals.push(arr[i]);
//     }
//     newVals[0]=12
//     console.log('vals: ' + vals)
//     console.log('newVals: ' + newVals)
// }
//
// //Updating a top 3 list
//
// let highScores = [107, 99, 98]
// let newScore = 101
// let newHighScores = []
// for (let i=0; i<highScores.length; i++){
//     if (highScores[i]>= newScore){
//         newHighScores.push(highScores[i])
//     } else{
//         newHighScores.push(newScore)
//         newScore=0
//     }
// }
// console.log(newHighScores)