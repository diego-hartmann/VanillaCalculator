export const color = () => {

    // color picker
    const colorPicker = document.querySelector('#theme-picker input');
    const colorStorage = localStorage.getItem('theme'); 
    
    if(colorStorage){
        colorPicker.value = colorStorage;
        document.documentElement.style.setProperty('--theme', colorStorage) 
    }

    colorPicker.addEventListener('change', e => {
        localStorage.setItem('theme', e.target.value)
        document.documentElement.style.setProperty('--theme', e.target.value);
    })

    // reset color
    const reseter = document.querySelector('#theme-picker i.reseter');
    reseter.addEventListener('click', ()=>{
        colorPicker.value = '#ff6600'
        localStorage.setItem('theme', '#ff6600')
        document.documentElement.style.setProperty('--theme', '#ff6600');
    })
}