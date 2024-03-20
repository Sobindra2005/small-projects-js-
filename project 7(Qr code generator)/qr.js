let inputBox = document.querySelector("#inputBox");
let img = document.querySelector("#img");
let Btn = document.querySelector(".generateBtn");
let container = document.querySelector(".imgContainer");
let api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQr() {
  if (inputBox.value != "") {
    let existingImg = container.querySelector(".img");
    if (existingImg) {
      existingImg.src = api + inputBox.value;
    }
    else {
      let img = document.createElement("img");
      img.classList.add("img");
      img.src = api + inputBox.value;
      container.append(img);
    }
  }
}
