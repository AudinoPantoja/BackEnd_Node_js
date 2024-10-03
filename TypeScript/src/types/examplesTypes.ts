//let para modificar el data,const para 
//
const userName: string = 'Peter';
const age = 30;
const isAdmin: any = 'New Island Hotel';
console.log('His name is', userName, '\n', 'His age is', age, 'years old', '\n', 'He is a manager at the', isAdmin);

const cat = 'Tauro';
const dog = 'Apolo';

console.log(userName, 'has a cat called', cat, '\n', 'and his cat fights with his neighbor`s dog', dog);

const isCat = true;
const isDog = false;

if (isCat) {
  console.log(userName, 'has a cat.');
} else {
  console.log(userName, 'does not have a cat.');
}

if (isDog) {
  console.log(userName, 'has a dog.');
} else {
  console.log(userName, 'does not have a dog.');
}
//Array
const products : Array<number> = [7,8,9,6,1]
const invoices : Array<string> = ['pago matri', 'pago prod']
const stores : number[]= [1,2,3,4,5,6]
const coin : string[] =['name','hello','status']
const peopleOne : any[] = ['any', 1, true, {id:1, name: 'Audino'}]

const coins : any[] = [
  {
    id:1,
    name: 'pesos',
    code: '$'
  }
  
]
coins.push({
  id:2,
  name:'dolar',
  code:'%'
})

let books : any[] =[
  {
    id:1,
    name: 'itp'
  }
]
books = [1,2,3,4,5]

//tuple
let dateOne : [string, number, boolean];
dateOne = ['uno', 1, true]
//enum
enum color {rojo,verde, azul}
let c: color = color.verde
//console.log('el color es: ',c);
console.log('El color es: ', color[1]);

enum Dia {lunes = 2, Martes = 5, Miercoles}
let dia: Dia = Dia.Martes  //Martes tendra el valor de 2
console.log('el dia es: ', dia)
//void

function saludar():void{
  const aux: any =[1,2,3,4,5];
  let sum = 0;
  for (let i=1; i<=AudioContext.length; i++){
    sum += aux[1]
  }
  console.log('la suma es', sum);
}

function llegada(): any{
  const name: string = 'Hola '
  return name
}

//object
let car: {make: string; model:string; year: number}={
  make: 'Toyota',
  model: 'Prado',
  year: 2015
};

let animals: {name:string; age:number; status:boolean}={
name: 'rex',
age: 10,
status:false
}
let animals1={
name: 'rex',
age: 10,
status:false
}

//Null y undefined

let nothing: any = null
nothing = 'Hello'
let notDefined: undefined = undefined
