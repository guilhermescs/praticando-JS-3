//Exercício 1
let nota = 59

if(nota >= 90) {
    console.log("Você tirou um A")

} else if (nota >= 80 && nota <= 89) {
    console.log("Você tirou B")

} else if (nota >=70 && nota <= 79) {
    console.log("Você tirou C")

} else if (nota >= 60 && nota <=69) {
    console.log("Você tirou D")

} else {
    console.log("Você tirou F")
}

//Exercício 2
let receita = 1500
let despesas = 1501

let saldo = receita - despesas

if(saldo > 0) {
    console.log("Seu saldo está positivo")
} else {
    console.log("Seu saldo está negativo")
}