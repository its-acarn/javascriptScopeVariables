// Episode 1
const scenario = {
	murderer: "Miss Scarlet",
	room: "Library",
	weapon: "Rope",
};

const declareMurderer = function () {
	return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);

// ANSWER: "Miss Scarlet" because scenario declaration was outside function.

// Episode 2
const murderer = "Professor Plum";

const changeMurderer = function () {
	murderer = "Mrs. Peacock";
};

const declareMurderer = function () {
	return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// ANSWER: "Professor Plum" because change murderer function can't change a const

// Episode 3
let murderer = "Professor Plum";

const declareMurderer = function () {
	let murderer = "Mrs. Peacock";
	return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log("First Verdict: ", firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log("Second Verdict: ", secondVerdict);

// ANSWER: firstVerdict = "Mrs. Peacock", secondVerdict = "Professor Plum". There are two murderer declarations, the first one ain't affected by the function.

// Episode 4
let suspectOne = "Miss Scarlet";
let suspectTwo = "Professor Plum";
let suspectThree = "Mrs. Peacock";

const declareAllSuspects = function () {
	let suspectThree = "Colonel Mustard";
	return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// ANSWER: "Miss Scarlet", "Professor Plum", "Colonel Mustard" will print to the console because the suspectThree declaration in the function overrides the initial suspectThree declaration.
// Suspect three is "Mrs. Peacock" - suspectThree declaration in function does not affect initial suspectThree declaration.

// Episode 5
const scenario = {
	murderer: "Miss Scarlet",
	room: "Kitchen",
	weapon: "Candle Stick",
};

const changeWeapon = function (newWeapon) {
	scenario.weapon = newWeapon;
};

const declareWeapon = function () {
	return `The weapon is the ${scenario.weapon}.`;
};

changeWeapon("Revolver");
const verdict = declareWeapon();
console.log(verdict);

// ANSWER: verdict = "candle stick" cause you can't change a const

// Episode 6
let murderer = "Colonel Mustard";

const changeMurderer = function () {
	murderer = "Mr. Green";

	const plotTwist = function () {
		murderer = "Mrs. White";
	};

	plotTwist();
};

const declareMurderer = function () {
	return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// ANSWER: verdict = "Mrs. White" because murderer variable declared initially outside function and then brought through function without being redeclared.

// Episode 7
let murderer = "Professor Plum";

const changeMurderer = function () {
	murderer = "Mr. Green";

	const plotTwist = function () {
		let murderer = "Colonel Mustard";

		const unexpectedOutcome = function () {
			murderer = "Miss Scarlet";
		};

		unexpectedOutcome();
	};

	plotTwist();
};

const declareMurderer = function () {
	return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//ANSWER: verdict = "Mr. Green" because plotTwist declares a new murderer variable and therefore is not affecting the initial murderer variable.

// Episode 8
const scenario = {
	murderer: "Mrs. Peacock",
	room: "Conservatory",
	weapon: "Lead Pipe",
};

const changeScenario = function () {
	scenario.murderer = "Mrs. Peacock";
	scenario.room = "Dining Room";

	const plotTwist = function (room) {
		if (scenario.room === room) {
			scenario.murderer = "Colonel Mustard";
		}

		const unexpectedOutcome = function (murderer) {
			if (scenario.murderer === murderer) {
				scenario.weapon = "Candle Stick";
			}
		};

		unexpectedOutcome("Colonel Mustard");
	};

	plotTwist("Dining Room");
};

const declareWeapon = function () {
	return `The weapon is ${scenario.weapon}.`;
};

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//ANSWER: verdict = "Lead Pipe" because the object is a const it cannot be changed by the function.

// Episode 9
let murderer = "Professor Plum";

if (murderer === "Professor Plum") {
	let murderer = "Mrs. Peacock";
}

const declareMurderer = function () {
	return `The murderer is ${murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);

//ANSWER: verdict = "Professor Plum", because let is a block scoped it stays within the if statement and does not change despite the condition being true.
