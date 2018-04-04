console.log("Hello ");
console.log("Hello ");
console.log("Hello ");
console.log("Hello ");
console.log("Hello ");
console.log("Hello ");

let operatedTimes;
let displayBox;
let calculationBox;
let state;

let statusEnum = {
    NUMBER:0,
    SIGNAL:1,
    };

function onStart()
{     
    operatedTimes = 0;
    displayBox = document.getElementById("writter");
    calculationBox = document.getElementById("operationScreen");
    state = statusEnum.NUMBER;
} 