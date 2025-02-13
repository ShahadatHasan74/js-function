function evenNumbersOnly(numbers){
    const evens = [];
    for(let number of numbers){
        if(number % 2 === 0){
            console.log(number)
            evens.push(number)
           
        }
       
    }
    return evens;
}
// const number = [2,5,6,8,9,12,16];
// const even = evenNumbersOnly(number);
// console.log("this is even number:",even);

function sumOfNumbers(numbers){
    let sum = 0;
    for(let number of numbers){
        if(number % 2===0){
            console.log(number);
            sum = sum + number;
          
        }
    }
    return sum;
}
const numbers =[10,50,20,8,4,2];
const sum =sumOfNumbers(numbers);
console.log("sum of the even number:",sum);
