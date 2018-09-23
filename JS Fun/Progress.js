progress = document.querySelector("progress");
progressDiv = document.querySelector(".back");
valueDiv = document.querySelector(".value");

increaseProgress();

function increaseProgress() {
	progress.value += 2
	if (progress.value !== progress.max) {
		setTimeout(increaseProgress, 20);
	}
}

