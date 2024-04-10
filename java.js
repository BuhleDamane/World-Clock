let home = document.querySelector(".home")
let alarm = document.querySelector(".alarm")
let stopwatch = document.querySelector(".stopwatch")
let timer = document.querySelector(".timer")
let worldClockBox = document.querySelector('.worldClockBox');

home.addEventListener("click", () =>{
worldClockBox.classList.toggle("acive");
});