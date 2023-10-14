const getMBTI = window.name
const enterMBTI = document.querySelector("#returnMBTI");
enterMBTI.innerHTML = `${getMBTI}는`;
const getname = "Chelsey Dietrich" ;

async function init(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new error("MBTI 정보를 가져오는 것을 실패하였습니다.");
        }
        const MBTIs = await response.json();
        displayMBTIinfo(MBTIs);
        console.log(MBTIs);
    }catch(error){
        console.log(error)
    }   
}

function displayMBTIinfo(MBTIs){
    const shows = document.querySelector("#returnInfo");
    let strings = "";
    MBTIs.forEach(mbti => {
        if(mbti.name === getname){
            strings += `name: ${mbti.name}, username: ${mbti.username}, email: ${mbti.email}`;
        }
    });
    shows.innerHTML = strings;
}
init();

