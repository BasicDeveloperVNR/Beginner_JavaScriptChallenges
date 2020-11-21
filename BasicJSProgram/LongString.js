/*

Return the length of the longest word in the provided sentence
*/


function longString(inputString){
let strSplit=inputString.split(' ');
//console.log(strSplit);
let longLength=0;

for (i=0;i<strSplit.length;i++){
  if(strSplit[i].length > longLength){
    longLength=strSplit[i].length;
  } 
}
return longLength;
}
longString("What if we try a super-long word such as otorhinolaryngology");