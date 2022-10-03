let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count=0;
let number = document.getElementById("result");

function increment(){
    count++;
    number.innerText = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
