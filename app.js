let cars = ["Nissan", "Toyota", "Honda", "Chevy"];
for (var i = 0; i < cars.length; i++) {
  document.getElementsByTagName("li")[i].innerHTML = `<p>New ${cars[i]}</p>`;
}
