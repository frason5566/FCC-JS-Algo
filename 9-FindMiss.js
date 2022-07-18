function fearNotLetter(str) {
    let ref = "abcdefghijklmnopqrstuvwxyz"
    let comp = false
    let j = 0
    while (ref[j] != str[0]){
      j++
    }
    j++
    console.log(j)
    for (let i = 1; i < str.length; i++){
      if(str[i] != ref[j]){
        console.log(ref[j])
        return ref[j]
      }
      j++
    }
    return;
  }
  
  fearNotLetter("abce");