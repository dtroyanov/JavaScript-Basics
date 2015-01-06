function checkBrackets(str) {
    var open = 0;
    var close = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            open++;
        } else if (str[i] === ')' && open > close) {
            close++;
        } else if (str[i] === ')' && open <= close) {
            console.log('incorrect');
            return;
        }
    }
    if (open === close) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');