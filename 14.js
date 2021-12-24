let getResult = (data) => {

	let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}

	let [len, n] = parse_ints(data[0]);
	let depricated = [];
	for (let i = 1; i <= n; i++) {
		let [position, depricated_letter] = data[i].split(' ').map(val => val.trim());
		if (!depricated[+position]) {
			depricated[+position] = new Set();
		}
		depricated[+position].add(depricated_letter);
	}
	let pass = '';
	for (let i = 1; i <= len; i++) {
		let allowed = arr_EN;
		if (depricated[i]) {
			allowed = arr_EN.filter(val => !depricated[i].has(val));
		}
		pass += allowed[Math.floor((allowed.length + 1) / 2) - 1];
	}

	return pass;

}
const { count } = require('console');

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
