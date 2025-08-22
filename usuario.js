import { Datas } from "./datas.js";

export class Usuario{
    #senha
    constructor(nome, email, senha){
        this.Datas = new Datas();
        this.nome = nome;
        this.email = email;
        this.#senha = senha;
        this.assinatura = this.Datas.dataAtual();
    }

    set senha(senha){
        if (senha.length >= 6){
            this.#senha = senha;
        } else {
            console.log('A senha deve ter no mínimo 6 caracteres.');
        } 
    }

    fazerLogin(email,senha){
        if(this.email === email && this.#senha === senha){
            return true;
        } else {
            return false;
        }
    }

    validarAssinatura(){
        let dias = this.Datas.diferencaDias(this.assinatura);
        return (dias >= 1)
    }

    adicionarAssinatura(dias){
        this.assinatura = this.Datas.adicionarDias(this.assinatura, dias);
    }

    retonarAssinatura(){
        return this.Datas.formataData(this.assinatura);
    }
}

