import { myList } from "./add-item.js";

export default function itensFunc() {}

const itensList = document.querySelector("#itens--list");
const ulListItens = document.querySelector("#ul-itens--list");

const editAndRemoveBTN = document.querySelectorAll("#ul-itens--list>li");
const closestUL = ulListItens.closest("ul");

closestUL.addEventListener("click", itemOptions);

function itemOptions(e) {
  const clicked = e.target.innerText;
  if (clicked !== "edit" && clicked !== "remove") return;

  if (clicked === "remove" ? removeItem(e) : editItem(e));
}

function removeItem(item) {
  const removeItemId = +item.target.parentElement.id.replace(/[^0-9]/g, "");
  const itemIndex = myList.findIndex((x) => x.id === removeItemId);

  myList.splice(itemIndex, 1);
  item.target.parentElement.parentElement.remove();
  console.log(myList);
}

function editItem(item) {
  const removeItemId = +item.target.nextSibling.parentElement.id.replace(
    /[^0-9]/g,
    ""
  );
  const originalItem = myList.find((item) => item.id === removeItemId);
  const liSelected = item.srcElement.parentElement.parentElement;

  // console.log(removeItemId);

  liSelected.innerHTML = `
    <input type="text" class="edit--input" id="edit-item" placeholder="${originalItem.item}" value="${originalItem.item}"><button id="close">close</button><button id="save">save</button>
    `;

  liSelected.addEventListener("click", editIPTBox);

  function editIPTBox(e) {
    const idItem = e.target.id;
    if (idItem !== "close" && idItem !== "save") return;
    if (idItem === "close" ? closeFunc() : saveFunc());
  }

  function closeFunc() {
    // liSelected.innerHTML = `${originalItem.item}<span id="n--${originalItem.id}"><button>edit</button> <button>remove</button></span>`;
    console.log("closefunctest");
  }

  function saveFunc() {
    // const editItemINPT = document.querySelector("#edit-item");
    console.log("savefunctest");
  }
}
