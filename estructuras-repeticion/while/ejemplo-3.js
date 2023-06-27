let current_number = 0;
let odd_count = 0;

while (current_number < 10) {
    current_number++;
    if (current_number % 2 === 0) {
    continue;
    };

    console.log(current_number);
    odd_count++;


};

console.log(`Del 0 al 10 existen ${odd_count} numeros impares`);


