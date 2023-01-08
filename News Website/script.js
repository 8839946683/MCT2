function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
let mySidenavbar=document.getElementById('mySidenav');
let newsHead=document.getElementsByClassName("news_head")[0];

let business = document.getElementById('business');
let entertainment=document.getElementById('entertainment');
let general = document.getElementById('general');
let health = document.getElementById('health');
let science = document.getElementById('science');
let sports = document.getElementById('sports');
let technology = document.getElementById('technology');
let selectOneCountry = document.getElementById('select_one_country');

business.addEventListener('click',()=> {
  let countryName=selectOneCountry.value
  console.log(countryName)
  getNews('business',countryName)

})

entertainment.addEventListener('click',()=> {
  let countryName=selectOneCountry.value
  getNews('entertainment',countryName)
})

general.addEventListener('click',()=>{
  let countryName=selectOneCountry.value
  getNews('general',countryName)
})

health.addEventListener('click',()=>{
  let countryName=selectOneCountry.value
  getNews('health',countryName)
})

science.addEventListener('click',()=>{
  let countryName=selectOneCountry.value
  getNews('science',countryName)
})

sports.addEventListener('click',()=>{
  let countryName=selectOneCountry.value
  getNews('sports',countryName)
})

technology.addEventListener('click',()=>{
  let countryName=selectOneCountry.value
  getNews('technology',countryName)
})

async function getNews(category,country){
  let streamData=await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`);
  let jsonData = await streamData.json();


  let data=await jsonData.articles;
 
  let html=''
  for(let i=0;i<10;i++){

    html +=` <div class="news_card"> <img src="${data[i].urlToImage}"> <div class="news_text"> <span class="title"> ${data[i].title} </span> 
    <span class="author"> <b>source:</b> ${data[i].source.name} / ${data[i].publishedAt}</span> 
    <div class="lower_text"><span class="description"> ${data[i].description} </span><span class="read_more"> Read more at <a href="${data[i].url}" target="_blank"> ${data[i].source.name}</a> </span></div></div>
    </div>`
  }
  newsHead.innerHTML=html;
}
getNews("general","in");



let nightIcon = document.getElementsByClassName('night_icon')[0];

nightIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode")
    if (document.body.classList.contains("dark_mode")) {
        nightIcon.innerHTML = `<i class="uil uil-sun"></i>`
    } else {
        nightIcon.innerHTML = `<i class="uil uil-moon"></i>`
    }
})