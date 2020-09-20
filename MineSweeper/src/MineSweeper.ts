export class MineSweeper {
	private map: number[][];

	constructor(private mines: number, private rows: number, private columns: number = rows) {
		if (!this.isValidInput(mines, rows, columns)) {
			console.log('Input not valid!');
			this.map = [];
			return;
		}
		const map: number[][] = []; // size rows X columns
		const open: number[][] = [];
		// initialize map
		for (let i = 0; i < rows; i++) {
			map.push([]);
			for (let j = 0; j < columns; j++) {
				open.push([i, j]);
				map[i].push(0);
			}
		}
		// put mines in map
		for (let placedMines = 0; placedMines < mines; placedMines++) {
			const leftSpaces = open.length;
			const chosenIndex = Math.floor(Math.random() * leftSpaces);
			let row, column;
			[row, column] = open[chosenIndex];
			// put mine and register neighbors
			putMine(row, column, map);
			open.splice(chosenIndex, 1);
		}
		this.map = map;
	}

	createMap(): number[][] {
		console.log(this.map);
		return this.map;
	}

	isValidInput(private mines: number, private rows: number, private columns: number): boolean {
		return mines >= 0 && rows > 0 && columns > 0 && mines <= rows * columns;
	}
}


function putMine(row: number, column: number, map: number[][]) {
	// put the mine
	map[row][column] = -1;
	// register neighbors
	const validRowLow = Math.max(0, row - 1);
	const validRowHigh = Math.min(map.length - 1, row + 1);
	const validColLow = Math.max(0, column - 1);
	const validColHigh = Math.min(map[0].length - 1, column + 1);
	; console.log([validRowLow, validRowHigh, validColLow, validColHigh]);
	for (let i = validRowLow; i <= validRowHigh; i++)
		for (let j = validColLow; j <= validColHigh; j++)
			if (map[i][j] !== -1)
				map[i][j]++;
}
