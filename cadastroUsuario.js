

export class CadUsuario{
    #senha
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.#senha = senha;
    }



    fazerLogin (email, senha){
        if(this.email === email && this.#senha === senha){
            return true;
        } else {
            return false;
        }
    }

}