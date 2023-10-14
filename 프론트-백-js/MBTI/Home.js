const ibtn = document.querySelector("#I");
const Ebtn = document.querySelector("#E");
const Sbtn = document.querySelector("#S");
const Nbtn = document.querySelector("#N");
const Fbtn = document.querySelector("#F");
const Tbtn = document.querySelector("#T");
const Jbtn = document.querySelector("#J");
const Pbtn = document.querySelector("#P");

let MBTI = "";

ibtn.addEventListener("click", () => {
    ibtn.style.backgroundColor = "#FFCB42";
    MBTI += ibtn.value;
    Ebtn.disabled = true;
    console.log(MBTI);
});

Ebtn.addEventListener("click", () => {
    Ebtn.style.backgroundColor = "#FFCB42";
    MBTI += Ebtn.value;
    ibtn.disabled = true;
    console.log(MBTI);
});

Sbtn.addEventListener("click", () => {
    Sbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Sbtn.value;
    Nbtn.disabled = true;
    console.log(MBTI);
});

Nbtn.addEventListener("click", () => {
    Nbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Nbtn.value;
    Sbtn.disabled = true;
    console.log(MBTI);
});

Fbtn.addEventListener("click", () => {
    Fbtn.style.backgroundColor = "#FFCB42";
    MBTI += Fbtn.value;
    Tbtn.disabled = true;
    console.log(MBTI);
});

Tbtn.addEventListener("click", () => {
    Tbtn.style.backgroundColor = "#FFCB42";
    MBTI += Tbtn.value;
    Fbtn.disabled = true;
    console.log(MBTI);
});

Jbtn.addEventListener("click", () => {
    Jbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Jbtn.value;
    Pbtn.disabled = true;
    console.log(MBTI);
});

Pbtn.addEventListener("click", () => {
    Pbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Pbtn.value;
    Jbtn.disabled = true;
    console.log(MBTI);
});

const resultbtn = document.querySelector("#checkMBTIbtn");
resultbtn.addEventListener("click",() => {
    window.name = MBTI;
});