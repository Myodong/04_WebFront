// 전역 변수
const num1 = document.getElementById("inputNum1");
const num2 = document.getElementById("inputNum2");
const outcome = document.getElementById("result");


// 더하기
function addtion(){

    // 값 잘넘어 오나 콘솔 확인
    console.log(num1.value); // 입력값 1
    console.log(num2.value); // 입력값 2
    console.log(Number(num1.value) + Number(num2.value)); // 입력값 결과

    // 출력문 
    outcome.innerHTML = (Number(num1.value) + Number(num2.value));


    // 입력값 삭제
    num1.value = "";
    num2.value = "";
}


// 빼기
function subtraction(){

    // 값 잘넘어 오나 콘솔 확인
    console.log(num1.value); // 입력값 1
    console.log(num2.value); // 입력값 2
    console.log(Number(num1.value) - Number(num2.value)); // 입력값 결과

    // 출력문 
    outcome.innerHTML = Number(num1.value) - Number(num2.value);


    // 입력값 삭제
    num1.value = "";
    num2.value = "";
}

// 곱하기
function multiplication(){

    // 값 잘넘어 오나 콘솔 확인
    console.log(num1.value); // 입력값 1
    console.log(num2.value); // 입력값 2
    console.log(Number(num1.value) * Number(num2.value)); // 입력값 결과

    // 출력문 
    outcome.innerHTML =Number(num1.value) * Number(num2.value);


    // 입력값 삭제
    num1.value = "";
    num2.value = "";
}

// 나누기
function division(){

    // 값 잘넘어 오나 콘솔 확인
    console.log(num1.value); // 입력값 1
    console.log(num2.value); // 입력값 2
    console.log(Number(num1.value) / Number(num2.value)); // 입력값결과

    // 출력문 
    outcome.innerHTML =Number(num1.value) / Number(num2.value);


    // 입력값 삭제
    num1.value = "";
    num2.value = "";
}

// 나누고 나머지 값
function remaining(){

    // 값 잘넘어 오나 콘솔 확인
    console.log(num1.value); // 입력값 1
    console.log(num2.value); // 입력값 2
    console.log(Number(num1.value) % Number(num2.value)); // 입력값결과

    // 출력문 
    outcome.innerHTML =Number(num1.value) % Number(num2.value);


    // 입력값 삭제
    num1.value = "";
    num2.value = "";
}