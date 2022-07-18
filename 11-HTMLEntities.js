function convertHTML(str) {
    let a = []
    a = str.split(" ")
    console.log(a)
    let res = ""
    for (let i = 0; i<str.length; i++){
      if (str[i] == "&"){
        res += "&amp;"
      }else if (str[i] == "<"){
        res += "&lt;"
      }else if (str[i] == ">"){
        res += "&gt;"
      }else if (str[i] == "\""){
        res += "&quot;"
      }else if (str[i] == "'"){
        res += "&apos;"
      }else if (str[i] == " "){
        res += " "
      }
      else{
        res += str[i]
      }
      
    }
    console.log(res)
    return res;
  }
  // & => &amp;
  // < => &lt;
  // > => &gt;
  // " => &quote;
  // ' => &apos;
  convertHTML("Dolce & Gabbana");