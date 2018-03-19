function digitize(n) {
	return n.toString()
	.split("")
	.reverse()
	.map((x)=> Number(x));
}

digitize(12345);
