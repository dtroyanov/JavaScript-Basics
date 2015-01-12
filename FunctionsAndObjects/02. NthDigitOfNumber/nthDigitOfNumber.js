﻿function findNthDigit(arr) {
    var digit = arr[0];
    var number = ('' + arr[1]).replace(/[.-]+/g, '');
    var length = number.length;
    var result;
    if (digit <= length) {
        result = number[length - digit];
    } else {
        result = "The number doesn't have " + digit + " digits";
    }
    console.log(result);
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);