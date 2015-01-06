function printNumbers(number) {
    var numbers = [];
    if (number > 0) {
        for (var i = 1; i <= number; i++) {
            if (i % 5 != 0 && i % 4 != 0){
                numbers.push(i);
            }
        }
        console.log(numbers.join(', '));
    } else {
        console.log("no");
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);