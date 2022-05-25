var carbohidratos = ["Papas", "Fideos", "Pasta", "Arroz"];
carbohidratos.pop();
console.log(carbohidratos);

var amigos = ["Erick", "Cristian"];
amigos.push("Gary")
console.log(amigos);

var amigos2 = ["Erick", "Cristian", "Max", "Claudia"];
console.log(amigos2.sort());

var regiones = "Concepcion, Arica, Coquimbo, , Metropolitana";
var arregloRegiones = regiones.split(', ');
console.log(arregloRegiones);


var pacientes = [
    {nombre: 'Vladimir', edad: 22, peso: 55, altura: 173},
    {nombre: 'Anastasia', edad: 25, peso: 67, altura: 181},
    {nombre: 'Alexander', edad: 56, peso: 55, altura: 155},
];

var sumatoria = pacientes.reduce(function(acumulador, p){
    return acumulador + p.edad; 
}, 100);
console.log(sumatoria);

var personas = ["pedro", "juan", "diego"];
var juanIndice = personas.findIndex(function(persona){
    return persona == 'juan'
});
console.log(juanIndice);

var pais = new Object();
pais.ciudad = "Santiago de Chile";
pais.mostrarCiudad = function(){
    console.log("La ciudad es: " + this.ciuda);
}
pais.mostrarCiudad();

var usuario = new Object();
usuario.administrador = "A1-0001";
usuario.bienvenida = function(){
    console.log("Bienvenido " + administrador);
};
usuario.bienvenida();

function Hipotenusa(x,y){
    this.x = x;
    this.y = y;

}

Hipotenusa.prototype.calculoHipo = function(){
    return Math.floor(Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2)));
}

var h1 = new Hipotenusa(3,6);
console.log(h1.calculoHipo());

console.log(typeof {});

typeof Math.floor(Math.SQRT1_2);

var rectangulo = new Object();
rectangulo.ancho = 10;
rectangulo.largo = 5;
console.log(rectangulo);

console.log(cuadrado.ancho);
cuadrado.ancho = 7;
cuadrado['ancho'] = 8;

var vaca = new Object();
vaca.sonido = function(){
    console.log("moo");
}

vaca.sonido();

// Notación literal

perro = {
    hablar: function(){
        console.log("guau");
    }
};

perro.hablar();

var persona = new Object();
persona.nombre = "Camila";

persona.saludar = function(){
    console.log("Hola soy " + this.nombre);
};

persona.saludar();

function Estudiante(nombre){ //Función Constructora
    this.nombre = nombre;
};

var E1 = new Estudiante("Cecilia");
var E2 = new Estudiante("Ricardo");
var E3 = new Estudiante("Marcela");

console.log(E1);
console.log(E2);
console.log(E3);

function Usuario(nombre){
    this.nombre = nombre;
}

Usuario.prototype.saludar = function(){
    console.log("Hola soy el usuario: " + this.nombre);
    Usuario.prototype.edad = 30;
    console.log("La edad del usuario1 es: " + this.edad);
    console.log("La edad del usuario2 es: " + this.edad);
}

var usuario1 = new Usuario("Pedro");
var usuario2 = new Usuario("María");

usuario1.saludar();
usuario2.saludar();
usuario1.edad();
usuario2.edad();

function Cuadrado(lado){
    this.lado = lado;
}

Cuadrado.prototype.calcularArea = function(){
    return this.lado * this.lado;
}

Cuadrado.prototype.calcularPerimetro = function(){
    return this.lado * 4;
}

var cuadrado1 = new Cuadrado(2);
console.log(cuadrado1.calcularArea());
console.log(cuadrado1.calcularPerimetro());



