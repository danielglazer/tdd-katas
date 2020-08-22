import BowlingGame from './bowling-game';
describe('BowlingGame class testing', () => {
	let game: BowlingGame;
	beforeEach(() => {
		game = new BowlingGame();
	});
	test(`The game consists of 10 frames,
	 in each frame the player has the ability to
	  knock down 10 pins.`, () => {
		game.roll(10);
		expect(() => game.roll(100))
			.toThrow("Invalid number of pins: 100")
		expect(() => game.roll(-1))
			.toThrow("Invalid number of pins: -1")
		expect(() => game.roll(5.5))
			.toThrow("Invalid number of pins: 5.5")
	});
	test(`The score for the frame is the total 
	number of pins knocked down + bonuses
	 for strikes and spares.`, () => {
		// regular frome
		expect(game.getScore()).toBe(0);
		game.roll(5);
		expect(game.getScore()).toBe(5);
		game.roll(3);
		expect(game.getScore()).toBe(8);
		// spare
		rollSpare();
		expect(game.getScore()).toBe(18);
		// another regular frome(that is affected by spare)
		game.roll(5);
		expect(game.getScore()).toBe(28);
		game.roll(3);
		expect(game.getScore()).toBe(31);
		// strike
		rollStrike();
		expect(game.getScore()).toBe(41);
		game.roll(5);
		expect(game.getScore()).toBe(51);
		game.roll(3);
		expect(game.getScore()).toBe(57);
		// roll nothing
		rollManyTimes(10, 0);
		expect(game.getScore()).toBe(57);
	});

	test(`10 strikes in a row should score 300.`, () => {
		rollManyTimes(12, 10);
		expect(game.getScore()).toBe(300);
	});

	function rollManyTimes(times: number, pins: number) {
		for (let i = 0; i < times; i++) {
			game.roll(pins);
		}
	}
	function rollSpare() {
		game.roll(5);
		game.roll(5);
	}

	function rollStrike() {
		game.roll(10);
	}
});

