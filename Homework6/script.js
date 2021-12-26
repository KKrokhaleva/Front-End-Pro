
const utils = {
	reverse: function (source) {
		let result = typeof source === "string" ? "" : [];
		for (let i = 0; i < source.length; i++) {
			let outPut = source[source.length - i - 1];
			if (typeof source === "string") {
				result += outPut;
			} else {
				result.push(outPut);
			}
		}
		return result;
	},
	sort: function (source) {
		for (let i = 0, endI = source.length - 1; i < endI; i++) {
			let wasSwap = false;
			for (let j = 0, endJ = endI - i; j < endJ; j++) {
				if (source[j] > source[j + 1]) {
					[source[j], source[j + 1]] = [source[j + 1], source[j]];
					wasSwap = true;
				}
			}
			if (!wasSwap) break;
		}
		return source;
	},
	verifyNumbers: function (source) {
		let outPut = [];
		for (let i = 0; i < source.length; i++) {
			if (typeof source[i] === 'number') {
				outPut.push(source[i]);
			}
		}
		return outPut;
	},
	getMin: function (source) {
		let size = source.length, min = Infinity;
		while (size--) {
			if (source[size] < min) {
				min = source[size];
			}
		}
		return min;
		//return utils.sort(source)[0]; // можно применять так,если до этого в коде была применена функция сортировки от меньшего к большему.
	}


}
alert("revers: " + utils.reverse('Kateryna'));
alert("sort: " + utils.sort([12, 24, 8, 1, 444, 6, 15, 3]));
alert("verify Numbers: " + utils.verifyNumbers([6, 4, 'Hi', 8, 'Vlad', 12, 44, 66]));
alert("getMin: " + utils.getMin([6, 4, 'Hi', 8, 'Vlad', 12, 44, 66]));