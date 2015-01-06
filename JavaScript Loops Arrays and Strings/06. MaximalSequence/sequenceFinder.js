function findMaxSequence(arr) {
    var result = [];
    var current = arr[0];
    var count = 1;
    var maxCount = 0;

    if (arr.length == 1) {
        result.push(arr[0]);
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count += 1;
        } else {
            if (count >= maxCount) {
                maxCount = count;
                current = arr[i - 1];
                count = 1;
            }
        }
    }
    for (var i = 0; i < maxCount; i++) {
        result.push(current)
    }
    console.log([result.join(', ')])
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);