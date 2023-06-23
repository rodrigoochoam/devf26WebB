let current_number = 0;

while (current_number < 10) {
    current_number++;
    if (current_number % 2 === 0) {
    continue;
    }

    console.log(current_number);
}
