let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count +=1
    countEl.innerText=count
    
}

function save(){
    let previousEntires = count + " - "
    saveEl.textContent += previousEntires
    countEl.innerText= 0
    count = 0
}