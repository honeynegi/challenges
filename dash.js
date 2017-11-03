function insertDash(str) {
    var strSplit = str.split('');
    for (var i = 0; i < strSplit.length; i++) {
        var x = 2[i] + 1;
        if (strSplit[i] == x && strSplit[i + 1] == x) {
            strSplit[i + 1] = "-" + strSplit[i + 1];
            return strSplit;
        }
    }
    //  var strJoin = strSplit.join('');
    //return strJoin;
}
document.write(insertDash("123578988"))