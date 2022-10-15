let cars = ["Nissan", "Toyota", "Honda", "Chevy"];
for (var i = 0; i < cars.length; i++) {
  document.getElementsByTagName("li")[i].innerHTML = `<p>New ${cars[i]}</p>`;
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    days.style.backgroundColor = "red";
    days.style.width = "10vw";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    days.style.backgroundColor = "pink";
    days.style.width = "10vw";
    break;
}

document.getElementById("days").innerHTML = "Today Is " + day;

let state = "Country Chicago 2";
document.getElementById("eat").innerText = state;

const sweet = "Let them eat cake";
document.getElementById("food").innerText = sweet;

const love = "Give it to me know";
document.getElementById("eatMe").innerText = love;

let hit = "for the love on money";
let count = 84 + 12 + 12;
let count2 = 14;
const total = count2 + count;

document.getElementById("fart").innerHTML = `<h1>${hit}</h1> ${total}`;

//   let date = Date();
//   document.getElementById("text").innerHTML = "Today's Date Is " + date;
// }
// const d = new Date();
// let dayOfTheWeek = d.getDay() + 1;
// function love() {
//   if (dayOfTheWeek == 0) {
//     dayOfTheWeek = "Sunday";
//   } else if (dayOfTheWeek) {
//     dayOfTheWeek = "Thursday" + dayOfTheWeek;
//   }
//   document.getElementById("days").innerHTML = "Today is " + dayOfTheWeek;
// }

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
