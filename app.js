//Random # generator for whole numbers range 

const randomIntBetween = ((min, max) => { //min: 5, max: 10
    return Math.floor(Math.random() * (max - min + 1) + min); //+1 added doe to random not reaching 1. If 10.999999 was the result, floor would round down to 10. 
})

console.log(randomIntBetween(1,10))