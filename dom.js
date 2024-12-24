document.getElementById("button1").addEventListener("click",function(){
  let show =  document.getElementById("button2");
  let show2 = document.getElementById("button3");
  show.style.visibility = "visible"
  show2.style.visibility = "visible"
})
document.getElementById("button3").addEventListener("click",function(){
    let hide = document.getElementById("button2");
    let hide2 = document.getElementById("button3");
    hide.style.visibility = "hidden"
    hide2.style.visibility = "hidden"
})