function updateTime(){

var today = new Date();
const monthWords = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let day = today.getDate();
let month = monthWords[today.getMonth()];
let year = today.getFullYear();

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

let am_pm = "";

if (hour < 12){
  am_pm = "AM"
}
else {
  am_pm = "PM"
}




var date = day +' '+ month +' '+ year ;
var time = hour + " : " + min + " : " + sec + " "+ am_pm ;









document.getElementById("dateID").innerHTML = date;
document.getElementById("timeID").innerHTML = time;
}

setInterval(updateTime,1000);