const accountId = 12121
let accountEmail = "ruchika@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
 
// accountId = 2 // not allowed
accountEmail = "mishra@gmail.com"
accountPassword = "98745"
accountCity = "Jaipur"
let accountState
/* prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountPassword,accountEmail, accountCity, accountState])