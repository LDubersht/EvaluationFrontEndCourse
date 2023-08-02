var validator = require('validator');


//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log('validate foo@bar.com',validator.isEmail('foo@bar.com')); //=> true)
console.log('validate shoobert@dylan',validator.isEmail('shoobert@dylan')); //=> true)

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log('validate 786-329-9958',validator.isMobilePhone('786-329-9958','en-US'));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log('blacklist:',validator.blacklist(text,blacklist));