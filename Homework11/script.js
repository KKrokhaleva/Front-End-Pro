// Небольшой массив для проверки работы функций

let stationeryStore =[
	{ 
    name: 'pen',
    price: 19,
    category: 'pens'
  },
	{ 
    name: 'pencil',
    price: 10,
    category: 'pens'
  },
	{ 
    name: 'marker',
    price: 23,
    category: 'pens'
  },
	{ 
    name: 'bag',
    price: 41,
    category: 'bags'
  },
] ;

// Функция проверки на число
function getNumber(message) {
	let number;
	do {
		number = +prompt(message, "0");
	} while (!isFinite(parseFloat(number)) || isNaN(number));
	return number;
}

// Функция суммирования всех значений по ключу в массиве объектов
function calcSumByKey(result) {
	let resultSum = 0;
	for (let i = 0; i < result.length; ++i) {
		resultSum += result[i].price;
	}
	console.log(resultSum);
}

// Функция фильтра (диапазонa цены или категориu).
function filterPriceOrCategory(item) {
	let operation;
	do {
	 operation = +prompt(`Choose an operation :
    1. Filter of price
    2. Filter of category `);
	} while (operation > 2 || operation < 1 || !isFinite(parseFloat(operation)) || isNaN(operation));
	if (operation === 1) {
		return filterPrice(item);
	}
	if (operation === 2) {
		return filterCategory(item);
	}
}
//console.log(filterPriceOrCategory(stationeryStore));


// Задание №1 - Функция для создания нового товара
function createNewPosition(item) {
	let newPosition;
	do {
		newPosition = {
			name: prompt("Please, enter the name of new Position", "pen"),
			price: getNumber("Please, enter the price of new Position in dollars", "45"),
			category: prompt("Please, enter the category of new Position", "pen"),
		};
		item.push(newPosition);
	} while (confirm("Do you want repeat ?"))
	console.log(item);
}
//createNewPosition(stationeryStore);


// Задание №2 -Функция для сортировки товара по цене
function filterPrice(item) {
	let minPrice = getNumber("Please, enter the minimal price:", "5");
	let maxPrice = getNumber("Please, enter the maximal price:", "50");
	return item.filter(item => item.price > minPrice && item.price < maxPrice);
}
//console.log(filterPrice(stationeryStore));


// Задание №3 - Функция для сортировки товара по категории
function filterCategory(item) {
	let category = prompt("Please, enter the name of category:", "pen");
	return item.filter(item => item.category === category);
}
//console.log(filterCategory(stationeryStore));


// Задание №4 - Функция для выведения количества товаров в категории
function lengthOfCategory(item) {
	let result = filterCategory(item);
	console.log(result.length);
}
//lengthOfCategory(stationeryStore);


// Задание №5 - Функция для удаления товара по имени
function deleteItemByName(item) {
	let deleteName = prompt("Please, enter the name to delete:", "pen");
	for (let i = 0; i < item.length; i++) {
		if (item[i].name === deleteName) {
			item.splice(i, 1);
			break;
		}
	}
	console.log(item);
}
//deleteItemByName (stationeryStore);


// Задание №6 -Функция сортировки от большего к меньшему
function sortByPriceMaxToMin(item) {
	item.sort((a, b) => b.price - a.price);
	return item;
}
// console.log(sortByPriceMaxToMin(stationeryStore));


// Задание №6 Функция сортировки от меньшего к большему 
function sortByPriceMinToMax(item) {
	item.sort((a, b) => a.price - b.price);
	return item;
}
//console.log(sortByPriceMinToMax(stationeryStore));


// Задание №7 Функция для сортировки (от большего к меньшему и наоборот) и фильтра (диапазон цены и категория)
function sortMinMaxAndFilter() {
	let operation;
	do {
		operation = +prompt(`Choose an operation :
    1. Sort max to min
    2. Sort min to max `);
	} while (operation > 2 || operation < 1 || !isFinite(parseFloat(operation)) || isNaN(operation));
	if (operation === 1) {
		let item = filterCategory(stationeryStore);
		console.log(filterPrice(sortByPriceMaxToMin(item)));
	} else if (operation === 2) {
		let item = filterCategory(stationeryStore);
		console.log(filterPrice(sortByPriceMinToMax(item)));
	}
}
//sortMinMaxAndFilter(stationeryStore);


// Задание №8 Функция суммирования значений отфильтрованного массива по ключу
function calcSumByFilterArr(item) {
	let sum = filterPriceOrCategory(item);
	calcSumByKey(sum);
}
//calcSumByFilterArr(stationeryStore);