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
    if (operadores.includes(e)) {
        if (displaySecundario.innerHTML === '') {
            displaySecundario.textContent = `${displayPrincipal.innerHTML + e}`
            resetMainDisplay()
        } else {
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
        if (displayMain !== '') {
            if (displayMain.includes('-')) {
                displayMain = conversorPositivo.toString()
                displayPrincipal.textContent = displayMain
            } else {
                displayMain = conversorNegativo.toString()
                displayPrincipal.textContent = displayMain
            }
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
    displayMain = resultado.toFixed(4)
    if (displayMain.length > 10) {
        displayPrincipal.classList.add('visor__small')
    } else {
        displayPrincipal.classList.remove('visor__small')
    }
    displayPrincipal.innerHTML = displayMain.substring(0, 10)
}

function mostraDisplay(e: any) {
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
        if (e.value === '.') {
            if (displayMain.includes('.')) {
                return void(0)
            }
        }
        displayMain += e.value
        displayPrincipal.textContent = displayMain.substring(0, 15)
        if (displayMain.length > 10) {
            displayPrincipal.classList.add('visor__small')
        }else {
            displayPrincipal.classList.remove('visor__small')
        }
    }
}
