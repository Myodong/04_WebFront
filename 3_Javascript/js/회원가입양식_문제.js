
//아이디 
const inputId = document.getElementById("inputId"); // 입력받은 아이디 값가져오기

inputId.addEventListener("change", function(){  

    const regEx =/^[a-z][a-zA-Z\d\-\_]{6,14}$/; //정규표현식

    if(regEx.test(inputId.value)){ //조건과 일치할때

    inputId.style.backgroundColor ="springgreen";

    } else { //조건과 일치하지않을때
        inputId.style.backgroundColor ="red";
        inputId.style.color ="white";
    }
})

// 비밀번호
const inputPw =document.getElementById("inputPw");
const inputPwConfirm =document.getElementById("inputPwConfirm");
const pwMessage =document.getElementById("pwMessage");

inputPwConfirm.addEventListener("keyup",function(){ //비밀번호 확인 작성인 상태

    if(inputPw.value.trim().length == 0){           // 비밀번호 미입력상태일태 비밀번호 작성
        inputPwConfirm.value="";                    // 비밀번호 내용 삭제
        alert("비밀번호를 입력해주세요");           // 메세지 출려
        inputPw.focus();   // 포커스 이동 
    }
})

inputPwConfirm.addEventListener("keyup",function(){

    if(inputPwConfirm.value==inputPw.value){
        pwMessage.innerText="비밀번호 일치";
        pwMessage.classList.remove("error");
        pwMessage.classList.add("confirm");

    } else{
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.classList.remove("confirm");
        pwMessage.classList.add("error");
    }
})

inputPw.addEventListener("keyup",function(){

    if(inputPwConfirm.value==inputPw.value){
        pwMessage.innerText="비밀번호 일치";
        pwMessage.classList.remove("error");
        pwMessage.classList.add("confirm");

    } else{
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.classList.remove("confirm");
        pwMessage.classList.add("error");
    }
})

// 이름
const inputName = document.getElementById("inputName"); // 입력값을 가져옴
const nameMessage = document.getElementById("nameMessage"); // 입력값을 가져옴


inputName.addEventListener("change",function(){

    const regEx = /^[가-힣]{2,5}$/;

    if(regEx.test(inputName.value)){ //조건이 맞을때
        nameMessage.innerText="정상입력"
        nameMessage.classList.remove("error");
        nameMessage.classList.add("confirm");
        
    } else {
        nameMessage.innerText="한글만 입력하세요";
        nameMessage.classList.remove("confirm");
        nameMessage.classList.add("error");
    }

})


function validate() {

    // 성별이 선택되지 않은 경우
    // 방법 1
    const gender = document.getElementsByName("gender");
    if(!gender[0].checked && !gender[1].checked){
        alert("성별을 선택해주세요")
        return false;
    }
    // 방법 2
    // const gender = document.querySelector("input[name='gender']:checked");
    // if(gender == null){
    //     alert("성별을 선택해주세요");
    //     return false;
    // }



    // 전화번호 형식이 올바르지 않을 경우
    const inputTel =document.getElementById("inputTel");

    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regEx.test(inputTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }

    return true;

}
