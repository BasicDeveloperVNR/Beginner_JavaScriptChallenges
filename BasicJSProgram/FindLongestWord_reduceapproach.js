function findLongestWord(strIn){
let splStr=strIn.split(' ');
  let longestword = splStr.reduce(function(longest,currentword){
     return longest.length > currentword.length ?longest:currentword;
  } ,"");
  return longestword.length;
}


let inputString="Hello let's strat on more Time Pradigam"
findLongestWord(inputString);
