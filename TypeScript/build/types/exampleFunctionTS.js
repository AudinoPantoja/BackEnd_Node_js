console.log('***First Exercise*** \n');
const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(16);
auxNumber.push(17);
console.log('Array agregando con push ', auxNumber);
auxNumber.pop();
console.log('\n Eliminando con pop el ultimo elemento ', auxNumber);
const indexOne = auxNumber.indexOf(1);
console.log('\nEl indice de 1 es ', indexOne);
const indexFour = auxNumber.indexOf(4);
console.log('El indice de 4 es ', indexFour);
const indexSeven = auxNumber.indexOf(7);
console.log('El indice de 7 es ', indexSeven);
const extract = auxNumber.slice(1, 9);
console.log('\nParte del array extraído ', extract);
const mayEvery = auxNumber.every((num) => num > 1);
console.log('\nSon todos mayores a 1', mayEvery);
const someMayThan7 = auxNumber.some((num) => num >= 7);
console.log('\nAlgunos mayores o iguales a 7', someMayThan7);
console.log('\n***Second Exercise***');
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
auxString.push('10');
auxString.push('11');
auxString.push('12');
auxString.push('13');
auxString.push('14');
console.log('\nArray agregando con push ', auxString);
const indexOneString = auxString.indexOf('10');
console.log('\nEl indice de 10 es ', indexOneString);
const indexTwoString = auxString.indexOf('11');
console.log('El indice de 11 es ', indexTwoString);
const indexThreeString = auxString.indexOf('14');
console.log('El indice de 14 es ', indexThreeString);
console.log('\n***Third Exercise***');
const message = 'Bienvenidos al ITP';
const splitMessage = message.split(' ');
console.log('Array dividido con split:', splitMessage);
const joinedMessage = splitMessage.join(',');
console.log('String unido con join:', joinedMessage);
console.log('\n***Fourth Exercise***');
const names = 'Michael, Anderson, Yadir, Kevin, Emerson';
const auxSplit = names.split(',');
console.log('Dividiendo: ', auxSplit);
const auxJoin = auxSplit.join(' ');
console.log('Uniendo: ', auxJoin);
console.log('\n***Fifth Exercise***');
const arrayProducts = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscount: 700,
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        priceDiscount: 1500,
    },
];
const filteredProductsFilter = arrayProducts.filter((product) => product.price > 900);
console.log('\nFiltrando por filter:', filteredProductsFilter);
const filteredProductsFor = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        filteredProductsFor.push(arrayProducts[i]);
    }
}
console.log('Filtrando con el ciclo for:', filteredProductsFor);
const foundProduct = arrayProducts.find((product) => product.priceDiscount > 500);
console.log('Producto encontrado con priceDiscount > 500:', foundProduct);
const foundIndex = arrayProducts.findIndex((product) => product.price > 1000);
console.log('Index del array donde price > 1000:', foundIndex);
const newProduct = {
    id: 3,
    name: 'Queso',
    price: 6500,
    priceDiscount: 1600,
};
arrayProducts.push(newProduct);
console.log('Array after adding new product:', arrayProducts);
console.log('\n***Sixth Exercise***');
const array01 = [1, 2, 3, 4];
const array02 = [6, 7, 8, 9];
const concatenatedArrayConcat = array01.concat(array02);
console.log('Concatenado con concat:', concatenatedArrayConcat);
const concatenatedArrayPush = [...array01];
concatenatedArrayPush.push(...array02);
console.log('Concatenado con push:', concatenatedArrayPush);
const sortedArray = concatenatedArrayConcat.sort((a, b) => a - b);
console.log('Ordenado de menor a mayor:', sortedArray);
const array01Reverse = array01.reverse();
const array02Reverse = array02.reverse();
console.log('Array01 ordenado descendente:', array01Reverse);
console.log('Array02 ordenado descendente:', array02Reverse);
//# sourceMappingURL=exampleFunctionTS.js.map