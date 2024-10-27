// identificadores
// asignamos
// valores o datos

// Tipado débil: no hay tipos explícitos
let foo = 'Pepe'; // string
console.log('foo', foo, typeof foo);
// Tipado dinámico: puede cambiar el tipo de una variable
foo = 42; // number
console.log('foo', foo, typeof foo);
foo = true; // boolean
console.log('foo', foo, typeof foo);
foo = null; // object
console.log('foo', foo, typeof foo); // esto es un bug de JS
foo = undefined; // undefined
console.log('foo', foo, typeof foo);
foo = Symbol('a'); // symbol
console.log('foo', foo, typeof foo);
foo = 7n; // bigint
console.log('foo', foo, typeof foo);
foo = {}; // object
console.log('foo', foo, typeof foo);
foo = []; // object
console.log('foo', foo, typeof foo);

// Inmutabilidad
console.log(`
    Inmutabilidad
`);

let a = 'Pepe';
let b = a;
console.log('a', a);
console.log('b', b);
a = 'Juan';
console.log('a', a);
console.log('b', b);

// Mutabilidad
console.log(`
    Mutabilidad
`);

const c = { nombre: 'Pepe' };
const d = c;
console.log('c', c);
console.log('d', d);
c.nombre = 'Juan';
console.log('c', c);
console.log('d', d);

/* let es re-asignable
const es no re-asignable
Normalmente con variables se usa let y con objetos se usa const (para evitar machacarlos por error)
*/

console.log(`
    Let vs const
`);

let e = 'Elena';
e = 'Luisa';

const f = 'Fernando';
// f = "Francisco"; // ERROR

const g = { nombre: 'Pepe' };
g.nombre = 'Juan';

// Igualdad o identidad de objetos

const h = {};
const i = {};

console.log(h == i);
console.log(h === i);

const j = 22;
const k = 22;

console.log(j == k);
console.log(j === k);

// Declaración y asignación de variables

{
    let sample;
    console.log(sample); // undefined
    sample = 12 + 3 * 4;
}

let sample;

/* NO ES POSIBLE const sample2
Esto es por sentido común. Las constantes no se pueden reasignar así que sample2 quedaría con valor undefined durante todo el programa, lo que
no es muy útil.
Si queremos podemos hacer const sample2 = undefined pero semánticamente sería más correcto hacer const sample2 = null
*/
