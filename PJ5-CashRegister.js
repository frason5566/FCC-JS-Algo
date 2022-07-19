function checkCashRegister(price, cash, cid) {
    let value = [10000,2000,1000,500,100,25,10,5,1]
    let change = (cash - price) * 100;
    console.log(change)
    let res = {}
    res.change = [
      ["ONE HUNDRED", 0], 
      ["TWENTY", 0], 
      ["TEN", 0], 
      ["FIVE", 0], 
      ["ONE", 0], 
      ["QUARTER", 0], 
      ["DIME", 0], 
      ["NICKEL", 0], 
      ["PENNY", 0],
    ]
    let available = cid.reverse().map(unit => [unit[0], unit[1]*100])
    let total = available.reduce((sum, unit) => sum + unit[1],0)
    console.log("total: " + total)
    // console.log(cid)
    if (total == change){
      res.status = "CLOSED"
      res.change = cid.reverse()
      return res
    }else if(total < change){
      res.status = "INSUFFICIENT_FUNDS"
      res.change = []
      return res
    }else{
      for(let i = 0; i < available.length;i++){
        while (value[i] <= change && available[i][1] > 0){
          res.change[i][1] += value[i]
          change -= value[i]
          available[i][1] -=value[i]
          // console.log(res.change)
        }
      }
    }
    console.log(change)
  
    if(change>0){
      res.status = "INSUFFICIENT_FUNDS"
      res.change = []
      return res
    }
  
    res.status = "OPEN"
    res.change = res.change.reverse().map(unit => [unit[0], unit[1]/100]).filter(el => el[1] !== 0).sort(function(a, b) {
      return b[1] - a[1];
    })
    console.log(res)
    return res;
  }
  
  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  // checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);