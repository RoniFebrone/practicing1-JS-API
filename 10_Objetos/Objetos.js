let jogador = {
    nome: 'Roni', 
    idade:34,
    numGol: 100,
    Gol(g=0){
        console.log('Ronin fez gol')
        this.numGol += g        
    }
}

console.log(jogador.nome)
jogador.posicao = 'MEI'
console.log(jogador.posicao)