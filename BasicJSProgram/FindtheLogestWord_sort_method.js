function findLongestString(inputString){
    let splitStr= inputString.split(' ');
    let longestWord=splitStr.sort(function(a,b){
       return b.length - a.length;
    })
    return longestWord[0].length;
}

let inputString = "Hello Mike testing";
findLongestString(inputString);
