/* function sum() {
    return 4 + 6
}

console.log(sum())

 */

function sum(value1, value2) {
    return value1 + value2
}
console.log(sum(3, 8))
console.log(sum(15,23))

/* operaciones matemáticas básicas

a + b
a - b
a * b
a / b
a % b -> residuo de una division 

*/

/*  --TIPOS DE DATOS---

'rodrigo' --> string
1 --> int
3.1416 ---> float
true, false --> boolean
[1, 2, 3, 4] --> array
{name: 'rodrigo', age: 37} --> object
null --> null

*/


var rodrigo = 24;
var victor = 37;

function restaEdades(userAge1, userAge2) {
    var MAYOR_DE_EDAD = userAge1 >= 18;
    var resta = userAge1 - userAge2
    return resta
}

console.log(restaEdades(victor, rodrigo))