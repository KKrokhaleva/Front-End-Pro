// Функции которые использовались в решении домашнего задания

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function getNumber(message) {
	let number;
	do {
		number = +prompt(message, "0");
	} while (!isFinite(parseFloat(number)) || isNaN(number));
	return number
}

// Задание №1

function derivationOfAllIntegersOfSquareRoot() {
	let number, sqrtNumber;
	let result = [];
	number = getNumber("please ,enter the number:","0");
	sqrtNumber = Math.sqrt(number);
	for (let i = 1; i < sqrtNumber.toFixed(0) && i < 100; i++) {
		result.push(i);
	}
	alert(result);
}
derivationOfAllIntegersOfSquareRoot();


//Задание №2

function getNaturalPrime() {
	let number;
	do {
		number = +prompt("Please enter a natural positive integer from 1 to 50 :", "1");
	} while (!isFinite(parseFloat(number)) || isNaN(number) || !Number.isInteger(number) || number < 1 || number > 50 );
	let result = "Number is prime";
	for (let i = 2; i < number; i++) {
		if (number % i == 0) {
			result = "Number is'nt prime";
			break;
		}
	}
	alert(result);
}
getNaturalPrime()


//Задание №3

function getMinOrMaxOfThreeNumber() {
	let operation;
	let firstNumber = getNumber("please ,enter the first number");
	let secondNumber = getNumber("please ,enter the second Number");
	let thirddNumber = getNumber("please ,enter the third number");
	let someNumber = [];
	someNumber.push(firstNumber, secondNumber, thirddNumber);
	do {
		operation = prompt(`Choose an operation (put the number) :
    1.  -
    2.  + `);
	} while (operation > 2 || operation < 1 || !isFinite(parseFloat(operation)) || isNaN(operation));
	if (operation == 1) {
		alert(`Min number is ${getMinOfArray(someNumber)}`);
	} 
	if (operation == 2) {
		alert(`Max number is ${getMaxOfArray(someNumber)}`);
	}
}
getMinOrMaxOfThreeNumber()

//Задание №4

function fruitList() {
	let fruitsList = [];
	let nameFruit;
	do {
		nameFruit = prompt("Enter the name of fruit:")
		fruitsList.push(nameFruit);
	} while (!nameFruit == false);
	alert(fruitsList);
}
fruitList()

//Задание №5

function getDiffInDollarExchangeRate() {
	let dollarRate = 2772.4 / 100;
	let newDollarRate = getNumber("please ,enter the new dollar rate from 1 dollar :","27.72");
	let sumDollar = getNumber("please ,enter the sum of dollar:","100");
	let Diff = sumDollar*newDollarRate - sumDollar*dollarRate;
	alert (`the sum of your difference is ${Diff.toFixed(1)}UAH`)
}
getDiffInDollarExchangeRate()