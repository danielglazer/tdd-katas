export class StringCalculator {
	add(delimitedString: string): number {
		if (delimitedString === '') return 0;
		const numbers = splitAndParse(delimitedString);
		HandleNegativeNumbers(numbers);
		const add = (accumulator: number, currentValue: number): number => accumulator + currentValue;
		return numbers
			.filter((number) => number < 1000)
			.reduce(add)
	}
}

function HandleNegativeNumbers(arr: number[]): void {
	const negativeNumbers = arr.filter((number) => number < 0);
	if (negativeNumbers.length > 0)
		throw new Error('negatives not allowed: '
			+ negativeNumbers.join(','));
}

function splitAndParse(delimitedString: string): number[] {
	const endOfFirstLineIndex = delimitedString.indexOf('\n');
	const definedDelimiter = delimitedString.startsWith('//')
		? delimitedString.slice(2, endOfFirstLineIndex) : '';
	if (delimitedString.startsWith('//'))
		delimitedString = delimitedString.slice(endOfFirstLineIndex + 1 );
	const splitByString = definedDelimiter === '' ? `[\n,]` : `[\n,]|${definedDelimiter}`;
	return delimitedString.split(new RegExp(splitByString)).map((str) => +str); // convert string to number type
}