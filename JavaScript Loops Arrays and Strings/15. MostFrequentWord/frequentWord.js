function findMostFreqWord(str) {
    var words = str.toLowerCase().split(/[\W]+/);
   
    var results = [];

    for (i in words) {
        if (words[i] in results) {
            results[words[i]]++;
        } else {
            results[words[i]] = 1;
        }
    }
    var maxCount = 0,
    frequentWords = [];
    for (key in results) {
        if (maxCount < results[key]) {
            maxCount = results[key];
            frequentWords = [];
            frequentWords.push(key);
        } else if (maxCount === results[key]) {
            frequentWords.push(key);
        }
    }
    frequentWords.sort();
    var output = '';
    for (i in frequentWords) {
        output += frequentWords[i] + ' -> ' + maxCount + ' times \n'
    }
    return output;
}
console.log(findMostFreqWord('in the middle of the night'));
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));