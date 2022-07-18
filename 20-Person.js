const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function(){
      let temp = ""
      for (let i = 0;i<firstAndLast.length;i++){
        if(firstAndLast[i] == " ") break
        temp +=firstAndLast[i]
      }
      return temp
    }
    this.getLastName = function(){
      let temp = ""
      let flag = false
      for (let i = 0;i<firstAndLast.length;i++){
        if(firstAndLast[i-1] == " ") flag = true
        if(flag) temp +=firstAndLast[i]
      }
      return temp
    }
    this.setFirstName = function(first){
      let temp = first
      temp +=" "
      temp += this.getLastName()
      firstAndLast = temp
    }
    this.setLastName = function(last){
      let temp = this.getFirstName()
      temp += " "
      temp += last
      firstAndLast = temp
    }
    this.setFullName = function(firstAndLast){
      let f = ""
      let l = ""
      let flag = false
      for (let i = 0; i<firstAndLast.length; i++){
        if(firstAndLast[i] == " "){
          flag = true
        }else if(flag){
          l += firstAndLast[i]
        }else{
          f += firstAndLast[i]
        }
  
      }
      this.setFirstName(f)
      this.setLastName(l)
      console.log(firstAndLast)
    }
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();
  // console.log(bob.setFirstName("Haskell"))
  bob.setFullName("Haskell Curry")
  // console.log(bob.getFirstName())
  // console.log(bob.getLastName())
  console.log(bob.getFullName())
  