// Задание 1
function getArrayParams(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }

    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return {
    max: max,
    min: min,
    avg: avg,
  }
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfarr, worker) {
  let max = worker(arrOfarr[0]);

  for (let i = 0; i < arrOfarr.length; i++) {
    const funcResult = worker(arrOfarr[i]);
    if (funcResult > max) {
      max = funcResult;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return Math.abs(max - min);
}

