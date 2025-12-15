

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    
    
    count += 1
    countEl.innerText = count
    
}




function save(){
    
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}



let welcomeEl = document.getElementById("welcome-el")
let name = "lokha's town "
let greeting = "welcome back to "
welcomeEl.innerText = greeting + name 

welcomeEl.innerText += "👋"