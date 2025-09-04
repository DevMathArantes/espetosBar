import { compra, pix, whatsapp } from "../script.js";
import { calculoTotal } from "./calculoTotal.js";
import { get } from "./functions.js";

let link;
let item;
let adicionais;

export function linkMontado(){

    link = whatsapp+ "?text=";
    link +="%0ANovo%20Pedido%0A%0A*%20Cliente:%20"+get('nome').value;
    for(let i = 1; i <= 3; i++){
        if(get('entrega'+i).checked){
            link+= "%0A%0A*%20Forma%20de%20entrega:%20"+get('entregaTxt'+i).innerHTML+"%0A";
            if(i == 1){
                link+= "%0A%0ABairro:%20"+get('endereco1').value;
                link+= "%0A%0ARua:%20"+get('endereco2').value;
                link+= "%0A%0ANúmero:%20"+get('endereco3').value;
                if(get('endereco4').value != ""){
                    link+= "%0A%0AComplemento:%20"+get('endereco4').value;
                }
            } 
        }
    }

    for(let i = 0; i < compra.length; i++){
        link+="%0A________________________________________%0A";
        item = compra[i]
        link+="%0A*%20"+item[1]+"%0A%0ADescrição:%0A"+item[2]+"%0A";
        if(item[5] != "Nenhum"){
            adicionais = item[5];
            for(let j = 0; j < adicionais.length; j++){
                link+= "%0A%2B%20"+adicionais[j];
            }
        }
        if(item[6] != "Nenhum"){
            link+="%0A%0ALembrete:%20"+item[6];
        }
        link+="%0A%0AQuantidade:%20"+item[4]+"%0A%0ATotal%20do%20item:%20R$%20"+item[3];
    }
    link+="%0A________________________________________%0A";
    for(let i = 1; i <= 3; i++){
        if(get('pagamento'+i).checked){
            link+="%0A*%20Forma%20de%20pagamento:%20"+get('formaPagamento'+i).innerHTML;
            if(i == 1){
                link+="%0A%0ATroco%20para:%20R$%20"+(parseFloat(get('troco').value)).toFixed(2);
                link+="%0A%0ATroco=%20R$%20"+(parseFloat(get('troco').value)-calculoTotal()).toFixed(2);
            } else if(i == 2){
                if(get('cartao1').checked){
                    link+="%20(Crédito)";
                } else{
                    link+="%20(Débito)";
                }
            } else{
                if(pix != null){
                    link+="%0A%0AEnvie%20no%20pix:%20"+pix+"%0A(Favor%20enviar%20o%20comprovante)"
                }
            }
        }
    }
    link+="%0A%0A*%20Total%20do%20pedido:%20R$%20"+(calculoTotal()).toFixed(2);

    return link;
}