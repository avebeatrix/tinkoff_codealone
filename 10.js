let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}

	let n = parseInt(data[0]);
	let arr = parse_ints(data[1]);	
	
	let cur;
	let max = 0;
	for(let k = 1; k < 10000; k++) {
		for(let i = 0; i < n - 1; i++) {
			if (arr[i]>=k){
				cur = k;
				for(let j = i + 1; j < n; j++) {
					if (arr[j] >= k) {
						cur += k;
					} else {							
						break;
					}			
				}
				max = Math.max(max, cur);	
			}				
		}
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