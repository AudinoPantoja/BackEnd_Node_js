//1
console.log('***First Exercise*** \n');
const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Punto a
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(16);
auxNumber.push(17);
console.log('Array agregando con push ', auxNumber);

//punto b
auxNumber.pop();
console.log('\n Eliminando con pop el ultimo elemento ', auxNumber);

//Punto c
const indexOne = auxNumber.indexOf(1)
console.log('\nEl indice de 1 es ', indexOne)
const indexFour = auxNumber.indexOf(4)
console.log('El indice de 4 es ', indexFour)
const indexSeven = auxNumber.indexOf(7)
console.log('El indice de 7 es ', indexSeven)

//punto d
const extract = auxNumber.slice(1, 9)
console.log('\nParte del array extraído ', extract);

//punto e
const mayEvery: boolean = auxNumber.every((num) => num > 1);
console.log('\nSon todos mayores a 1', mayEvery);

//Punto f
const someMayThan7: boolean = auxNumber.some((num) => num >= 7);
console.log('\nAlgunos mayores o iguales a 7', someMayThan7);

//2
console.log('\n***Second Exercise***');
const auxString: string[] = ['1', '2', '3', '4', '5', '6', '7'];

//Punto a
auxString.push('10');
auxString.push('11');
auxString.push('12');
auxString.push('13');
auxString.push('14');
console.log('\nArray agregando con push ', auxString);

//Punto b
const indexOneString = auxString.indexOf('10')
console.log('\nEl indice de 10 es ', indexOneString)
const indexTwoString = auxString.indexOf('11')
console.log('El indice de 11 es ', indexTwoString)
const indexThreeString = auxString.indexOf('14')
console.log('El indice de 14 es ', indexThreeString)

//3
console.log('\n***Third Exercise***');
const message: string = 'Bienvenidos al ITP'
//Punto a
const splitMessage = message.split(' ');
console.log('Array dividido con split:', splitMessage);
//Punto b
const joinedMessage = splitMessage.join(',');
console.log('String unido con join:', joinedMessage);

//4
console.log('\n***Fourth Exercise***');
const names: string = 'Michael, Anderson, Yadir, Kevin, Emerson'
//Punto a
const auxSplit: string[] = names.split(',');
console.log('Dividiendo: ', auxSplit);
//Punto b
const auxJoin: string = auxSplit.join(' ');
console.log('Uniendo: ', auxJoin);

//5
console.log('\n***Fifth Exercise***');
const arrayProducts: any[] = [
    {
        id:1,
        name:'arroz',
        price:1000,
        priceDiscount:700,
    },
    {
        id:2,
        name:'atun',
        price:2500,
        priceDiscount:1500,
    },
];

//Punto a
const filteredProductsFilter = arrayProducts.filter((product) => product.price > 900);
console.log('\nFiltrando por filter:', filteredProductsFilter);

const filteredProductsFor: any[] = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        filteredProductsFor.push(arrayProducts[i]);
    }
}
console.log('Filtrando con el ciclo for:', filteredProductsFor);

//Punto b
const foundProduct = arrayProducts.find((product) => product.priceDiscount > 500);
console.log('Producto encontrado con priceDiscount > 500:', foundProduct);

//Punto c
const foundIndex = arrayProducts.findIndex((product) => product.price > 1000);
console.log('Index del array donde price > 1000:', foundIndex);

//Punto d
const newProduct = {
    id: 3,
    name: 'Queso',
    price: 6500,
    priceDiscount: 1600,
};

arrayProducts.push(newProduct);
console.log('Array after adding new product:', arrayProducts);

//6
console.log('\n***Sixth Exercise***');

const array01: number[] = [1, 2, 3, 4]
const array02: number[] = [6, 7, 8, 9]

//Punto a
const concatenatedArrayConcat: number[] = array01.concat(array02);
console.log('Concatenado con concat:', concatenatedArrayConcat);

const concatenatedArrayPush: number[] = [...array01]; // Hacer una copia de array01 para no modificar el original
concatenatedArrayPush.push(...array02);
console.log('Concatenado con push:', concatenatedArrayPush);

//Punto b
const sortedArray = concatenatedArrayConcat.sort((a, b) => a - b);
console.log('Ordenado de menor a mayor:', sortedArray);

//Punto c
const array01Reverse: number[] = array01.reverse();
const array02Reverse: number[] = array02.reverse();

console.log('Array01 ordenado descendente:', array01Reverse);
console.log('Array02 ordenado descendente:', array02Reverse);
