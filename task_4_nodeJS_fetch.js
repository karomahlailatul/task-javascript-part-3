import fetch from 'node-fetch';


const url = ("https://jsonplaceholder.typicode.com/users");
fetch(url)
    .then(response => {
        return response.json();
    }).then(people => {
        const names = people.map(person => person.name).join("\n");
        console.log(names);
    }).catch(err => {
        console.log(err);
    })