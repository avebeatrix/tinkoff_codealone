let getResult = (data) => {

	let letters = [
		false,
		false,
		['a', 'b', 'c'],
		['d', 'e', 'f'],
		['g', 'h', 'i'],
		['j', 'k', 'l'],
		['m', 'n', 'o'],
		['p', 'q', 'r', 's'],
		['t', 'u', 'v'],
		['w', 'x', 'y', 'z'],
	];

	let addStrByNumAndCount = (num, count) => {
		let l = Math.ceil(count / letters[num].length);
		result += letters[num][(count % letters[num].length || letters[num].length) - 1];

		for (let j = 1; j < l; j++) {
			result += letters[num][letters[num].length - 1];
		}
	}

	let result = '';
	if (data[0].length > 0) {
		let counter = 1;
		let prev_num = parseInt(data[0][0]);
		for (let i = 1; i < data[0].length; i++) {
			let num = parseInt(data[0][i]);
			if (num !== prev_num) {

				addStrByNumAndCount(prev_num, counter);

				counter = 1;
				prev_num = num;
			} else {
				counter++;
			}
		}
		addStrByNumAndCount(prev_num, counter);
	}


	return result.toLocaleUpperCase();
}
const { count } = require('console');
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());