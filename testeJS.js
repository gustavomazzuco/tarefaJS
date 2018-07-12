var carro = function (id, nome, marca, cor, acessorios, ano) {

    return carro = {
        id: id,
        nome: nome,
        marca: marca,
        cor: cor,
        acessorios: acessorios,
        ano: ano
    }

};

var listarAtributos = function (carro) {
    for(var propriedade in carro) {
        console.log(propriedade);
    };
};

var consumoCarro = function (quilometros, litros){

    var media = (quilometros/litros);
    
    if (media < 10){
        console.log("Média: " + media + " km/l" + " (Aviso: Seu carro consome muito!!)")
    } else if (media >= 15){
        console.log("Média: " + media + " km/l" + " (Aviso: Parabéns, seu carro é muito economico!!)")
    } else {
        console.log("Média: " + media + " km/l")
    }
};

var verificarDocumento = function (dataVencimento){
    
    var hoje = new Date().toDateString();
    var vencimento = new Date(dataVencimento).toDateString();

    if (vencimento < hoje){
        console.log("Documento está vencido");
    } else if (vencimento === hoje ){
        console.log("Documento vence hoje");
    } else {
        console.log("Documento está em dia");
    }
};

var verificaTetoSolar = function(acessorio){
    var carroAcessorio = carro.acessorios.filter(function (elemento){
        return elemento === acessorio;
    });    
};

///var carroAcessorio = carro.acessorios.filter(function (elemento){
//    return elemento === "automatico";
//});

console.log(carro(1, "Ka", "Ford", "Vermelho", ["vidro eletrico", "Teto Solar", "automatico"], 2010));
//console.log(carro(2, "Ka", "Palio", "Verde", ["Direcao hidraulica", "roda liga leve", "manual"]));
//console.log(carro(3, "Corsa", "Chevrolet", "Prata", ["alarme", "travas"]));

console.log("");
listarAtributos(carro);
console.log("");
consumoCarro(100, 10);
console.log("");
verificarDocumento('07/07/2018');
console.log("");
verificaTetoSolar("Teto Solar");



