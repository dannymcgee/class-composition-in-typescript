import { Actor } from './actor'

export class Pooper extends Actor {
	poop () {
		console.log( `${this.name} just ruined your carpet 💩` )
	}
}

export class Barker extends Actor {
	bark () {
		console.log( `Woof, I am ${this.name}` )
	}
}

export class Meower extends Actor {
	meow () {
		console.log( `Meow, I am ${this.name}` )
	}
}

export class Driver extends Actor {
	position: number;
	speed: number;

	drive () {
		this.position += this.speed
	}
}

export class Cleaner extends Actor {
	clean () {
		console.log( `${this.name} cleaned up all the poop!` )
	}
}

export class Killer extends Actor {
	kill () {
		console.log( `${this.name} will KILL, KILL, KILL THE POOPERS` )
	}
}
