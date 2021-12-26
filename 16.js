let getResult = (data) => {

	const START = 'A';
	const END = 'B';
	const WALL = '#';

	let initField = data => {
		let start = [0, 0];
		let end = [0, 0];
		let matrix = [];
		let i = 0;
		data.forEach(row => {
			let cells = row.trim().split(' ');

			let indexA = cells.indexOf(START);
			if (indexA !== -1) {
				start = [indexA, i];
			}

			let indexB = cells.indexOf(END);
			if (indexB !== -1) {
				end = [indexB, i];
			}

			matrix.push(cells);
			i++;
		});
		return [matrix, start, end];
	}

	let findPath = (stack) => {
		let result = Infinity;
		while (stack.length) {
			let [x, y, len] = stack.shift();

			let left = matrix[y][x - 1];
			let right = matrix[y][x + 1];
			let top = matrix[y - 1] && matrix[y - 1][x];
			let bottom = matrix[y + 1] && matrix[y + 1][x];

			matrix[y][x] = WALL;

			if ([left, right, top, bottom].includes(END)) {			
				return result = Math.min(result, len + 1);				
			}
			
			if (bottom && bottom != WALL) {
				stack.push([x, y + 1, len + 1]);
			}
			if (right && right != WALL) {
				stack.push([x + 1, y, len + 1]);
			}
			if (top && top != WALL) {
				stack.push([x, y - 1, len + 1]);
			}
			if (left && left != WALL) {
				stack.push([x - 1, y, len + 1]);
			}			
		}				
	}

	let [matrix, start, end] = initField(data);
	if (start[0] === end[0] && end[1] === start[1]) return 0;
	return findPath([[start[0], start[1], 0]]);

}
const { count } = require('console');

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
