//console.log("Hello, world!")
/*
  console.log("Hello, World")
  console.log("Bye, World")
*/

console.log("Exercise 1")
console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log("")
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")
console.log(undefined || null)

console.log("Exercise 2")
let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a)
console.log(b)
console.log(c)
//let username = prompt("What is your username?")
//console.log(username)

console.log("Exercise Conditional Statements")
let isBoughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if ((isBoughtTesla) && (isUSCitizen)) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
        console.log("Are you need upgrade?")
    }
    else {
        console.log("Are you happy with your car?")
    }
} else if ((!isUSCitizen) && (isBoughtTesla)) {
    console.log("Would you like to move to the US?")
} else if (!isBoughtTesla) {
    console.log("Would you will buy one?")
} else {
    console.log("Unexpected condition!")
}

console.log("Exercise Arrays")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.splice(1, 2)
numbers.splice(3, 1, 1)
numbers.splice(4, 4)
numbers.unshift(0)
console.log(numbers)

console.log("Exercise 1 Objects")

let p1 = {
    name: "Dima",
    age: 22,
    city: "Haifa"
}

let p2 = {
    name: "masha",
    age: 24,
    city: "Haifa"
}

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log(p1.name + " wanted to date " + p2.name)
    }
    else {
        console.log(p1.name + " wanted to date " + p2.name + ", but couldn’t")
    }
} else {
    console.log("Unknown situation")
}

console.log("Exercise 2 Objects")


let library = {
    books: [
        {
            title: "Fire",
            author: "Dod"
        },
        {
            title: "Water",
            author: "Sam"
        },
        {
            title: "Air",
            author: "Gin"
        }
    ]

}

console.log(library)
