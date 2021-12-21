let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}

	let result = [];
	let usedSet = new Set();
	let is_candidate = false;

	let n = parseInt(data[0]);

	let arr = [0];

	for (let i = 1; i <= n; i++) {
		if (!arr[i]) {
			let [count, ...tmp_arr] = parse_ints(data[i]);
			arr[i] = count > 0 ? tmp_arr : [];
		}

		if (!usedSet.has(i)) {
			let allow_counter = 0;
			for (let item of arr[i]) {
				if (!usedSet.has(item)) break;
				allow_counter++;
			}
			if (allow_counter === arr[i].length) {
				is_candidate = true;
			}
		}
		if (is_candidate) {
			result.push(i);
			if (result.length === n) break;
			usedSet.add(i);
			is_candidate = false;
			i = 0;
		}
	}

	return result.reduce((acc, val, index) => acc += val * (index + 1));
}
const { count } = require('console');
console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
console.log('end: ' + Date.now());