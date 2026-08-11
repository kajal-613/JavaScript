const accountId = 144553
let accountEmail = "kajal@gmail.com"
var accountPassword = "1234"
accountCity = "mumbai"
let accountState; // output is undefined 

console.log(accountId)

accountEmail = "tc@gmail.com"//o/p changes
accountPassword = 4321// changes 
accountCity = "pune" // changes 


console.table([accountId,accountEmail,accountPassword,accountState, accountCity])
 
// use const , let ... avoid using var beacuse of it's issue in block scope and functional scope
