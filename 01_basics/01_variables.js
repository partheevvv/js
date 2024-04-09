const accountId = 146325
let accountEmail = "parthiv@gmail.com"
var accountPassword = "123456"
accountCity = "Bangalore"
let accountState;

// accountId = 2
accountEmail = "ps@gmail.com"
accountPassword = "54321"
accountCity = "Agartala"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])