const satu = require('./satu');
const dua = require('./dua');

const gabung = [satu, dua];

const Penjumlahan = (a, b) => a + b;

const PI = 3.14;

const luas = (jari) => PI * jari * jari;

const keliling = (jari) => 2 * PI * jari;

const math = {
    Penjumlahan,
    PI,
    luas,
    keliling,
}

module.exports = math;
module.exports = gabung;

// module.exports.Penjumlahan = Penjumlahan;

// module.exports.PI = PI;

// module.exports.luas = luas;

// module.exports.keliling = keliling;

