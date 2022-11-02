// 전역 변수
const num1 = document.getElementById("inputNum1");
const num2 = document.getElementById("inputNum2");
const outcome = document.getElementById("result");


function calc(btn){
    // btn == 클릭 이벤트가 발생한 버튼 요소
    console.log(btn);

    // 현재 input 요소에 저장된 값을 얻어와 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    
    const op = btn.innerText; // 클릭된 버튼에 작성된 내용을 얻어옴

    switch(op){
        case '+' : outcome.innerText = n1 + n2; break;
        case '-' : outcome.innerText = n1 - n2; break;
        case '*' : outcome.innerText = n1 * n2; break;
        case '/' : outcome.innerText = n1 / n2; break;
        case '%' : outcome.innerText = n1 % n2; break;
    }
    
    num1.value = "";
    num2.value = "";
}