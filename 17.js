let getResult = (data) => {
	let str = data[0];
	let result = 0;
	let left = 0;
	while (str[left] != '{' && left < str.length) {
		left++;
	}
	let counter = 1;
	for (let i = left + 1; i < str.length; i++) {
		if (str[i] === '{') {
			counter++;
		}else if (str[i] === '}') {
			counter--;
		}
		if (counter === 0) {
			result++;
			left = i + 1;
			while (str[left] != '{' && left < str.length) {
				left++;
			}
			i = left;
		}
	}
	return result;
}
const { count } = require('console');

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
