function sumPrimes(num) {
    let prm = [2,3,5,7]
    let res = 2+3+5+7
    let isPrm = true
    for (let i = 7; i<=num; i++){
      isPrm = true
      for (let j = 0; j<prm.length; j++){
        if (i % prm[j]==0){
          isPrm = false
        }
      }
      if (isPrm){
        res += i
        prm.push(i)
      }
    }
    // console.log(prm)
    console.log(res)
    return res;
  }
  
  sumPrimes(977);