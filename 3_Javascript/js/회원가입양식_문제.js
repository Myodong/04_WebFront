const inputId = document.getElementById("inputId"); // 입력받은 아이디 값가져오기

inputId.addEventListener("input", function(){  

    const regEx =/^[a-z][a-zA-Z\d\-\_]{6,14}$/; //정규표현식

    if(regEx.test(inputId.value)){ //조건과 일치할때

    inputId.style.backgroundColor ="springgreen";

    } else { //조건과 일치하지않을때
        inputId.style.backgroundColor ="red";
        inputId.style.color ="white";
    }
})

const inputPw =document.getElementById("inputPw");
const inputPwConfirm =document.getElementById("inputPwConfirm");
const pwMessage =document.getElementById("pwMessage");

inputPwConfirm.addEventListener("keyup",function(){ //비밀번호 확인 작성인 상태

    if(inputPw.value.trim().length == 0){ // 비밀번호 미입력상태일태 비밀번호 작성
        inputPwConfirm.value="";                    // 비밀번호 내용 삭제
        alert("비밀번호를 입력해주세요");           // 메세지 출려
        inputPw.focus();   // 포커스 이동 
    }
})
