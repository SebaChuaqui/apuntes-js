class Perro{
    constructor(raza){
        this._raza = raza;
    }
    get raza(){
        return this._raza;
    }
    set raza(nueva_raza){
        this._raza = nueva_raza;
    }
}

let perro1 = new Perro('Pastor Aleman');
console.log(perro1.raza);
perro1.raza = 'Pastor Belga';
console.log(perro1.raza);
