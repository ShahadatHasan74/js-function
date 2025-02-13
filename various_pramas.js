function evenSize(str){
    const size =str.length;
    console.log(str,size)
    if(size % 2 === 0){
        console.log("even Size");
        return true;
    }
    else{
        console.log("odd size");
        return false;
    }
}
// evenSize('dhaka');

function doubleOrTriple (number,DouBle){
    if(DouBle === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple(5,false));

function numberOfElement(number){
    const len = number.length;
    return len;
}
console.log(numberOfElement([10,20,30,50,60,80]));
