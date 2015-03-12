function calcCylinderVol(arr) {
    var radius = arr[0];
    var height = arr[1];
    return Math.PI * radius * radius * height;
}
console.log(calcCylinderVol([2, 4]).toFixed(3));
console.log(calcCylinderVol([5, 8]).toFixed(3));
console.log(calcCylinderVol([12, 3]).toFixed(3));