let x = prompt("Введите число", "");
let n = prompt("Введите степень", "");
const pow = (x, n) => {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(x, n));