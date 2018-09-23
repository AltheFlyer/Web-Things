var input = document.querySelector(".get");
var eletype = document.querySelector(".eletype");
var topButton = document.querySelector(".top");
var botButton = document.querySelector(".bot");
var additions = document.querySelector("#additions");

topButton.addEventListener('click', function(){ addElement(true)});
botButton.addEventListener('click', function(){ addElement(false)});

function addElement(isAbove) {
	var newElement = document.createElement(eletype.value);
	newElement.textContent = input.value;
	input.value = "";
	if (isAbove) {
		additions.insertBefore(newElement, additions.childNodes[0]);
	} else {
		additions.appendChild(newElement);
	}
}
