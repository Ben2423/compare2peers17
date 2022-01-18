/* @param {Number} min 
* @param {Number} max 
* @returns Random number with min and max limits (excluding max value).
*/

function randomNumber(min = 0,max = 0){
 return Math.floor(Math.random() * (max - min)) + min
}

function formatPrice(value){
 return parseInt(value).toLocaleString('en-US', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 0
 })
}

export { 
 randomNumber,
 formatPrice
}