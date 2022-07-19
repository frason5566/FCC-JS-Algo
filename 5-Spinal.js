function spinalCase(str) {
    let res = ""
    for (let i = 0; i<str.length;i++){
      if (str[i] == " "|str[i] == "_"|str[i] == "-"){
        res += "-"
      }else if(str[i] >= "A"& str[i]<="Z") {
        if (res[res.length-1] !="-" & i!=0) res += "-"
        res += str[i].toLowerCase()
      }else{
        res += str[i].toLowerCase()
      }
    }
    console.log(res)
    return res;
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap")
  spinalCase("The_Andy_Griffith_Show")
  spinalCase("Teletubbies say Eh-oh")
  spinalCase("AllThe-small Things")