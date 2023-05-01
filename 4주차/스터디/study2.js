const Plusbtn = document.getElementById("plus");
const Minusbtn = document.getElementById("minus");
let num1 = document.querySelector("#num");

let counter = num1.innerHTML;

Plusbtn.addEventListener("click", () => {
    counter++;
    num1.innerHTML = counter;
});

Minusbtn.addEventListener("click", () => {
    counter--;
    num1.innerHTML = counter;
});

const title = document.querySelector("h2");

function changeTitle(){
    title.style.color = "orange";
    title.style.fontSize = "30px";
    title.style.backgroundColor = "lightblue";
}

title.addEventListener("click", changeTitle)
