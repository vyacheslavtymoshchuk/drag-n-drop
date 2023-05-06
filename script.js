const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholer of placeholders) {
  placeholer.addEventListener("dragover", dragover);
  placeholer.addEventListener("dragenter", dragenter);
  placeholer.addEventListener("dragleave", dragleave);
  placeholer.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  // console.log("drag start", event.target);
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.classList.remove("hold");
  event.target.classList.remove("hide");
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.append(item);
  event.target.classList.remove("hovered");
}
