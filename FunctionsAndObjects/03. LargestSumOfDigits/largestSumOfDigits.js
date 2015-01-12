function findLargestBySumOfDigits(arr) {
    function sumDigits(num) {
        var number = '' + Math.abs(num);
        var sum = 0;
        for (var index in number) {
            sum += parseInt(number[index]);
        }
        return sum;
    }

    var maxSum = 0;
    var maxNumber;
    var currentSum;

    for (var i in arr) {
        currentSum = sumDigits(arr[i]);
        if (isNaN(currentSum)) {
            maxNumber = undefined;
            break;
        } else if (currentSum > maxSum) {
            maxSum = currentSum;
            maxNumber = arr[i];
        }
    }
    console.log(maxNumber);
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 2]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);