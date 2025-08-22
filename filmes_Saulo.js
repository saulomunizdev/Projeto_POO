import prompt from 'prompt-sync'

export class Filme {
    constructor(nome, duracao, genero, sinopse){
            this.nome = nome;
            this.duracao = duracao;
            this.genero = genero;
            this.sinopse = sinopse;
            this.avaliacao = 0;
        }


    filtrarFilme (nome) {
        if (this.nome === nome) {
            return true
        }else{
            return (`O filme ${nome} não foi encontrato!`)
        }
    }
    


}