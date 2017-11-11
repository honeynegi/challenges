function multiPersistence(arr) {
    var end = 1;
    end = multiarray(arr);
    console.log(checkDigits(arr));
    return checkDigits(end);

}

function checkDigits(num) {
    if (num > 9) {
        var tempNum = 1;
        var splitArray = (num + "").split("");
        for (var i = 0; i < splitArray.length; i++) {
            tempNum *= parseInt(splitArray[i]);
        }
        console.log(tempNum + " < TEMP NUM");
        return checkDigits(tempNum);
    } else {
        console.log(num + " FINAL RESUT");
        return num;
    }
}

function multiarray(arr) {
    var total = 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            return 0;

        } else {
            console.log(total);
            total *= parseInt(arr[i]);
        }
    }
    console.log(total);
    return total;
}
document.write(multiPersistence([9, 9, 3, 4]));