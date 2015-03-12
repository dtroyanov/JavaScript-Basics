function quad(a, b, c) {
	var a = a;
	var b = b;
	var c = c;

	var d=(Math.pow(b,2)-(4*a*c));
	var x1=(-b + Math.sqrt(d)) / (2*a);
	var x2=(-b - Math.sqrt(d)) / (2*a);

    if (d < 0) {
        console.log("No real roots");
    } else if (d == 0) {
        console.log("X = "  + x1);
    } else {
        console.log("X1 = " + x1 + " X2 = " + x2);
    } 
}

quad(2, 5, -3);
quad(2, -4, 2);
quad(4, 2, 1);