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

let student = {
    name: "Gui",
    age: 22,
    weight: 4.8,
    isSubscribed: true,
}

console.log(`${student.name}, de ${student.age} anos de idade, pesa ${student.weight} kg.`)

//Propriedade Date

let date = new Date('2020-12-01')
console.log(date.__proto__)

/* resto da divisão: sinal % 
let remainder
remainder = 11 % 9
console.log(remainder)

/* incremento: sinal ++ 
let increment = 0

console.log(++increment)
console.log(increment)

/* decremento: sinal -- 
let decrement = 0
decrement--
console.log(decrement)

/* exponencial: sinal ** 
console.log(2 ** 3)


// Apenas um = significa que a variavél recebe x valor
// Dois == significa igual. Função x é == (igual) a y?
// != significa diferente de.

// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

//Operadores lógicos

// and &&

// ou ||

//not !

//Operador Ternário
// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

//operador de String

//Operador de concatenação


