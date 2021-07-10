function rot13(str) {
  let input='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let output ='NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  let result=''
  for(let letter of str){
    if(!input.includes(letter)){
      result += letter
    }else{
      let ind = input.indexOf(letter)
      result += output[ind]
    }
    
  }
  console.log(result)
  return result;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
