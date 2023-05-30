const store = {estado: []};

export function adicionar(n){
    store.estado.push(n ? n : '0');
}

export function getEstado(){
    return [...store.estado];
}

export function remover(){
    store.estado.pop();
}

export default store;