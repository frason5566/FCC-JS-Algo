function truthCheck(collection, pre) {
    for (let i = 0; i<collection.length; i++){
      console.log(collection[i][pre])
      if (!collection[i][pre]){
        return false
        }
    }
    return true;
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");