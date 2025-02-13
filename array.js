/**
 * Objective:write a function to give me the sum of all number s in an array
 * step-1 : declare 
 */
function sumOfnumbers(numbers){
    let sum =0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
       
    }
    return sum;
}
const numb = [2,5,8,9];
const sum =sumOfnumbers(numb);
console.log("Sum Of the Number:",sum);