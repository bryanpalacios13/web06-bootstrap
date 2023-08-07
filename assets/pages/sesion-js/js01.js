console.log("Bievenido a la sesión Js 01");

// 7 datos primitivos
// Numbers, string, boolean, null, bigint, undefined, symbol

// Tipos de datos en Js:
// Datos primitivos y no primitivos

//No primitivos
//Object: Datos que tienen atributos y métodos. (arrays)

// tipo de dato string
const stringData = "Holi crayoli";
console.log( stringData );

// tipo de dato number
// números positivos, negativos, decimales, NaN, +Infinity, -Infinity
// para un salto de línea se puede utilizar \n, pero en template string no es necesario
console.log( `Tipos de datos number: \n${12}, ${-6}, ${0.456}, ${5*"Hola"}, ${45/0}, ${-45/0}` );

console.log( `Valor máximo representable en JavaScript: ${ Number.MAX_VALUE}` ); // 1.7976931348623157e+308
console.log( `Si el valor es mayor a MAX_VALUE como 1.79e310: ${1.79e310}` );
console.log( `Valor (entero) máximo seguro en JavaScript: ${ Number.MAX_SAFE_INTEGER}` ); // 9007199254740991


// Perdida de precisión en los datos.
// Cuando se realizan operaciones que exceden los límitis de MAX_SAFE_INTEGER
// se produce una pérdida de precisión.
console.log( `MAX_SAFE_INTEGER + 1: ${ Number.MAX_SAFE_INTEGER + 1}` ); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${ Number.MAX_SAFE_INTEGER + 2}` ); // 9007199254740992 (incorrecto)
console.log( `MAX_SAFE_INTEGER + 3: ${ Number.MAX_SAFE_INTEGER + 3}` ); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${ Number.MAX_SAFE_INTEGER + 4}` ); // 9007199254740996 (incorrecto)
console.log( `MAX_SAFE_INTEGER + 5: ${ Number.MAX_SAFE_INTEGER + 5}` ); // 9007199254740996

//tipos de datos BigInt
// sirven para representar valores numéricos enteros, de los que el tipo number
// no puede representar
console.log( "Operaciones con BigInt" );
const myBigInt = 9007199254740991n;
console.log( `MAX_SAFE_INTEGER + 1: ${ myBigInt + 1n}` ); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${ myBigInt + 2n}` ); // 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${ myBigInt + 3n}` ); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${ myBigInt + 4n}` ); // 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${ myBigInt + 5n}` ); // 9007199254740996

// tipo de dato boolean
// se tienen dos estados: true/false
console.log( `Tipo de dato verdadero: ${true}` );
console.log( `Tipo de dato falso: ${false}` );

// Tipo de dato undefined
// una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log( `Tipo de dato undefined: ${myVar}` );

// Tipo de dato null
// una variable que intensionalmente se borra el tipo de dato
let myVarNull; // undefined
console.log( `Tipos de dato myVarNull: ${typeof myVarNull}` ); //undefined
myVarNull = "No me gusta YLE";
console.log( `Tipos de dato myVarNull: ${typeof myVarNull}` ); // string
myVarNull = null; // se borra el valor de la variable
console.log( `Tipos de dato myVarNull: ${typeof myVarNull}` ); // object: porque es un error del lenguaje
console.log( `¿myVarNull es null?: ${myVarNull === null }` );

// tipo de dato symbol
// representa un valor único que se puede utilizar como clave en objetos o identificador único
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log( `mySymbol === mySymbol2 ${mySymbol === mySymbol2}` );

const myObj = {
    clave: "valor",
    // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    [mySymbol]: 16,  // es importante que el simbolo se ocupe entre corchetes
    myKey : 123,
    [myKey]: 567,
}
console.log( myObj );