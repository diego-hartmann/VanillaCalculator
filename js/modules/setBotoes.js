import { addClick, incrementarValor } from "./helpers.js"

const get = (selector) => Array.from(document.querySelectorAll(selector))

let botoesParaAnimar;
export const getarBotoesParaAnimar = () => botoesParaAnimar ?? []

let botoesParaEscrever;
export const getarbotoesParaEscrever = () => botoesParaEscrever ?? []


export const setBotoes = () => {
    botoesParaAnimar = get('.btn');
    botoesParaEscrever = [...get('.numero'), ...get('.operacao') ]
    
    botoesParaEscrever.forEach( btn => {
        addClick(btn, ()=> {
            incrementarValor(btn.getAttribute('data-val'))
        })
    })
}