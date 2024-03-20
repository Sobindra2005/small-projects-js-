let transImg = document.querySelector(".img-box");
let orgImg = document.querySelector(".img-resize");
let orginalImg=document.querySelector("#orgImg");

orginalImg.style.width=orgImg.offsetWidth + "px";

let leftSpace = transImg.offsetLeft;

transImg.onmousemove = function (e) 
{
    let boxWidth=(e.clientX - leftSpace) + "px";
    orgImg.style.width=boxWidth;
    
}
