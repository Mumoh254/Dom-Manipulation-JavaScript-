let  overlay = document.getElementById("overlay")
let open  =  document.getElementById("open");

open.addEventListener("click" , function () {
    overlay.style.display = "flex"
})

let  close  =  document.getElementById("close");
close.addEventListener("click"  ,  function ()  {
    overlay.style.display = "none"
})