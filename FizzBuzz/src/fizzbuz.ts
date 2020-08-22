export default class FizzBuzz {
	constructor(private rules: any = {}) {
		console.log(this.rules);
	}

	fizzBuzz(num: number): string {
		let result = "";
		if (num % 3 === 0) result += "Fizz";
		if (num % 5 === 0) result += "Buzz";
		for (const key in this.rules) {
			if (Object.prototype.hasOwnProperty.call(this.rules, key)) {
				const element = this.rules[key];
				if (num % (+key) === 0) result += element;
			}
		}
		return result === "" ? num.toString() : result;
	}
	range(start: number = 1, end: number = 100) {
		const result: string[] = [];
		for (let i = start; i <= end; i++)
			result.push(this.fizzBuzz(i));
		return result;
	}
}