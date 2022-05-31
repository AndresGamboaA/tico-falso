
var Utils = {};

Utils.aleatorio = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default Utils;