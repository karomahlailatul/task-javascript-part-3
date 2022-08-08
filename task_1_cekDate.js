function cekDate() {
    return new Date()
        .toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            weekday: 'long'
        })
}

const cekHariKerja = (day) => {
    validatedDate(day)
}

function validatedDate(day) {
    if (day == "" || day == null) {
        getDateToday(day)
    } else {
        console.log("Tidak Perlu input apapun");
    }
}
// fungsi trycatch untuk error handling setelah validasi dan juga error saat proses hari
async function getDateToday(day) {
    try {
        day = cekDate();
        outputPromise(day);
    } catch (err) {
        console.log(err);
    }
};

function prosesPromies(day) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datePromies(day, resolve, reject)
        }, 3000)
    })
}

function datePromies(day, resolve, reject) {
    const dataDayWork = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
    let cek = dataDayWork.find((item) => {
        return item === day
    });
    if (cek) {
        resolve(cek)
    } else {
        reject(new Error("Hari ini bukan hari kerja"))
    }
}

//fungsi then catch error handling saat proses hari
function outputPromise(day) {
    prosesPromies(day)
        .then((msg) => { console.log(`Hari ini ${msg} adalah Hari Kerja`) })
        .catch((err) => { console.log(`${err}`) })
}







cekHariKerja();
