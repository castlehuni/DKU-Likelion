const currentD = document.querySelector("#todayDate");

// 오늘 날짜 정보 저장
let today = new Date();
let years = today.getFullYear();
let months = today.getMonth() + 1; //getMonth()는 0부터 시작하므로 1을 더해줘야 함
let dates = today.getDate();
let days1 = today.getDay();

// months and dates가 10보다 작으면 0 추가
if(months < 10){
    months = "0" + months;
}
else{
    months = months;
}
if(dates < 10){
    dates = "0" + dates;
}
else{
    dates = dates;
}

// 오늘 날짜를 입력하기 위한 변수
let days2 = " "; 

// getday에서 숫자에 따른 각각의 요일 저장 
switch(days1){
    case 0:
        days2 = "SUN"; break;
    case 1:
        days2 = "MON"; break;
    case 2:
        days2 = "THU"; break;
    case 3:
        days2 = "WED"; break;
    case 4:
        days2 = "THUR"; break;
    case 5:
        days2 = "FRI"; break;
    case 6:
        days2 = "SAT"; break;
}

// 오늘 년/월/일/요일 저장
currentD.innerText = `${years} - ${months} - ${dates} ${days2}`;

const currentT = document.querySelector("#liveTimes");

// 시간 저장
function times(){  
    let ltime = new Date();
    let lhours = ltime.getHours();
    let lmins = ltime.getMinutes();
    let lsecs = ltime.getSeconds();
    let period = "AM";

    // AM or PM 결정 및 시간 0~12시로 결정
    if(lhours === 0){
        lhours = 12;
    }
    else if(lhours > 12){
        lhours = lhours - 12;
        period = "PM";
    }
    
    // 10 이하의 숫자에다 0 붙이기
    if(lhours < 10){
        lhours = "0" + lhours;
    }
    else{
        lhours = lhours;
    }
    if(lmins < 10){
        lmins = "0" + lmins;
    }
    else{
        lmins = lmins;
    }
    if(lsecs < 10){
        lsecs = "0" + lsecs;
    }
    else{
        lsecs = lsecs;
    }

    currentT.innerText = `${lhours} : ${lmins} : ${lsecs} ${period}`;
}

setInterval(times, 1000);