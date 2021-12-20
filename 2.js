let gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) { 
        let temp = a;
        a = b; 
        b = temp; 
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

let lcm = (a, b) => {
	return a / gcd(a, b) * b;
}

let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}

	let [all, len1] = parse_ints(data[0]);
	let len2 = (all - len1) * 2;
	len1 *= 2;
	

	return lcm(len1, len2);

}
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());