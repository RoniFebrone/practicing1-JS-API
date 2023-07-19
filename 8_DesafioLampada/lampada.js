var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('LampBroken') > -1
}

function ligar(){
    if(!estaQuebrada()){
    lamp.src= 'LampOn.svg'}
    
}
function desligar(){
    if(!estaQuebrada()){
    lamp.src= 'LampOff.svg'}
}

lamp.addEventListener ('click', quebrar)
function quebrar(){
    lamp.src = 'LampBroken.svg'
}