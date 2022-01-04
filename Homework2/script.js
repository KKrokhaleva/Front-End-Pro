alert("Hello!");
let userName = prompt("What is your name?");
alert(`Nice to meet you,${userName} !`);
const firstNumber = +prompt(`${userName} ,enter the first number`);
const secondNumber = +prompt(`${userName} ,enter the second number`);

const sum = firstNumber + secondNumber;
const diff = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

alert(`Calculations are finished!\n 
Sum: ${firstNumber} + ${secondNumber} = ${sum} 
Diff: ${firstNumber} - ${secondNumber} = ${diff}
Mult: ${firstNumber} * ${secondNumber} = ${mult} 
Div: ${firstNumber} / ${secondNumber} = ${div}`);

// test
//test