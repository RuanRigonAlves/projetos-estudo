"use strict";

export default function addItem() {}

const addItemBTN = document.querySelector("#add--button");
const addItemIPT = document.querySelector("#item");
const listItens = document.querySelector("#itens--list");
const ulListItens = document.querySelector("#ul-itens--list");
const itemINPT = document.querySelector("#item");
const itensList = document.querySelector("#itens--list");
const editAndRemoveBTN = document.querySelectorAll("#ul-itens--list>li");

const closestUL = ulListItens?.closest("ul");
export const myList = [];

addItemBTN?.addEventListener("click", addItemList);
itemINPT?.addEventListener("keypress", addItemEnterKey);
closestUL?.addEventListener("click", itemOptions);

///////////////////////////// Adding Item /////////////////////////

function addItemList(item) {
  item = addItemIPT.value;
  if (item === "") return;

  let randId = new Date().valueOf();
  myList.push({ id: randId, item: item });

  ulListItens.insertAdjacentHTML(
    "beforeend",
    `<li>${item}<span id="n--${randId}"><button>edit</button> <button>remove</button></span></li>`
  );
  console.log(myList);
  addItemIPT.value = "";
  addItemIPT.focus();
}

function addItemEnterKey(e) {
  if (e.key !== "Enter") return;
  addItemList();
}
///////////////////////////// Item Options /////////////////////////

function itemOptions(e) {
  const clicked = e.target.innerText;
  if (clicked !== "edit" && clicked !== "remove") return;

  if (clicked === "remove" ? removeItem(e) : editItem(e));
}

function removeItem(item) {
  const getIdNumbers = +item.target.parentElement.id.replace(/[^0-9]/g, "");
  const itemIndex = myList.findIndex((x) => x.id === getIdNumbers);

  myList.splice(itemIndex, 1);
  item.target.parentElement.parentElement.remove();
}

function editItem(item) {
  const getIdNumbers = +item.target.nextSibling.parentElement.id.replace(
    /[^0-9]/g,
    ""
  );
  const originalItem = myList.find((item) => item.id === getIdNumbers);
  const liSelected = item.srcElement.parentElement.parentElement;

  liSelected.innerHTML = `
    <input type="text" class="edit--input" id="edit-item" placeholder="${originalItem.item}" value="${originalItem.item}"><button id="close">close</button><button id="save">save</button>
    `;

  liSelected.addEventListener("click", editIPTBox);
  function editIPTBox(e) {
    const idItem = e.target.id;
    if (idItem !== "close" && idItem !== "save") return;
    if (idItem === "close" ? closeFunc() : saveFunc());

    function closeFunc() {
      liSelected.innerHTML = `${originalItem.item}<span id="n--${originalItem.id}"><button>edit</button> <button>remove</button></span>`;
    }
    function saveFunc() {
      const editItemINPT = document.querySelector("#edit-item");
      originalItem.item = editItemINPT.value;

      liSelected.innerHTML = `${originalItem.item}<span id="n--${originalItem.id}"><button>edit</button> <button>remove</button></span>`;
    }
    liSelected.removeEventListener("click", editIPTBox);
  }
}

////////////////////////////// CLASS TESTING /////////////////////////
