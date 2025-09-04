import { taxaEntrega } from "../script.js";
import { get } from "./functions.js";

//Monta a lista de produtos e abre o carrinho
export function montarFormulario(){

    get('controlesCarrinho').innerHTML=`
        <button onclick="globalMontarCompra()" class="subNav subNavMeio">
            <img src="Assets/icons/setaEsquerda.png" alt="icone cancelar">
            Voltar
        </button>

        <button onclick="globalMontarLink()" class="subNav subNavMeio subNavMeioDireita">
            Verificar
            <img src="Assets/icons/setaDireita.png" alt="icone confirmar">
        </button>
    `;
    
    get('compra').innerHTML=`
        <h2>Quase lá !</h2>
        <p>Preencha o formulário com os dados de identificação, entrega e pagamento.</p>

        <div class="formMaior">

            <label>Nome</label>
            <input id="nome" type="text" placeholder="Digite seu nome">

            <h3>Modo de entrega</h3>

            <div class="formMaiorMark">
                <input value="Para entrega" id="entrega1" type="radio" name="entrega">
                <label for="entrega1" id="entregaTxt1">Entrega por endereço</label>

                <div class="subForm">
                    <p>Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}</p>

                    <label>Bairro</label>
                    <input id="endereco1" type="text" placeholder="Informe o bairro">

                    <label>Rua</label>
                    <input id="endereco2" type="text" placeholder="Informe a rua">

                    <label>Número</label>
                    <input id="endereco3" type="text" placeholder="Informe o número">

                    <label>Complemento</label>
                    <input id="endereco4" type="text" placeholder="Algum complemento ?">
                </div>
            </div>

            <div class="formMaiorMark">
                <input id="entrega2" type="radio" name="entrega">
                <label for="entrega2" id="entregaTxt2">Retirar no local</label>
            </div>

            <div class="formMaiorMark">
                <input id="entrega3" type="radio" name="entrega">
                <label for="entrega3" id="entregaTxt3">Estou no local</label>
            </div>

            <h3>Forma de pagamento</h3>

            <div class="formMaiorMark">
                <input id="pagamento1" type="radio" name="pagamento">
                <label id="formaPagamento1" for="pagamento1">Dinheiro</label>
            
                <div class="subForm">
                    <label>Quantia para troco</label>
                    <input id="troco" type="number" placeholder="Informe a cédula">
                </div>
            </div>

            <div class="formMaiorMark">
                <input id="pagamento2" type="radio" name="pagamento">
                <label id="formaPagamento2" for="pagamento2">Cartão</label>

                <div class="subForm">
                    <input id="cartao1" type="radio" name="cartao">
                    <label for="cartao1">Crédito</label>

                    <input id="cartao2" type="radio" name="cartao">
                    <label for="cartao2">Débito</label>
                </div>
            </div>

            <div class="formMaiorMark">
                <input id="pagamento3" type="radio" name="pagamento">
                <label id="formaPagamento3" for="pagamento3">Pix</label>
            </div>

        </div>
        
        <p>
            Após verificar o formulário, o link será gerado para que você possa enviar seu pedido de forma rápida e 
            fácil
        </p>
    `;
}