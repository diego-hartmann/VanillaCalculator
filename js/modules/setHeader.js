import { addClick, setarValor } from "./helpers.js"

export const setHeader = () => {
    addClick(document.querySelector('.limpar'), ()=>{
        setarValor('0')
    })
}