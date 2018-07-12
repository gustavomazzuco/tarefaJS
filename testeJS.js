var carro = function (id, nome, marca, cor, acessorios, preco, ano, dataFabricacao, vencimentoDoc) {

    return carro = {
        id: id,
        nome: nome,
        marca: marca,
        cor: cor,
        acessorios: acessorios,
        preco: preco,
        ano: ano,
        dataFabricacao: dataFabricacao,
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

var valorDepreciado = function(carro){
    var hoje = new Date(); 
    var fabricacao = new Date(carro.dataFabricacao);
    var totalMeses = (hoje.getFullYear() - fabricacao.getFullYear())*12 + (hoje.getMonth() - fabricacao.getMonth());

    var precoVenda = carro.preco;
    var precoDepreciado = precoVenda;
    
    for(i=0 ; i < totalMeses ; i++){
        precoDepreciado = precoDepreciado * 0.9834;
    }

    console.log(totalMeses)
    console.log("Preço de venda do carro: R$" + precoVenda);
    console.log("Preço depreciado: R$" + precoDepreciado);
}

var verificaAcessorio = function(acessorio){
    var carroAcessorio = carro.acessorios.filter(function (elemento){
        return elemento === acessorio;
    });

    if (carroAcessorio.length > 0){
        console.log("Este carro possui " + acessorio);
    } else {
        console.log("Este carro não possui " + acessorio);
    }
};

//console.log(carro(1, "Ka", "Ford", "Vermelho", ["vidro eletrico", "teto-solar", "automatico"], 25000, 2010, "08/20/2010", "07/20/2018"));
//console.log(carro(2, "Ka", "Palio", "Verde", ["Direcao hidraulica", "roda liga leve", "manual"], 30000, 2015, "12/01/2015", "05/20/2018"));
console.log(carro(3, "Corsa", "Chevrolet", "Prata", ["alarme", "travas"], 12000, 2018, "01/01/2018", "07/12/2018"));
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
console.log("");
console.log("==============================");
console.log("Valor proporcional Depreciado");
console.log("==============================");
valorDepreciado(carro);
console.log("");
console.log("========================");
console.log("Verifica Teto-Solar");
console.log("========================");
verificaAcessorio("teto-solar");




