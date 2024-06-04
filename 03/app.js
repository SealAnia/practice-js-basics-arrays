const n = 24;
const oddNumbers = [];

function createArray(arr) {
    const len = getRandomInteger(1, n)
    console.log('LENGTH = ' + len);

    for(let i = 0; i < len; i++) {

        let m;

        while((m % 2 == 1) == false) {
            m = getRandomInteger(1, 100);
        }

        arr.push(m);

    }
    console.log(arr);
    return arr;
}


function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

createArray(oddNumbers);