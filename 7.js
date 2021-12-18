let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}
	let map = new Map();
	let count = parseInt(data[0]);
	for(let i = 1; i <= count; i++) {
		map.set(i, 0);
	}
	let nulled = [];
	for(let i = 1; i <= count; i++) {
		let arr = parse_ints(data[i]);		
		if (arr[0] === 0) {
			nulled.push(i);
		}
		for (let j = 1; j <= arr[0]; j++){
			map.set(arr[j], (map.get(arr[j]) ?? 0) + 1);
		}
	}			

	return nulled.reduce((acc, val) => acc+=val);
}
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());