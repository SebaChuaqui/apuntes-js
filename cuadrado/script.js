class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }
    calcularArea(){
        return this.lado * this.lado;
    }
}

let c1 = new Cuadrado(5);
console.log(c1.calcularArea());