//Random # generator for whole numbers range 

const randomIntBetween = ((min, max) => { //min: 5, max: 10
    return Math.floor(Math.random() * (max - min + 1) + min); //+1 added doe to random not reaching 1. If 10.999999 was the result, floor would round down to 10. 
})

// console.log(randomIntBetween(3,10))

// Strings - Tagged Templates

const name =  'Joseph';

// console.log(`My name is ${name}.`)

const productDescription = ((strings, productName, productPrice) => { //first part is array of non dynamic items. Dynamic segments are passed in as additional arguments into function
    console.log(strings)
    console.log(productName)
    console.log(productPrice)
    let priceCategory = 'pretty cheap regarding its price';
    if (productPrice > 20) {
        priceCategory = 'fairly priced'
    }
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
    return {mane: productName, price:productPrice} // can return an object
})

const prodName = 'JavaScript Course'
const prodPrice = 29.99

// const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`
// console.log(productOutput)

const userInput = 'testtest.com'

// console.log(userInput.includes('@'))

const regex = /^\S+@\S+\.\S+$/
console.log(regex.test(userInput))
console.log(regex.test('test@test.com'))