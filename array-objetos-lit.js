//Crear un array con objetos literales, pasar a una funcion como parametro e imprimir la infomracion 
//en pantalla cada elemento del array.
//ejemplo:
//const estudiantes = [{nombre: "Juan", edad: 34},{nombre: "Luis", edad: 25}];
//Salida:
//Mi nombre es Juan y tengo 34 anios
//Mi nombre es Luis y tengo 25 anios
//Nota: Usar FOR
let alumnos= [{nombre: "jose", edad: 22},{nombre: "catia", edad: 39}];

function Students(array){
    let message = "";
    for (let i =0; i<array.length;i++){
        message += "Mi nombre es " + alumnos[i].nombre + " y tengo " + alumnos[i].edad + " años \n";
    }
    return message;
}

let lista = Students(alumnos);

console.log(lista)
