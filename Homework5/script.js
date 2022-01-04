const history = [];
function getNumber(message) {
	let someNumber;
	do {
		someNumber = +prompt(message, "0");
	} while (isNaN(someNumber));
	return someNumber
}
let firstNumber, secondNumber,result,actionOfOperation;
function sum(firstNumber, secondNumber) {actionOfOperation = firstNumber + secondNumber; return actionOfOperation; } 
function diff(firstNumber, secondNumber) {actionOfOperation = firstNumber - secondNumber; return actionOfOperation; }
function mult(firstNumber, secondNumber) {actionOfOperation = firstNumber * secondNumber; return actionOfOperation; } 
function div(firstNumber, secondNumber) {actionOfOperation = firstNumber / secondNumber; return actionOfOperation; } 
function pow(firstNumber, secondNumber) {actionOfOperation = firstNumber ** secondNumber; return actionOfOperation; } 
function sin(firstNumber) {actionOfOperation = Math.sin(firstNumber); return actionOfOperation; } 
function cos(firstNumber) {actionOfOperation = Math.cos(firstNumber); return actionOfOperation; }
function tan(firstNumber) {actionOfOperation = Math.tan(firstNumber); return actionOfOperation; }
function sqrt(firstNumber) {actionOfOperation = Math.sqrt(firstNumber); return actionOfOperation; } 
function getOperation() {
	let selectOperation;
	do {
		selectOperation = getNumber(
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
} while (selectOperation > 10 || selectOperation < 1 );
return selectOperation;
}

do {
	let selectOperation = getOperation();

	if (selectOperation < 10 ) {
		firstNumber = getNumber("please ,enter the first number");
		} 
	if (selectOperation < 6 ) {
		secondNumber= getNumber("please ,enter the second number");
		}

	if (selectOperation == 1) {
		result = sum(firstNumber, secondNumber);
		alert(`Operation sum finished with result ${result} `)
	} else if (selectOperation == 2) {
		result = diff(firstNumber, secondNumber);
		alert(`Operation diff finished with result ${result} `)
	} else if (selectOperation == 3) {
		result = mult(firstNumber, secondNumber);
		alert(`Operation mult finished with result ${result} `)
	} else if (selectOperation == 4) {
		result = div(firstNumber, secondNumber);
		alert(`Operation div finished with result ${result} `)
	} else if (selectOperation == 5) {
		result = pow(firstNumber, secondNumber);
		alert(`Operation pow finished with result ${result} `)
	} else if (selectOperation == 6) {
		result = sin(firstNumber);
		alert(`Operation sin finished with result ${result} `)
	} else if (selectOperation == 7) {
		result = cos(firstNumber);
		alert(`Operation cos finished with result ${result} `)
	} else if (selectOperation == 8) {
		result = tan(firstNumber);
		alert(`Operation tan finished with result ${result} `)
	} else if (selectOperation == 9) {
		result = sqrt(firstNumber);
		alert(`Operation sqrt finished with result ${result} `)
	} else {
		alert(history);
	} if (selectOperation > 0 && selectOperation < 10 ){
		history.push(result)
	}

} while (confirm("do you want to do any more calculations?"))
