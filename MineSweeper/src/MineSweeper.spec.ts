import { MineSweeper } from './MineSweeper';
describe('MineSweeper', () => {
	let mineSweeper: MineSweeper;

	beforeEach(() => {

	});
	test(`create empty map`, () => {
		mineSweeper = new MineSweeper(0, 3);
		const resultMap = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		]
		expect(mineSweeper.createMap()).toStrictEqual(resultMap);
	});
	test(`create empty map`, () => {
		const mockMath = Object.create(global.Math);
		mockMath.random = () => 0;
		global.Math = mockMath;
		mineSweeper = new MineSweeper(1, 3);
		const resultMap = [
			[-1, 1, 0],
			[1, 1, 0],
			[0, 0, 0]
		]
		expect(mineSweeper.createMap()).toStrictEqual(resultMap);
	});
});