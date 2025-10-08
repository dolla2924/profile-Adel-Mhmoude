const bottonID =document.getElementById("botton1") ; 
const btnID1 =document.getElementById("btn1") ; 
    btnID1.style.display="none";

bottonID.addEventListener('click',function(){
    bottonID.style.display="none";
    btnID1.style.display="block";
})
