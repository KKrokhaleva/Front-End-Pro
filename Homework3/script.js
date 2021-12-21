alert("Hello!");
const selectOperation = prompt("please select and enter one of the following operations: +,-,/,*,sqrt,pow,sin,cos,tan");

if ( selectOperation == "*" ) {
	const firstNumber = +prompt("please ,enter the first number","0");
	const secondNumber = +prompt("please ,enter the second number","0");
	alert (`Your resault is ${firstNumber * secondNumber}`);
}
if ( selectOperation == "-" ) {
	const firstNumber = +prompt("please, enter the first number","0");
	const secondNumber = +prompt("please, enter the second number","0");
	alert (`Your resault is ${firstNumber - secondNumber}`);
}
if ( selectOperation == "+" ) {
	const firstNumber = +prompt("please, enter the first number","0");
	const secondNumber = +prompt("please, enter the second number","0");
	alert (`Your resault is ${firstNumber + secondNumber}`)
}
if ( selectOperation == "/") {
	const firstNumber = +prompt("please, enter the first number","0");
	const secondNumber = +prompt("please, enter the second number","0");
	alert (`Your resault is ${firstNumber / secondNumber}`)
}
if ( selectOperation == "pow") {
	const firstNumber = +prompt("please, enter the number","0");
	const secondNumber = +prompt("please, indicate the degree to which the number should be raised","1");
	alert (`Your resault is ${Math.pow(firstNumber,secondNumber)}`);
}
if ( selectOperation == "sin") {
	const firstNumber = +prompt("please, enter the number","0");
	alert (`Your resault is ${Math.sin(firstNumber)}`);
}
if ( selectOperation == "cos") {
	const firstNumber = +prompt("please, enter the number","0");
	alert (`Your resault is ${Math.cos(firstNumber)}`);
}
if ( selectOperation == "tan") {
	const firstNumber = +prompt("please, enter the number","0");
	alert (`Your resault is ${Math.tan(firstNumber)}`);
}
if ( selectOperation == "sqrt") {
	const firstNumber = +prompt("please, enter the number","0");
	alert (`Your resault is ${Math.sqrt(firstNumber)}`);
}
