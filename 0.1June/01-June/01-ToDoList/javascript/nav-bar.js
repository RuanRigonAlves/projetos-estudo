export default function initNavBar() {

};

const addList = document.querySelector('#list-create');
const listasDiv = document.querySelector('#section-lista');

addList.addEventListener('click', createList);

function createList() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('lista');
    mainDiv.innerHTML = `
        <div class="titulo">
        <h2>Tittle</h2>
        </div>
        <div class="input-add">
        <input type="text" placeholder="item" class="input-item" name="input-item">
        <label for="input-item"><span class="add-item">Add</span></label>
        </div>
        </div>
        <ul class="lista-ul">
        </ul>
        `
    listasDiv.appendChild(mainDiv);

}