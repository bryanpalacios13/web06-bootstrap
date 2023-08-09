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
personasEnCh30[1].splice(3, 0, "Bryan");
console.table(personasEnCh30);