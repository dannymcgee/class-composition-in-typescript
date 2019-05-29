import { Actor } from './actor'
import { Pooper, Barker, Meower, Driver, Cleaner, Killer } from './actions'
import { applyMixins } from './mixins'


export class Dog
	extends Actor
	implements Pooper, Barker {
	poop: () => void;
	bark: () => void;
}
applyMixins( Dog, [ Pooper, Barker ] );


export class Cat
	extends Actor
	implements Pooper, Meower {
	poop: () => void;
	meow: () => void;
}
applyMixins( Cat, [ Pooper, Meower ] );


export class CleanOTron
	extends Actor
	implements Driver, Cleaner {
	position: number;
	speed: number;
	drive: () => void;
	clean: () => void;
}
applyMixins( CleanOTron, [ Driver, Cleaner ] );


export class KillOTron
	extends Actor
	implements Driver, Killer {
	position: number;
	speed: number;
	drive: () => void;
	kill: () => void;
}
applyMixins( KillOTron, [ Driver, Killer ] );


export class MurderDogOTron
	extends Actor
	implements Driver, Barker, Killer {
	position: number;
	speed: number;
	drive: () => void;
	bark: () => void;
	kill: () => void;
}
applyMixins( MurderDogOTron, [ Driver, Barker, Killer ] );
