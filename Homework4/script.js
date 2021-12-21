let repeat= ("true");
const history = ["0",];
do {

let selectOperation;

do {

selectOperation = +prompt(
`Choose an operation (put the number) :
1 - sum
2 - diff
3 - mult
4 - div
5 - pow
6 - sin
7 - cos
8 - tan
9 - sqrt
10 - history`);
} while (selectOperation > 10 || selectOperation < 1 || isNaN(selectOperation))

let firstNumber;
let secondNumber;

if (selectOperation < 10 ) {
do {
	firstNumber = +prompt("please ,enter the first number", "0");
} while (isNaN(firstNumber))
}

if (selectOperation < 6 ) {
do {
		secondNumber = +prompt("please ,enter the second number", "0");
	} while (isNaN(secondNumber))
} 

let actionOfOperation;
let result;

if (selectOperation == 1) {
	actionOfOperation = `sum`, result = `${firstNumber + secondNumber}`;
} else if (selectOperation == 2) {
	actionOfOperation = `diff`, result = `${firstNumber - secondNumber}`;
} else if (selectOperation == 3) {
	actionOfOperation = `mult`, result = `${firstNumber * secondNumber}`;
} else if (selectOperation == 4) {
	actionOfOperation = `div`, result = `${firstNumber / secondNumber}`;
} else if (selectOperation == 5) {
	actionOfOperation = `pow`, result = `${Math.pow(firstNumber, secondNumber)}`;
} else if (selectOperation == 6) {
	actionOfOperation = `sin`, result = `${Math.sin(firstNumber)}`;
} else if (selectOperation == 7) {
	actionOfOperation = `cos`, result = `${Math.cos(firstNumber)}`;
} else if (selectOperation == 8) {
	actionOfOperation = `tan`, result = `${Math.tan(firstNumber)}`;
} else if (selectOperation == 9) {
	actionOfOperation = `sqrt`, result = `${Math.sqrt(firstNumber)}`;
} else if (selectOperation == 10) {
	alert( history );
}
history.push(result)

if (selectOperation != 10){
result = `Operation ${actionOfOperation} finished with result ${result} `;
alert(result);
console.log(result);
}

repeat= confirm("do you want to do any more calculations?")
} while (repeat === true)
