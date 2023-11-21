//일일 박스 오피스 데이터 가져오기
const getBoxOffice = (dt) => {
  let apikey = "f5eef3421c602c6cb7ea224104795888" ;
   
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}` ;
  let boxList ;

  fetch(url)
  .then(resp => resp.json()) 
  .then((data) => {
    boxList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(boxList)
  }) 
   
}
 
document.addEventListener("DOMContentLoaded", ()=>{
  //날짜 input 가져오기
  const inputDt = document.querySelector("#dt")

  //날짜변경 처리
  inputDt.addEventListener("change", (e)=>{
    // console.log(inputDt.value)
    //console.log(e.target.value) ;

    // yyyymmdd 형식으로 변경 
    const dt = e.target.value.replaceAll('-', '') ;
    //console.log(dt)

    // 해당하는 날짜 조회
    getBoxOffice(dt);
  }) ;
  
  
});