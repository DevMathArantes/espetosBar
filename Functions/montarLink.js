import { get } from "./functions.js";
import { calculoTotal } from "./calculoTotal.js";
import { linkMontado } from "./link.js";

export function montarLink(){
    if(verificandoEntrega() && verificaPagamento() && get('nome').value != ""){

        get('controlesCarrinho').innerHTML=`
            <button onclick="globalMontarFormulario()" class="subNav">
                <img src="Assets/icons/setaEsquerda.png" alt="icone cancelar">
                Voltar
            </button>
        `;

        get('compra').innerHTML=`
        <h2>Tudo Pronto</h2>
        <p>O link do seu pedido foi gerado, envie seu pedido para nossa equipe.</p>

        <img class="imgPd" src="Assets/Images/logo.png" alt="logo">

        <a href="${linkMontado()}" class="buttonPd">
            <img src="Assets/icons/enviar.png" alt="icone enviar pedido">
            Enviar Pedido
        </a>

        <p>Seu pedido será enviado via WhatsApp.</p>
    `;
    }
}

function verificandoEntrega(){
    for(let i = 1; i <= 3; i++){
        if(get('entrega'+i).checked){
            if(i == 1){
                for(let j = 1; j <= 3; j++){
                    if(get('endereco'+j).value == ""){

                        alert("Informações de endereço faltando.");
                        return false;

                    }
                }
            }
            return true;
        }
    }
}

function verificaPagamento(){
    for(let i = 1; i <= 3; i++){
        if(get('pagamento'+i).checked){
            if(i == 1){
                
                if(parseFloat(get('troco').value) < calculoTotal() || get('troco').value == ""){

                    alert("Troco inválido.");
                    return false;

                } else{
                    return true;
                }
            } else if(i == 2){
                for(let j = 1; j <= 2; j++){
                    if(get('cartao'+j).checked){
                       return true; 
                    }
                }
                alert("Informe o tipo do cartão.")
                return false;
            } else{
                return true;
            }
        }
    }
    return false;
}