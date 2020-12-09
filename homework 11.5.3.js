function getNum1(num1) {
    return function getNum2(num2) {
        console.log(num1 + num2);
    }
}
getNum1(getNum1);
const resultFunc = getNum1(18);
resultFunc(22);