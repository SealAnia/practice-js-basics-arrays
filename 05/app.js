const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(checkEvenNumber);

console.log(evenNumbers);

countSum(evenNumbers);

function checkEvenNumber(number) {
    return number % 2 == 0;
}

function countSum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log('SUM = ' + sum);
    return sum;
}