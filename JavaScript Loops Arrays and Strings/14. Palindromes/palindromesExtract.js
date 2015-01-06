function findPalindromes(str) {
    var words = str.toLowerCase().split(/[\b\W]+/g);
    var palindroms = [];

    for (var i = 0; i < words.length; i++) {
        if (words[i].split('').reverse().join('') == words[i] && words[i] != '') {
            palindroms.push(words[i]);
        }
    }
    console.log(palindroms.join(', '));
}

findPalindromes('There is a man, his name was Bob.');
