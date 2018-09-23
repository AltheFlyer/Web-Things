// JavaScript source code
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var count = 0;

document.getElementById('do not').onclick = function () {
    var random = getRandomInt(3);
    count++;
    if (count === 10) {
        alert("Are you trying to find new messages?");
    } else if (count === 20) {
        alert("Robert Hooke is a plant cell.");
    } else {
        switch (random) {
            case 0:
                alert("Why would you do this.");
                break;
            case 1:
                alert("Are you illiterate?");
                break;
            case 2:
                alert("Can you do not.");
        }
    }  
}

var clicks = 0;
document.getElementById('clicker').onclick = function () {
    clicks += 1;
    if (clicks % 50 === 0) {
        alert("You've reached " + clicks + " clicks!");
    } 
}