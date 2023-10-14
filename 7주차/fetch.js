async function fetchSignipinfo(){
    try{
        const response = await fetch("http://localhost:3000/users");
        if(!response.ok){
            throw new Error("회원 가입 정보를 가져오는 것을 실패하였습니다.");
        }
        const data = await response.json();
        displaySignInfo(data);
    }catch(error){
        console.log(error);
    }
}

function displaySignInfo(data){
    const signupInfoDiv = document.getElementById("checkAPI");
    signupInfoDiv.innerHTML = `
        <h2>회원가입 정보</h2>
    `;

    data.forEach((info) => {
        const signupData = document.createElement("div");
        signupData.innerHTML = `
            <p>사용자명 : ${info.username}</p>
            <p>이메일 : ${info.email}</p>
            <p>비밀번호 : ${info.password}</p>
            <hr>
        `;
        signupInfoDiv.appendChild(signupData);
    });
}

fetchSignipinfo();

async function addSignInfo(newsigninfo){
    try{
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newsigninfo),
        });
        if(!response.ok){
            throw new Error("회원가입 정보를 전송하는데 실패하였습니다.");
        }
        console.log("회원가입 완료");
    }catch(error){
        console.log(error);
    }
}

const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const newSignupInfo={
        username: username,
        email: email,
        password: password,
    };

    await addSignInfo(newSignupInfo);

    await fetchSignipinfo();
}); 