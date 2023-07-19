class Jogador{
    
    constructor(nome, posicao, numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }

    golsMarcados(){
        console.log(`O ${this.nome} ja marcou ${this.numGol} gols em sua carreira`)
    }
}

const Neymar = new Jogador ('Neymar', 'ATA', 400)
Neymar.golsMarcados()