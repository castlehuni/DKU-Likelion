const number = document.querySelectorAll(".num"); // querySelectorAll을 통해 클래스로 된 숫자를 모두 불러오기
const show = document.querySelector("#result");
let calcResult="";

number.forEach((num) => {
    num.addEventListener("click", (e)=>{
        calcResult += e.target.value;
        show.innerText = calcResult;
    })
}); // forEach를 통해 배열 값을 정렬 후 클릭 이벤트 발생 시 계산을 위한 값을 넣어줌

const acbtn = document.querySelector("#ac"); 

acbtn.addEventListener("click",()=>{
    calcResult = "";
    show.innerText = 0;
}); // ac버튼 눌렀을 때 초기화 및 0이 나오게

const oper = document.querySelectorAll(".op"); // querySelectorAll을 통해 클래스로 된 연산자들을 모두 불러오기
const equer = document.querySelector("#calc");

oper.forEach((op) => {
    op.addEventListener("click", (e)=>{
        calcResult += e.target.value;
        show.innerText = calcResult;
    })
}); // 연산자 추가를 위한 forEach

equer.addEventListener("click", ()=>{
    show.innerText = eval(calcResult);
    calcResult = eval(calcResult);
}); // eval을 통한 계산하기
