const btnID1 =document.getElementById("btn1") ; 
const btnID2 =document.getElementById("btn2") ; 
const btnID3 =document.getElementById("btn3") ; 
    btnID2.style.display="none";

btnID1.addEventListener('click',function(){
    btnID1.style.display="none";
    btnID2.style.display="block";
    btnID3.style.display="none";

})
