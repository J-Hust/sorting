
function bubbleSort(arr){
  let i=0, j = 0;
  let localCompareCount=0, localSwap=0;
  // debugger;
  // loop through using 1st element
  console.log ('Before: ' + arr);
  for (i=0; i<arr.length-1; i++){
    for (j=0; j<arr.length-1-i; j++){
      ++localCompareCount;
      // each time through, increment the compareCount
      if (arr[j] > arr[j+1]){
        ++localSwap;
        swap(arr, j, j+1);
      }
    }
  }
  console.log ('After: ' + arr);
  return arr;
}


function swap(arr, from, to) {
  let temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;
  swapCount ++
}
