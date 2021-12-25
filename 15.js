let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}
	const TYPE_X = 'X';
	const TYPE_Y = 'Y';	

	let getSum = (type, m) => {
		let sum = 0;
		for (let j = 0; j < n; j++) {
			if (type == TYPE_X) {
				sum += Math.abs(coords[j][0] - m);
			} else if (type == TYPE_Y) {
				sum += Math.abs(coords[j][1] - m);
			} 
		}
		return sum;
	}

	let check = (m, type) => {
		if (getSum(type, m) < getSum(type, m-1)) return true;

		return false;
	}

	let rbinsearch = (l, r, check, checkparams) => {
		while (l < r) {
			m = Math.floor((l + r + 1) / 2);
			if (check(m, checkparams)) {
				l = m;
			} else {
				r = m - 1;
			}
		}
		return l;
	}

	let n = parseInt(data[0]);
	let coords = [];
	let minx = maxx = miny = maxy = 0;

	for (let i = 1; i <= n; i++) {
		let [x, y] = parse_ints(data[i]);
		minx = Math.min(minx, x);
		maxx = Math.max(maxx, x);
		miny = Math.min(miny, y);
		maxy = Math.max(maxy, y);
		coords.push([x, y]);
	}

	let x_goal = rbinsearch(minx, maxx, check, TYPE_X);
	let y_goal = rbinsearch(miny, maxy, check, TYPE_Y);	

	return x_goal + y_goal;

}
const { count } = require('console');

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
