var items = document.querySelectorAll(".gallery .item")
var popup = document.querySelector(".gallery .popup")
//var closer = document.querySelector(".gallery .popup .close")

popup.addEventListener('click', closePopup);

for (var i = 0, len = items.length; i < len; ++i) {
	console.log(items[i]);
	var mainContent = items[i].querySelector(".wrapper");
	pointer(mainContent);
}

function closePopup() {
	popup.style.visibility = "hidden";
}

function showPopup() {
	popup.style.visibility = "visible";
	console.log("show");
}

function pointer(item) {
	item.addEventListener('click', function(){setImage(item)});
}

function setImage(item) {
	itemImage = popup.querySelector("img")
	//This line prvents the previous image from flashing first
	//Don't ask.
	itemImage.setAttribute("src", "");
	itemImage.setAttribute("src", item.getAttribute("pointer"));
	showPopup();
}