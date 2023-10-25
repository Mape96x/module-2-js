function removeItem(array, index) {
  const arrayT = array.slice();
  index = index - 1;
  arrayT.splice(index, 1);
  return arrayT;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

function sumOfCharacters(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      sum += array[i].length;
    } else {
      sum += 0;
    }
  }
  return sum;
}

// TODO: Implement the sumOfCharacters function
const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
