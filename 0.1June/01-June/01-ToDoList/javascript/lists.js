export default function initLists() {

    const botoes = document.querySelectorAll('.add-item');
    const itemInput = document.querySelector('.input-item');
    const ulLista = document.querySelector('.lista-ul');
    const removeBtn = document.querySelectorAll('.remove');
    const lis = document.querySelector('li');


    function addItem(valor) {
        const item = itemInput.value;
        console.log(valor.target.parentElement.parentElement.parentElement.parentElement)
        const createLi = document.createElement('li');
        if (item === '') {
            console.log('teu cu');
        } else {
            createLi.innerHTML = `${item}<span class="remove">remove</span>`;
            ulLista.appendChild(createLi);
        }
    }

    botoes.forEach((botao) => {
        botao.addEventListener('click', addItem)
    });

    // addBtn.addEventListener('click', addItem);

    function removeItem(i) {
        const removeI = i.target
        if (removeI.nodeName === 'SPAN') {
            removeI.parentElement.remove();
        }
    };

    ulLista.addEventListener('click', removeItem);
};

