// Calculadora de partidas Rankeadas

//O Que deve ser utilizado:
// Variáveis
// Operadores
// Laços de repetição
// Estruturas de decisões
// Funções

// Objetivo: crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas 
// de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas 
// deve ser feito através do calculo (vitórias - derrotas).

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// Saída: ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

classificacao()

function saldoVitorias(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas
    return saldoRankeadas
}

function classificacao(){
    let saldo = saldoVitorias(110, 70)
    const inicioFrase = "O Herói tem de saldo de "
    const fimFrase = " está no nível de "
    if (saldo <= 10){
        console.log(inicioFrase + saldo + fimFrase + "Ferro")}
    else if (saldo >= 11 && saldo <= 20){
        console.log(inicioFrase + saldo + fimFrase + "Bronze")}
    else if (saldo >= 21 && saldo <= 50){
        console.log(inicioFrase + saldo + fimFrase + "Prata")}
    else if (saldo >= 51 && saldo <= 80){
        console.log(inicioFrase + saldo + fimFrase + "Ouro")}
    else if (saldo >= 81 && saldo <= 90){
        console.log(inicioFrase + saldo + fimFrase + "Diamante")}
    else if (saldo >= 91 && saldo <= 100){
        console.log(inicioFrase + saldo + fimFrase + "Lendário")}
    else if (saldo >= 101){
        console.log(inicioFrase + saldo + fimFrase + "Imortal")}
}