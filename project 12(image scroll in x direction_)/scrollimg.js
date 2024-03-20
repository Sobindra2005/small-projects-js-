let gallery=document.querySelector(".gallery");
let next=document.querySelector("#next");
let back=document.querySelector("#back");

gallery.addEventListener("wheel",(e)=>{
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
})

next.addEventListener("click",(e)=>{
    gallery.style.scrollBehaviour="smooth";
    gallery.scrollLeft +=600;
})

back.addEventListener("click",(e)=>{
    gallery.style.scrollBehaviour="smooth";
    gallery.scrollLeft -=600;
})