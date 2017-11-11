function thirdGreatest(str) {
    var strSplit = str.split(' ');
    var cunWordLength = 0,
        first = 0,
        second = 0,
        third = 0,
        theWord = '';
    for (var i = 0; i < strSplit.length; i++) {
        cunWordLength = strSplit[i].length;
        if (first == 0 || cunWordLength > first) {
            third = second;
            second = first;
            first = cunWordLength;
        } else if (second == 0 || cunWordLength > second) {
            third = second;
            second = cunWordLength;
        } else if (third == 0 || cunWordLength > third) {
            third = cunWordLength;
        }
    }
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length == third) {
            theWord = strSplit[i];
        }
    }
    return theWord;
}
document.write(thirdGreatest("hello my name is Himanshu"));