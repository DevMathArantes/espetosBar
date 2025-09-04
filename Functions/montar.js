import { compra } from "../script.js";
import { dijuntor, get } from "./functions.js";
import { contagem } from "./montarAdicionais.js";
import { atualizarContagem } from "./contagem.js";

let listaAdicionais;
let montado;
let adicional;
let nomeAdicional;
let valorAdicional;
let totalCalculado;
let inclusosRestantes;
let nomesAdicionais;

//Função para montar o produto com os dados adicionados pelo cliente
export function montar(id, inclusos){
    
    listaAdicionais = [];
    nomesAdicionais = [];
    montado = [];

    for(let i = 0; i < contagem; i++){
        if(get("adicional"+i).checked){
            listaAdicionais.push([get("nomeAdicional"+i).innerHTML, get("valorAdicional"+i).innerHTML]);
            nomesAdicionais.push(get("nomeAdicional"+i).innerHTML);
        }
    }
    montado.push(get('imagemProduto'+id).src)
    montado.push(get('titulo'+id).innerHTML);
    montado.push(get('texto'+id).innerHTML);
    montado.push(calculoValor(id, listaAdicionais, inclusos));
    montado.push(get('quantidade').innerHTML);

    if(listaAdicionais.length > 0){
        montado.push(nomesAdicionais);
    } else{
        montado.push("Nenhum");
    }
    if(get('lembrete').value != ""){
        montado.push(get('lembrete').value);
    } else{
        montado.push("Nenhum");
    }

    compra.push(montado);

    dijuntor('montar')
    atualizarContagem();
}

function calculoValor(id, adicionais, inclusos){
    
    totalCalculado = parseFloat(get('valor'+id).innerHTML);
    inclusosRestantes = inclusos;

    for(let i = 0; i < adicionais.length; i++){

        adicional = adicionais[i];
        nomeAdicional = adicional[0]
        valorAdicional = adicional[1]

        if(nomeAdicional.slice(-13) == '- Não incluso' || inclusosRestantes == 0){
            totalCalculado+=parseFloat(valorAdicional)
        } else{
            inclusosRestantes--;
        }
        
    }

    return (totalCalculado*parseFloat(get('quantidade').innerHTML)).toFixed(2);

}