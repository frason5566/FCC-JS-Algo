function binaryAgent(str) {
    let res=""
    for (let i = 0; i<str.length; i+=9){
      let code = 0
      for (let j = 0; j<8; j++){
        code *= 2
        code += parseInt(str[i+j])
      }
      res+=String.fromCharCode(code)
      console.log(String.fromCharCode(code))
    }
    return res;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");