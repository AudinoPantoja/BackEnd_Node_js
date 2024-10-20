console.log('1. Tipos de datos primitivos');
let ageYear = 34;
let username = "Audino Pantoja";
let list = [1, 2, 3, 4];
let listString = ['1', '2', '3', '4'];
let tuple = ["Carlos", 25];
let isDone = true;
let empty = undefined;
let notPresent = null;
let anyType = "Could be anything";
console.log('\n Numerico: ', ageYear, '\n Cadena o caracter: ', username, '\n Es una lista: ', list, '\n Tupla: ', tuple, '\n Es booleano: ', isDone, '\n De tipo indefinido: ', empty, '\n Nulo: ', notPresent, '\n De Cualquier tipo: ', anyType);
console.log('\n 2. Área de un rectángulo');
function calculateArea(base, height) {
    return base * height;
}
console.log('El area del rectangulo es: ', calculateArea(3, 10));
console.log('\n 3. Clase Car y metodo para mostrar la informacion');
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        console.log(`Esta es la información de tu carro: ${this.make} ${this.model}`);
    }
}
const myCar = new Car("Mercedez Benz", "2017");
myCar.displayInfo();
console.log('\n 4. Interfaz Shape que calcula area e interfaz Rectangle que la implementa ');
class Rectangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return this.base * this.height;
    }
}
const rect = new Rectangle(6, 7);
console.log('El área del rectángulo es: ', rect.calculateArea());
console.log('\n 5. Array libros con sus propiedades y uso filter para libros de un solo autor ');
const books = [
    { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes Saavedra" },
    { title: "Cien años de Soledad", author: "Gabriel Garcia Marquez" },
    { title: "Crimen y castigo", author: "Fiódor Dostoyevski" }
];
const authorBooks = books.filter(book => book.author === "Fiódor Dostoyevski");
console.log(authorBooks, 'es tu autor elegido');
console.log('\n 6. Interfaz Book y clase Library ');
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
}
const library = new Library();
library.addBook({ title: "El señor de los anillos", author: "J. R. R. Tolkien", year: 1954 });
library.addBook({ title: "En busca del tiempo perdido", author: "Marcel Proust", year: 1913 });
library.addBook({ title: "Etica para Amador", author: "Fernando Savater", year: 1991 });
const byAuthorBooks = library.findBooksByAuthor("Fernando Savater");
console.log('Su autor es: ', byAuthorBooks);
console.log('\n 7. Uso de ciclos');
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`\n 7.1 Suma de números pares: ${sum}`);
let count = 0;
let num = 1;
while (num <= 30) {
    if (num % 2 !== 0) {
        count++;
    }
    num++;
}
console.log(`\n 7.2 Cantidad de números impares entre 1 y 30: ${count}`);
console.log('\n 7.3 Números primos: \n');
function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log('-->', i);
    }
}
//# sourceMappingURL=segundoTallerTypeS.js.map