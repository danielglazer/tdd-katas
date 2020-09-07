import { MineSweeper } from './MineSweeper';
describe('FizzBuzz', () => {
	let mineSweeper: MineSweeper;

	beforeEach(() => {
		mineSweeper = new MineSweeper(0, 3);
	});
	test(`create empty map`, () => {
		const resultMap = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		]
		expect(mineSweeper.createMap()).toStrictEqual(resultMap);
	});
});