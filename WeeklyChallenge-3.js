/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 *
 */
function mineCraft(mine, steps) {
    var baru = []
    for (var j = 0; j < mine.length; j++) {
        baru.push(...mine[j])
    }

    var c = [0, 'cooper']
    var s = [0, 'silver']
    var g = [0, 'gold']
    var d = [0, 'diamond']
    for (var i = 0; i < steps; i++) {
        if (baru[i] == 'c') {
            c[0]++
        } else if (baru[i] == 's') {
            s[0]++
        } else if (baru[i] == 'g') {
            g[0]++
        } else if (baru[i] == 'd') {
            d[0]++
        }
    }

    tampung = [c, s, g, d]
    result = []
    for (var k = 0; k < tampung.length; k++) {
        if (tampung[k][0] !== 0) {
            result.push(tampung[k])
        }
    }
    return result
}
var mine1 = [
    ['#', 'h', 's', '#', '#', '#', 'g'],
    ['u', '#', 'c', '#', 'd', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]
var mine2 = [
    ['#', '#', '#', '#', '#', 'w', '#'],
    ['r', '#', 'c', '#', 'd', '#', '#'],
    ['#', 't', '#', 'c', '#', '#', '#'],
    ['#', '#', 's', 'g', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine2, 20));
// // [[2, copper], [1, diamond]]
var mine3 = [
    ['d', 'c', '#', 's', '#', 'w', '#'],
    ['r', 'b', 'c', '#', '#', '#', 'g'],
    ['#', 't', '#', 'c', '#', '#', '#'],
    ['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineCraft(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]