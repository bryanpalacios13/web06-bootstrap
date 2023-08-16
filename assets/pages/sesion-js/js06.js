console.log("Sesión JS06 Manipulación del DOM");

// Modificar un elemento HTML por medio de su ID
const findELementById = () => {
    const title = document.getElementById("title");
    console.log(title);
    console.log(typeof(title)); // Object
    console.log(title.innerHTML); // Sesión X
    // title.innerHTML = `Generation - Sesión Js 06`;
    title.innerHTML = ` <span id="generation" class="text-primary"> Generation </span> - Sesión JS06 `;
}

findELementById();

// ---------------- Encontrar elementos por su etiqueta (tag) -----------------

const changeElementByTagName = () => {
    const unorderList = document.getElementsByTagName("li"); // Colección de elementos
    console.log( unorderList ); // HTML Collection

    for (const listItem of unorderList) {
        listItem.innerHTML = `<span class="text-success fs-6"> ${listItem.innerHTML} 👍  </span>`;
    }
}

changeElementByTagName();

// -------------------- Uso de selector universal -----------------
// querySelector

const findElementByQuerySelector = () => {
    // const element = document.querySelector('#title'); // seleccionar por ID
    // const element = document.querySelector(".text-warning"); // seleccionar por clase
    // const element = document.querySelector("ul"); // seleccionar por tag
    // const element = document.querySelector("il"); // seleccionar por tag
    const element = document.querySelector("h1 span"); // seleccionar por tag
    
    console.log (element);
}

findElementByQuerySelector();

//------------------ crear nuevo elemento HTML --------------------------------
// appendChild

const newElement = () => {
    const newElement = document.createElement ("div"); // <p></p>
    
    newElement.innerHTML = `La CH30 le gusta: 
    <ul>
        <li> Helado </li>
        <li> Chisme </li>
        <li> Corridos tumbados </li>
        <li> Escuchar a Mau </li>
        <li> Ser mejores amigos de Anneth </li>
    </ul>
    `;

    const descriptionCH30 = document.querySelector("#descriptionCH30");
    descriptionCH30.appendChild( newElement );
}

newElement();

// ----------- cambiar el color de texto --------------
// style.color

const changeColor = (color) =>{
    const descriptionCH30 = document.getElementById("descriptionCH30");
    descriptionCH30.style.color = color;
    descriptionCH30.style.border = `thin solid ${color}`;
}

changeColor("beige");

// --------------------- Propiedades de visualización ------------------------
//                         Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility : hidden (ocultar el elemento)

const getReferenceTitleGeneration = () => {
    return document.getElementById("generation");
}

const displayNoneElement = () => {
    const generation = getReferenceTitleGeneration();
    generation.style.display = "none"; // quitar el elemento
}
const hiddenElement = () => {
    const generation = getReferenceTitleGeneration();
    generation.style.visibility = "hidden"; // ocultar el elemento
}
const resetElements = () => {
    const generation = getReferenceTitleGeneration();
    generation.style.visibility = "visible";
    generation.style.display = "inline";
}