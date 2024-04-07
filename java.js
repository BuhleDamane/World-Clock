let now = new Date();
let ixesha = document.querySelector(".ixesha");

let date = now.getDate();


let year = now.getFullYear();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()];

let months = ["January", "February", "March", "April", "May", "June", "July" , "August", "September", "October", "November", "December"]
let month = months[now.getMonth()];

let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

if (seconds < 10) {
    seconds = `0${seconds}`;
  }



ixesha.innerHTML = `${hour}:${minutes}:${seconds}`
let ngubani = document.querySelector(".ngubani")
ngubani.innerHTML = `${date} ${day} ${month}`
