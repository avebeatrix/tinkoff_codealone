let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}
	let count = parseInt(data[0]);
	
	let nulled = [];
	for(let i = 1; i <= count; i++) {
		let arr = parse_ints(data[i]);		
		if (arr[0] === 0) {
			nulled.push(i);
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