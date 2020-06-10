/**
 * 大整数相加
 */
export default function largeNumber(a = '', b = '') {
    let x = a.length - 1,
        y = b.length - 1,
        carry = 0,
        result = '';
    while ((x >= 0) || (y >= 0)) {
        let sum = 0,
            i = 0,
            j = 0;
        if (x >= 0) {
            i = a[x] - 0;
            x--;
        }
        if (y >= 0) {
            j = b[y] - 0;
            y--
        }
        sum = i + j + carry;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        result += sum;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}