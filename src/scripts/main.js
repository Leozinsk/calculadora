const form = document.querySelector('.teclas')
const visor = document.querySelector('.visor__info')
const reg = /[0-9]/;

form.addEventListener('click', (e)=>{
e.preventDefault();
    const targetTecla = e.target.value
    
    if(targetTecla){
        visor.innerHTML += targetTecla
    }
    console.log(typeof targetTecla )
    console.log(e.target.value)

    sizeChecking()

    if(targetTecla === 'CE'|| targetTecla === 'C'){
        visor.innerText = ''
    }

})

function sizeChecking(){
    if(visor.innerText.length >= 8){
        visor.classList.add('visor__small')
        if(visor.innerText.length >= 16){
            visor.innerHTML
        }
    }else{
        visor.classList.remove('visor__small')
    }

}