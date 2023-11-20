/*
1. 폭탄섞기 
  - 배열이용 => 배열에 1이 있는 위치가 폭탄위치
  - 1의 위치를 suffle기능을 구현
  - 폭탄이 섞였는지 isSuffle flage변수를 활용 

2. 박스 클릭 처리
  - 폭탄이 섞여야 박스가 클릭이 됨 => isShuffle == true
  - 이미 이미지가 있으면 더이상 이미지를 다시 표시할 필요가 없음 
  - 폭탄 이미지가 나오면 더이상 클릭이 되지 않고 폭탄섞기 버튼이 다시 활성화가 되어야함
  - 폭탄섞기 버튼이 활성화되면 전체 화면을 초기화 
  - 하트 이미지가 나오면 현재 몇개의 하트가 나왔는지를 확인 
  - 하트 개수 8개가 되면 마지막 한개 박스에 자동으로 하트가 들어가도록 처리

*/

let arr = [0,0,0,0,0,0,0,0,1] ;
let isShuffle = false ;
let cnt = 0 ;   //하트개수

const init = (boxs, msg) => {
  msg.innerHTML = '' ;
  boxs.forEach(element => {
    element.innerHTML = element.getAttribute("id").slice(-1) ;
  });
  cnt = 0 ;
 }

document.addEventListener("DOMContentLoaded", () => {
  const bt = document.querySelector("#bt > button") ;
  const boxs = document.querySelectorAll(".box");
  const msg = document.querySelector("#msg") ;

  bt.addEventListener("click", () => {
    if (!isShuffle) {
      init(boxs, msg) ;
      console.log("변경전", arr) ;
      //배열 섞기
      arr = arr.sort(() => Math.random() - 0.5) ;
      /*
      배열 정렬
      - sort() : 알파벳 정렬
      - sort((a,b) => a - b) : 숫자 오름차순
      - sort((a,b) => b - a) : 숫자 내림차순
      */

      console.log("변경후", arr) ;
      isShuffle = true ;
    }
    
  }) ;

  for(let box of boxs) {
    box.addEventListener("click" , ()=>{
      if (!isShuffle) {
        msg.innerHTML = "<h2>폭탄을 섞어주세요</h2>" ;
        return ;
      }

      if (isNaN(box.innerHTML)) {
        console.log("이미지가 있음") ;
        return ;
      }

      //현재 박스를 기준으로 배열의 첨자를 구함
      let idx = box.getAttribute("id").slice(-1) - 1;

      //배열 내용확인
      if (arr[idx] === 0) {
        box.innerHTML = '<img src="./images/hart.png">' ;
        cnt++ ; 
        console.log("cnt=", cnt)
        if (cnt === 8) {
          let idx1 = arr.indexOf(1) + 1 ;
          console.log("idx1 =", idx1) ;
          document.querySelector(`#box${idx1}`).innerHTML = '<img src="./images/hart.png">' ;
          isShuffle = false ;
          msg.innerHTML = '<h2>성공</h2>' ;
        }
      }
      else {
        box.innerHTML = '<img src="./images/boom.png">' ;
        isShuffle = false ;
        msg.innerHTML = '<h2>실패</h2>' ;
      }
      // console.log(idx) ;
    }) ;
  } 

});