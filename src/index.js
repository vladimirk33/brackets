const config1 = [
    ['(', ')']
];
const config2 = [
    ['(', ')'],
    ['[', ']']
];
const config3 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
];
const config4 = [
    ['|', '|']
];
const config5 = [
    ['(', ')'],
    ['|', '|']
];
const config6 = [
    ['1', '2'],
    ['3', '4'],
    ['5', '6'],
    ['7', '7'],
    ['8', '8']
];
const config7 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['|', '|']
];
// module.exports = 
module.exports = function check(str, bracketsConfig) {
    let flag = true;
    for (let i = 0; i < bracketsConfig.length; i++) {
        let temp = [].concat(...bracketsConfig.filter(item => item != bracketsConfig[i]));
        let tempStr = '';
        console.log(temp)
        for (let j = 0; j < str.length; j++) {
            if (!temp.includes(str[j])) {
                tempStr += str[j];
            }
        }
        let counter = 0;
        for (let k = 0; k < tempStr.length; k++) {
            if (tempStr[k] === bracketsConfig[i][0]) {
                counter++;
            } else if (tempStr[k] === bracketsConfig[i][1]) {
                counter--;
            }
            if (counter < 0) {
                return false;
            }
        }
        // console.log(tempStr)
        // console.log('----')
    }
    return true;
}

// // console.log(check('((()))()', config1))
// // console.log(check('()', config1));
// check('[(])', config2)