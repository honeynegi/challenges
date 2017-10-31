function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWordLength = 0;
    var longestWord = "";
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWordLength) {
            longestWordLength = strSplit[i].length;
            longestWord = strSplit[i];
        }
    }
    return [longestWord, longestWordLength];
}
var ans = findLongestWord("My name is himanshu Negi");
console.log(ans[0], ans[1]);