let lists = document.getElementsByClassName("list");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

for (list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target;

    box2.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    box2.addEventListener("drop", (e) => {
      box2.appendChild(selected);
      selected = null;
    });

    box1.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

    box1.addEventListener("drop",(e)=>{
       box1.appendChild(selected);
       selected=null;
    })
  });
}
