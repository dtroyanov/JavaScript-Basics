﻿function treeHouseCompare(arr) {
    var a = arr[0];
    var b = arr[1];
    var houseArea = (a * a) + (a * (a - 1)) / 2;
    var treeArea = b * b / 3 + Math.pow((b * 2) / 3, 2) * Math.PI;

    if (houseArea > treeArea) {
        return 'house/' + houseArea.toFixed(2);
    } else if (houseArea < treeArea) {
        return 'tree/' + treeArea.toFixed(2);
    } else {
        return 'equal/' + houseArea.toFixed(2);
    }
}

console.log(treeHouseCompare([3, 2]));
console.log(treeHouseCompare([3, 3]));
console.log(treeHouseCompare([4, 5]));