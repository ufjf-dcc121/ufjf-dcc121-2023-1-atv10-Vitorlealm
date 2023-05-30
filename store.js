const store = {estado: []};

export function adicionar(n){
    store.estado.push(n ? n : '0');
}

export function getEstado(){
    return [...store.estado];
}

export default store;