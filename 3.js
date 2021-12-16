let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}

	let [count, length] = parse_ints(data[0]);
	let arr = parse_ints(data[1]);

	arr.sort((a, b) => b - a);
	let cur_len = 0;	

	for (let i = 0; i < count; i++) {
		cur_len += arr[i];
		if (cur_len >= length) {
			return i+1;
		}
	}

	return 0;

}
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());