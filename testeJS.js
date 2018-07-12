var carro = function (id, nome, marca, cor, acessorios, ano, vencimentoDoc) {

    return carro = {
        id: id,
        nome: nome,
        marca: marca,
        cor: cor,
        acessorios: acessorios,
        ano: ano,
        vencimentoDoc: vencimentoDoc
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

var validadeDocumento = function (dataVencimento){
    
    var hoje = new Date();
    var vencimento = new Date(dataVencimento);

    if (vencimento < hoje){
        console.log("Documento está vencido.");
    } else if (vencimento === hoje ){
        console.log("Documento vence hoje.");
    } else {
        console.log("Documento está em dia.");
    }
};

var tempoVencimento = function (dataVencimento){
    var hoje = new Date();
    var vencimento = new Date(dataVencimento);

    if (hoje <= vencimento){
        var diferenca = Math.abs(vencimento.getTime() - hoje.getTime());
        var diferencaDias = Math.ceil(diferenca / (1000 * 3600 * 24));
        console.log("Faltam "+ diferencaDias + " dias para o documento vencer.");
    } else {
        console.log("O documento já está vencido");
    }
}

var verificaTetoSolar = function(acessorio){
    var carroAcessorio = carro.acessorios.filter(function (elemento){
        return elemento === acessorio;
    });    
};

///var carroAcessorio = carro.acessorios.filter(function (elemento){
//    return elemento === "automatico";
//});

console.log(carro(1, "Ka", "Ford", "Vermelho", ["vidro eletrico", "Teto Solar", "automatico"], 2010, "07/20/2018"));
//console.log(carro(2, "Ka", "Palio", "Verde", ["Direcao hidraulica", "roda liga leve", "manual"]));
//console.log(carro(3, "Corsa", "Chevrolet", "Prata", ["alarme", "travas"]));
console.log("===================");
console.log("Lista de Atributos");
console.log("===================");
listarAtributos(carro);
console.log("");
console.log("===================");
console.log("Consumo médio");
console.log("===================");
consumoCarro(100, 5);
console.log("");
console.log("=========================");
console.log("Verificação do vencimento");
console.log("=========================");
validadeDocumento(carro.vencimentoDoc);
console.log("");
console.log("========================");
console.log("Tempo para o vencimento");
console.log("========================");
tempoVencimento(carro.vencimentoDoc);



