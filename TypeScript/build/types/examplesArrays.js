const numbers = [1, 2, 3, 4];
const numbers1 = [1, 2, 3, 4];
const mixed = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
];
const numberOne = [1, 2, 3, 4, 5];
numberOne.push(6);
console.log('Array agregando con push ', numberOne);
numberOne.pop();
console.log('Array eliminando con pop ', numberOne);
const index = numberOne.indexOf(3);
console.log('El indice es ', index);
const sliced = numberOne.slice(1, 4);
console.log('Extraer una parte del array ', sliced);
const squares = numbers.map((num) => num * num);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const coinsArray = [
    {
        id: 1,
        name: 'Pesos',
        code: '$'
    },
    {
        id: 1,
        name: 'Dolar',
        code: 'USD'
    }
];
const filterCoins = coinsArray.filter((coin) => coin.code === 'USD');
console.log('Filtrando', filterCoins);
//# sourceMappingURL=examplesArrays.js.map