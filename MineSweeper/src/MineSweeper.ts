export class MineSweeper {

	constructor(private mines: number, private rows: number, private columns: number = rows) {
	}

	createMap(): number[][] {
		return [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];
	}
}