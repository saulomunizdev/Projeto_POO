import { CadUsuario } from "./cadastroUsuario.js";
import {FuncoesES} from './entradaSaida.js';
import { Filme } from "./filme.js";
import { Serie } from "./serie.js";

const objEntradaSaida = new FuncoesES();
const entrada = new FuncoesES();

// FUNÇÃO LOGIN, AQUI ELE VERIFICA SE JA TEM CADASTRADO 

// var usuarios = [new CadUsuario('Roberval', 'robe@hotmail.com', 'senha123'),
//                 new CadUsuario('joao', 'joao@gmail.com', 'Senha@segura123'),
//                 new CadUsuario('Douglas', 'dg@hotmail.com', 'Dg@654321'),
//                 new CadUsuario('Maria', 'maria@uol.com', 'senha123456')
//             ];


// let  dadosLogin = objEntradaSaida.cadastroCompleto(['email', 'senha']);
// let  usuariologado = usuarios.find(u => u.fazerLogin(dadosLogin[0], dadosLogin[1]));

// if (usuariologado) { 
//     entrada.mensagemSimples(`Login efetuado com sucesso! Bem-vindo, ${usuariologado.nome}`);
// }else {
//     entrada.mensagemSimples('Email ou senha incorreto');
    
// }

// // FUNÇÃO CADASTRO E LOGANDO APÓS O CADASTRO

// var usuario = []
// let dados = entrada.cadastroCompleto(['nome', 'email', 'senha']);
// usuario.push(new CadUsuario(dados[0], dados[1], dados[2]));

// entrada.mensagemCompleta(`Usuário ${usuario[0].nome} cadastrado com sucesso!`);

// let email = entrada.entrada('Digite o email: ');
// let senha = entrada.entrada('Digite a senha: ');
// if (usuario[0].fazerLogin(email, senha)){
//     entrada.mensagemSimples('Login realizado com sucesso!');
// }

// FUNÇÃO LISTA DE FILMES E SERIES
var filmes = [  new Filme('O senhor dos aneis', 180, 'Aventura de um hobbit', 2001),
                new Filme('O hobbit', 200, 'Aventura de um hobbit', 2012),
                new Filme('O retorno do rei', 250, 'Aventura de um hobbit', 2003),
                new Filme('O poderoso chefão', 175, 'Drama de máfia', 1972),
                new Filme('Pulp Fiction', 154, 'Crime e drama', 1994),
                new Filme('Forrest Gump', 142, 'Drama e comédia', 1994),
                new Filme('Matrix', 136, 'Ficção científica', 1999),
                new Filme('A origem', 148, 'Ficção científica', 2010),
                new Filme('O silêncio dos inocentes', 118, 'Thriller psicológico', 1991),
                new Filme('Gladiador', 155, 'Ação e drama', 2000),
                new Filme('Interestelar', 169, 'Ficção científica', 2014),
                new Filme('O lobo de Wall Street', 180, 'Comédia e drama', 2013),
                new Filme('A lista de Schindler', 195, 'Drama histórico', 1993),
                new Filme('Cidadão Kane', 120, 'Drama', 1941)
            ];

var series = [  new Serie('Preso',50,'Maikel é preso para tirar seu irmão da cadeia',2000,1,1,'Prision Break'),
                new Serie('Game of Thrones', 60, 'Luta pelo trono de ferro', 2011, 73, 8, 'Game of Thrones'),
                new Serie('Breaking Bad', 47, 'Professor de química se torna traficante', 2008, 62, 5, 'Breaking Bad'),
                new Serie('Stranger Things', 55, 'Mistérios em uma cidade pequena', 2016, 34, 4, 'Stranger Things'),
                new Serie('The Crown', 58, 'História da rainha Elizabeth II', 2016, 50, 4, 'The Crown'),
                new Serie('The Mandalorian', 40, 'Aventura no universo Star Wars', 2019, 16, 2, 'The Mandalorian'),
                new Serie('The Witcher', 60, 'Caçador de monstros em um mundo mágico', 2019, 16, 2, 'The Witcher'),
                new Serie('The Office', 22, 'Comédia no ambiente de trabalho', 2005, 201, 9, 'The Office'),
                new Serie('Friends', 22, 'Amizades e relacionamentos em Nova York', 1994, 236, 10, 'Friends'),
                new Serie('The Big Bang Theory', 22, 'Cientistas e suas vidas sociais', 2007, 279, 12, 'The Big Bang Theory'),
                new Serie('Sherlock', 90, 'Detetive moderno em Londres', 2010, 13, 4, 'Sherlock'),
                new Serie('Black Mirror', 60, 'Antologia de ficção científica distópica', 2011, 22, 5, 'Black Mirror'),
                new Serie('Narcos', 49, 'História do tráfico de drogas na Colômbia', 2015, 30, 3, 'Narcos'),
                new Serie('The Handmaid\'s Tale', 50, 'Distopia sobre opressão feminina', 2017, 46, 4, 'The Handmaid\'s Tale') 
            ];

// LISTANDO MENU PARA ESCOLHER FILME OU SÉRIE

let escolha = entrada.entrada('Deseja ver filmes ou séries? (f/s): ').toLowerCase(); 

if (escolha === 'f') {
    for (let i = 0; i < filmes.length; i++) {
        entrada.mensagemSimples(`${i + 1}. ${filmes[i].nome} (${filmes[i].ano}) - ${filmes[i].duracao} minutos`);
    };
} else {
       for (let i = 0; i < series.length; i++) {
        entrada.mensagemSimples(`${i + 1}. ${series[i].nomeSerie} (${series[i].ano}) - 
            ${series[i].duracao} minutos por episódio - ${series[i].temporada} temporadas, ${series[i].episodios} episódios`);
    }
}

let escolhaFS = entrada.entrada('Qual deseja assistir? ');

// for (let i = 0; i <)