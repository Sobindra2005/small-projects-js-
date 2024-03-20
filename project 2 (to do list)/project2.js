let addBox=document.querySelector('.addBox input');
let listContainer=document.querySelector('.noteList');

function taskadder() {
    if (addBox.value==''){
        alert('please write something to add!!');
    }
    else{
    let li=document.createElement("li");
  li.innerHTML=addBox.value;
listContainer.appendChild(li);
let span=document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span);

    }
    addBox.value='';
    savedata()
}
listContainer.addEventListener("click",(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedata()
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata()
}
})
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
  listContainer.innerHTML=  localStorage.getItem("data");
}
showdata();