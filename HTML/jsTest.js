/* const date = new Date();
const currentYear = date.getFullYear();

birthYear = prompt("태어난 연도를 입력하세요. (YYYY)","");
age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 "+ age + "세입니다.")
 */

/* 주석처리는 alt + shift + a */

/* const a = [1, 2, 3, 4, 5]
b = a;

const season =["봄", "여름", "가을", "겨울"] */
/* var a = 10
var b = a++ + 5
var c = 10
var d = ++c +5 */

/* var userNumber = prompt("숫자를 입력하세요")

if (userNumber === null){
    alert("입력이 취소되었습니다.")
} else if(isNaN(userNumber) || userNumber.trim() === ""){
    alert("숫자를 입력해주세요.")
} else {
    userNumber % 3 ===0 
        ? document.write("입력하신 숫자" + userNumber + "는(은) 3의 배수입니다.") 
        : document.write(userNumber+"는(은) 3의 배수가 아닙니다.")
}
 */


/* var session = prompt("관심 세션의 번호를 입력해 주세요. 1-마케팅, 2-개발, 3-디자인");

switch(session){
    case "1": document.write("<p>마케팅 세션은 <strong>201호</strong>에서 </p>")
        break;
    case "2": document.write("<p>개발 세션은 <strong>203호</strong>에서 </p>")
        break;
    case "3": document.write("<p>디자인 세션은 <strong>205호</strong>에서 </p>")
        break;
    default: alert("잘못 입력했습니다.")
} */

/* var memNum = prompt("입장객은 몇 명인가요?")
var colNum = prompt("한 줄에 몇 명씩 있습니까?")

if(memNum % colNum === 0){
    rowNum = parseInt(memNum / colNum)
} else {
    rowNum = parseInt(memNum / colNum) + 1
}

document.write("모두" + rowNum + "개의 줄이 필요합니다") */

/* let sum = 0;
let number = parseInt(prompt("숫자를 입력해주세요"))

for(let i = 0 ; i < number+1 ; i ++){
    sum += i;
}
document.write("1에서 " + number + "까지 결과값은 : " + sum);
 */

var i, j;

for( i= 2; i <= 9; i++){
    document.write("<div>")
    document.write("<h3>"+i+"단</h3>");
    for ( j = 2; j <= 9; j++){
        document.write(i+"X"+j+"="+i*j+"<br>")
    }
    document.write("</div>")
}