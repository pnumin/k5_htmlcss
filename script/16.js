//일일 박스 오피스 데이터 가져오기
const getBoxOffice = (dt, tbDiv) => {
  let apikey = "f5eef3421c602c6cb7ea224104795888" ;
   
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}` ;
  let boxList ;
  tbDiv.innerHTML = '' ;
  let tags = `
        <table>
          <tr>
            <th>순위</th>
            <th>영화명</th>
            <th>개봉일</th>
            <th>매출액</th>
            <th>관객수</th>
          </tr>
  `
  fetch(url)
  .then(resp => resp.json()) 
  .then((data) => {
    boxList = data.boxOfficeResult.dailyBoxOfficeList;

    // boxList.map(item => {
    //   console.log(item.rank, item.movieNm, item.openDt, item.salesAmt, item.audiCnt)
    //   tags  = tags + `<tr>`;
    //   tags  = tags + `<td class="sp1">${item.rank}</td>` ;
    //   tags  = tags + `<td class="sp2">${item.movieNm}</td>` ;
    //   tags  = tags + `<td class="sp1">${item.openDt}</td>` ;
    //   tags  = tags + `<td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>` ;
    //   tags  = tags + `<td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>` ;
    //   tags  = tags + `</tr>`;
    // });

    let trs = boxList.map(item =>  
      `<tr>
      <td class="sp1">${item.rank}</td>
      <td class="sp2">${item.movieNm}</td>
      <td class="sp1">${item.openDt}</td>
      <td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
      <td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>
      </tr>` 
     );
    
    trs = trs.join('') ;
    
    tags = tags + trs + `</table>` ;
    tbDiv.innerHTML = tags ;
    console.log(boxList)
  }) 
   
}
 
document.addEventListener("DOMContentLoaded", ()=>{
  //날짜 input 가져오기
  const inputDt = document.querySelector("#dt") ;
  const tbDiv = document.querySelector("#tbDiv") ;

  //날짜변경 처리
  inputDt.addEventListener("change", (e)=>{
    // console.log(inputDt.value)
    //console.log(e.target.value) ;

    // yyyymmdd 형식으로 변경 
    const dt = e.target.value.replaceAll('-', '') ;
    //console.log(dt)

    // 해당하는 날짜 조회
    getBoxOffice(dt, tbDiv);
  }) ;
  
  
});