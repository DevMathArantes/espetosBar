//import * as testando from "./Functions/Pedir.js";
import {get, dijuntor} from "./Functions/functions.js";
import {infoStatus, status} from "./Functions/Status.js";
import {Bebidas, Combos, Espetos} from "./Lists/produtos.js";
import {montarCategorias} from "./Functions/Montagem.js";
import {mudarCategoria} from "./Functions/mudarCategoria.js";
import { Pedir } from "./Functions/Pedir.js";
import { aumentarQuantidade, diminuirQuantidade } from "./Functions/quantidadeItem.js";
import { abrirCarrinho } from "./Functions/abrirCarrinho.js";
import { montar } from "./Functions/montar.js";
import { esquecer, montarCompra } from "./Functions/montarCompra.js";
import { montarFormulario } from "./Functions/montarFormulario.js";
import { montarLink } from "./Functions/montarLink.js";
import { montarParte } from "./Functions/montarPartes.js";

window.globalMudarCategoria = mudarCategoria;
window.globalPedir = Pedir;
window.globalDijuntor = dijuntor;
window.globalAumentarQuantidade = aumentarQuantidade;
window.globalDiminuirQuantidade = diminuirQuantidade;
window.globalAbrirCarrinho = abrirCarrinho;
window.globalMontar = montar;
window.globalEsquecer = esquecer;
window.globalMontarFormulario = montarFormulario;
window.globalMontarCompra = montarCompra;
window.globalMontarLink = montarLink;
window.globalInfoStatus = infoStatus;
window.globalMontarParte = montarParte;

export let compra = [];

//Variáveis
export let grupos = ["combos", "espetos", "bebidas"];
export let produtos = [Combos, Espetos, Bebidas];
export let funcionamento = [
    [null],
    [null],
    [[18, 0], [23, 0]],
    [[18, 0], [23, 0]],
    [[18, 0], [23, 0]],
    [[18, 0], [23, 0]],
    [[18, 0], [23, 0]]
]
export const whatsapp = "https://wa.me/5516992467515";
export const pix = "39639275859";
const endereco = "https://maps.app.goo.gl/dBq4v5NUoYyKFPen7";
const instagram = "https://www.instagram.com/espetosbararamina/";
export const titulo = "Espeto's Bar";
export const taxaEntrega = 2.00;
export const valorMinimo = 30.00;

//Montagem de elementos variáveis
get("Titulo").innerHTML = titulo;
get("tituloPag").innerHTML = titulo;
get("links").innerHTML=`
    <h3>Converse conosco</h3>
    <a href="${whatsapp}">
        <img src="Assets/icons/whatsapp.png" alt="icone whatsapp">
        WhatsApp
    </a>
    <a href="${instagram}">
        <img src="Assets/icons/instagram.png" alt="icone instagram">
        Instagram
    </a>
`;

if(status()){
    get("status").innerHTML="Aberto";
} else{
    get("status").innerHTML="Fechado";
}
get('endereco').href= endereco;

//Montagem dos produtos
for(let i = 0; i < produtos.length; i++){
    montarCategorias(produtos[i]);
}

