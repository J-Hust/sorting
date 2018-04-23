function mergeSort(arr) {
  let leftArr = [],
    rightArr = [],
    finalArr = [];

  // copy arr[start...middle] ====> leftArr
  // copy arr[middle+1...end] ====> rightArr
  finalArr = split(arr);
  debugger;
  if (arr.length === 1) return arr;
  leftArr = finalArr[0];
  rightArr = finalArr[1];
  mergeSort(leftArr);
  mergeSort(rightArr);
  return merge(finalArr);
}

function split(arr) {
  start = 0;
  end = arr.length;
  middle = arr.length / 2;
  // copy arr[start...middle] ====> leftArr
  // copy arr[middle+1...end] ====> rightArr
  let final = [];
  final.push(arr.slice(start, middle));
  final.push(arr.slice(middle, end));
  return final;
}
function merge(final) {
  let results = [];
  let lArr = final[0];
  let rArr = final[1];
  let max = lArr.length + rArr.length;

  let i = 0;
  let j = 0;
  let counter = 0;

  while (counter < max && i < lArr.length && j < rArr.length) {
    if (lArr[i] > rArr[j]) {
      results.push(rArr[j++]);
    } else {
      results.push(lArr[i++]);
    }
    counter++;
  }

  if (i > j) {
    for (j; j < rArr.length; j++) {
      results.push(rArr[j]);
    }
  }

  else if (i < j) {
    for (i; i < lArr.length; i++) {
      results.push(lArr[i]);
    }
  }

  return results;
}
