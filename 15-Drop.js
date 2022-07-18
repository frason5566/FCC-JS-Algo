function dropElements(arr, func) {
    let res = []
    for (let i=0; i<arr.length; i++){
      if(!func(arr[i])){
        delete arr[i]
      }else{
        break
      }
    }
    // console.log(arr)
    for(let i = 0; i<arr.length; i++){
      if(arr[i]!=undefined) res.push(arr[i])
    }
    // console.log(res)
    return res;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });