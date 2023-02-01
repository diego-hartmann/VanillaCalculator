import { addClick, setarValor, valor } from './helpers.js'

export const setCalcular = () => {
    addClick(document.querySelector('.calcular'), ()=>{
        setarValor( (eval(valor.innerText)) );
    })
}