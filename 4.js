let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}
	let count = parseInt(data[0]);
	
	let arr = parse_ints(data[1]);	
	let pass = 1;

	for (let i = 1; i < count; i++) {
		if (arr[0] === arr[i]){			
			pass++;
		}
	}

	return count/pass;

}
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());