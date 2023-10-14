const ibtn = document.querySelector("#I");
const Ebtn = document.querySelector("#E");
const Sbtn = document.querySelector("#S");
const Nbtn = document.querySelector("#N");
const Fbtn = document.querySelector("#F");
const Tbtn = document.querySelector("#T");
const Jbtn = document.querySelector("#J");
const Pbtn = document.querySelector("#P");
const chMBTI = document.querySelector("#chooseMBTI");

let MBTI = "";

ibtn.addEventListener("click", () => {
    ibtn.style.backgroundColor = "#FFCB42";
    MBTI += ibtn.value;
    Ebtn.disabled = true;
    chMBTI.value += ibtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

Ebtn.addEventListener("click", () => {
    Ebtn.style.backgroundColor = "#FFCB42";
    MBTI += Ebtn.value;
    ibtn.disabled = true;
    chMBTI.value += Ebtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

Sbtn.addEventListener("click", () => {
    Sbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Sbtn.value;
    Nbtn.disabled = true;
    chMBTI.value += Sbtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

Nbtn.addEventListener("click", () => {
    Nbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Nbtn.value;
    Sbtn.disabled = true;
    chMBTI.value += Nbtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

Fbtn.addEventListener("click", () => {
    Fbtn.style.backgroundColor = "#FFCB42";
    MBTI += Fbtn.value;
    Tbtn.disabled = true;
    chMBTI.value += Fbtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

Tbtn.addEventListener("click", () => {
    Tbtn.style.backgroundColor = "#FFCB42";
    MBTI += Tbtn.value;
    Fbtn.disabled = true;
    chMBTI.value += Tbtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

Jbtn.addEventListener("click", () => {
    Jbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Jbtn.value;
    Pbtn.disabled = true;
    chMBTI.value += Jbtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

Pbtn.addEventListener("click", () => {
    Pbtn.style.backgroundColor = "rgb(237, 123, 230)";
    MBTI += Pbtn.value;
    Jbtn.disabled = true;
    chMBTI.value += Pbtn.value;
    //console.log(MBTI);
    console.log(chMBTI.value);
});

async function addMBTIsinfo(newMBTIinfo){
    try{
        const response = await fetch("http://127.0.0.1:5500/프론트-백-js/MBTI/Admin.html",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMBTIinfo),
        });
        if(!response.ok){
            throw new Error("회원가입 정보를 전송하는데 실패하였습니다.");
        }
        console.log(newMBTIinfo);
    }catch(error){
        console.log(error);
    }
}

const sendMBTI = document.querySelector("#addMBTIs");
sendMBTI.addEventListener("submit", async (e) => {
    e.preventDefault();
    const addmbtis = document.forms[0].elements[0].value;
    const addmbtiinfo = document.forms[0].elements[1].value;

    const newMBTIinfo={
        MBTI: addmbtis,
        mbtiinfo: addmbtiinfo,
    };

    console.log(newMBTIinfo);
    addMBTIsinfo(newMBTIinfo);

}); 

// const addM = document.querySelector("#addMBTIbtn");
// addM.addEventListener("click", (e)=>{
//     e.preventDefault();
//     const addmbtis = document.forms[0].elements[0].value;
//     const addmbtiinfo = document.forms[0].elements[1].value;
//     const checking = document.querySelector("#writeMBTIinfo");
//     console.log(`${addmbtis}는 ${addmbtiinfo}`);    

// })