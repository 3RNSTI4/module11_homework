function primeNum(numm) {
    let flag = true;
    switch (numm) {
        case 0:
            return console.log('The entered number is null');
            break;
        case 1:
            return console.log('The entered number is 1 - Prime number');
            break;
        default:
            if (numm > 1000) {
                return console.log('The entered number is >1000')
                break
            } else {
                for (let i = 2; i < numm; i++) {
                    if (numm % i == 0) {
                        flag = false
                        break
                    }
                }
            }
    }
    if ((flag == true) && (numm != 0) && (numm != 1)) {
        return console.log('The entered number is prime number')
    } else if (flag == false) {
        return console.log('The entered number is not prime number')
    }
}
let numm1 = (997);
primeNum(numm1)