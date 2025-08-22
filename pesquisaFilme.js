import { Filme } from "./filmes_Saulo.js";
import {FuncoesES} from './entradaSaida.js';

const entrada = new FuncoesES()

//const filme1 = new Filme ('Mumia', '1h', 'aventura', 'teste-teste')
           
// var resposta = entrada.entrada('Digite o filme desejado: ');
//     if (filme1.nome === resposta){
//         console.log (`O filme ${filme1.nome} tem no catalogo.`)
//     }else{
//         console.log (`O filme ${resposta} NÃO tem no catalogo.`)
//     }

var filmes = [  new Filme ('Mumia', '1h', 'aventura', 'teste-teste'),
                new Filme ('carros', '1h', 'aventura', 'teste-teste'),
                new Filme ('grito', '1h', 'aventura', 'teste-teste'),
                new Filme ('harry', '1h', 'aventura', 'teste-teste')
            ];

var resposta = entrada.entrada('Digite o filme desejado: ');
let filmePesquisa = filmes.find (r => r.nome.toLowerCase() === resposta.toLowerCase());
 
console.log (filmePesquisa)