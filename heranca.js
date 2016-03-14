function Animal(nome) {
    this.nome = nome || 'Dog';
}

var animalPrototype = {
    fazerBarulho: function () {
        throw 'Deve ser implementado';
    }
};


Animal.prototype = animalPrototype;


function Dog(nome, raca, peso) {
    Animal.call(this, nome);
    if (raca === undefined) {
        raca = 'viralata';
    }
    this.raca = raca;
    if (peso === undefined || peso === 0) {
        peso = 1;
    }
    this.peso = peso;
}

var dogPrototipo =  new Animal();
dogPrototipo.fazerBarulho = function () {
    return this.nome + ': Au Au Au'
};

dogPrototipo.prototype = Animal.prototype;
Dog.prototype = dogPrototipo;


function Cat(nome, raca, peso) {
    Animal.call(this, nome);
    if (raca === undefined) {
        raca = 'persa';
    }
    this.raca = raca;
    if (peso === undefined || peso === 0) {
        peso = 1;
    }
    this.peso = peso;
}

var catPrototipo = new Animal();
catPrototipo.fazerBarulho = function () {
        return this.nome + ': Miau Miau Miau'
};

catPrototipo.prototype = Animal.prototype;
Cat.prototype = catPrototipo;


var buzz = new Dog();
var perola = new Animal('Perola');
console.log(buzz.fazerBarulho());


function Manada() {
    listaManada = [];
}

var manadaPrototipo = new Manada();
manadaPrototipo.adicionar = function (animal) {
    listaManada.push(animal);
}

manadaPrototipo.imprimirVirgula = function () {
    var virgula = [];
    for (var aux = 0; aux < listaManada.length; aux++) {
        virgula.push(listaManada[aux].fazerBarulho());
    }
    return virgula.join();
}

manadaPrototipo.imprimirSharpe = function () {
    var sharpe = [];
    for (var aux = 0; aux < listaManada.length; aux++) {
        sharpe.push(listaManada[aux].fazerBarulho());
    }
    return sharpe.join('#');
}

manadaPrototipo.prototype = Manada.prototype;
Manada.prototype = manadaPrototipo;


var gato = new Cat('Gato', 'Persa', 10);
var cachorro = new Dog('Cachorro', 'Yorkshire', 20);
var manada = new Manada();
manada.adicionar(gato);
manada.adicionar(cachorro);

console.log(manada.imprimirVirgula());
console.log(manada.imprimirSharpe());
