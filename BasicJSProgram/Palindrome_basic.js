function reverseString(strValue){
  let final="";
  
  for(let i=strValue.length - 1; i>=0; i--){
    final += strValue[i];
  }
  if(final === strValue){
    console.log("The given string is palindrome");
  }else{
    console.log("The given string is not palindrome");
  }
}

console.log(reverseString("madam"));