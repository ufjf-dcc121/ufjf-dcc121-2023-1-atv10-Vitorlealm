import {adicionar, getEstado} from "./store.js";
const form = document.forms.entrada;
form.addEventListener('submit', envia);

atualiza();

function envia(event){
    event.preventDefault();
    console.log("Formulario enviado");
    const n = form.valor.value;
    adicionar(n);
    form.valor.value = '';
    form.valor.focus();
    console.log(getEstado())
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = '';
    const itens = getEstado();
    for(let i=0; i<itens.length; i++){
        const li = document.createElement('li');
        li.textContent = itens[i];
        ol.appendChild(li);
    }
    
}