function filterApiData(apiData, mandatoryKeys) {
  // let nArr = [];

  // for (let i = 0; i < apiData.length; i++) {
  //   let obj = apiData[i];
  //   let hasAllKeys = true;

  //   for (let j = 0; j < mandatoryKeys.length; j++) {
  //     let key = mandatoryKeys[j];
  //     if (!obj.hasOwnProperty(key)) {
  //       hasAllKeys = false;
  //       break;
  //     }
  //   }

  //   if (hasAllKeys) {
  //     nArr.push(obj);
  //   }
  // }
  // return nArr;

  return apiData.filter((obj) => {
    return mandatoryKeys.every((key) => obj.hasOwnProperty(key));
  });
}
