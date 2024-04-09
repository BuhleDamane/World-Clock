let worldClockBox1 = document.querySelector(".worldClockBox1");
let worldClockBox2 = document.querySelector(".worldClockBox2");
let worldClockBox3 = document.querySelector(".worldClockBox3");
let wrapper = document.querySelector(".wrapper")

worldClockBox1.addEventListener('click', () =>{
  wrapper.classList.toggle('activ')
});
worldClockBox2.addEventListener("click", button);
worldClockBox3.addEventListener("click", button);
wrapper.addEventListener("click", button);