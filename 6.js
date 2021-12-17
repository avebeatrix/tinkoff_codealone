let getResult = (data) => {

	let arr = data[0].split('');

	let x = 0;
	let y = 0;

	arr.forEach(command => {
		switch (command) {
			case 'R':
				x++;
				break;
			case 'L':
				x--;
				break;
			case 'D':
				y--;
				break;
			case 'U':
				y++;
				break;
			default:
				break;
		}
	});
	console.log(x+' '+y);
	let result = '';
	if (y < 0) {
		result = new Array(Math.abs(y)).fill('D').join('');
		if (x < 0) {
			result += new Array(Math.abs(x)).fill('L').join('');
		} else {
			result += new Array(x).fill('R').join('');
		}
	} else {
		if (x < 0) {
			result = new Array(Math.abs(x)).fill('L').join('');
		} else {
			result = new Array(x).fill('R').join('');
		}
		result += new Array(y).fill('U').join('');
	}
	
	return result;
}
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());