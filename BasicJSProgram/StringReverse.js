function reverseString(strValue){
  let final="";
  
  for(let i=strValue.length - 1; i>=0; i--){
    final += strValue[i];
  }
  return final;
}


console.log(reverseString("Basic Hello"));