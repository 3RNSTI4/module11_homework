function intervalNum(a, b) {
    let current = a;

    function go() {
        console.log(current);
        if (current == b) {
            clearInterval(timerId);
        }
        current++;
    }
    go();
    let timerId = setInterval(go, 1000);
}
intervalNum(14, 27);