//1. Declara variables utilizando todos los tipos primitivos mencionados
console.log('1. Tipos de datos primitivos')
let ageYear: number = 34;         // Número
let username: string = "Audino Pantoja"; // Cadena de texto
let list: number[] = [1, 2, 3, 4];  // Arreglo de números
let listString: string[] = ['1', '2', '3', '4'];
let tuple: [string, number] = ["Carlos", 25];  // Tupla
let isDone: boolean = true;  // Booleano
let empty: undefined = undefined;  // Indefinido
let notPresent: null = null;  // Nulo
let anyType: any = "Could be anything";  // Any

console.log('\n Numerico: ',ageYear, '\n Cadena o caracter: ', username, '\n Es una lista: ', list, '\n Tupla: ', tuple, '\n Es booleano: ', isDone, '\n De tipo indefinido: ', empty, '\n Nulo: ', notPresent, '\n De Cualquier tipo: ', anyType)

//2. Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros
console.log('\n 2. Área de un rectángulo')
function calculateArea(base: number, height: number): number {
    return base * height;
}

console.log('El area del rectangulo es: ',calculateArea(3, 10)); 

//3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información
console.log('\n 3. Clase Car y metodo para mostrar la informacion')
class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    displayInfo(): void {
        console.log(`Esta es la información de tu carro: ${this.make} ${this.model}`);
    }
}

const myCar = new Car("Mercedez Benz", "2017");
myCar.displayInfo();

//4. Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz
console.log('\n 4. Interfaz Shape que calcula area e interfaz Rectangle que la implementa ')
interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    base: number;
    height: number;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        return this.base * this.height;
    }
}

const rect = new Rectangle(6, 7);
console.log('El área del rectángulo es: ', rect.calculateArea());

//5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author,
//y usa filter para obtener solo los libros de un autor específico.
console.log('\n 5. Array libros con sus propiedades y uso filter para libros de un solo autor ')
const books = [
    { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes Saavedra" },
    { title: "Cien años de Soledad", author: "Gabriel Garcia Marquez" },
    { title: "Crimen y castigo", author: "Fiódor Dostoyevski" }
];

const authorBooks = books.filter(book => book.author === "Fiódor Dostoyevski");
console.log(authorBooks, 'es tu autor elegido');

/* 6. Crea un pequeño programa que utilice todos los conceptos anteriores:
	Define una interfaz Book que tenga title, author, y year.
	Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.
	Usa métodos de clase y arreglos para interactuar con la biblioteca.*/

// Interfaz Book
console.log('\n 6. Interfaz Book y clase Library ')
interface Book {
    title: string;
    author: string;
    year: number;
}

// Clase Library
class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    findBooksByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }
}

const library = new Library();

// Agregar libros
library.addBook({ title: "El señor de los anillos", author: "J. R. R. Tolkien", year: 1954 });
library.addBook({ title: "En busca del tiempo perdido", author: "Marcel Proust", year: 1913 });
library.addBook({ title: "Etica para Amador", author: "Fernando Savater", year: 1991 });

// Buscar libros por autor
const byAuthorBooks = library.findBooksByAuthor("Fernando Savater");
console.log('Su autor es: ', byAuthorBooks);

//7. Uso de ciclos
//7.1. Escribe un programa que sume todos los números pares del 1 al 100
console.log('\n 7. Uso de ciclos')
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`\n 7.1 Suma de números pares: ${sum}`); 

//7.2. Contar números impares con while, que hay entre 1 y 30
let count = 0;
let num = 1;

while (num <= 30) {
    if (num % 2 !== 0) {
        count++;
    }
    num++;
}
console.log(`\n 7.2 Cantidad de números impares entre 1 y 30: ${count}`); 

//7.3. Imprimir números primos con for y if 
console.log('\n 7.3 Números primos: \n')
function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log('-->', i);
    }
}

