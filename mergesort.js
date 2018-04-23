function mergeSort(arr){
    let leftArr = [], rightArr = [], finalArr = [];

    // copy arr[start...middle] ====> leftArr
    // copy arr[middle+1...end] ====> rightArr
    finalArr = split(arr);

    if ( arr.length === 1)
        return arr;
    leftArr = finalArr[0];
    rightArr = finalArr[1];
    mergeSort(leftArr);
    mergeSort(rightArr);
    return (merge(leftArr, rightArr));
}

function split(arr){
    start = 0;
    end = arr.length;
    middle = arr.length/2 - 1;
    // copy arr[start...middle] ====> leftArr
    // copy arr[middle+1...end] ====> rightArr
    let final = [];
    final.push(arr.slice(start,middle));
    final.push(arr.slice(middle,end));
    return(final)


}
function merge(lArr, rArr){
    let results = [];

}