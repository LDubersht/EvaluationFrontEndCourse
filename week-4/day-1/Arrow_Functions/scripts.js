const square = (num) => console.log(num * num);
square(4)

const getFormalTitle = (title, names) => title + " "  + names
formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"

const suspenseBuilder1 = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name 1 in 3 seconds...")

        setTimeout(function () { //normal function
            console.log("The name 1 is: " + this.name)
        }, 3000)

    }
}

suspenseBuilder1.displayName()

const suspenseBuilder2 = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name 2 in 3 seconds...")

        setTimeout(() => { //this is the change
            this.name = this.name + "suff"
            console.log("The name 2 is: " + this.name)
        }, 3000)

    }
}

suspenseBuilder2.displayName()