// del 1 al 20 ¿cuantos numeros son pares?

let contador = 0;

for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        // contador = contador + 1;
        contador++;
        console.log(`${i}, es par`);
    };
};

console.log(`Del 0 al 20, existen ${contador} numeros que son pares`)