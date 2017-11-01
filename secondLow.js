function secondLow(arr) {
    var arr = arr.sort();
    var x = arr.length;
    var y = x - 2;
    return [arr[1], arr[y]];
}
document.write(secondLow([33, 24, 45, 55, 66, 32, 12, 34, 1, 53]));