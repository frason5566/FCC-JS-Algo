function steamrollArray(arr) {
    // console.log(Array.isArray(arr[2][1]))
    let res = []
    let h = function(a){
      for (let i = 0; i < a.length;i++){
        if(Array.isArray(a[i])){
          h(a[i])
        }else{
          res.push(a[i])
        }
      }
    }
    h(arr)
    console.log(res)
    return res;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);