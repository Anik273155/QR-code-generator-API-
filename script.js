let buttons = document.querySelector(".btn");
const innerBoxs=document.querySelector(".innerBox");

const inputvalue=document.querySelector(".inputBox");
 const qrImages=document.querySelector(".qrImage");
 
buttons.addEventListener('click',function(){
    console.log(inputvalue.value.length);
    if(inputvalue.value.length>0){
   
   
        innerBoxs.classList.remove("visibility");
        qrImages.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue.value}`;
    }
   

})
