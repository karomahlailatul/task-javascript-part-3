const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["Januari", "Pebruari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            monthSetUp(null, month)
        } else {
            monthSetUp(new Error("Sorry Data Not Found"), [])
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

getMonth();

