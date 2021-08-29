"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caixaEletronico = void 0;
function caixaEletronico(valor_saque) {
    var notas_disponiveis = [100, 50, 20, 10];
    if (notas_disponiveis.includes(valor_saque)) {
        return valor_saque;
    }
    if (valor_saque % 10 !== 0) {
        return 'Ná há notas disponíveis para o valor informado.';
    }
    var notas = [];
    notas_disponiveis.map(function (nota) {
        while (valor_saque >= nota) {
            notas.push(nota);
            valor_saque -= nota;
        }
    });
    //  filter method:
    //  const notasUnico = notas.filter((v, i, a) => a.indexOf(v) === i); 
    var notaOcorrencias = function (arr, val) { return arr.reduce(function (a, v) { return (v === val ? a + 1 : a); }, 0); };
    var notaUnico = notas.reduce(function (a, v) { return (a.includes(v) ? a : __spreadArray(__spreadArray([], a), [v])); }, []);
    var str = '';
    for (var i = 0; i < notaUnico.length; i++) {
        var notaNum = notaOcorrencias(notas, notaUnico[i]);
        if (i == 0) {
            str = "Entregar " + notaNum + " nota de R$" + notaUnico[i].toFixed(2).replace(".", ",");
        }
        else {
            str = str.concat(" e " + notaNum + " nota de R$" + notaUnico[i].toFixed(2).replace(".", ","));
        }
        if (i == notaUnico.length - 1) {
            str = str.concat('.');
        }
    }
    return str;
}
exports.caixaEletronico = caixaEletronico;
// Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa
// eletrônico. Os requisitos básicos são os seguintes:
// ● Entregar o menor número de notas;
// ● É possível sacar o valor solicitado com as notas disponíveis;
// ● Saldo do cliente infinito;
// ● Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do
// problema);
// Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00
// Exemplos:
// Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
// Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$
// 10,00
