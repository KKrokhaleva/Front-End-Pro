// Задание №1

function calcPointMembership() {
	let x, y, h;
	do {
		x = +prompt("Please enter the x-coordinate:", "0");
	} while (!isFinite(parseFloat(x)) && isNaN(x));
	do {
		y = +prompt("Please enter the y-coordinate:", "0");
	} while (!isFinite(parseFloat(y)));
	if (5 >= x > 0 && 5 >= y > 0) {
		h = Math.sqrt(x * x + y * y)
		h > 5 ? alert("point is in the shaded area.") : alert("point is'nt in the shaded area.")
	} else {
		alert("point is'nt in the shaded area.")
	}
}
calcPointMembership()


// Задание №2

function calcOfPaymentForHandLuggage() {
	let numberOfKilogram, emountToPay;
	do {
		numberOfKilogram = +prompt("please enter the weight of your carry-on baggage(You can only enter a number): (max weight- 33,06 pound)", "0");
	} while (!isFinite(parseFloat(numberOfKilogram)) || numberOfKilogram > 33.06 || numberOfKilogram < 0);
	if (numberOfKilogram <= 11.0231) {
		emountToPay = ((numberOfKilogram / 2.20462) * 3 * 0.0288)
	} else if (numberOfKilogram > 11.0231 && numberOfKilogram <= 22.0462) {
		emountToPay = ((numberOfKilogram / 2.20462) * 5 * 0.0288)
	} else {
		emountToPay = ((numberOfKilogram / 2.20462) * 10 * 0.0288)
	}
	return alert(`Your amount due is ${emountToPay.toFixed(2)}£ for the ${numberOfKilogram} pound`);
}
calcOfPaymentForHandLuggage();

