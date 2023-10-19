function welcomeMsg(a) {
  return "Welcome " + a;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

function calcGrossPrice(a, b) {
  return a * b + a;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
