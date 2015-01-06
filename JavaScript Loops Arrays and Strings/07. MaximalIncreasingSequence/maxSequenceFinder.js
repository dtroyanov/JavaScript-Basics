function findMaxSequence(arr) {
    var result = [];
    var current = [arr[0]];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            current.push(arr[i]);
        } else {
            if (current.length > result.length) {
                result = current;
            }
            current = [];
            current.push(arr[i]);
        }
        if (current.length > result.length) {
            result = current;
        }
    }
    if(result.length > 1) {
        console.log([result.join(", ")]);
    }
    else {
        console.log('no');
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);