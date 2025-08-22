const usuario = require('./usuario.js');
const entradaSaida = require ('./entradaSaida.js');
const objEntradaSaida = new entradaSaida();

var usuarios = [new usuario('Roberval', 'robe@hotmail.com', 'senha123'),
                new usuario('joao', 'joao@gmail.com', 'Senha@segura123'),
                new usuario('Douglas', 'dg@hotmail.com', 'Dg@654321'),
                new usuario('Maria', 'maria@uol.com', 'senha123456')
            ];

//FAZER LOGIN ( de forma que ele pergunte email e senha), e faça login no usuario correto

let = dadosLogin = objEntradaSaida.cadastroCompleto(['email', 'senha']);

// let digitado = (usuarios.email === dadosLogin.email && usuarios.senha === dadosLogin.senha)

let usuarioLogado = usuarios.find (u => u.fazerLogin(dadosLogin[0],dadosLogin[1]))

if(usuarios.email === dadosLogin.email && usuarios.senha === dadosLogin.senha){
    console.log (`Login efetuado com ${usuarios.nome} `)
} else {
    console.log ('Email ou senha incorreto')
}

