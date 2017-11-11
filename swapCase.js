function swapCase(str) {
    var strSplit = str.split('');
    var newArray = [];
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i] == strSplit[i].toUpperCase()) {
            newArray.push(strSplit[i].toLowerCase());
        } else if (strSplit[i] == strSplit[i].toLowerCase()) {
            newArray.push(strSplit[i].toUpperCase());
        }
    }
    str = newArray.join('');
    return str;
}
document.write(swapCase("Hello My name is Himanshu Negi"));