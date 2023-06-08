console.log("Exercise 1 loop")

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []


for (let index in names) {
    people[people.length] = { name: names[index], age: ages[index] }
}
console.log(people)

console.log("Exercise 2 (Extra Practice)")
let i = 0
while (i < names.length) {
    console.log(names[i] + " is " + ages[i] + " years old")
    i++
}

console.log("Exercise 3")
let str2Find = 'worst'
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

for (let index in posts) {
    if (posts[index].text.indexOf(str2Find) > -1) {
        posts.splice(index, 1)
    }
}

console.log(posts)

console.log("Exercise 3")
const exPosts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]
let parentID = 2
let childID = 3


console.log("Exercise 4")
for (let indexlevel1 in exPosts) {

    if (exPosts[indexlevel1].id === parentID) {
        for (let indexlevel2 in exPosts[indexlevel1].comments) {
            if (exPosts[indexlevel1].comments[indexlevel2].id === childID) {
                exPosts[indexlevel1].comments.splice(indexlevel2,1)
            }
        }
    }
}
console.log(exPosts)

console.log("Exercise Extension")
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
arrKeys = Object.keys(dictionary)
  for(let indKey in arrKeys){
    console.log("Words that begin with  " + arrKeys[indKey] + ":")
    for(let index in dictionary[arrKeys[indKey]]){
        console.log("       "+dictionary[arrKeys[indKey]][index])
    }

  }