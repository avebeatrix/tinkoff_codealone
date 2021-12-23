function primes(N) {
	let res = [2];
	for (let i = 3; i < N; i += 2) {
		let isPrime = true;
		for (let k = 0, limit = Math.sqrt(i); res[k] <= limit; ++k) {
			let d = res[k];
			if (i % d == 0) { isPrime = false; break; }
		}
		if (isPrime) res.push(i);
	}
	return res;
}

let res = primes(10000100).reverse();
loop1: 
for (let i = 0; i < res.length; i++) {
	for (let j = i + 1; j < res.length; j++) {		
		if (res[i] - res[j] <= 100 && (res[i]*res[j]).toString().length == 14) {
			console.log(res[i]*res[j]);
			break loop1;
		}
	}
}