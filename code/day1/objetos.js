'use strict';

const foo = {
    name: 'Luis',
    age: 22,
    isStudent: true,
    address: {
        street: 'Calle Pez',
        number: 22,
        city: 'Madrid',
    },
};
foo.name = 'Pepe';
foo.email = 'pepe@sample.com';
console.log(foo);
delete foo.isStudent;
console.log(foo);
const property = 'age';
console.log(foo[property]);

// Propiedades anidadas

console.log(foo.baz);
console.log(foo.address.city);

// Error  Cannot read properties of undefined (reading 'address')
// console.log(foo.employee.address);

// Chain of optional properties

foo.employee = 'any';
console.log(foo.employee?.address?.postalCode);

// Arrays
const data = [1, 2, 3, 4, 5];
data[1] = 22;
console.log(data);
console.log(data[4]);
console.log(data.length);
data[100] = 100;
console.log(data.length);
data.name = 'Lista de Pepe';
console.log(data);
console.log(data.length);
console.log(data.name);

// Functions

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

sum.nombre = 'Función Suma';
console.log(sum);
console.log(sum.nombre);

// Caso real
// const app = express()
// express.parse()

// ¿Todo es un objeto?
// No, hay tipos primitivos
// Pero algunos de ellos tienen Wrapper Objects (String, Number y Boolean) y se comportan como si fueran objetos

let bar = 'Hola';
console.log(bar.any); // La lectura de propiedades no da error, simplemente devuelve undefined
//bar.any = 22;  // TypeError: Cannot create property 'any' on string 'Hola'
// Lo que pasa const objStr = new String(str);
console.log(bar.toUpperCase());
console.log(bar, typeof bar);

/*
typeof null devuelve object pero esto es un bug de JS. null no es un object porque no se le pueden asignar/leer propiedades.
Además no tiene wrapper objects.
*/
let baz = null;
// baz.any;  // TypeError: Cannot read properties of null (reading 'any')
// baz.any = 1;  // TypeError: Cannot set properties of null (setting 'any')
