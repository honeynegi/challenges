function meanMode(arr) {
    var result = {};
    var checkedArray = [];
    var mode = 0,
        maxct = 1,
        maxrpt;
    var mean = 0;
    for (var i = 0; i < arr.length; i++) {
        mean += arr[i];
        //mode[arr[i]] = mode[arr[i]];
        //mode[arr[i]]++;
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var numCount = findCountInArray(arr[i], arr);
        //checkedArray.push(arr[i]);
        console.log(numCount + " <<<<");
        if (count < numCount) {
            count = numCount;
            mode = arr[i];
        }
    }

    // for (var key in mode) {
    //     if (mode.hasOwnProperty(key)) {
    //         if (mode[key] > maxCt) {
    //             maxCt = mode[key];
    //             maxrpt = mode[key];
    //         }
    //     }
    // }
    mean = mean / arr.length;
    if (mean == mode) {
        return mode;
    } else {
        return false;
    }
}

function findCountInArray(number, arr) {
    console.log("----------------------------");
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (number == arr[i]) {
            count++;
            console.log(count, number);
        }
    }
    console.log("----------------------------");
    return count;
}
document.write(meanMode([1, 3, 3, 3, 5]));