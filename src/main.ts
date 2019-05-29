import { Dog, Cat, CleanOTron, KillOTron, MurderDogOTron } from './classes'

const sniffles = new Dog( 'Sniffles' );
const fluffy = new Cat( 'Fluffy' );
const cleanBot = new CleanOTron( 'MODEL 1' );
const murderBot = new KillOTron( 'MODEL 2' );
const murderDogBot = new MurderDogOTron( 'MODEL CUJO' );

sniffles.bark();
sniffles.poop();

fluffy.meow();
fluffy.poop();

cleanBot.drive();
cleanBot.clean();

murderBot.drive();
murderBot.kill();

murderDogBot.bark();
murderDogBot.drive();
murderDogBot.kill();
