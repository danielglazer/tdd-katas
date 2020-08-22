import FizzBuzz from './fizzbuz';
describe('FizzBuzz', () => {
	let fizzBuzz: FizzBuzz;

	beforeEach(() => {
		fizzBuzz = new FizzBuzz();
	});
	test(`Write a program that returns array of numbers from 1 to 100, while multiples of three return "Fizz" instead of the number, multiples of five return "Buzz".
	 Multiples of both three and five return "FizzBuzz".`, () => {
		expect(fizzBuzz.fizzBuzz(1)).toEqual('1');
		expect(fizzBuzz.fizzBuzz(2)).toEqual('2');
		expect(fizzBuzz.fizzBuzz(3)).toEqual('Fizz');
		expect(fizzBuzz.fizzBuzz(6)).toEqual('Fizz');
		expect(fizzBuzz.fizzBuzz(7)).toEqual('7');
		expect(fizzBuzz.fizzBuzz(8)).toEqual('8');
		expect(fizzBuzz.fizzBuzz(5)).toEqual('Buzz');
		expect(fizzBuzz.fizzBuzz(10)).toEqual('Buzz');
		expect(fizzBuzz.fizzBuzz(15)).toEqual('FizzBuzz');
		expect(fizzBuzz.fizzBuzz(30)).toEqual('FizzBuzz');
	});
	test(`Add a way to change range, instead of printing
	 numbers from 1 to 100. Examples: numbers from 1 to 20,
	  from 15 to 50.".`, () => {
		expect(fizzBuzz.range(1, 15)).toEqual([
			'1',
			'2',
			'Fizz',
			'4',
			'Buzz',
			'Fizz',
			'7',
			'8',
			'Fizz',
			'Buzz',
			'11',
			'Fizz',
			'13',
			'14',
			'FizzBuzz'
		]);
	});

	test(`Add rules for 7 and 11: 7 returns "Foo",
	 11 returns "Boo" and multiples of both return "FooBoo".".`, () => {
		fizzBuzz = new FizzBuzz({
			7: 'Foo',
			11: 'Boo'
		});
		expect(fizzBuzz.fizzBuzz(7)).toEqual('Foo');
		expect(fizzBuzz.fizzBuzz(11)).toEqual('Boo');
		expect(fizzBuzz.fizzBuzz(77)).toEqual('FooBoo');
		expect(fizzBuzz.fizzBuzz(3 * 5 * 7 * 11)).toEqual('FizzBuzzFooBoo');
	});
	test(`Add new rule for numbers smaller than 16 which
	 return "Small" and a rule for numbers bigger than
	  95 which return "Big".".`, () => {
	});
	// test(`Add ability to change rules for initial requirement,
	//  instead of "Fizz" (multiples of 3) return "Buzz",
	//   and instead of "Buzz" (multiples of 5) return "Fizz"".`, () => {
	// });
	// test(`Add new rule for "multiples of 3 and 5" return "FTW",
	//  and for "multiples of 3 or 5" return "GG"`, ()=>{
	//  });
});