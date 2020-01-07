function dataHandling2(arr) {
    //splice
    arr.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

    //split
    var tanggal = arr[3].split('/')


    //switch-case
    var month = ''
    switch (tanggal[1]) {
        case '01':
            month = 'Januari';
            break;
        case '02':
            month = 'Februari';
            break
        case '03':
            month = 'Maret';
            break;
        case '04':
            month = 'April';
            break
        case '05':
            month = 'Mei';
            break;
        case '06':
            month = 'Juni';
            break
        case '07':
            month = 'Juli';
            break;
        case '08':
            month = 'Agustus';
            break
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'Oktober';
            break
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'Desember';
            break
    }

    // join
    var join = tanggal.join('-')

    //sorting
    var sorting = tanggal.sort(function(a, b) { return b - a })

    //slice
    var potongan = arr[1].slice(0, 15)




    console.log(arr)
    console.log(month)
    console.log(sorting)
    console.log(join)
    return potongan


}



var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

console.log(dataHandling2(data))

//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */