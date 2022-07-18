function smallestCommons(arr) {
    if(arr[0]>arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]]
    let scm = arr[1]
    let isScm = false
    while (!isScm){
      isScm = true
      for (let i = arr[0];i<=arr[1];i++){
        if (scm % i != 0){
          isScm = false
          break
        }
      }
      if (!isScm){
        scm++
      }else{
        console.log(scm)
        return scm
      }
    }
    // return arr;
  }
  
  smallestCommons([1,5]);