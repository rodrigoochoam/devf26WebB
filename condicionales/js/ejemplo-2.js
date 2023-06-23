// PROGRAMA PARA SABER EN QUE ETAPA DE SU VIDA SE ENCUENTRA UNA PERSONA
// SI UNA PERSONA ES MENOR O IGUAL A 11 AÑOS, ENTONCES, ES UN NIÑO.
// SI UNA PERSONA ES MAYOR A 13 AÑOS Y MENOR A 18, ENTONCES, ES UN ADOLESCENTE.
// SI UNA PERSONA ES MAYOR O IGUAL A 18 AÑOS Y MENOR A 65 ENTONCES ES UN ADULTO
// DE OTRA FORMA ES ADULTO MAYOR

// SOLICITAR DATOS

let nombreCompleto = prompt("Escribe tu nombre completo: ");
let ahoNacimiento = Number(prompt("Escribe tu año de nacimiento: "));
let ahoActual = Number(prompt("Escribe el año actual: "));

let edad = ahoActual - ahoNacimiento;
let mensaje;

//VALIDACION PARA SABER SI EL USUARIO INGRESO LOS DATOS SOLICITADOS
if (nombreCompleto == "" || ahoNacimiento == 0 || ahoActual == 0) {
    mensaje = "The hacen falta datos";
} else if(ahoNacimiento > ahoActual) {
    mensaje = "Cuidado, el año de nacimiento no puede ser mayor al actual.";
} else {
    if (edad <= 11) {
        mensaje = `Hola ${nombreCompleto}, tu eres un niño.`;
    } else if (edad > 13 && edad < 18) {
        mensaje = `Hola ${nombreCompleto}, tu eres un adolescente.`;
    } else if (edad >= 18 && edad < 65) {
        mensaje = `Hola ${nombreCompleto}, tu eres un adulto.`;
    } else if (edad >= 65) {
        mensaje = `Hola ${nombreCompleto}, tu eres un adulto mayor.`;
    } else {
        mensaje = `Hola ${nombreCompleto}, por favor escribe los números válidos.`;
    }


};

alert(mensaje);





/* ASÍ PODEMOS CONSULTAR EL TIPO DE DATO DE UN VALOR
console.log(typeof nombreCompleto) */
//Tipos de datos
// int => entero: ..., -2, -1, 0, 1 , 2, ...
// float => punto flotante ..., 3.0, 3.001, 3.0001, ....
// char => a, b, c, #, 1, $  (Un caracter)
// string => cadenas de caracteres: "hola soy un string"
// Nan => NotaNumber  tipo de dato numerico que indica que se trata de un numero invalido 

