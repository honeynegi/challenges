function seqChange(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            return 1;
        } else {
            return i;
        }
    }
}
document.write(seqChange([1, 2, 3, 4, 6, 4, 3, 2, 1]));