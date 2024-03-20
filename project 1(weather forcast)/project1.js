
const apiKey='1429c1eba4d5a936dc7a94ddf30ad156'
const apiurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

let searchBox=document.querySelector('#searchbox');
let searchIcon=document.querySelector('#search-icon');

async function weathercheck(city){
    try{
let responce=await fetch(apiurl + `${city}` + `&appid=${apiKey}`);
let data= await responce.json();
console.log(data);
document.querySelector('.city').innerHTML=data.name;
 document.querySelector('.condition-temp h3').innerHTML=data.main.temp+'°C';
 document.querySelector('.humidity h3').innerHTML=data.main.humidity +'%';
 document.querySelector('.wind-speed h3').innerHTML=data.wind.speed +'<br>km/hr';

 let weatherIcon=document.querySelector("#condition");
 if(data.weather[0].main =="Clouds"){
     weatherIcon.src='images/clouds.png';
 }
 if(data.weather[0].main =="Clear"){
     weatherIcon.src='images/clear.png';
 }
 if(data.weather[0].main =="Drizzle"){
     weatherIcon.src='images/drizzle.png';
 }
 if(data.weather[0].main =="Mist"){
     weatherIcon.src='images/mist.png';
 }
 if(data.weather[0].main =="Rain"){
     weatherIcon.src='images/rain.png';
 }
 if(data.weather[0].main =="Snow"){
     weatherIcon.src='images/snow.png';
 }
    }
    catch(err){
        let error=document.querySelector('.errorMsg').innerHTML='please check the country/city name correctly';
        setTimeout(()=>{
            let error=document.querySelector('.errorMsg').innerHTML='';
        },15000);
        
        document.querySelector('.city').innerHTML='---------';
        document.querySelector('.condition-temp h3').innerHTML='-- °C';
        document.querySelector('.humidity h3').innerHTML='--' +'%';
        document.querySelector('.wind-speed h3').innerHTML='--' +'km/hr';
    }
  

}

searchIcon.addEventListener("click",async()=>{

    weathercheck(searchBox.value);
    searchIcon.style.backgroundColor='skyblue';
    searchIcon.style.width='18px';
    searchIcon.style.height='18px';
    setTimeout(()=>{
        searchIcon.style.backgroundColor='white';
        searchIcon.style.width='20px';
        searchIcon.style.height='20px';
    },70)
  
})
