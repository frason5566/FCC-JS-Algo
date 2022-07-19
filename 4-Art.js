function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let keys = Object.keys(source)
    return collection.filter(obj => {
      for (let i = 0; i < keys.length; i++) {
        if (!obj.hasOwnProperty(keys[i]) ||
            obj[keys[i]] !== source[keys[i]]) {
          return false;
        }
      }
      return true;
    })
    // Only change code above this line
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });