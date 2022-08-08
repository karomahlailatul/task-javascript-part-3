import fetch from 'node-fetch';

const url = ("https://jsonplaceholder.typicode.com/users");
new Promise((resolve, reject) => {
    fetch(url)

        .then(response => {
            if (response.status == 200) {
                resolve('sukses')
                return response.json()
            } else {
                reject('gagal')
            }
        })


        .then(people => {
            const names = people.map(person => person.name).join("\n");
            console.log(names);
        })

        .catch(err => {
            console.log(err);
        })

})