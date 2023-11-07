function zipStrings(strA, strB) {
  const arr1 = strA.split("");
  const arr2 = strB.split("");
  const newArr = [];

  if (arr1 > arr2) {
    for (let i = 0; i < strA.length; i++) {
      newArr.push(arr1[i]);
      newArr.push(arr2[i]);
    }
  } else if (arr1 <= arr2) {
    for (let i = 0; i < strB.length; i++) {
      newArr.push(arr1[i]);
      newArr.push(arr2[i]);
    }
  }
  return newArr.join("");
}
