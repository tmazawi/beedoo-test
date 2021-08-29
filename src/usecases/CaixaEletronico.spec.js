"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CaixaEletronico_1 = require("./CaixaEletronico");
describe('Teste Caixa Eletronico Dojo', function () {
    test('ao sacar 10 deve retornar 10', function () {
        var VALOR_SAQUE = 10;
        var sacado = CaixaEletronico_1.caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual(10);
    });
    test('verifica se valor passado é multiplo de 10', function () {
        var VALOR_SAQUE = 15;
        var sacado = CaixaEletronico_1.caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Ná há notas disponíveis para o valor informado.');
    });
    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', function () {
        var VALOR_SAQUE = 110;
        var sacado = CaixaEletronico_1.caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$100,00 e 1 nota de R$10,00.');
    });
    test('dado que valor passado 330 deve retornar 3 nota de 100 e uma de 20 e uma de 10', function () {
        var VALOR_SAQUE = 330;
        var sacado = CaixaEletronico_1.caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 3 nota de R$100,00 e 1 nota de R$20,00 e 1 nota de R$10,00.');
    });
});
