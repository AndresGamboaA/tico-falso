
var Utils = {};

Utils.aleatorio = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}

module.exports = Utils;