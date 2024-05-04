// object property short hand

const name = 'Ashis'
const userAge = 34

const user = {
    name, // property short hand - property does match with its value 
    age: userAge,
    location: "Sammamish, WA"
}

console.log(user);

// object de-structure
const product = {
    label: "red note book",
    price: 3,
    stock: 100,
    salesPrice: undefined
}

const price = product.price
console.log(price)

// de-structuring it and we can rename it
const {stock, label: productLabel} = product
console.log(productLabel, stock)

// now we can de-structure inside a method parameter and we can assign to default if it is undefined
const discount = ({price} = {}) => {
    const discountValue = price * 0.2;
    console.log(price, discountValue);
} 
discount({});