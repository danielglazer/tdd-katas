import { StringCalculator } from "./string-calculator";
describe('String Calculator', () => {
	let strCalc: StringCalculator;
	beforeEach(() => {
		strCalc = new StringCalculator();
	});
	test("An empty string returns zero", () => {
		expect(strCalc.add('')).toBe(0);
	});
	test("A single number returns the value", () => {
		expect(strCalc.add('1')).toBe(1);
		expect(strCalc.add('2')).toBe(2);
	});
	test("Two numbers, comma delimited, returns the sum", () => {
		expect(strCalc.add('1,2')).toBe(3);
		expect(strCalc.add('10,20')).toBe(30);
	});
	test("Two numbers, newline delimited, returns the sum", () => {
		expect(strCalc.add('1\n2')).toBe(3);
		expect(strCalc.add('10\n20')).toBe(30);
	});
	test("Three numbers, delimited either way, returns the sum", () => {
		expect(strCalc.add('1\n2,3\n4')).toBe(10);
		expect(strCalc.add('1,2\n3,4')).toBe(10);
	});
	test("Negative numbers throw an exception with the message", () => {
		expect(() => strCalc.add('-1,2,-3'))
			.toThrow(new Error('negatives not allowed: -1,-3'));
	});
	test("Numbers greater than 1000 are ignored", () => {
		expect(strCalc.add('1\n2,3\n4,1000')).toBe(10);
	});
	test(`A single char delimiter can be defined on the first line
	 starting with // (e.g //#\n1#2 for a ‘#’ as the delimiter)`, () => {
		expect(strCalc.add('//#\n1#2')).toBe(3);
	});
	test(`A multi char delimiter can be defined on the first line
	 starting with // (e.g. //###\n1###2 for ‘###’ as the delimiter)`, () => {
		expect(strCalc.add('//###\n1###2')).toBe(3);
		expect(strCalc.add('//XYY\n1XYY2')).toBe(3);
	});
})