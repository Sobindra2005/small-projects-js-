let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let playpauseBtn = document.querySelector("#play");
let img = document.querySelector("#coverImage");
let title = document.querySelector(".title h3");
let singer = document.querySelector(".title p");
let container = document.querySelector(".container");
let songList;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playpause() {
  if (playpauseBtn.classList.contains("fa-play")) {
    song.play();
    playpauseBtn.classList.remove("fa-play");
    playpauseBtn.classList.add("fa-pause");
    img.classList.add("coverImage");
  } else {
    song.pause();
    playpauseBtn.classList.remove("fa-pause");
    playpauseBtn.classList.add("fa-play");
    img.classList.remove("coverImage");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.currentTime = progress.value;
  if (song.paused) {
    img.classList.add("coverImage");
    playpauseBtn.classList.remove("fa-pause");
    playpauseBtn.classList.add("fa-play");
    img.classList.add("coverImage");
  } else {
    img.classList.add("coverImage");
  }
};

function nextsong() {
  song.src = "ytmp3free.cc_rihanna-diamonds-youtubemp3free.org.mp3";
  img.src = "https://c1.staticflickr.com/9/8039/8010060159_775cc48e09_z.jpg";
  title.innerHTML = "diamonds in the sky";
  singer.innerHTML = "Rihanna ft.eminem";
}

function backsong() {
  song.src =
    "Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo.mp3";
  img.src =
    "https://th.bing.com/th/id/R.525add86e1f9b032c8fe17f2591db1b3?rik=DVyTFPwPx39E3A&pid=ImgRaw&r=0";
  title.innerHTML = "intentions";
  singer.innerHTML = "justin beiber ft.Quavo";
}


function showList() {
  songList = document.createElement("div");
  songList.classList.add("songList");
  container.append(songList);
  let list = document.createElement("ul");
  songList.append(list);
  let firstList = document.createElement("li");
  firstList.innerHTML = "intentions";
  list.append(firstList);
  let secondList = document.createElement("li");
  secondList.innerHTML = "diamonds in the sky";
  list.append(secondList);
}

document.body.addEventListener("click", (e) => {
  if (songList && songList.classList.contains("songList")) {
    if (container.contains(e.target)) {
      //under maintaince
    }
  }
});






