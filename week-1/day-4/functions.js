console.log('Exercise 1 Fumction')

const isEven = function(number){
    if (number%2 == 1){
        return false 
    } else {
        return true
    }
}

console.log(isEven(3))
console.log(isEven(4))

console.log('Exercise 2 Fumction')

const nums = [1,2,3,4,5,6]

const printOddArray = function(numbers){
    for(let i of numbers){
        if(!isEven(i)){
            console.log("Odd: ",i)
        }
    }
}

printOddArray(nums)

console.log('Exercise 3 Fumction')


const isExistsInArray = function(numbers,findNumber){
    for(let i of numbers){
        if(i===findNumber){
            return true
        }
    }
    return false
}

console.log(isExistsInArray(nums,3))
console.log(isExistsInArray(nums,7))

console.log('Exercise 4 Fumction')

var calculator = {
    add: function(x,y){
        return (x+y)
    },
    subtract: function(x,y){
        return (x-y)
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

console.log('Exercise 5 Fumction')

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

function increaseByNameLength(money,name) {return money*name.length}
function makeRegal(name){return "His Royal Highness " + name}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"