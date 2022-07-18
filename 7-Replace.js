function myReplace(str, before, after) {
    let arr = []
    arr = str.split(" ")
    console.log(arr)
    let res = ""
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == before){
        if (before[0] >= "A" & before[0] <= "Z"){
          if (after[0] >= "a" & after[0] <= "z"){
            let afterM = ""
            // after.toUpperCase()
            afterM += after[0].toUpperCase()
            for (let j = 1; j<after.length;j++){
              afterM += after[j]
            }
            after = afterM
          }
        }
        if (before[0] >= "a" & before[0] <= "z"){
          if (after[0] >= "A" & after[0] <= "Z"){
            let afterM = ""
            // after.toUpperCase()
            afterM += after[0].toLowerCase()
            
            for (let j = 1; j<after.length;j++){
              afterM += after[j]
            }
            after = afterM
          }
        }
        console.log(after)
        arr[i] = after
      }
      res += arr[i] 
      if (i!= arr.length-1){
        res +=" "
      }
    }
    console.log(res)
    return res;
  }
  
  myReplace("I think we should look up there", "up", "Down");