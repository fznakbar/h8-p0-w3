function mengelompokkanAngka(arr) {
    var tmpGenap = []
    var tmpGanjil = []
    var kelipatan3 = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            kelipatan3.push(arr[i])
        } else if (arr[i] % 2 === 0) {
            tmpGenap.push(arr[i])
        } else if (arr[i] % 2 !== 0) {
            tmpGanjil.push(arr[i])
        }
    }
    return [tmpGenap, tmpGanjil, kelipatan3]
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]