interface Frame {
	rolls: number[];
	score: number;
}
export default class BowlingGame {
	public maxFrames = 10;

	private currentScore = 0;
	private frames: Frame[]
		= [{ rolls: [], score: 0 }];

	roll(pins: number): void {
		if (!this.isValidRoll(pins, this.frames)) return;
		let currentFrame = this.frames[this.frames.length - 1];
		this.getBonousPoints(pins, currentFrame, this.frames);
		//add to current frame
		currentFrame.rolls.push(pins);

		//update final score
		this.currentScore += pins;
		currentFrame.score += pins;
		//  strike / 2nd turn on regular frame add new empty frame
		if (this.isStrikeFrame(currentFrame) ||
			(currentFrame.rolls.length === 2
				&& this.frames.length < this.maxFrames)) //insert new frame
			this.frames.push({ rolls: [], score: this.currentScore });
	}

	getScore() {
		return this.currentScore;
	}

	private getBonousPoints(pins: number,
		currentFrame: Frame, frames: Frame[]) {
		//update last frame is needed
		if (this.frames.length > 1) {
			const lastFrame = this.frames[this.frames.length - 2];
			if (this.isStrikeFrame(lastFrame) ||
				(this.isSpareFrame(lastFrame)
					&& currentFrame.rolls.length === 0)) {
				this.currentScore += pins;
				currentFrame.score += pins;
				lastFrame.score += pins;
			}
			// check for consecative strikes that are not 10
			if ((this.isStrikeFrame(lastFrame)
				&& this.frames.length < this.maxFrames
				&& this.frames.length > 2
				&& this.isStrikeFrame(this.frames[this.frames.length - 3]))) {
				this.currentScore += pins;
				currentFrame.score += pins;
				this.frames[this.frames.length - 2].score += pins;
				this.frames[this.frames.length - 3].score += pins;
			}
			// if( this.frames.length === 10 
			// 	&& this.isStrikeFrame()){

			// }
		}
	}

	private isValidRoll(pins: number, frames: Frame[]): boolean {
		if (!this.isValidPins(pins) ||
			!this.isMoreRolls(this.frames))
			return false;
		return this.isValidSecondRoll(pins, frames);
	}

	// check that the pins input number for roll is valid
	private isValidPins(pins: number): boolean {
		if (pins > 10 || pins < 0 ||
			!Number.isInteger(pins))
			throw new Error(`Invalid number of pins: ${pins}`);
		return true;
	}

	// check that the sum of pins per frame is valid
	private isValidSecondRoll(pins: number,
		frames: Frame[]): boolean {
		if (frames.length < 10 &&
			!this.isStrikeFrame(frames[frames.length - 1]) &&
			frames[frames.length - 1].rolls[0] + pins > 10)
			return false;
		return true;
	}

	// check if more rolls are possible for the game
	private isMoreRolls(frames: Frame[]): boolean {
		if (frames.length === this.maxFrames) {
			const lastFrame = frames[this.maxFrames - 1];
			let alowedRollsInFrame = 2;
			if ((this.isStrikeFrame(lastFrame) || this.isSpareFrame(lastFrame)))
				alowedRollsInFrame = 3;
			return !(lastFrame.rolls.length === alowedRollsInFrame);
		}
		return true;
	}

	// check the input frame for strike
	private isStrikeFrame(frame: { rolls: number[], score: number }): boolean {
		const rolls = frame.rolls;
		if (rolls.length > 0 && rolls[0] === 10) return true;
		return false;
	}

	// check the input frame for spare
	private isSpareFrame(frame: { rolls: number[], score: number }): boolean {
		const rolls = frame.rolls;
		if (rolls.length >= 2 && rolls[0] + rolls[1] === 10) return true;
		return false;
	}
}