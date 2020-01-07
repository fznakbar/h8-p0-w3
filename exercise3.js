function dataHandling(input) {
    var output = ''

    for (i = 0; i < input.length; i++) {
        for (j = 0; j < 5; j++) {
            if (j === 0) {
                output += 'Nomor ID: ' + input[i][j] + '\n'
            } else if (j === 1) {
                output += 'Nama Lengkap: ' + input[i][j] + '\n'
            } else if (j === 2) {
                output += 'TTL: ' + input[i][j] + ' ' + input[i][j + 1] + '\n'
            } else if (j === 4) {
                output += 'Hobi: ' + input[i][j] + '\n' + '\n'
            }
        }
    }
    return output
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))