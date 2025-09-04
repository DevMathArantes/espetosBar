import { compra, taxaEntrega } from "../script.js";
import { get } from "./functions.js";

let item;
let total;

export function calculoTotal(){
    
    total = 0.00;

    for(let i = 0; i < compra.length; i++){
        item = compra[i];
        total+=parseFloat(item[3]);
    }

    if(get('entrega'+1).checked){
        total+=taxaEntrega;
    }

    return(total);
}