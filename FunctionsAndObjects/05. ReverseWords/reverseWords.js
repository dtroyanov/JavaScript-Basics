function reverseWordsInString(str) {
    var words = str.split(' ');
    for (var i in words) {
        words[i] = words[i].split('').reverse().join('');
    }
    var result = words.join(' ');

    console.log(result); 
}

reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');