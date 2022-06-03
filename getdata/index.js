const getData = () => {
    return fetch(`https://api.github.com`);
}

getData();

fetch('https://swapi.dev/api/people/')
.then(response => response.json())
.then(result => console.log(result))


const json = '{"edad" : 30, "nombre" : "Jocelyn"}';

try {
    const usuario = JSON.parse(json);
    console.log(usuario.edad);
    console.log(usuario.nombres);
} catch (error) {
    console.log('Error')
}

const z = {y:20,z:30};
z.y();
