let addBtn = document.querySelector(".addBtn");
let dltImg = document.querySelector(".imgDelete");
let containerNote = document.querySelector(".containerNote");
let title = document.querySelector(".title");
let notes = document.querySelector(".notes");

function noteAdder() {
  let input = document.createElement("input");
  input.className = "title";
  input.setAttribute("placeholder", "Add Title");
  input.setAttribute("type", "text");
  containerNote.appendChild(input);

  let span = document.createElement("span");
  span.className = "notes";
  span.setAttribute("contenteditable", "true");
  containerNote.appendChild(span);

  let img = document.createElement("img");
  img.src = "image/delete.png";
  img.className = "imgDelete";
  span.appendChild(img);
  saveNote();
  savedata();
  savedataNotes();
}
containerNote.addEventListener("click", (e) => {
  if (e.target.className === "imgDelete") {
    let containerNoteElement = e.target.closest(".containerNote");
    let inputTitle = containerNoteElement.querySelector(".title");
    if (inputTitle) {
      inputTitle.remove();
      savedata();
    }
    let spanNote = containerNoteElement.querySelector(".notes");
    if (spanNote) {
      spanNote.remove();
      savedataNotes();
    }
  }
});

addBtn.addEventListener("click", () => {
  noteAdder();
  savedata();
});
function saveNote() {
  localStorage.setItem("dataNote", containerNote.innerHTML);
}

function savedata() {
  localStorage.setItem("dataTitle", title.innerHTML);
}
function savedataNotes() {
  localStorage.setItem("dataNotes", notes.innerHTML);
}

function showData() {
  title.innerHtml = localStorage.getItem("dataTitle");
}
function showDataNotes() {
  notes.innerHtml = localStorage.getItem("dataNotes");
}

function showNote() {
  notes.innerHtml = localStorage.getItem("dataNote");
}

saveNote();
savedata();
savedataNotes();
showData();
showDataNotes();
showNote();
