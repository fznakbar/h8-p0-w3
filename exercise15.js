function groupAnimals(animals) {
    var swap
    do {
        swap = false
        for (var i = 0; i < animals.length; i++) {
            if (animals[i] > animals[i + 1]) {
                var tmp = animals[i + 1]
                animals[i + 1] = animals[i]
                animals[i] = tmp
                swap = true
            }
        }
    } while (swap)


    var temp = []
    for (var j = 0; j < animals.length; j++) {
        var index = -1
        for (var k = 0; k < temp.length; k++) {
            if (animals[j][0] == temp[k][0][0]) {
                index = k;
            }
        }
        if (index == -1) {
            temp.push([animals[j]])
        } else {
            temp[index].push(animals[j])
        }
    }


    return temp
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]