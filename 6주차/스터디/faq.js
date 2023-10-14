const faqtitle = document.querySelectorAll(".faq-container-item");
const faqanswer = document.querySelectorAll(".faq-answer");
const title = document.querySelectorAll(".faq-title");
const arrow = document.querySelectorAll("span");
//console.log(faqtitle);

//toggle을 사용했을 때
/*for(let i = 0; i < faqtitle.length; i++){
    faqtitle[i].addEventListener("click",()=>{
       faqanswer[i].classList.toggle("active");
    });
}*/

//add와 remove를 사용했을 때
for(let i = 0; i < faqtitle.length; i++){
    faqtitle[i].addEventListener("click",()=>{
        if(faqanswer[i].classList.contains("active") === false)
        {
            faqanswer[i].classList.add("active");
            title[i].style.backgroundColor = "skyblue";
            title[i].style.color = "white";
            arrow[i].innerText = "▲"; 
        }
        else{
            faqanswer[i].classList.remove("active");
            title[i].style.backgroundColor = "white";
            title[i].style.color = "black";
            arrow[i].innerText = "▼";
        }
    });
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    for(let i = 0; i < faqtitle.length; i++){
        if(faqanswer[i].classList.contains("active") === true){
            faqanswer[i].classList.remove("active");
        }
        arrow[i].innerText = "▼";
        title[i].style.backgroundColor = "white";
        title[i].style.color = "black";
    }
});