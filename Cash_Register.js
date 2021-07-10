function checkCashRegister(price, cash, cid) {
  var change;
  const currency = ["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN", "TWENTY", "ONE HUNDRED"]
const value = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

  change = parseFloat((cash - price).toFixed(2))
  // console.log("change",change)
  if(change[change.length-1] == 0){
    change = Number.parseFloat(change).toFixed(1)
  }
  // console.log("change",change)
  let sum = 0;
  for(let ar of cid){
    sum +=ar[1];
  }
  sum =parseFloat(sum.toFixed(2))
  // console.log("sum: ",typeof(sum))
  // console.log("change: ",change,typeof(change))
  var newobj ={}
  if(sum == change){
    newobj["status"] = "CLOSED";
    newobj["change"] = cid;
    console.log(newobj)
    return newobj 
  }else if(sum < change){
    newobj["status"] = "INSUFFICIENT_FUNDS";
    newobj["change"] = [];
    console.log(newobj)
    return newobj;
  }else{
    newobj["status"] = "OPEN";
    let result = countM(change);
    let new_sum=0
    for(let ar of result){
      let ind = currency.indexOf(ar[0])
      ar[1] = value[ind] * ar[1]
      new_sum += ar[1]
    }
    // console.log("new_sum: ",new_sum);
    // console.log("change: ",change);
    // console.log("result",result)
    if(new_sum < change){
      console.log("control")
      newobj["status"] = "INSUFFICIENT_FUNDS";
      result.length = 0
    }
    newobj["change"] = result;
    console.log("result",result)
    // console.log(100-3.26)
    console.log(newobj)
    console.log(typeof(newobj))
    return newobj 
  }

  function countM(change){
    let result =[]
    let tot;
    let money=change
      if(money >=100){
        tot = Math.floor(money/100)
        let rem=0
        if(tot*100>cid[8][1]){
          rem = (tot*100)-cid[8][1]
          tot = Math.floor(cid[8][1]/100)
        }
        money = parseFloat((money%100+rem).toFixed(2))
        result.push(["ONE HUNDRED", tot]) 
      }
      if(money>=20){
        tot = Math.floor(money/20)
        let rem=0
        if(tot*20>cid[7][1]){
          rem = (tot*20)-cid[7][1]
          tot = Math.floor(cid[7][1]/20)
        }
        money = parseFloat((money%20+rem).toFixed(2))
        result.push(["TWENTY", tot]) 
      }
      if(money>=10){
        tot = Math.floor(money/10)
        let rem=0
        if(tot*10>cid[6][1]){
          rem = (tot*10)-cid[6][1]
          tot = Math.floor(cid[6][1]/10)
        }
        money = parseFloat((money%10+rem).toFixed(2))
        result.push(["TEN", tot]) 
      }
      if(money>=5 ){
        tot = Math.floor(money/5)
        let rem=0
        if(tot*5>cid[5][1]){
          rem = (tot*5)-cid[5][1]
          tot = Math.floor(cid[5][1]/5)
        }
        money = parseFloat((money%5+rem).toFixed(2))
        result.push(["FIVE", tot]) 
      }
      if(money>=1){
        tot = Math.floor(money/1)
        let rem=0
        if(tot*1>cid[4][1]){
          rem = (tot*1)-cid[4][1]
          tot = Math.floor(cid[4][1]/1)
        }
        money = parseFloat((money%1+rem).toFixed(2))
        result.push(["ONE", tot]) 
      }
      if(money>=0.25){
        tot = Math.floor(money/0.25)
        let rem=0
        if(tot*0.25>cid[3][1]){
          rem = (tot*0.25)-cid[3][1]
          tot = Math.floor(cid[3][1]/0.25)
        }
        money = parseFloat((money%0.25+rem).toFixed(2))
        result.push(["QUARTER", tot]) 
      }
      if(money>=0.1){
        tot = Math.floor(money/0.1)
        let rem=0
        if(tot*0.1>cid[2][1]){
          rem = (tot*0.1)-cid[2][1]
          tot = Math.floor(cid[2][1]/0.1)
        }
        money =  parseFloat((money%0.1+rem).toFixed(2))
        result.push(["DIME", tot]) 
      }
      if(money>=0.05){
        tot = Math.floor(money/0.05)
        let rem=0
        if(tot*0.05>cid[1][1]){
          rem = (tot*0.05)-cid[1][1]
          tot = Math.floor(cid[1][1]/0.05)
        }
        money =  parseFloat((money%0.05+rem).toFixed(2))
        result.push(["NICKEL", tot]) 
      }
      if(money>=0.01){
        tot = Math.floor(money/0.01)
        let rem=0
        if(tot*0.01>cid[0][1]){
          rem = (tot*0.01)-cid[0][1]
          tot = Math.floor(cid[0][1]/0.01)
        }
        money = parseFloat((money%0.01+rem).toFixed(2))
        result.push(["PENNY", tot]) 
      }
      if(money==0){
        return result
      }
    return result
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
