const countBox = 12
const container = document.getElementById("container")
const result = document.getElementById("res")

//event handler
const addBox = function(conteiner,i) {
    let box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor='#FF0';
    box.onmouseover = function(){box.style.backgroundColor="red";};
    box.onmouseout = function(){box.style.backgroundColor="green";};
    container.appendChild(box);
}

const fncCheck = function(){
    let clrBoxColor="green";
    let res =true
    for(var child=container.firstChild; child!==null; child=child.nextSibling) {
        if (child.nodeName == "DIV"){
            if (child.style.backgroundColor!=clrBoxColor)
            res = res & false;
        }
    }
    if (res) {result.innerHTML = "Nice job!"}
}

for(let i = 0; i < countBox; i++) {
    addBox(container,i);
}

document.body.onmousedown = function(){fncCheck()}
