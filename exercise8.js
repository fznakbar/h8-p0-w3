function pasanganTerbesar(num) {
    // var temp = 0
    // numStr = num.toString();
    // var kiri = ''
    // var kanan = ''
    // for (var i = 0; i < numStr.length; i++) {
    //     kiri = numStr[i] + numStr[i + 1]
    //     kanan = numStr[i + 1] + numStr[i + 2]

    //     if (Number(kiri) > Number(kanan)) {
    //         if (kiri > temp) {
    //             temp = Number(kiri)
    //         }
    //     }

    //     if (Number(kanan) > Number(kiri)) {
    //         if (kanan > temp) {
    //             temp = Number(kanan)
    //         }
    //     }

    // }
    // return temp

    var result = 0
    numStr = num.toString();
    for (var i = 0; i < numStr.length; i++) {
        temp = numStr[i] + numStr[i + 1]
        numTemp = Number(temp)
        if (numTemp > result) {
            result = numTemp
        }
    }
    return result
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99