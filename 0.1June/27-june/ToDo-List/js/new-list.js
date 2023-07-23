// export default function newList() {}

import { myList } from "./add-item.js";

const newListBTN = document.querySelector("#new-list-btn");
const listaNome = document.querySelector("#name-list-inpt");
const listaSection = document.querySelector("#main-section-listas");

newListBTN.addEventListener("click", criarLista);

function criarLista(e) {
  e.preventDefault();
  const nomeLista = listaNome.value;
  if (!nomeLista) return;
  if (myList.hasOwnProperty(nomeLista)) return;
  console.log(nomeLista);

  myList[nomeLista] = [];

  console.log(myList);

  listaSection.insertAdjacentHTML(
    "beforeend",
    `
  <div class="lista--container">
  <div class="add-items">
    <input
      type="text"
      class="list-tittle"
      placeholder="List Name"
      class="item-1"
      id="nome-lista-inpt"
    />
    <div>
      <input
        id="item"
        for="item"
        class="item-input item-2"
        type="text"
        value=""
      />
      <button id="add--button" class="item-3">Add</button>
    </div>
  </div>

  <div id="itens--list" class="add-list">
    <ul id="ul-itens--list" class="ul-itens--list"></ul>
  </div>
</div>
  `
  );
}
