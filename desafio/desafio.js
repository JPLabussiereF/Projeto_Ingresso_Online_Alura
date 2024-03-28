//Desafio:
// Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.
// Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
function stringEmNumero(string){
    let numero = parseInt(string);
    console.log(numero);
}
stringEmNumero("2333");
// Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
function calculadora(operacao, num1, num2) {
    switch (operacao){
        case "soma":
            return adicao(num1, num2);
        case "subtracao":
            return subtracao(num1, num2);
        case "multiplicacao":
            return multiplicacao(num1, num2);
        case "divisao":
            return divisao(num1, num2);
        default:
            return "A calculadora não reconhece essa operação";
    }
}

console.log(calculadora("divisao", 2, 3));

function adicao(num1, num2){
    return num1 + num2;
}
function subtracao(num1, num2){
    return num1 - num2;
}
function multiplicacao(num1, num2){
    return num1 * num2;
}
function divisao(num1, num2){
    if (num2 == 0){
        return "Não existe uma divisão por 0.";
    }else{
        return parseFloat(num1 / num2).toFixed(2);
    }
}
// Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
function parOuImpa(numero) {
    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}
parOuImpa(-20);
// Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar
function celsiusParaFahrenheit(valorTemperatura, grauTemperatura){
    //Fórmula: (0 °C × 9/5) + 32 = 32 °F
    if (grauTemperatura == "celsius"){
        valorTemperatura = (valorTemperatura * 9/5) + 32;
        console.log(`A conversão de celsius, para fahrenheit é: ${parseFloat(valorTemperatura).toFixed(2)}.`);
    }else if(grauTemperatura == "fahrenheit"){
        valorTemperatura = (valorTemperatura - 32) * 5/9;
        console.log(`A conversão de fahrenheit, para celsius é: ${parseFloat(valorTemperatura).toFixed(2)}.`);
    }else{
        console.log("ERRO")
    }
}
celsiusParaFahrenheit(1, "fahrenheit");