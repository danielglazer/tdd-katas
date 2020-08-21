export function generate(num: number): number[] {
	const primeFactors: number[] = [];
	if (num === 1) return primeFactors;
	while(num !== 1){
		const result = checkForPrimeNumber(num);
		primeFactors.push(result);
		num /= result;
	}
	return primeFactors;
}


function checkForPrimeNumber(dividend: number): number {
	for (let divisor = 2;
		divisor <= Math.floor(Math.sqrt(dividend)); divisor++) {
		if (dividend % divisor === 0) return divisor;
	}
	return dividend;
}