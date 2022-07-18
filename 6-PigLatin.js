function translatePigLatin(str) {
    let res = ""
    let vowels = ['a','e','i','o','u']
    let temp = ""
    let flag = false 
    let first = false
    for(let i = 0; i < str.length; i++){
      if (!flag){  
        for (let j = 0; j<5; j++){
          if(vowels.find(elem => elem == str[i])){
            // console.log(str[i])
            if(i == 0){
              first = true
            }
            flag = true
            break
          }
        }
      }
      if(flag){
        res += str[i]
        // break
      }else{
        temp += str[i]
      }
    }
    
    if(first){
      res += "way"
    }
    else if(flag){
      res += temp
      res += "ay"
    }else{
      res = str + "ay"
    }
    console.log(res)
    return res;
  }
  
  translatePigLatin("tyrt");