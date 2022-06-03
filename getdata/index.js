const getData = () => {
    return fetch(`https://api.github.com`);
}

getData();

fetch('https://swapi.dev/api/people/')
.then(response => response.json())
.then(result => console.log(result))
