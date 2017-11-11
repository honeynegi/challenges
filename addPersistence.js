function addPer(numArr) {
    //var numArr = numberString.split('');
    //console.log(numArr);
    var total = 0;


    total = addArray(numArr);

    console.log(checkDigits(total));
    return checkDigits(total);
}

function checkDigits(num) {
    console.log(num + " < NUM");
    if (num > 9) {
        var tempNum = 0;
        var splitArray = (num + "").split("");
        for (var i = 0; i < splitArray.length; i++) {
            tempNum += parseInt(splitArray[i]);
        }
        console.log(tempNum + " < TEMP NUM");
        return checkDigits(tempNum);
    } else {
        console.log(num + " FINAL RESUT");
        return num;
    }
}

function addArray(arr) {
    console.log(arr);
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    console.log(sum + " < SUM");
    return sum;
}

document.write(addPer([2, 6, 1, 3]));