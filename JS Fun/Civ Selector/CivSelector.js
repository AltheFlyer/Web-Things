//List of civs
var civs = ['American', 'Arabian', 'Assyrian', 'Austrian', 'Aztec', 'Babylonian',
'Brazilian', 'Byzantine', 'Carthaginian', 'Celtic', 'Chinese', 'Danish',
 'Egyptian', 'English', 'Ethiopian', 'French', 'German', 'Greek',
  'Hunnic', 'Incan', 'Indian', 'Indonesian', 'Iroquois', 'Japanese', 'Korean',
   'Mayan', 'Mongolian', 'Moroccan', 'Ottoman', 'Persian', 'Polish', 'Polynesian',
    'Portuguese', 'Roman', 'Russian', 'Shoshone', 'Siamese', 'Songhai', 'Spanish',
	 'Swedish', 'Venetian', 'Zulu'
];
civs = civs.sort();
var listLength = civs.length;

//The dropdowns
var civPool = document.querySelector(".pool");
var banPool = document.querySelector(".banned");
var selectPool = document.querySelector(".selected");

//The buttons
var banButton = document.querySelector(".ban");
var unbanButton = document.querySelector(".unban");
var selectButton = document.querySelector(".select");
var deselectButton = document.querySelector(".deselect");
var randomButton = document.querySelector(".random");
unbanAllButton = document.querySelector(".unbanall");
deselectAllButton = document.querySelector(".deselectall");

//For randomness
var randomField = document.querySelector(".randNumber");

//Text displays
var civDisplay = document.querySelector(".civDisplay");
var banDisplay = document.querySelector(".banDisplay");
var selectDisplay = document.querySelector(".selectDisplay");

//Actions
banButton.addEventListener('click', function(){moveOption(civPool, banPool); updateDisplay(civDisplay, civPool); updateDisplay(banDisplay, banPool)});
unbanButton.addEventListener('click', function(){moveOption(banPool, civPool); updateDisplay(banDisplay, banPool); updateDisplay(civDisplay, civPool)});
selectButton.addEventListener('click', function(){moveOption(civPool, selectPool); updateDisplay(civDisplay, civPool); updateDisplay(selectDisplay, selectPool)}); 
deselectButton.addEventListener('click', function(){moveOption(selectPool, civPool); updateDisplay(selectDisplay, selectPool); updateDisplay(civDisplay, civPool)});
randomButton.addEventListener('click', function(){loopRandom(randomField.value)});
unbanAllButton.addEventListener('click', function() {moveAll(banPool); 	updateDisplay(banDisplay, banPool);});
deselectAllButton.addEventListener('click', function() {moveAll(selectPool); updateDisplay(selectDisplay, selectPool)});

//Add all civs to the civ pool
for (var i = 0; i < civs.length; ++i) {
	var civ = document.createElement("option");
	civ.value = civs[i];
	civ.textContent = civs[i];
	civPool.append(civ);
}

//First display update:
updateDisplay(civDisplay, civPool);

//Moves an option from one drop-down to another
function moveOption(start, finish){
	var currentCiv = start.value;
	//Add the civ
	if (currentCiv !== "") {
		var op = document.createElement("option");
		op.value = currentCiv;
		op.textContent = currentCiv;
		finish.add(op);
		//Remove the civ
		var x = start.selectedIndex;
		start.remove(x);
		//Set the selection
		start.selectedIndex = x;
		//update list
		updateList(finish);
	}
}

//Sorts the list
function updateList(list) {
	//Why js
	sortedCivs = [];
	var listLength = list.options.length;
	var newest = list.options[listLength - 1].text;
	var selection = 0;
	
	for (var i = 0; i < listLength; ++i) {
		sortedCivs.push(list.options[0].value);
		list.remove(0);
	}
	sortedCivs = sortedCivs.sort();
	for (var i = 0; i < listLength; ++i) {
		var op = document.createElement("option");
		op.value = sortedCivs[i];
		op.textContent = sortedCivs[i];
		list.add(op);
		//This is to auto select the moved civ
		if (sortedCivs[i] === newest) {
			selection = i;
		}
	}
	list.selectedIndex = selection;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
	
function moveRandomCiv(){
	var random = getRandomInt(civPool.options.length)
	var currentCiv = civPool.options[random].text;
	//Add the civ
	var op = document.createElement("option");
	op.value = currentCiv;
	op.textContent = currentCiv;
	selectPool.add(op);
	//Remove the civ
	civPool.remove(random);
}

function loopRandom(times) {
	if (times < 1) {
		alert("This does nothing");
	} else {
		if (times > civPool.options.length) {
			alert("Defaulting to max number of civs");
			times = civPool.options.length;
		}
		for (var i = 0; i < times; ++i) {
			moveRandomCiv();
		}
	}
	updateList(selectPool);
	updateDisplay(civDisplay, civPool);
	updateDisplay(selectDisplay, selectPool);
}

function updateDisplay(display, list) {
	var html = "";
	var ll = list.options.length;
	html = "<ol>";
	for (var i = 0; i < ll; ++i) {
		html += "<li>" + list.options[i].text + "</li>";
	}
	html += "</br>";
	display.innerHTML = display.innerHTML.slice(0, display.innerHTML.indexOf("<ol>"));
	display.innerHTML += html;
}

function moveAll(start) {
	var len = start.options.length;
	for (var i = 0; i < len; ++i) {
		start.selectedIndex = 0;
		moveOption(start, civPool);
	}
	updateDisplay(civDisplay, civPool);
}