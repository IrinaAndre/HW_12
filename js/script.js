const number = +prompt('Please enter a number');

if (number <= 1){
    console.log(`${number} //false`)
} else if (number == 2){
    console.log(`${number} //true`)
} else {
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            console.log(`${number} //false`)
            break;
        } else {
            console.log(`${number} //true`)
        }
    }
}