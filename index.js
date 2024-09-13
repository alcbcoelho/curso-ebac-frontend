const Veiculo = function(modelo, marca, anoFabricacao) {
    this.modelo = modelo;
    this.marca = marca;
    this.anoFabricacao = anoFabricacao;
}

const Carro = function(modelo, marca, anoFabricacao) {
    Veiculo.call(this, modelo, marca, anoFabricacao);
}

Carro.prototype.acelerar = function() {
    console.log(`${this.modelo} acelera: "VROOOM"`);
}

const Bicicleta = function(modelo, marca, anoFabricacao) {
    Veiculo.call(this, modelo, marca, anoFabricacao);
}

Bicicleta.prototype.pedalar = function() {
    console.log(`${this.modelo} pedala!`);
}

const carros = [
    new Carro("Corolla", "Toyota", 2022),
    new Carro("Mustang", "Ford", 2021),
    new Carro("Golf", "Volkswagen", 2023)
];

const bicicletas = [
    new Bicicleta("Rockhopper", "Specialized", 2022),
    new Bicicleta("Domane AL 2", "Trek", 2023),
    new Bicicleta("Trail 7", "Cannondale", 2021)
];

carros.forEach(carro => {
    carro.acelerar();
})

bicicletas.forEach(bicicleta => {
    bicicleta.pedalar();
})