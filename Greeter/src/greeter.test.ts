import { Greeter } from "./greeter";
describe('Greeter', () => {
	let greeter: Greeter;
	let date: Date;
	let logger: { log: any; };
	beforeEach(() => {
		date = new Date();
		date.setHours(13);
    date.setMinutes(0);

		logger = {
      log: jest.fn()
    };

		greeter = new Greeter(date, logger);
	});
	test("greeter greet Daniel", () => {
		expect(greeter.greet("Daniel")).toBe("Hello Daniel");
	});
	
	test("greet trims the input from start", () => {
		expect(greeter.greet("   Daniel")).toBe("Hello Daniel");
	});
	
	test("greet trims the input from end", () => {
		expect(greeter.greet("Daniel   ")).toBe("Hello Daniel");
	});
	
	test("greet capitalizes the first letter of the name", () => {
		expect(greeter.greet("daniel")).toBe("Hello Daniel");
	});
	
	test("greet trim and capitalizes the first letter of the name", () => {
		expect(greeter.greet(" daniel ")).toBe("Hello Daniel");
	});
	
	test("greet returns Good morning <name> when the time is 06:00-12:00", () => {
		date.setHours(6);
		expect(greeter.greet("daniel")).toBe("Good morning Daniel");
	});
	
	test("greet returns Good evening <name> when the time is 18:00-22:00", () => {
		date.setHours(18);
    date.setMinutes(0);
		expect(greeter.greet("daniel")).toBe("Good evening Daniel");
	});
	
	test("greet returns Good night <name> when the time is 18:00-22:00", () => {
		date.setHours(22);
    date.setMinutes(0);
		expect(greeter.greet("daniel")).toBe("Good night Daniel");
	});

	test('logs each call', () => {
    expect(logger.log).not.toHaveBeenCalled();
    greeter.greet('daniel ');
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith('greeted Daniel at 13:00');
  });
})



