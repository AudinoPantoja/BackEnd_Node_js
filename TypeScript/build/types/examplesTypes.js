const userName = 'Peter';
const age = 30;
const isAdmin = 'New Island Hotel';
console.log('His name is', userName, '\n', 'His age is', age, 'years old', '\n', 'He is a manager at the', isAdmin);
const cat = 'Tauro';
const dog = 'Apolo';
console.log(userName, 'has a cat called', cat, '\n', 'and his cat fights with his neighbor`s dog', dog);
const isCat = true;
const isDog = false;
if (isCat) {
    console.log(userName, 'has a cat.');
}
else {
    console.log(userName, 'does not have a cat.');
}
if (isDog) {
    console.log(userName, 'has a dog.');
}
else {
    console.log(userName, 'does not have a dog.');
}
const products = [7, 8, 9, 6, 1];
const invoices = ['pago matri', 'pago prod'];
const stores = [1, 2, 3, 4, 5, 6];
const coin = ['name', 'hello', 'status'];
const peopleOne = ['any', 1, true, { id: 1, name: 'Audino' }];
const coins = [
    {
        id: 1,
        name: 'pesos',
        code: '$'
    }
];
coins.push({
    id: 2,
    name: 'dolar',
    code: '%'
});
let books = [
    {
        id: 1,
        name: 'itp'
    }
];
books = [1, 2, 3, 4, 5];
let dateOne;
dateOne = ['uno', 1, true];
var color;
(function (color) {
    color[color["rojo"] = 0] = "rojo";
    color[color["verde"] = 1] = "verde";
    color[color["azul"] = 2] = "azul";
})(color || (color = {}));
let c = color.verde;
console.log('El color es: ', color[1]);
var Dia;
(function (Dia) {
    Dia[Dia["lunes"] = 2] = "lunes";
    Dia[Dia["Martes"] = 5] = "Martes";
    Dia[Dia["Miercoles"] = 6] = "Miercoles";
})(Dia || (Dia = {}));
let dia = Dia.Martes;
console.log('el dia es: ', dia);
function saludar() {
    const aux = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 1; i <= AudioContext.length; i++) {
        sum += aux[1];
    }
    console.log('la suma es', sum);
}
function llegada() {
    const name = 'Hola ';
    return name;
}
let car = {
    make: 'Toyota',
    model: 'Prado',
    year: 2015
};
let animals = {
    name: 'rex',
    age: 10,
    status: false
};
let animals1 = {
    name: 'rex',
    age: 10,
    status: false
};
let nothing = null;
nothing = 'Hello';
let notDefined = undefined;
//# sourceMappingURL=examplesTypes.js.map