/*
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
*/
//Exercício 3

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não indentificado')
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 +32
        degreeSign = 'F'
    }
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('40x')
} catch (error) {
    console.log(error.message)
}

//Exercício 4

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.lenght)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1 {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", author.lenght)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury)









