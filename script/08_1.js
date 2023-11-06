//버튼처리
const handleBtClick = (comImg, meImg, me, msg) => {
  //1.컴퓨터 랜덤수 생성
  // 1~6까지 
  const com = Math.floor(Math.random() * 6) + 1;
  console.log("com=", com , "me=", me) ;

  //2.주사위 이미지 변경
  comImg.setAttribute("src" , `./images/${com}.png`);
  meImg.setAttribute("src" , `./images/${me}.png`);

  //3.결과만들기
  // if (com === me) msg.innerHTML = '비김';
  // else if (com > me) msg.innerHTML = '패';
  // else msg.innerHTML = '승'; 
  if (com === me) msg.innerHTML = '맞춤';
  else msg.innerHTML = '틀림';
}


document.addEventListener("DOMContentLoaded", ()=>{
  //구성요소 찾기
  const comImg = document.querySelector("#com");
  const meImg = document.querySelector("#me");

  const bts = document.querySelectorAll("#btDiv > button") ;
  const msg = document.querySelector("#sec3 > h1");

  // msg.innerHTML = "<p>안녕하세요.</p>" ;
  // msg.textContent = "<p>안녕하세요.</p>" ;
  
  // 기본 for
  // for(let i=0 ; i < bts.length ; i++) {
  //   console.log(bts[i]);
  // }

  // for in : object 
  // for(let i in bts) {
  //   console.log(bts[i]) ;
  // }

  // for each 
  // bts.forEach(item => console.log(item)) ;
  // bts.forEach((item) => {console.log(item)}) ;
  // bts.forEach((item, idx) => {
  //   console.log(item, idx)
  // }) ;

  // for of
  // for(let [idx, item] of bts.entries()) {
  //   console.log(idx, item) ;
  // }

  for(let bt of bts) {
    bt.addEventListener("click", ()=>{
      const me = parseInt(bt.getAttribute("id").slice(-1)) ;
      // const me = bt.getAttribute("id").slice(-1) ;
      handleBtClick(comImg, meImg, me, msg);
      console.log(bt.getAttribute("id").slice(-1)) ;
    });
  }
});