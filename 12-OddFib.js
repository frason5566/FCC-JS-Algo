function sumFibs(num) {
    let fib = [1,1]
    let res = 2
    while(fib[fib.length-1]+fib[fib.length-2] <= num){
      fib.push(fib[fib.length-1]+fib[fib.length-2])
      if (fib[fib.length-1] % 2 == 1) res += fib[fib.length-1]
    }
    console.log(fib)
    console.log(res)
    return res;
  }
  
  let s = sumFibs(4);
  console.log(s)