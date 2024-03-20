let inputDate=document.querySelector("#date");
let output=document.querySelector(".Result");
inputDate.max=new Date().toISOString().split("T")[0];

function ageCalculate(){
    let birthDate=new Date(inputDate.value);
    let y1=birthDate.getFullYear();
    let m1=birthDate.getMonth()+ 1 ;
    let d1=birthDate.getDate();

let todayDate=new Date();
let y2=todayDate.getFullYear();
let m2=todayDate.getMonth() + 1;
let d2=todayDate.getDate();

let y3,m3,d3;

 y3=y2-y1;

if (m2>=m1){
   m3 =m2-m1;

}
else{
    y3--;
    m3 =12 + m2 - m1;
}
if (d2>=d1){
  d3 =d2-d1;

}
else{
  d3 =dayinthatyearmonth(y3,m3) + d2-d1;
}

if(!inputDate.value){
    output.innerHTML=`<span style="color:black;">please enter your date of birth first</span>`;
    return;
}
output.innerHTML=`you are <span>${y3} </span> years, <span>${m3} </span>months and <span>${d3} </span> days old !!`
}
function dayinthatyearmonth(year,month){
    return new Date(year,month,0).getDate();
}