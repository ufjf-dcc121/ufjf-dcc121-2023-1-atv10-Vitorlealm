
const form = document.forms.entrada;
form.addEventListener('submit', envia);

let estado = 0;
atualiza();

function envia(event){
    event.preventDefault();
    alert("Formulario enviado");
    estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`;
}