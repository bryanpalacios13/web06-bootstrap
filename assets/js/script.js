console.log("Página en construcción con Patricio Estrella");

function clickPatricio() {
    alert ("La mayonesa es un instrumento? xd");
}

function changeColor( elementHTML, color){
    alert(" Que emocion, voy a cambiar mi color");
    console.log(elementHTML);
    console.log(color);

    elementHTML.style.color = color;
}

function changeColorWithPromt(elementHTML){
    const color = prompt("Dime el color al que desees:");
    elementHTML.innerHTML = "<h3>Ahora soy <em>" + color + "</em></h3>";
    changeColor(elementHTML, color);
}

function changeAll(elementHTML){
    alert("Se reestableceran todos los colores");
}

function changeName(){
    const userName = prompt("Escribe tu nombre cholo", "Machete");
    const refGretting = document.getElementById("gretting");
    refGretting.innerHTML = `Hola ${userName}`;
}