
console.log(Number.MAX_SAFE_INTEGER) // Biggest numer / no decimal - 9 quadrillion 2 to the power of 53 - 1 (9007199254740991).
console.log(Math.pow(2, 53)-1) // Biggest numer / no decimal - 9 quadrillion 2 to the power of 53 - 1.
console.log(Math.pow(2, 53)) // Number can be displayed, but not calculated.
console.log(Math.pow(2, 53)+1) // Number does not increase from previous result.
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)

console.log(.2 + .4) // = 0.6000000000000001 (toFixed()) could be used to limit the decimal places 

console.log((5).toString(2))
console.log((1/5).toString(2))
console.log(.2.toFixed(20))
console.log((.2 + .4).toFixed(2))

console.log(9007199254740991n)