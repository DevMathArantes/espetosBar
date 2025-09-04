import { compra } from "../script.js";
import { atualizarContagem } from "./contagem.js";
import { dijuntor, get } from "./functions.js";
import { titulo } from "../script.js";

let montado;

export function montarCompra(){

    get('controlesCarrinho').innerHTML=`
        <button onclick="globalDijuntor('carrinho')" class="subNav subNavMeio">
            <img src="Assets/icons/setaEsquerda.png" alt="icone cancelar">
            Voltar
        </button>

        <button onclick="globalMontarFormulario()" class="subNav subNavMeio subNavMeioDireita">
            Confirmar
            <img src="Assets/icons/setaDireita.png" alt="icone confirmar">
        </button>
    `;

    get('compra').innerHTML=`
    
        <h2>Confirmar Pedido</h2>
        <p>Confira sua lista de compras. Após confirma-la, preencha o formulário de atendimento e envie o pedido.</p>
    `;

    for(let i = 0; i < compra.length; i++){
        montado = compra[i]

        get('compra').innerHTML+=`
        <div id="compra${i}" class="itemCompra">
            <div class="itemCompraImg" style="background-image: url(${montado[0]})"></div>
            <div class="itemCompraTxt">
                <h3>${montado[1]}</h3>
                <p><strong>Descrição:</strong><br>${montado[2]}</p>
                <p><strong>Adicionais: </strong><br>${montado[5]}</p>
                <p><strong>Lembrete: </strong><br>${montado[6]}</p>
                <p><strong>Quantidade:</strong> ${montado[4]}</p>
                <span>Total: R$ <i>${montado[3]}</i></span>
                <button onclick="globalEsquecer(${i})" class="buttonPd">
                    <img src="Assets/icons/lixeira.png" alt="iconeLixeira">
                    Esquecer
                </button>
            </div>
        </div>    
    `;
    }

    get('compra').innerHTML+=`
        <h2><br><br>Boa Escolha</h2>
        <p>${titulo} agradece pela preferência.</p>
    `

}

export function esquecer(id){
    compra.splice(id, 1)
    atualizarContagem();
    montarCompra(compra);

    if(compra.length == 0){
        dijuntor('carrinho')
    }
}