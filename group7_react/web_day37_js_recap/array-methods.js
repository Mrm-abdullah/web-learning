const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// map kora hoy retun korar jonno
const brands = products.map(product => product.brand); 
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

// filter kora hoy retun na korar jonno
products.forEach(product => {

})


// 3. filter sorto onujayi retun korar jonno
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

// filter ar moto but pothom ta k dekhabe.
//4. find
const special = products.find(p => p.name.includes('n'));
console.log(special);


