var out = document.querySelector('.statement');
var countText = document.querySelector('.countdown');
var current = 0;
var count = 6;

message = [
	"You have completed the mission.",
	"Your next mission, should you choose to accept it, ",
	"Is to report back tomorrow.",
	"As always, should any of your Force be caught or killed, ",
	"The Secretary will disavow any knowledge of your actions. ", 
	"This tape will self destruct in five seconds. Good luck.",
]

var display = setInterval(setTextValue, 2000);

function setTextValue(s) {
	out.textContent = message[current];
	current++;
	if (current === message.length) {
		clearInterval(display);
		out.style.animationName = "textset";
		out.style.animationIterationCount = "1";
		display = setInterval(countdown, 1000);
	}
}

function countdown() {
	count --;
	countText.textContent = count;

	if (count === 0) {
		clearInterval(display);
		location.reload();
	}
}

