let obj = {
	a: 'f',
	b: 78,
	c: 'R',
	d: {
		a: {
			a: null,
			b: 'E',
			c: {
				a: true,
				b: 'C',
				c: 'test'
			},
			d: 'U'
		},
		b: {
			a: 'R',
			b: ['S', 4, 6, 'I'],
			c: 0,
		},
		c: ['O'],
		d: null,
		e: 'N'
	}
}

// Функция для проверки строки на верхний регистр
function chekToUpperCase(item) {
	if (typeof item === 'string') {
		if (item === item.toUpperCase()) {
			return true;
		}
	} else {
		return false;
	}
}

let result = "";

// Функция для выборки из объекта строковых значений в верхнем регистре
function getUpperCaseLetter(obj) {
	for (let [index, key] of Object.entries(obj)) {
		if (typeof key === 'string') {
			if (chekToUpperCase(key)) {
				result += key; continue;
			}
		}
		if (Array.isArray(key)) {
			key.forEach(
				function (item) {
					if (chekToUpperCase(item)) {
						result += item;
					}
				}
			)
			continue;
		}
		if (typeof key === "object" && key) {
			getUpperCaseLetter(key);
		}
	}
}


getUpperCaseLetter(obj);
alert(result);