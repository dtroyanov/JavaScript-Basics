function CircleArea(r) {
    var area = Math.PI * r * r;
    return area;
};
document.getElementById("first").innerHTML = CircleArea(7);
document.getElementById("second").innerHTML = CircleArea(1.5);
document.getElementById("third").innerHTML = CircleArea(20);

