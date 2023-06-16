// PROGRAMA PARA SABER EN QUE ETAPA DE SU VIDA SE ENCUENTRA UNA PERSONA
// 
// SOLICITAR DATOS

let nombreCompleto = prompt("Escribe tu nombre completo: ");
let ahoNacimiento = Number(prompt("Escribe tu año de nacimiento: "));
let ahoActual = Number(prompt("Escribe el año actual: "));

let edad = ahoActual - ahoNacimiento

//VALIDACION PARA SABER SI EL USUARIO INGRESO LOS DATOS SOLICITADOS
if (nombreCompleto == "" || ahoNacimiento == 0 || ahoActual == 0) {
    let mensaje = "The hacen falta datos";
}













/* ASÍ PODEMOS CONSULTAR EL TIPO DE DATO DE UN VALOR
console.log(typeof nombreCompleto) */
//Tipos de datos
// int => entero: ..., -2, -1, 0, 1 , 2, ...
// float => punto flotante ..., 3.0, 3.001, 3.0001, ....
// char => a, b, c, #, 1, $  (Un caracter)
// string => cadenas de caracteres: "hola soy un string"
// Nan => NotaNumber  tipo de dato numerico que indica que se trata de un numero invalido 

