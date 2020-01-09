function targetTerdekat(arr) {
    var jarak = []
    var indexO = []
    var indexX = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indexO.push(i)
        }
        if (arr[i] === 'x') {
            indexX.push(i)
        }
        for (var j = 0; j < indexX.length; j++) {
            if (indexO[0] < indexX[j]) {
                jarak.push(indexX[j] - indexO[0])
            }
            if (indexX[j] < indexO[0]) {
                jarak.push(indexO[0] - indexX[j])
            }
        }
    }

    var count = 0
    var swap
    do {
        swap = false
        for (var k = 0; k < jarak.length - count; k++) {
            if (jarak[k] > jarak[k + 1]) {
                var tmp = jarak[k + 1]
                jarak[k + 1] = jarak[k]
                jarak[k] = tmp
                count++
                swap = true
            }
        }
    } while (swap)


    if (indexX.length === 0) {
        return 0
    } else {
        return jarak[0]
    }
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2