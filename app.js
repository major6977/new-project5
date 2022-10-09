let cars = ["Nissan", "Toyota", "Honda", "Chevy"];
for (var i = 0; i < cars.length; i++) {
  document.getElementsByTagName("li")[i].innerHTML = `<p>New ${cars[i]}</p>`;
}

function date() {
  let date = Date();
  document.getElementById("text").innerHTML =
    "Today's Date Is " + date + "I am the manager";
}
const d = new Date();
let dayOfTheWeek = d.getDay();
function love() {
  if (dayOfTheWeek == 0) {
    dayOfTheWeek = "Sunday";
  } else if ((dayOfTheWeek = 1)) {
    dayOfTheWeek = "Monday";
  }
  document.getElementById("days").innerHTML = "Today is " + dayOfTheWeek;
}

// document.body.style.backgroundColor = "red";

// function off() {
//   document.getElementsByTagName("button")[0].style.backgroundColor = "blue";
// }

// function on1() {
//   document.getElementsByTagName("button")[1].style.backgroundColor = "red";
// }
// function off1() {
//   document.getElementsByTagName("button")[1].style.backgroundColor = "blue";
// }
// function on2() {
//   document.getElementsByTagName("button")[2].style.backgroundColor = "red";
// }
// function off2() {
//   document.getElementsByTagName("button")[2].style.backgroundColor = "blue";
// }
