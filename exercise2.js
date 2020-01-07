function balikstring(nama) {
    var namaBalik = ''
    for (i = nama.length - 1; i >= 0; i--) {
        namaBalik += nama[i]
    }
    return namaBalik
}
console.log(balikstring('hello world'))