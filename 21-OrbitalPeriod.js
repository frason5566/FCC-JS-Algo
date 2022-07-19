function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    console.log(arr.length)
    let res = []
    for (let i = 0; i<arr.length; i++){
      console.log(i)
      let temp = {}
      temp.name = arr[i].name
      const c = Math.pow(earthRadius + arr[i].avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      temp.orbitalPeriod = orbPeriod
      // console.log(temp)
      res.push(temp)
    }
    return res;
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);