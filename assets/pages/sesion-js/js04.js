console.log("Sesión JS04 matrices y bucles");
console.log("Ni perdon, ni olvido. Reto para Ed");

// Declaramos un arreglo de 2 dimensiones (matriz).
// Arrays anidados
// [[] , [] , []]

const personasEnCh30 = [
    [ "Luis", "Allan", "Anneth", "Maryluz"] , /* ByteMe */
    [ "Ed", "Jimena", "Marifer", "Leo", "Alejandro" ] , /* PerryCode */
    [ "Lu", "Leo", "Daniel", "Gina" ] /* BugBusters */
];

console.log(`Integrantes de BugBusters: ${personasEnCh30[2]}`); // Lu,Leo,Daniel,Gina
console.log(`Integrantes de BugBusters: ${personasEnCh30[2].join(", ")}`); // Lu, Leo, Daniel, Gina

console.log(`BugBusters integrante n.2: ${personasEnCh30[2][0]}`);

// personasEnCh30[1][3] = "Bryan";
personasEnCh30[1].splice(3, 1, "Bryan");
console.table(personasEnCh30);

// ------------- Iterando todos los elementos

for (let equipo = 0; equipo < personasEnCh30.length /*filas*/; equipo++) {
    for (let persona = 0; persona <  personasEnCh30[ equipo ].length; persona++) {
        console.log( personasEnCh30[ equipo ][ persona ] );        
    }    
}

console.log(personasEnCh30[0][2]);

for (let equipo = 0; equipo < personasEnCh30.length; equipo++) {
    // console.log(`Equipo ${equipo+1}: ${personasEnCh30[equipo]}`);
    for (let persona = 0; persona < personasEnCh30[equipo].length; persona++) {
        console.log(`Participante del equipo ${equipo+1}: ${personasEnCh30[equipo][persona]}`);
        
    }    
}

for (let persona = 0; persona < personasEnCh30[1].length; persona++) {
    console.log(`Participante en PerryCode: ${personasEnCh30[1][persona]}`);
}

// ---------------- Uso de for... of ----------------------
// Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string)
/* 
Sintaxis:
    for (const iterator of object) {
    
    }
*/
const myPet = "Kraken";

for (const character of myPet) {
    console.log(character);    
}

// Refactorizando myPet

myPet.split("").forEach( character => console.log(character));

for (const equipo of personasEnCh30){ // Arreglo de los equipos
    console.log(`Personas del equipo: ${equipo.length}`);
    for (const personas of equipo) { // Arreglo para cada persona
        console.log(personas);       
    }
}

//----------------------------- forEach --------------------------------
/*
Método que se ultiza para iterar colecciones, arreglos. Permite ejecutar 
función por cada elemento del arreglo.
*/

console.log(personasEnCh30);

function iterarArreglos (equipo, indice, arreglo){
    console.log(`Indice ${indice}: ${equipo}`);
    equipo.forEach(iterarPersonas);
    return equipo; // arreglo de cada equipo
}

function iterarPersonas(persona, indice, arreglo){
    console.log(`Indice P ${indice}: ${persona}`);
    return persona; // cada persona
}

// personasEnCh30.forEach(iterarArreglos);

personasEnCh30.forEach( (equipo, indexEquipo) => 
                equipo.forEach( (persona, indexPersona ) => 
                console.log(`Persona ${indexPersona+1} del equipo ${indexEquipo+1}: ${persona}`) ) );

//--------------------- Uso de break en ciclos -------------------------------
// break no detiene la ejecución de la iteración en curso y termino del ciclo

for (let index = 0; index < 10; index++) {
    if( index > 5 ) break;
    console.log(index); // 0 ... 5
}

// Realizar tablas de multiplicar del 1 al 5

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

console.log("=========== Uso de break ==========")
// Realizar las multiplicaciones hasta el 4

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=10; j++) {
        if (j === 5 ) break;
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

console.log("=========== Uso de break con tag ==========")
// Realizar las multiplicaciones hasta el 2*4

rompeCiclo:
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=10; j++) {
        if ( i===2 && j === 5 ) break rompeCiclo;
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

console.log("=========== Uso de continue con tag ==========")
// Realizar las multiplicaciones hasta el 3
continuaCiclo:
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=10; j++) {
        if ( j > 3 ) continue continuaCiclo;
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//--------------------- Ciclo while --------------------------
/*
Crea un bucle que ejecuta una sentencia mientras la condición especificada se cumple.

Sintaxis:
    while(condicial) sentencias;

    while(condicial){
        sentencias;
    }
*/

/* let counter = 1;

while(confirm("¿Quieres continuar?")){
    console.log(`Veces que has continuado: ${counter}`);
    counter ++;
} */

// ============== Ciclo Do-While ======================
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla. La evaluación se realiza después de ejecutar la sentencia.
 Por lo tanto, la sentencia se va a ejecutar por lo menos una vez.

 Sintaxis:

    do {
        sentencias;
    } while( condición );

*/

let valor = -2;
while ( valor < 5 ){
    console.log(`Valor en While ${valor}`); // -2, -1, 0, 1, 2, 3, 4
    valor ++;
}

valor = -2;

do{
    console.log(`Valor en doWhile ${valor}`);
    valor ++;
}while(valor < 5);