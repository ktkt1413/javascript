/* const memNum = parseInt(prompt("참가 인원은 몇 명인가요?","16"));
const colNum = parseInt(prompt("좌석은 한 줄에 몇 개를 놓을까요?","6"));

let rowNum = memNum / colNum;

const name = ["김유미","김가영","추호연", "박민수", "이다은", "서민경", "하소영", "전보람", "옥찬미","양연수", "배채정", "박주연", "김은솔","전현정", "류강민", "정다겸", "", ""]

document.write("<div class='table'> <h2>좌석 배정표</h2><table>")
for(let r=0; r< rowNum; r++){
    document.write("<tr>")
    for(let c = 1; c <= colNum; c++){
        let seatNo = c + r*colNum -1 ;

        if(seatNo > memNum) break
        document.write("<td>"+(seatNo+1)+"좌석<br>"+ name[seatNo] + "</td>");
    }
    document.write("</tr>")
}
document.write("<table></div>") */ 

const memNum = 18;
const rowNum = 3;
const colNum = 6;
const min = 1;
const name = ["김유미","김가영","추호연", "박민수", "이다은", "서민경", "하소영", "전보람", "옥찬미","양연수", "배채정", "박주연", "김은솔","전현정", "류강민", "정다겸", "", ""]

let randomSeat = math.floor(math.random()*(memNum-min+1)) +min;

