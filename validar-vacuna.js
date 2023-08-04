//Crear una función que reciba un objeto literal con nombre y edad de una persona, 
//la función debe validar si la edad aceptado para recibir la vacuna que debe ser 
//para menores a 5 anos o mayor a 65. La salida de la función es un string de
//aceptado y no aceptado.
let person = {name:"sonia", age:21}

function validarvacuna(literalObject){
    if (literalObject.age<5 || literalObject.age>65){
        return `${literalObject.name}  aprobado`
    }
    return `${literalObject.name} no es aprobado`
}

let result = validarvacuna(person);

alert(result);
