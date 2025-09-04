import { adicionais } from "../Lists/adicionais.js";
import { get } from "./functions.js";

let listas;
let posi;
let listaAtual;
let tipo;
let adicional;
export let contagem;
let settings;
let titulo;

//Verifica quais adicionais devem ser montados em cada item
export function montarAdicionais(lista){
    
    //separando as listas de adicionais do produto
    listas = lista.split(",")

    //Iniciando a contagem de adicionais
    contagem = 0;

    //Adicionando cada uma separadamente
    for(let i = 0; i < listas.length; i++){
        
        //Coletando a posição dentro da lista de adicionais
        posi = listas[i]

        if(adicionais[posi]){
            
            //Coletando a lista atual
            listaAtual = adicionais[posi];

            settings = listaAtual[0];

            //Coletando os dados para organizar a categoria de adicionais
            titulo = settings[0];
            tipo = settings[1];

            get('adicionais').innerHTML+=`<p>${titulo}</p>`
            adicionandoAdicional(listaAtual, tipo);

        } else{
            get("campoAdicionais").innerHTML=`<p>Este produto não possui adicionais.</p>`
        }
    }

}

//Preenche o campo de adicionais
function adicionandoAdicional(lista, tipo){

    //Preenche o campo adicionais com os adicionais da lista
    for(let i = 1; i < lista.length; i++){

        //Lista com dados do adicional
        adicional = lista[i];
        
        //Adicionando adicional
        get("adicionais").innerHTML+=`
            <div class="checkBoxPd">
                <input type="${tipo}" name="adicional" id="adicional${contagem}">
                <label id="nomeAdicional${contagem}" for="adicional${contagem}">${adicional[0]}</label>
                <span> R$ <i id="valorAdicional${contagem}">${(parseFloat(adicional[1])).toFixed(2)}</i></span>
            </div>
            
        `;

        if(!adicional[2]){
            get('nomeAdicional'+contagem).innerHTML+=" - Não incluso";
        }

        contagem++;
    }

}