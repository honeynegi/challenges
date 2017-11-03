function insertDash(str) {
    var strSplit = str.split('');
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i] % 2 != 0 && strSplit[i + 1] % 2 != 0) {
            strSplit[i + 1] = "-" + strSplit[i + 1];
        }
    }
    //return strSplit;
    var strJoin = strSplit.join('');
    return strJoin;
}
document.write(insertDash("12357896545231435789653423188"))