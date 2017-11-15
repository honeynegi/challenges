function calculator(num1, num2, calc) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (isNaN(num1) || isNaN(num2)) {
        alert("must input numbers");
        return false;
    }
    var ans;
    switch (calc) {
        case "+":
            ans = add(num1, num2);
            break;
        case "-":
            ans = sub(num1, num2);
            break;
        case "*":
            ans = multi(num1, num2);
            break;
        case "/":
            ans = divi(num1, num2);
            break;
        default:
            ans = "wrong calculation";

    }
    return ans;
}

function add(a, b) {
    var ans = 0;
    ans = a + b;
    return ans;

}

function sub(a, b) {
    var ans = a - b;
    return ans;

}

function multi(a, b) {
    var ans = a * b;
    return ans;
}

function divi(a, b) {
    var ans = a / b;
    return ans;
}