import {generate} from './PrimeFactors.module';
describe('PrimeFactors module generate function', () => {
	beforeEach(() => {
	});
	test("1 should return []", () => {
		expect(generate(1)).toStrictEqual([]);
	});
	test("2 should return [2]", () => {
		expect(generate(2)).toStrictEqual([2]);
	});
	test("3 should return [3]", () => {
		expect(generate(3)).toStrictEqual([3]);
	});
	test("4 should return [2,2]", () => {
		expect(generate(4)).toStrictEqual([2,2]);
	});
	test("5 should return [5]", () => {
		expect(generate(5)).toStrictEqual([5]);
	});
	test("6 should return [2,3]", () => {
		expect(generate(6)).toStrictEqual([2,3]);
	});
	test("7 should return [2,3]", () => {
		expect(generate(7)).toStrictEqual([7]);
	});
	test("8 should return [2,2,2]", () => {
		expect(generate(8)).toStrictEqual([2,2,2]);
	});
	test("9 should return [3,3]", () => {
		expect(generate(9)).toStrictEqual([3,3]);
	});
	test("4620 should return [2,2,3,5,7,11]", () => {
		expect(generate(4620)).toStrictEqual([2,2,3,5,7,11]);
	});
})