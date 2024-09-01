
/* Resposta da pergunta: 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 */

function pertenceFibonacci(numero) {
    if (numero < 0) return false; 

    let a = 0; // Primeiro número da sequência
    let b = 1; // Segundo número da sequência

    
    if (numero === a || numero === b) return true;

    for (let i = 2; b <= numero; i++) {
        let temp = a + b; 
        a = b; 
        b = temp; 

        if (b === numero) return true; 
    }

    return false; 
}

// Testando a função
let numeroInformado = 21; 
if (pertenceFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}



/* Resposta da pergunta: 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre. */

function verificarLetraA(texto) {
    
    let textoMinusculo = texto.toLowerCase();
    
    
    let contagem = 0;

    
    for (let i = 0; i < textoMinusculo.length; i++) {
        if (textoMinusculo[i] === 'a') {
            contagem++;
        }
    }

    
    if (contagem > 0) {
        console.log(`A letra 'a' aparece ${contagem} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}


let stringParaVerificar = "Amazônia é muito linda!";
verificarLetraA(stringParaVerificar);



/* Resposta da pergunta: 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
 */

let INDICE = 12;
let SOMA = 0;

for (let K = 1; K < INDICE; K++) {
    SOMA += K ;
}

console.log(SOMA); 

/* o valor  da variável  soma é 66  */
