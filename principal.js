import { Usuario } from './usuario.js';
import {FuncoesES} from './entradaSaida.js';
import { Datas } from './datas.js';

const objEntradaSaida = new FuncoesES();

var usuarios = []
var filmes = [new Filme ('O senhor dos aneis', 180, 'Aventura de um hobbit', 2001),
              new Filme ('O hobbit', 200, 'Aventura de um hobbit', 2012),
              new Filme ('O retorno do rei', 250, 'Aventura de um hobbit', 2003)
            ];
var series = []


objEntradaSaida.mensagemCompleta(filmes[0].compartilhar());
//const usuario1 = new usuario("Roberval", "roberval@bol.com","senhadificil123")

let dados = objEntradaSaida.cadastroCompleto(['nome', 'email', 'senha']);
usuarios.push(new Usuario(dados[0], dados[1], dados[2]));

objEntradaSaida.mensagemCompleta(`Usuário ${usuarios[0].nome} cadastrado com sucesso!`);


// let email = objEntradaSaida.entrada('Digite o email: ');
// let senha = objEntradaSaida.entrada('Digite a senha: ');
// if (usuarios[0].fazerLogin(email,senha)){
//     objEntradaSaida.mensagemSimples('Login realizado com sucesso!')
// }

// let dadosLogin = objEntradaSaida.cadastroCompleto(['email','senha']);
// if (usuarios[0].fazerLogin(dados[0],dados[1])){
//     objEntradaSaida.mensagemSimples('Login realizado com sucesso!');
// }

objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].retonarAssinatura()}`);
objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].validarAssinatura()}`);

usuarios[0].adicionarAssinatura(30);

objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].retonarAssinatura()}`);
objEntradaSaida.mensagemCompleta(`Assinatura do usuário: ${usuarios[0].validarAssinatura()}`);

