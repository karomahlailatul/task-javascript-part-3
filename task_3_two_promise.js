
function ProgramPjxLb(x, y) {
    try {
        if (x == "") throw "P Kosong Angka"
        if (y == "") throw "L Kosong"
        if (isNaN(x)) throw "P Bukan Angka"
        if (isNaN(y)) throw "L Bukan Angka"
        cekPxL(x, y);
    } catch (error) {
        console.log(error);
    }
}

function cekPxL(x, y) {
    return new Promise((resolve, reject) => {
        let hasil = x * y;
        if (hasil != null) {
            resolve(hasil)
        } else {
            reject(hasil)
        }
    })
        .then(pesan => console.log(pesan))
        .catch(error => console.log(error))
}

ProgramPjxLb(4, 2);












function ProgramKaliBagi(x, y) {
    try {
        if (x == "") throw "Perkalian Kosong"
        if (y == "") throw "Pembagian Kosong"
        if (isNaN(x)) throw "Perkalian Bukan Angka"
        if (isNaN(y)) throw "Pembagian Bukan Angka"
        cekKaliBagi(x, y);
    } catch (error) {
        console.log(error);
    }
}


function cekKaliBagi(x, y) {
    return new Promise((resolve, reject) => {
        const value = [1, 3, 5, 6, 9, 13, 15, 17, 20];
        const result = value.map(xy => xy * x / y)
        if (result != null) {
            resolve(result)
        } else {
            reject(result)
        }
    })
        .then(msg => console.log(msg))
        .catch(err => console.log(err))
}


ProgramKaliBagi(22, 1);
