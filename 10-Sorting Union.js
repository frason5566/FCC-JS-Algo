function uniteUnique(...arr) {
    console.log(arr)
    let res = []
    for (let i = 0; i<arr.length; i++){
      for (let j = 0; j<arr[i].length; j++){
        if(res.find(elem => elem == arr[i][j])){
          console.log(arr[i][j])
        }else{
          res.push(arr[i][j])
        }
      }
    }
    console.log(res)
    return res;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);