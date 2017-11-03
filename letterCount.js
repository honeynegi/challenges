function LetterCountI(str) {
    var ctObj, tempWord
    var result = {};
    result["word"] = "no word found";
    result["count"] = 1;
    var arr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");
    for (var i = 0; i < arr.length; i++) {
        tempWord = arr[i];
        ctObj = {}
        for (var j = 0; j < tempWord.length; j++) {
            ctObj[tempWord[j]] = ctObj[tempWord[j]] || 0;
            ctObj[tempWord[j]]++;
        }
        console.log(JSON.stringify(ctObj));

        for (var key in ctObj) {
            if (ctObj.hasOwnProperty(key)) {
                if (ctObj[key] > result["count"]) {
                    result["word"] = tempWord;
                    result["count"] = ctObj[key];
                }
            }
        }
    }

    if (result.count === 1) {
        return result.word;
    } else {
        return result;
    }
}
console.log(LetterCountI("today is the best tttrrraaa"));