const form = document.querySelector('.teclas')
const visor = document.querySelector('.visor__info')
const visorLista = []
const listaOperadores = []
const reg = new RegExp('^[0-9]+$')

form.addEventListener('click', (e)=>{
    e.preventDefault();
    const targetTecla = parseInt(e.target.value)
    
    if(reg.exec(targetTecla)){
        visorLista.push(targetTecla)
        visor.innerHTML = visorLista.join('')
        console.log(' ')
    } if(targetTecla === 'CE'|| targetTecla === 'C'){
        visor.innerHMTL = ''
    }

    sizeChecking()
})

function sizeChecking(){
    if(visor.innerText.length >= 8){
        visor.classList.add('visor__small')
    }else{
        visor.classList.remove('visor__small')
    }

}