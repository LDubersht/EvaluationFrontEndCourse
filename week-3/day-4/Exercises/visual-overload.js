const countBox = 18
const container = document.getElementById("container")

const addBox = function(conteiner,i) {
    let box = document.createElement("div")
    box.className = "box"
    box.onmouseover = function(){box.style.backgroundColor="red";};;
    box.onmouseout = function(){box.style.backgroundColor="green";};;
    container.appendChild(box)
}


for(let i = 0; i < countBox; i++) {
    addBox(container,i)
}