console.log("Sesión Js 05 Condicones y Expresiones");

// -------------------- Operadores aritméticos ---------------------
/*
    adición +
    multiplicación *
    substracción -
    división /
    resto %
    exponencial ** - Math.pow(2,3) 2**3
*/

// ------------------- Precedencia de operadores -------------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const operaciones = 5 * 2 + 3 ** 2 - 4; // 15
console.log(operaciones);
console.log( 4 % 3 + 2 * 3 / 2 - 1); // 3

// ----------------- Operador de asignación ----------------------
/*
Asigna un valor a su operador izquierdo basándose en el valor de su
operando derecho:

    asiganción =

Operadores abreviados (compuestos): 
    op1 += op2  -> op1 = op1 + op2
    op1 -= op2  -> op1 = op1 - op2
    op1 *= op2  -> op1 = op1 * op2

*/

let asignacion = 3;
console.log( asignacion += 3 * 3 ** 3 + 10 );
console.log( 2 ** 3 ** 2 ); // 512

// ---------------- Operadores unarios -----------------
// Solo actuan sobre un operando
// Negación 

let numero = 3;
let dinero = - numero; // -3

// Conversión numérica
let pago = + numero
let intereses = + "5.23"; // Lo cenvertira en un numerico
console.log(typeof(intereses));
intereses = 3;
console.log( intereses += 5 + + "3" );

// Operador lógico not
let isActive = !true; // false

// Operador de incremento y decremento en unidad.
/*  
    ++ valor 
    -- valor

    Operador post-decremento y post-incremento
    valor ++
    valor -- 
*/

let number = 10;
++ number; // preincremento
console.log( number ); // 11
number ++; // postincremento
console.log( number ); // 12

number = 20;
console.log( ++ number ); // 21
console.log( number ++ ); // 22
console.log( number ); // 23

let index = 0;
for ( ; index < 5; index++) {
    console.log(index);
}

console.log("valor index: " + index); // 5

let a = 0, b = 0;
for ( ; a < 3; b = a++) {
    console.log(a,b);
}

console.log(a, b); // 3, 2

let x = 3;
let y = ++x;
console.log(`x : ${x++} y : ${ ++y }`); // 4, 5
console.log(`x : ${ x } y : ${ y }`); // 5, 5

// ------------------- Operadores lógicos && y || ------------------------
/*
También son conocidos como operadores de corto circuito (short-circuit operators).
 && : La evaluación se detiene tan pronto como se encuentra un operador falso.
        Ya no se evalua el segundo operando y se retorna la expresion de OP1.
OP1 && OP2 Si OP1 es verdadero, se realiza la expresión de OP2.

||  : Si OP1 es verdadero, se realiza la expresión de OP1, no se realiza la
expresión de OP2

*/

const va = true, vb = true, vc = true; // const va, const vb, const vc
const n1 = n2 = n3 = true; // const n1, var n2, var n3

console.log( va || vb && vc ); // true
console.log( va && "Holi" ); // Holi
console.log( !vb && "Holi" ); // false
console.log( NaN && "Holi" ); // NaN
console.log( "false" && "Holi" ); // true
console.log( "" && "Activado" ); // ""
console.log( "Activado" || papasFritas ); // ""

const personas = {
    name : "Leo",
    lasname : "Ronaldo",
    age : 25, 
}

console.log(`Nombre ${personas.name}`);
console.log(`Nombre ${personas["name"]}`);

// const ocupation = personas.ocupation === undefined ? "Ingeniero software" : "Sin ocupación"; // Ingeniero software

const ocupation = personas.ocupation || "Ingeniero software";
console.log(`Ocupación: ${ocupation}`);