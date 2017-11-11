function meanMode2(arr) {
    var mean = 0;
    var count = 0;
    var mode = {};
    mode["num"] = "this is the num";
    mode["count"] = 0;
    var maxRt = 0;
    //mode["count"] = 1;
    //mode["num"] = "no mode for this array";
    for (var i = 0; i < arr.length; i++) {
        mean += arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        mode[arr[i]] = mode[arr[i]] || 0;
        mode[arr[i]]++;
        maxRt = mode[arr[i]];
    }
    console.log(maxRt);
    //console.log(JSON.stringify(mode));
    var count = 0;
    for (var key in mode) {
        if (mode.hasOwnProperty(key)) {
            if (mode[key] > mode["count"]) {
                mode["count"] = mode[key];
                //count = mode[key];
                maxRt = mode["num"];
                console.log(mode["count"], "+", maxRt);
                //console.log(JSON.stringify(mode));

                //mode["count"] = mode["count"];
                //mode["num"] = mode[key];
                //console.log(mode);
            }
        }
    }
    mean = mean / arr.length;
    //console.log(mean);
    if (mean == maxRt) {
        return mean;

    } else {
        return false;
    }
}
document.write(meanMode2([4, 4]));