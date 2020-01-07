function angkaPalindrome(num) {
    var output = 0
    num += 1
    var run = true
    while (run) {
        var numStr = num.toString()

        var tmp = '';
        for (var i = numStr.length - 1; i >= 0; i--) {
            tmp += numStr[i]
        }

        revNum = Number(tmp)

        if (num === revNum) {
            output += revNum
            run = false
        } else {
            num++
        }
    }
    return output
}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001