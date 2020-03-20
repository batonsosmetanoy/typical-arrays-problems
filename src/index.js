
exports.min = function min (array) {
    if (!array || !Array.isArray(array) || array.length === 0) return 0;
    array.sort((a, b) => a - b);
    return array[0];
}

exports.max = function max (array) {
    if (!array || !Array.isArray(array) || array.length === 0) return 0;
    array.sort((a, b) => a - b);
    return array[array.length - 1];
}

exports.avg = function avg (array) {
    if (!array || !Array.isArray(array) || array.length === 0) return 0;
    return array.reduce((sum, current) => sum += current, 0) / array.length;
}
