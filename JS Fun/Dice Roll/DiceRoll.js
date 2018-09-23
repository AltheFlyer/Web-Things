//The List object, and array of list items
var items = document.querySelectorAll("ul li");
var ul = document.querySelector("ul");

//Initialize
init()
setObjects();

//The addition button
var add = document.querySelector(".add");
add.addEventListener("click", addButtonThing);

//Creates classic dice
function init() {
	createDice(1, 2, 0);
	createDice(1, 4, 0);
	createDice(1, 6, 0);
	createDice(1, 8, 0);
	createDice(1, 20, 0);
}

//Random Integer generator
function randomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

//Generates a random value using the dice data provided
function generate(ind) {
	var amount = ind.querySelector(".amount"); 
	var sides = ind.querySelector(".sides"); 
	var out = ind.querySelector(".out"); 
	var mod = ind.querySelector(".modify");
	var value = 0;
	for (var i = 0; i < amount.value; ++i) {
		//Prevent generation of 1 with d0 (in case someone doesn't want dice?)
		value += randomInt(sides.value) + ((sides.value === 0) ? 0 : 1);
	}
	out.textContent = "Your value is: " + (value + parseInt(mod.value)); 
	console.log(value + parseInt(mod.value));
}	

//Updates title to whatever the dice is
function updateTitle(ind) {
	var amount = ind.querySelector(".amount"); 
	var sides = ind.querySelector(".sides"); 
	var out = ind.querySelector("h3"); 
	var modify = ind.querySelector(".modify");
	var mod;
	if (modify.value > 0) {
		mod = ' + ' + modify.value;
	} else if (modify.value < 0) {
		mod = ' ' + modify.value;
	} else {
		mod = ''
	}
	out.textContent = 'Roll ' + amount.value + 'd' + sides.value + mod 
}

//Creates the event listeners for each dice data set
function setObject(index) {
	var list = document.querySelectorAll("ul li");
	var li = list[index];
	var roll = li.querySelector(".roll");
	var remove = li.querySelector(".remove");
	li.querySelector(".amount").addEventListener("input", function(){updateTitle(li)});
	li.querySelector(".sides").addEventListener("input", function(){updateTitle(li)});
	li.querySelector(".modify").addEventListener("input", function(){updateTitle(li)});
	roll.addEventListener("click", function(){generate(li)});
	remove.addEventListener("click", function(){removeDice(li)});
}

//Javascript scope means the function must be run inside a loop,
//else every event will point to one object
function setObjects() {
	items = document.querySelectorAll("ul li");
	for (var i = 0, len = items.length; i < len; ++ i) {
		setObject(i);
	}
}

//Creates a new dice data set, but it's javascript
function addButtonThing() {
	createDice(1, 1, -1);
}

//With arguments
function createDice(diceAmount, diceSides, diceModify) {
	var data = document.createElement("LI");
	var mod;
	if (diceModify > 0) {
		mod = ' + ' + diceModify;
	} else if (diceModify < 0) {
		mod = ' ' + diceModify;
	} else {
		mod = ''
	}
	data.innerHTML = 
				'<h3>Roll ' + diceAmount + 'd' + diceSides + mod + '</h3>' + '\n' +
				'<input type = "number" value = "' + diceAmount + '" class = "dice amount">' + '\n' +
				'<span>d</span>' + '\n' +
				'<input type = "number" value = "' + diceSides + '" class = "dice sides">' + '\n' +
				'<span>+</span>' + '\n' +
				'<input type = "number" value = "' + diceModify + '" class = "modify">' + '\n' +
				'<button class = "roll">Roll!</button>' + '\n' +
				'<button class = "remove">Remove</button>' + '\n' +
				'<p class = "out">Your value is: </p>'
	ul.appendChild(data);
	items = document.querySelectorAll("ul li");
	setObject(items.length - 1);
}

//Removes a dice set
function removeDice(index) {
	console.log(index);
	ul.removeChild(index);
	//For safety
	items = document.querySelectorAll("ul li");
}