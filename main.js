// 칼라를 가져올 빈공간 변수선언
const colorCode = document.querySelector("div #zero-area");
// 칼라가 담긴 박스들 변수선언
const colorBoxs = document.getElementsByClassName("td");
// 16진수,red,green,blue input박스 변수선언
const sixteen = document.querySelector("input.sixteen");
const red = document.querySelector("input.red");
const green = document.querySelector("input.green");
const blue = document.querySelector("input.blue");

// 16진수 변환하는 함수 
function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    // 삼항 연산자 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    // 백틱 사용
    // return `#${ColorToHex(red)}${ColorToHex(green)}${ColorToHex(blue)}`;
}

// 칼라담긴 배열(array)로 된 박스에 순차적으로 접근하여 이벤트 넣어주기
// console.log(colorBoxs);
// console.log(colorBoxs[0]);
for (let i = 0; i < colorBoxs.length; i++) {
// 화살표 함수 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
colorBoxs[i].addEventListener("mouseover", () => cBoxIn(colorBoxs[i]));
}
// 칼라박스 색깔 꺼내기
function cBoxIn(e) {
    colorCode.style.background = e.style.background;
    let str =colorCode.style.background
    // 문자열 자르기 정규표현식으로 여러개 입력
    console.log(str);
    let hexadecimal = str.substr(3).split(/[(,)]/);
    // console.log(hexadecimal)
    red.value = hexadecimal[1];
    green.value = hexadecimal[2];
    blue.value = hexadecimal[3]; 
    // 16진수 함수만들기 가져와서 값넣기
    sixteen.value = ConvertRGBtoHex(Number(red.value),Number(green.value),Number(blue.value));
}