var md5 = require('js-md5');
var input = 'ckczppom';
var lowestFive = 0;
var lowestSix = 0;
var hexCode = 0;

for (var i=0; i<99999999; i++) {
    hexCode = md5(input + i.toString());
    if (lowestFive == 0 && /^00000/.test(hexCode)) {
        lowestFive = i;
    }
    if (lowestSix == 0 && /^000000/.test(hexCode)) {
        lowestSix = i;
    }
    if (lowestFive > 0 && lowestSix > 0) {
        break;
    }
}

console.log(lowestFive);
console.log(lowestSix);