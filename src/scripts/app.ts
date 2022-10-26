const form = document.querySelector('.teclas') as Element
const displayPrincipal = document.querySelector('.visor__primario') as Element
const displaySecundario = document.querySelector('.visor__secundario') as Element
let displayMain = ''
let preResultado: any = null
const operadores = ['/', '*', '-', '+', '%']

form.addEventListener('click', (e) => {
    e.preventDefault();
    const evento = e.target as any
    operacoes(evento.value)
    mostraDisplay(evento)
})

function operacoes(e: any) {
    if (operadores.includes(e)) {               // Checa se o operador foi clicado
        if (displaySecundario.innerHTML === '') {            // Checa se já há infromação no display
            displaySecundario.textContent = `${displayPrincipal.innerHTML + e}`
            resetMainDisplay()
        } else { // executa operação
            resultados()
        }
    } else if (e === 'C') {
        resetMainDisplay()
    } else if (e === 'CE') {
        displaySecundario.innerHTML = ''
        resetMainDisplay()
    } else if (e === '=') {
        if (displaySecundario.innerHTML !== '') {
            resultados()
        } else {
            resetMainDisplay()
        }
    } else if (e === '±') {
        const conversorNegativo = -Math.abs(parseFloat(displayMain))
        const conversorPositivo = Math.abs(parseFloat(displayMain))
        if (displayMain.includes('-')) {
            displayMain = conversorPositivo.toString()
            displayPrincipal.textContent = displayMain
            console.log(displayMain)
        } else {
            displayMain = conversorNegativo.toString()
            displayPrincipal.textContent = displayMain
            console.log(displayMain)
        }
    }
}
function resetMainDisplay() {
    displayMain = ''
    displayPrincipal.innerHTML = ''
}
function resultados() {
    preResultado = [displaySecundario.innerHTML, displayPrincipal.innerHTML]
    const resultado = eval(preResultado.join(''))
    displaySecundario.textContent = ''
    resetMainDisplay()
    displayPrincipal.innerHTML = resultado.toFixed(0,4)
}

function mostraDisplay(e: any) {       // Adiciona info para main display
    if (e.value !== undefined &&
        e.value !== '/' &&
        e.value !== '-' &&
        e.value !== '+' &&
        e.value !== '*' &&
        e.value !== '%' &&
        e.value !== 'C' &&
        e.value !== 'CE' &&
        e.value !== '±' &&
        e.value !== '='
    ) {
        displayMain += e.value
        displayPrincipal.textContent = displayMain;
        if (displayMain.length > 10) {
            displayPrincipal.classList.add('visor__small')
        }else{
            displayPrincipal.classList.remove('visor__small')
        }
    }
}