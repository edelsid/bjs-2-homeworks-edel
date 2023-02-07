function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr [i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }

  let roughAvg = sum / arr.length;
  avg = Number(roughAvg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

getArrayParams (5, 5, 5);

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  let maxNumber = -Infinity;
  let minNumber = Infinity;
  let difference = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr [i];
      }
      if (arr[i] < minNumber) {
        minNumber = arr[i];
      }
    }
    difference = maxNumber - minNumber;
    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    difference = sumEvenElement - sumOddElement;
    return difference;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      }
    }
    avg = sumEvenElement / countEvenElement;
    return avg;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;      
    }
  }
  return maxWorkerResult;
}
