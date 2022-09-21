const form = document.querySelector('.teclas')
const visor = document.querySelector('.visor__info')
const operadores = document.querySelectorAll('.operadores')


form.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.srcElement.innerText);
    if(visor.innerHTML.length >= 8){
        visor.classList.add('visor__small')
    }
    visor.innerText += e.srcElement.innerText
})
