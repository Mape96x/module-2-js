function extractClassName(sessionTitle) {
  let nArr = [];
  const month = {
    Januar: 1,
    Febraur: 2,
    Maerz: 3,
    März: 3,
    April: 4,
    Mai: 5,
    Juni: 6,
    Juli: 7,
    August: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Dezember: 12,
  };
  if (sessionTitle.includes("Live-Session Class")) {
    nArr = sessionTitle.split(" ");
  } else {
    return null;
  }

  if (nArr[2].length === 4) {
    if (nArr[3] in month) {
      return nArr[2] + "-0" + month[nArr[3]];
    } else {
      return null;
    }
  } else {
    return null;
  }
}
