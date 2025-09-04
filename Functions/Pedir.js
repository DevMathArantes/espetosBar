import { get, dijuntor } from "./functions.js";
import { titulo } from "../script.js";
import { montarAdicionais } from "./montarAdicionais.js";
import { avisoStatus, status } from "./Status.js";

//Abre a tela de montagem do produto
export function Pedir(id, listaAdicionais, inclusos){

    if(status()){
        dijuntor("montar");

        get("montar").innerHTML=`
            <header class="header1">

                <div class="prateleira imgDividir"></div>

                <div class="header1Txt">
                    <h2>Montar item</h2>
                    <h1>${titulo}</h1>
                </div>

                <button onclick="globalDijuntor('montar')" class="subNav">
                    <img src="Assets/icons/cancelar.png" alt="icone cancelar">
                    Cancelar
                </button>

            </header>
            <main class="sectionPd" id="montar">

                <h2>Personalize seu pedido</h2>

                <section id="campoAdicionais" class="checkBoxFormPd">

                    <input type="checkbox" class="abrirListaOculta" id="abrirAdicionais">
                    <label for="abrirAdicionais">Adicionais</label>
                    <ul id="adicionais" class="listaOculta"></ul>

                </section>

        
                <div class="${get('produto'+id).classList}">${get('produto'+id).innerHTML}</div>

                <section class="formPd">

                    <label>Lembrete</label>
                    <input id="lembrete" class="lembrete" type="text" placeholder="Lembrete">

                    <label>Quantidade do item</label>
                    <div class="quantidade">

                        <button onclick="globalDiminuirQuantidade()">
                            <img src="Assets/icons/retirar.png" alt="icone retirar">
                        </button>

                        <span id="quantidade">1</span>

                        <button onclick="globalAumentarQuantidade()">
                            <img src="Assets/icons/adicionar.png" alt="icone adicionar">
                        </button>

                    </div>

                    <button onclick="globalMontar('${id}', ${inclusos})" class="buttonPd">
                        <img src="Assets/icons/comprar.png" alt="icone montar">
                        Montar
                    </button>

                </section>

            </main>
            <footer>${get("footer").innerHTML}</footer>
        `;

        montarAdicionais(listaAdicionais);
    } else{
        avisoStatus();
    }

    
}