console.log("Exercise 3 Objects")

const reservations3 = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    Te: { claimed: true }
}




const nameGuest = "bob"
//const name = prompt('Please enter the name for your reservation');


if (!(reservations3[nameGuest] === undefined)) {
    if (reservations3[nameGuest].claimed === false) {
        console.log("Wellcome '" + nameGuest + "'")
    }
    else {
        console.log("We workig about you claim '" + nameGuest + "'")
    }
} else {
    console.log("No reservation for '" + nameGuest + "'")
}

console.log("Exercise 3.1 Objects")


const reservations31 = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    Te: { claimed: true }
}


reservations31[nameGuest] = { claimed: true }


//Don't need check on 
if (reservations31[nameGuest].claimed === false) {
    console.log("Wellcome '" + nameGuest + "'")
}
else {
    console.log("We workig about you claim '" + nameGuest + "'")
}

console.log("Exercise 3.2 Objects")

const reservations32 = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    Te: { claimed: true }
}



let nameForFind = "#" + nameGuest.toUpperCase() + "#"
let joinedListReservation = "#" + Object.keys(reservations32).join("#").toUpperCase() + "#"
let indexOfName = joinedListReservation.indexOf(nameForFind)
//let isNameExists = (joinedListReservation.indexOf(nameForFind)>0)
//console.log(isNameExists)
let newName = nameGuest
console.log(nameGuest.length)


if (indexOfName > -1) {
    newName = Object.keys(reservations32).join("#").substring(indexOfName, indexOfName + nameGuest.length)
}
else {
    reservations32[newName] = { claimed: true }
}
console.log(newName)


//Don't need check on 
if (reservations32[newName].claimed === false) {
    console.log("Wellcome '" + nameGuest + "'")
}
else {
    console.log("We workig about you claim '" + nameGuest + "'")
}

console.log(reservations32)


