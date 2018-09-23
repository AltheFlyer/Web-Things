var active = document.querySelector("#active");
var popup = document.querySelector("#popup");
var closer = document.querySelector("#popup #close");

active.addEventListener("click", showPopup);
closer.addEventListener("click", hidePopup);

//Show and hide the popup
function showPopup() {
	popup.style.visibility = "visible";
}
function hidePopup() {
	popup.style.visibility = "hidden";
}