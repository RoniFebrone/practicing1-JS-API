const dias = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const Lancamento = '13 Dec. 2023'

function countDown(){
    const dataLanc = new Date(Lancamento)
    const hoje = new Date

    const segTotal = (dataLanc - hoje) / 1000;
    
    const finalDias = Math.floor (segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor (segTotal / 60 / 60) %24;
    const finalMin = Math.floor (segTotal / 60) %60;
    const finalSeg = Math.floor (segTotal)%60;

    dias.innerHTML = finalDias
    hora.innerHTML = finalHoras
    minuto.innerHTML = finalMin
    segundo.innerHTML = finalSeg   
}
countDown();
setInterval(countDown, 1000)