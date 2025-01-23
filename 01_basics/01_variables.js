const accountId=1233;//value cannot be changed
const accountName="saving";
let email="d@gmail.com";//
var accCity="Jaipur";
accCountry="india";

let state;
/*
prefer not to use var because of issue in block scope and functional scope
*/
//accountId=5;
email="d@hotmail.com"
accCity="bangluru"
console.log(accountId);
console.table([accountId,email,accCity,accCountry,state])