// tipos primitivos
//boolean
var boolean = false;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var number = 4;
console.log(`A variável ${number} tem o tipo ${typeof(number)}`);

// usando variavel global

var nome = 'Gustavo';
// usando variavel local
function nomeDafuncao() {
    var sobrenome = 'Ferreira Tavares'
    console.log(sobrenome);
}

console.log(nome);
nomeDafuncao();

// comparação
// dois iguais compara apenas valor
var comparacao = "0" == 0;
console.log(comparacao);
// tres iguais compara valor e tipo
var comparacaoIdentica = '0' ===0;
console.log(comparacaoIdentica)

// operadores aritméticos
var mult = 5 * 56;
console.log(mult)

var divisao = 49 / 7
console.log(divisao);

// operadores relacionais
// >, <, ==, !=, <=, >=
// maior ou igual
var maiorOuIgual = 5 >=6;
console.log(maiorOuIgual);

var diferente = 4 != 8;
console.log(diferente);

// operadores logicos
// && (e), || (ou), ! (not)
var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var not = !true;
console.log(not);

// Exercícios/Prática

var anoAtual = 2026
console.log(anoAtual)
