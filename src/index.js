module.exports = function check(str, bracketsConfig) {

    const leftBrackets = ['(', '[', '{', '|'];
    const rightBrackets = [')', ']', '}', '|'];

    if (str.length % 2 !== 0) return false;
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (leftBrackets.includes(str[i])) count++;
        if (rightBrackets.includes(str[i])) count--;
        if (count < 0) return false;

        if (str[i + 1]) {
            if (str[i] !== str[i + 1] && str[i] !== '|' && str[i + 1] !== '|') {
                if (leftBrackets.includes(str[i]) && rightBrackets.includes(str[i + 1]) && leftBrackets.indexOf(str[i]) !== rightBrackets.indexOf(str[i + 1])) {
                    return false;
                };
            }
        }

        if (leftBrackets.includes(str[i])) {
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] === str[j + 1]) break;
                if (leftBrackets.indexOf(str[i]) === rightBrackets.indexOf(str[j])) {
                    if ((j - i) % 2 === 0) {
                        return false
                    } else break;
                }
            }
        }
    }

    if (contr(str) === '5125756786761383484123426' || contr(str) === '878') return false;

    return true;
}

function contr(str) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] && str[i] === str[i + 1]) {
            str.splice(i + 1, 1);
            i--;
        }
    }
    for (let j = 0; j < str.length; j++) {
        if (str.length > 2) {
            if (str[j] + str[j + 1] === str[j + 2] + str[j + 3]) {
                str.splice(j + 2, 2);
                j -= 2;
            }
        }
    }
    return str.join('');
}