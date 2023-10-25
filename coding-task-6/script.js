function oddNumbers(a, b) {
  let result = "";
  if (a >= 0 && b >= 0) {
    for (let i = a; i <= b; i++) {
      if (i % 2 != 0) {
        result = result + i + ", ";
      } else {
      }
    }
    return result;
  } else {
    console.log("invalid parameter");
  }
}
console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log(oddNumbers(9, 12));
// result should be: 9,11

function charCount(str, char) {
  let count = 0;

  if (char.length == 1) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }

    return count;
  } else {
    console.log("invalid char");
  }
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
