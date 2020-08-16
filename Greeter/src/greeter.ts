export class Greeter {
	constructor(private date: Date, private logger: { log: any; }) {}

	greet(name: string) {
		const hour = this.date.getHours();
		name = getCapitalizedName(name.trim());
		this.logger.log(
			`greeted ${name} at ${hour}:${getMinutesAsString(this.date)}`
		);
		return `${getWelcomeMessage(hour)} ${name}`;
	}
}

function getMinutesAsString(date: Date): string {
	const minutes = date.getMinutes();
	const minutesAsString = minutes.toString();
	return minutes > 9 ? minutesAsString : "0" + minutesAsString;
}

function getCapitalizedName(name: string): string {
	const upperCaseLetter = name.length > 0 ? name[0].toUpperCase() : "";
	return upperCaseLetter + name.slice(1);
}

function getWelcomeMessage(hour: number) {
	if (hour >= 6 && hour < 12) return "Good morning";
	if (hour >= 18 && hour < 22) return "Good evening";
	if ((hour >= 0 && hour <= 6) || (hour >= 22 && hour <= 24))
		return "Good night";
	return "Hello";
}
