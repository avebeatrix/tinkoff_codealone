let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}
	
	let [n, goal] = parse_ints(data[0]);
	let new_arr = [];
	for(let i = 1; i <= n; i++) {
		let num = data[i].trim().replace(/[^0-9]/gi, '');
		if (num.length>10){
			
			num = num.substr(num.length-10);
		}
		new_arr.push([data[i].trim(), parseInt(num)]);
	}
	new_arr.sort((a,b) => a[1] - b[1]);
	return new_arr[goal-1][0];
	
}
const { count } = require('console');

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
