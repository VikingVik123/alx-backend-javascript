const Utils = {
  calculateNumber(type, a, b) {
    numa = Math.round(a);
    numb = Math.round(b);

    if (type === 'SUM') {
      return numa + numb;
    }
    if (type === 'SUBTRACT') {
      return numa - numb;
    }
    if (type === 'DIVIDE') {
      return numb === 0 ? 'Error' : numa / numb;
    }
    return 0;
  },
};

module.exports = Utils;
