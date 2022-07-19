function addTogether(...args) {
    if (args.length == 1){
      if(typeof args[0] != 'number') return undefined
      let b = args[0]
      let after = function(f){
        if(typeof f != 'number') return undefined
  
        return b+f
      }
      return after
      
    }else if(args.length == 2){
      if(typeof args[0] != 'number') return undefined
      if(typeof args[1] != 'number') return undefined
      return args[0] + args[1]
    }
    return undefined
    // return false;
  }
  
  addTogether(2,3);
  console.log(addTogether(2)([3]))