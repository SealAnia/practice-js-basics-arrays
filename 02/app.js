const randomArray = createRandomArray();
console.log(randomArray);



// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for(let i=0; i<len; i++) {
        arr.push( getRandomInteger(1, 100) );
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

console.log('TURA Z FOR');

for(let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
}

console.log('TURA Z FOR EACH');

randomArray.forEach(function(element, index, array) {
    console.log(element);
});

console.log('The last index is ' + randomArray[randomArray.length - 1]);