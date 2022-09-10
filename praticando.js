/*
Strings

Usa o console.log() para apresentar conteudos na tela utilizando
nos parênteses "" ou '' ou ``


number

Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em 4 categorias:
Primitive/Primitive Value
Structural 
Structural Primitive.

Os primitivos são: 
    String,
    Number,
    Boolean,
    Undefined,
    Symbol,
    BigInt. 
    
Os estruturais são:
    Object
    Function. 
    
Além destes, temos o primitivo estrutural que consiste apenas no dado null



//variavel

//Var e let são muito parecidas, podendo variar durante o código, por exemplo:
var clima ="quente"
    console.log(clima)
    clima = "frio"
    console.log(clima)
// Já a variavel const é constante, mantendo seu valor imutavel durante todo o código.


const person = {
    name: 'john',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(`O ${person.name} tem ${age} de idade.`)


// Array
const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

console.log(animals[3])


let weight;
console.log(typeof weight)
*/
let student = {
    name: "Gui",
    age: 22,
    weight: 4.8,
    isSubscribed: true,
}

console.log(`${student.name}, de ${student.age} anos de idade, pesa ${student.weight} kg.`)
