// Write your solution in this file!
// declare customerName to be bob in global scope
// returns the customerName ✓
 //does not work if you use const or let instead of var only because the specific assingment ask for var 
 "use strict"
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'marge';

function getCustomerName(){
    return customerName
}
//modifies the customerName variable ✓ 
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}
//setBestCustomer ✓ 
function setBestCustomer(){
   bestCustomer = 'not bob';
}

//overwrites the best customer ✓
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob' ;
}
changeLeastFavoriteCustomer()
      // unsuccessfully tries to reassign the least favorite customer ✓
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "jane";
}
// dont forget to check your global scope at the top of the index.js