export function caixaEletronico(valor_saque:number) {

    const notas_disponiveis: Array<number> = [100, 50, 20,10];

    if(notas_disponiveis.includes(valor_saque)) {
        return valor_saque;
    }
    
    if(valor_saque % 10 !==0){ 
        return 'Ná há notas disponíveis para o valor informado.';
    }

    let notas: Array<number> = [];
    notas_disponiveis.map(nota => {
        while (valor_saque >= nota) {
            notas.push(nota);
            valor_saque -= nota;
        }
    })
    //  filter method: 
    //  const notasUnico = notas.filter((v, i, a) => a.indexOf(v) === i); 
    const notaOcorrencias = (arr: Array<number>, val: number) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    const notaUnico: Array<number> = notas.reduce((a: Array<number>, v:number) => (a.includes(v) ? a : [...a, v] ), []);
    let str:string = '';
    for (let i:number = 0; i < notaUnico.length; i++) {
        let notaNum:number = notaOcorrencias(notas, notaUnico[i]);
        if (i==0) {
            str = `Entregar ${notaNum} nota de R$${notaUnico[i].toFixed(2).replace(".", ",")}`;
        }else{
            str = str.concat(` e ${notaNum} nota de R$${notaUnico[i].toFixed(2).replace(".", ",")}`);
        }
        if (i == notaUnico.length -1) {
            str = str.concat('.');
        }
    }
    return str;
} 
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