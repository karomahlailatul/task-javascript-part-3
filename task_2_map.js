// callback menggunakan promise
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["Januari", "Pebruari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}


function monthSetUp(log, month) {
    if (log == null) {
        month.map((element) => { console.log(element) });
    } else {
        console.log(log + month)
    }
}

getMonth(monthSetUp);






// callback menggunakan promise
const getMonth2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            let month = ["Januari", "Pebruari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
            if (!error) {
                resolve(month)
            } else {
                reject(new Error("Sorry Data Not Found"), [])
            }
        }, 4000);
    })
}


getMonth2()
    .then((msg) => { msg.map((element) => { console.log(element) }); })
    .catch((err) => { console.log(`${err}`) })





