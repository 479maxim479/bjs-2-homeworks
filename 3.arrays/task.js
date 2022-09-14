function compareArrays(arr1, arr2) {
  let result = true;

  arr1.every((element1) => [element1]);
  arr2.every((element2) => [element2]);

  if (arr1.length === arr2.length && arr1[0] === arr2[0]) {
    return result;
  }
  return !result;
}

function advancedFilter(arr) {
  let checkArr = arr.filter((element) => element > 0).filter(element => element % 3 === 0);
  let resultArr = checkArr.map((element) => element * 10);

  return resultArr;
}
