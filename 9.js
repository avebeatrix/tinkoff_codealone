let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}

	let n = parseInt(data[0]);
	let arr = [0, ...parse_ints(data[1])];
	let max = 0;
	let cur = 1;

	for (let i = 1; i <= n; i++) {
		if (i !== 0){						
			let next = arr[i];
			let prev = i;
			while (next !== i && next !== 0) {	
				prev = next;			
				next = arr[next];
				arr[prev] = 0;
				cur++;
			}
			arr[i] = 0;
		} 
		max = Math.max(max, cur);
		cur = 1;		
	}
	
	return max;
}
const { count } = require('console');
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());