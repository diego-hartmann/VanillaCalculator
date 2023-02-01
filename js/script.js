import { setBotoes } from './modules/setBotoes.js'
import { setCalcular } from './modules/setCalcular.js'
import { setHeader } from './modules/setHeader.js'
import { teclado } from './modules/teclado.js'
// import { color } from './modules/color.js'

window.addEventListener('load', ()=>{
    // color();
    setHeader();
    setBotoes();
    setCalcular();
    teclado();
})