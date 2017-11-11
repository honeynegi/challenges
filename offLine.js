function OffLineMinumum(strArr) {
    var arrLength = strArr.length,
        result = [],
        temp = [],
        i;

    for (i = 0; i < arrLength; i++) {
        if (strArr[i] == "E") {
            temp.sort(function(a, b) { return a - b; });

            result.push(parseInt(temp[0]));
            console.log(result);
            console.log("--------<<<<<<<")
            temp.shift();

            console.log(temp);
        } else {
            console.log("<<<<<<<---------")
            console.log(temp);
            temp.push(parseInt(strArr[i]));
        }
    }

    return result.join(',');
}
document.write(OffLineMinumum(["1", "2", "E", "4", "3", "E", ]));