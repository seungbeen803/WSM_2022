// https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17320190722180924242823&infSeq=2
// ? 뒤에는 추가 정보
// 시도교육청코드: B10: 서울특별시교육청
// 표준학교코드: 7010569: 미림여자정보과학고등학교
// 식사코드: 2: 중식

// 신청주소: https://open.neis.go.kr/hub/mealServiceDietInfo // 요청주소
// KEY:
// ATPT_OFCDC_CODE: 시도교육청코드
// SD_SCHU_SC_CODE: 표준학교코드
// MMEAL_SC_CODE: 식사코드
// MLSV_YMD: 급식일자
// MLSV_FROM_YMD: 급식시작일자
// MLSV_TO_YMD: 급식종료일자
// https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010569&MMEAL_SC_CODE=2&MLSV_YMD=0220927&Type=json
const KEY = "38f88822d3974e888465235c175927f0";
const ATPT_OFCDC_SC_CODE = "B10";   // 서울특별시교육청
const SD_SCHUL_CODE = "7010569";    // 미림여자정보과학고등학교
let MMEAL_SC_CODE = 2;  // 중식
let MLSV_YMD = "20220927";  // YYYYMMDD
let url = `https://open.neis.go.kr/hub/mealServiceDietInfo?`
        + `KEY=${KEY}`
        + `ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`
        + `SD_SCHUL_CODE=${SD_SCHUL_CODE}`
        + `MLSV_YMD=${MLSV_YMD}`
        + `MMEAL_SC_CODE=${MMEAL_SC_CODE}`;
// console.log(url);
// 실시간으로 급식메뉴 가져오자
// .date-grid-container>grid-item에 마우스 올려놓으면(mousover), handler 함수 호출하자
let dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0];
let gridItems = dateGridContainerDiv.getElementsByClassName("grid-itm");
const handler = (event) => {
    console.log(year);
    console.log(month);
    let date = event.target.innerHTML;
    console.log(data);
}
for (let gridItem of gridItems) {
    gridItem.onmouseover = handler;
    // gridItem.addEventListener("mouseover", handler);
}
//handler에서 year, month, date, 식사 로 url 만들어서 AJAX로 급식 정보 가져오자
//다 가져왔으면, 조식, 중식, 석식 표시하자