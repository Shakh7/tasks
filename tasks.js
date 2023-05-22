// Good part of the day!
// Thank you for your time and attention.


// task 1
function filterNumbers(inputArray) {
    if (!inputArray) return [];
    return inputArray.filter(x => typeof x === 'number' && x >= 0);
}

console.log(filterNumbers([-1, 2, 'cat', false, 5, true, 'dog']));


// task 2
function accum(inputString) {
    if (!inputString) return '';
    return inputString
        .split('').map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
        .join('-');
}

console.log(accum('abcd'));


// task 3
const products = [
    {name: 'Футболка', price: 20, quantity: 2},
    {name: 'Джинсы', price: 50, quantity: 1},
    {name: 'Носки', price: 5, quantity: 10},
    {name: 'Штаны', price: 30, quantity: 1}
];

function calculateRevenue(products) {
    if (!products) return 0;
    return products.map(x => x.price * x.quantity).reduce((a, b) => a + b);
}

console.log(calculateRevenue(products));

