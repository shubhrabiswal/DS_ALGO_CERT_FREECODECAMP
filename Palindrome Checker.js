function palindrome(str) {
  let rev ='';
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  for(let i=str.length-1;i>=0;i--){
    rev += str[i];
  }
  // console.log("str",str)

  // rev = rev.replace(/[^0-9a-z]/gi, '')
  // console.log("rev",rev)
  if(rev == str){
    // console.log(true)
    return true;
  }else{
    // console.log(false)
    return false;
  }
  
}



palindrome("_eye");
