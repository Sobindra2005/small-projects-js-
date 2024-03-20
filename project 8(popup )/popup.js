let btnAll=document.querySelector(".container button");
let toast=document.querySelector(".toast");
let errorMsg='<i class="fa-solid fa-circle-xmark"></i> error detected';
let sucessMsg='<i class="fa-solid fa-circle-check"></i> successfully submitted';
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i> invalid, Try Again! ';

function clickanimation(msg) {

let div=document.createElement("div");
div.innerHTML=msg;
toast.appendChild(div);

if(msg.includes('error')){
div.classList.add('errorToast');
}
if(msg.includes('invalid')){
    div.classList.add('invalidToast');
    }
setTimeout(() => {
    div.remove();
},5000);
   }
