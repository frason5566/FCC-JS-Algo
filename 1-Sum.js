function sumAll(arr) {
    if(arr[0]>arr[1]) [arr[0], arr[1]] = [arr[1],arr[0]]
    let res = 0
    for (let i = arr[0];i<=arr[1];i++){
        res += i
    }
    return res;
}
  
console.log(sumAll([1, 4]));