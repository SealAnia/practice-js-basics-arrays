const years = [1980, 1934, 2002, 2019];

console.log(new Date().getFullYear());

const dateDifferences = years.map(getDateDifference);
console.log(dateDifferences);

function getDateDifference(element) {
    return new Date().getFullYear() - element;
}