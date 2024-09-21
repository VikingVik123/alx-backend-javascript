function calculateNumber(a, b) {
	const numa = Math.round(a);
	const numb = Math.round(b);
	const c = numa + numb;
	return c;
}

module.exports = calculateNumber;
