function pairElement(str) {
    let res = []
    for (let  i = 0; i<str.length;i++){
      // let temp = []
      if (str[i]=='A'){
        res.push(['A','T'])
      }else if(str[i]=='T'){
        res.push(['T','A'])
      }else if(str[i]=='C'){
        res.push(['C','G'])
      }else if(str[i]=='G'){
        res.push(['G','C'])
      }
    }
    console.log(res)
    return res;
  }
  
  pairElement("GCG");