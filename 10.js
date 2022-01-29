var largestRectangleArea = function(heights) {    
    
    let n = heights.length;
    let max = 0;     	
    let stack = [];
          
    for(let i = 0; i <= n; i++) {  
        let step = 0;
        let bar = heights[i] || 0;
        while(stack.length && stack[stack.length-1][1] >= bar) {
            let [w, h] = stack.pop();
            step += w;
			max = Math.max(max, step * h);
        }
        stack.push([step+1, bar]);                   
    }    
	return max;	
};


let getResult = (data) => {

	let parse_ints = str => {
		return str.split(' ').filter(val => val != '').map(val => parseInt(val.trim()));
	}

	let n = parseInt(data[0]);
	let arr = parse_ints(data[1]);	
	
	return largestRectangleArea(arr);		
}
const { count } = require('console');
//console.log('start: ' + Date.now());
const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());
//console.log('end: ' + Date.now());