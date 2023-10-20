const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);

function oddEven(number) {
  if (number % 2 == 0) {
    return "The number is even.";
  } else {
    return "The number is odd.";
  }
}
console.log(oddEven(4));
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));

function oldYoung(age) {
  if (age >= 50) {
    return "elder Person";
  } else if (age >= 16) {
    return "young person";
  } else if (age < 16 && age >= 0) {
    return "children";
  } else {
    return "invalid parameter";
  }
}

console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));
