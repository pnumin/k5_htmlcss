document.addEventListener("DOMContentLoaded", ()=>{
  const txt = document.getElementById('txt') ;

  txt.addEventListener('change', (e)=>{
    console.log(e.target.value) ;
  });

}) ;