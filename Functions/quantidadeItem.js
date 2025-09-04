import { get } from "./functions.js";

let quantidade;

//Aumenta a quantidade do item a montar
export function aumentarQuantidade(){
    quantidade = parseInt(get('quantidade').innerHTML);
    quantidade++;
    get('quantidade').innerHTML=quantidade;
}

//Diminui a quantidade do item a montar
export function diminuirQuantidade(){
    quantidade = parseInt(get('quantidade').innerHTML);
    if(quantidade>1){
        quantidade--;
        get('quantidade').innerHTML=quantidade;
    }
}