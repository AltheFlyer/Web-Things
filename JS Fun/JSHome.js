var input = document.querySelector('.input');
var out = document.querySelector('.out');
var update = document.querySelector('.update');
var linked = document.querySelector('p a');

update.addEventListener('click', setText);
setText();

function setText() {
	var x = document.createElement("P");
	x.textContent = input.value;
	var previous = document.querySelector("#previous");
	previous.insertBefore(x, previous.childNodes[0]);
	if (input.value === "JSTest") {
		linked.href = "JSTest.html";
		linked.textContent = "JSTest";
	} else if (input.value === "ElementAddition") {
		linked.href = "ElementAddition.html";
		linked.textContent = "Element Addition";
	} else {
		linked.href = "#";
		linked.textContent = "something else";
	}
}