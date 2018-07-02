var date = new Date();

var day = date.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

if (hour <= 12){
  hour += " AM";
}

else {
  hour = hour - 12;
  hour += " PM";
}

console.log("Today is: " + days[day]);
console.log("Current time is: " + hour + " : " + minute + " : " + second);
