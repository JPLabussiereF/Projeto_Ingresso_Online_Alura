function botaoComprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
    let palavraIngressos = quantidade > 1 ? "ingressos" : "ingresso";

    if(quantidade <=0 || document.getElementById("qtd").textContent == ""){
        alert(`A quantidade adicionada no carrinho deve ser maior que zero. Insira um valor válido e tente novamente!`);
        return;
    }

    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
    let quantidadeCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let quantidadeCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if(tipoIngresso == "inferior"){
        if(quantidade > quantidadeCadeiraInferior){
            alert(`A quantidade de ${palavraIngressos} para a "Cadeira Inferior" está indisponivel.`);
        }else{
            alert(`Parabéns, você acabou de comprar ${quantidade} ${palavraIngressos} para a "Cadeira Inferior"!`);
            quantidadeCadeiraInferior = quantidadeCadeiraInferior - quantidade;
            document.getElementById("qtd-inferior").textContent = quantidadeCadeiraInferior;
        }
    }else if(tipoIngresso == "superior"){
        if(quantidade > quantidadeCadeiraSuperior){
            alert(`A quantidade de ${palavraIngressos} para a "Cadeira Superior" está indisponivel.`);
        }else{
            alert(`Parabéns, você acabou de comprar ${quantidade} ${palavraIngressos} para a "Cadeira Superior"!`);
            quantidadeCadeiraSuperior = quantidadeCadeiraSuperior - quantidade;
            document.getElementById("qtd-superior").textContent = quantidadeCadeiraSuperior;
        }
    }else if(tipoIngresso == "pista"){
        if(quantidade > quantidadePista){
            alert(`A quantidade de ${palavraIngressos} para a "Pista" está indisponivel.`);
        }else{
            alert(`Parabéns, você acabou de comprar ${quantidade} ${palavraIngressos} para a "Pista"!`);
            quantidadePista = quantidadePista - quantidade;
            document.getElementById("qtd-pista").textContent = quantidadePista;
        }
    }
}

//Desafio:
// Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.
// Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
// Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
// Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
// Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

