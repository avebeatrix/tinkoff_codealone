let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}
	let [count, final_len] = parse_ints(data[0]);
	let arr = parse_ints(data[1]);
	for(let i = 2; i <=count; i++) {
		let digits = parse_ints(data[i]);
		let base = [...arr];
		let new_arr = []
		digits.forEach(digit => {		
			new_arr = [...new_arr, ...base.map(val => val.toString()+digit.toString())];
		});
		arr = new_arr;	
	}		
	arr = arr.map(val=>parseInt(val));
	arr.sort((a,b)=>a-b);	
	return arr[final_len-1];

}
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());