function calculateNumber(type, a, b) {
        const numa = Math.round(a);
        const numb = Math.round(b);
        const c = 0;

	if (type == 'SUM') {
		return numa + numb;
	}
	if (type == 'SUBTRACT') {
		return numa - numb;
	}
	if (type == 'DIVIDE') {
		return numb  === 0 ? 'Error' : numa / numb;
	}
	return 0;
}

module.exports = calculateNumber;
