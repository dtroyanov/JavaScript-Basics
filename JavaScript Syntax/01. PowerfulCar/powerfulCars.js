function convertKWtoHP(kw) {
    var hp = kw / 0.745699872;
    return hp.toFixed(2);
};

console.log(convert(75));
console.log(convert(150));
console.log(convert(1000));