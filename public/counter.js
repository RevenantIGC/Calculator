const sumDisplay = document.getElementById("display");
let count = 0;
sumDisplay.innerHTML = count;

function plusTwo() {
    count += 2
    sumDisplay.innerHTML = count;
}

function clearDisplay() {
    count = 0
    sumDisplay.innerHTML = count;
}



