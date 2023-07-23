import initNavBar from "./nav-bar.js";
import initLists from "./lists.js";

initNavBar();
initLists();



function adicionaTask(valor) { console.log(valor) }
document.getElementById("list-create").addEventListener("click", adicionarCaixa())

let index

function adicionarCaixa(valor) {
    console.log("teste")
    index++
    document.querySelector("#section-lista") += `
<div class="titulo" id="caixa${index}">
<h2>Tittle</h2>
</div>
<div class="input-add">
<input type="text" placeholder="item" class="input-item" name="input-item">
<label for="input-item"><span class="add-item"><button onclick="adicionaTask(this)">Add</button></span></label>
</div>
</div>
<ul class="lista-ul">
</ul>`
}


