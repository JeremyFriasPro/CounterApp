
let count = 0;
let countDisplay = document.getElementById("counter");
let pastEntries = document.getElementById("entries");

function addCount() {
    count += 1;
    countDisplay.innerText = count;
}

function subCount() {
    count -= 1;
    countDisplay.innerText = count;
}

function resetCount() {
    count = 0;
    countDisplay.innerText = count;
}

function save() {
    let countStr = count + " - ";
    pastEntries.textContent += countStr;
}