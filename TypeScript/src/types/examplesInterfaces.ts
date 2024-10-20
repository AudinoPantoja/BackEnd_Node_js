// interface de objetos
interface AppUser {
    id: number;
    name: string;
    email: string;
};

const dataUser: AppUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// interface de Array
interface PersonData {
    name: string;
    age: number;
};

let people: PersonData[] = [
    {name:'Alice', age:25},
    {name:'Bob', age:35},
    {name:'Juan', age:15},
];

console.log(dataUser, 'dataUser');
console.log(people, 'people');
console.log(people[1], 'people Bob')