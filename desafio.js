
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