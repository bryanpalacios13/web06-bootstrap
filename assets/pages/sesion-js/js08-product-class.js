/**
 * Clase productos
 * El nombre de las clases se realizar con UpperCamelCase
*/

class Products {
    // definimos atributos

    // El método constructor nos ayuda a instanciar un objeto 
    constructor(id, name) {
        this.name = name; // creando el atributo name y le asignamos el valor de parámetro name 
        this.id = id;
        this.createAt = new Date().getTime();
        // console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
    }

    lifeSpan() {
        return new Date().getTime() - this.createAt;
    }
}

// usando la palabra reservada "extends" podemos heredar de otra clase
class TapiocaProduct extends Products {
    /* Para encapsular un elemento, le agregamos al nombre el
    símbolo de # o _ */
    #atributoEncapsulado
    constructor(id, name, ingredients){
        /* invocando al método constructor */
        // super invoca a los atributos y métodos de la clase superior
        super(id,name);
        this.ingredients = Array.isArray (ingredients) ? ingredients : [];
        this.#atributoEncapsulado = "Solamente tengo acceso dentro de la clase";

    }

    get AtributoEncapsulado(){
        return this.#atributoEncapsulado;
    }

    set AtributoEncapsulado(nuevoValor){
        this.#atributoEncapsulado = nuevoValor;
    }
}

// exportar clases, funciones, variables, etc.
export{ Products, TapiocaProduct };

