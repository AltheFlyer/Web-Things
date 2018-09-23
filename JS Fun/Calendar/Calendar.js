var time = new Date();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = [
'January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
var daysInMonth = [
31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]

var first = document.querySelector('.first');
var today = document.querySelector('.todayText');

var firstDay = new Date(time.getFullYear(), time.getMonth()).getDay();

first.textContent += days[firstDay];
today.textContent += days[time.getDay()] + ", " + months[time.getMonth()] + " " + time.getDate() + ", " + time.getFullYear();
document.querySelector('.head').textContent = months[time.getMonth()];

//Generate the calendar
var calendar = document.querySelector('table');
var row = document.createElement('TR');
var day = 1;

var hoverText = document.querySelector('.react');

//Sidebar
var side = document.querySelector('.data');

//Create rest of calendar, similar method
console.log(daysInMonth[time.getMonth()]);
while (day <= daysInMonth[time.getMonth()]) {
	row = document.createElement('TR');
	for (var i = 0; i < 7; ++i) {
		var box = document.createElement('TD');
		//Checks to start and end on the right day
		if ((i === firstDay && day === 1) || (day > 1 && day <= daysInMonth[time.getMonth()])){
			box.textContent = day;
			//For styling:
			if (day < time.getDate()) {
				box.classList.add("previous");
			}
			if (day === time.getDate()) {
				box.classList.add("today");
			}
			box.classList.add("day");
			
			++day;
		}
		
		row.appendChild(box);
	}
	
	calendar.appendChild(row);
}

var data = document.querySelectorAll('.day');

var dayData = [];

for (var i = 0; i < 31; ++i) {
	dayData[i] = "";
}

dayData[30] = "<p>The last day of the month.</p>"; 

//I hate javascript
for (var i = 0, len = data.length; i < len; ++i) {
	console.log(data[i].textContent);
	set(data[i], dayData[i]);
}

function set(a, b) {
	a.addEventListener('mouseenter', function(){
		console.log(a.textContent);
		hoverText.textContent = "Day: " + a.textContent;
		side.innerHTML =  "<h1>" + months[time.getMonth()] + " " + a.textContent + "</h1>" + "\n" +
		b;
		console.log(b);
		});
}