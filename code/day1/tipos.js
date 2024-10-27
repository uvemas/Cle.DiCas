// String
let nombre = 'Juan';
let apellido = 'Perez';

// template strings (ES6)
let fullName = `${nombre} ${apellido}`;
console.log(fullName);

// Sin template string -> concatenación
fullName = nombre + ' ' + apellido;

// Number
let edad = 22;
let precio = 12.34;
let deuda = -10_000_000_000;
console.log(deuda);

console.log(Number.MAX_VALUE); // 1.7976931348623157e308;
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE * 2);
console.log(-Number.MAX_VALUE * 2);

console.log(3 / 0);
console.log(0 / 5);

/* isNaN() 
For number values, isNaN() tests if the number is the value NaN. 
When the argument to the isNaN() function is not of type Number, the value is first coerced to a number, and the resulting value is then compared against NaN.
El problema es que no tenemos control sobre como se hace la coerción y puede devolver resultados inesperados:
- an empty string is coerced to 0. Esperado. isNaN() returns false
- a boolean is coerced to 0 or 1. Esperado. isNaN() returns false. 
- string * number is coerced to NaN. Inesperado. isNaN() returns true
Esto da lugar a confusión!

The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a 
more robust version of the original, global isNaN() function.
Alternatively, the expression x !== x can be used, and neither of the solutions is subject to the false positives that make the global isNaN() unreliable.

To test if a value is a number, use typeof x === "number".
*/
console.log('>>>>> Testing isNaN() y Number.isNaN() >>>>>');
console.log('undefined', isNaN(undefined), Number.isNaN(undefined)); // falso positivo. Hay que usar Number.isNaN()
console.log('100F', isNaN('100F'), Number.isNaN('100F')); // falso positivo. Hay que usar Number.isNaN()
console.log('||', isNaN(''), Number.isNaN(''));
console.log('false', isNaN(false), Number.isNaN(false));
console.log('true', isNaN(true), Number.isNaN(true));
console.log('Juan * 2', isNaN('Juan' * 2), Number.isNaN('Juan' * 2));
console.log('<<<<< Testing isNaN() y Number.isNaN() <<<<<');

/* Precisión en números enteros
La precisión no se mantiene más allá de las constantes MAX_SAFE_INTEGER y MIN_SAFE_INTEGER
*/
console.log('>>>>> Precisión en números enteros >>>>>');
console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991
console.log(Number.MIN_SAFE_INTEGER); // -9_007_199_254_740_991

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

// BigInt
let bigInt = 9_007_199_254_740_991n;
console.log(bigInt);
console.log(bigInt + 1n);
console.log(bigInt + 2n);
console.log('>>>>> Precisión en números enteros >>>>>');

// Booleans

let isGreater = 4 > 1; // true
let isLess = 4 < 1; // false

// Casting de tipos
console.log('>>>>> Casting de tipos >>>>>');
let num = '12';
let num2 = '3';
console.log(typeof num, typeof num2);
console.log(num * num2);
console.log(typeof num, typeof num2);
console.log([] * []);
console.log([12] * [12]);
console.log([12, 4] * [12, 7]);
console.log({} * {});
console.log('<<<<< Casting de tipos <<<<<');

// Casting en la suma
console.log('>>>>> Casting en la suma >>>>>');
let n1 = '12';
let n2 = 3;
console.log(typeof n1, typeof n2);
console.log(n1 + n2);

console.log(Number(n1) + Number(n2));
console.log(+n1 + +n2);
console.log('<<<<< Casting en la suma <<<<<');

// Casting en los booleanos
console.log('>>>>> Casting en booleanos >>>>>');

// Falsy

// false 0 -0 0n '' null undefined NaN

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy

// Todo lo demás

let x = 0;
if (x) {
    console.log('Truthy');
}
x = 1;
if (x) {
    console.log('Truthy', x);
}
console.log('<<<<< Casting en booleanos <<<<<');

/* undefined - null
undefined es el único valor del tipo primitivo undefined
null es el único valor del tipo primitivo null
*/

let z; // undefined es generado por el sistema
let y = null; // null es asignado por el programador
z = undefined; // no es habitual asignar undefined
