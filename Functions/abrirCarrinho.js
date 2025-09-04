import { get } from "./functions.js";
import { dijuntor } from "./functions.js";
import { compra, titulo} from "../script.js";
import { montarCompra } from "./montarCompra.js";

//Monta a lista de produtos e abre o carrinho
export function abrirCarrinho(){
    
    if(compra.length != 0){
        dijuntor('carrinho');
        get('carrinho').innerHTML=`
            <header class="header1">
            
                <div class="imgCarrinho imgDividir"></div>
                
                <div class="header1Txt">
                    <h2>Carrinho</h2>
                    <h1>${titulo}</h1>
                </div>
            
                <div id="controlesCarrinho"></div>

            </header>
            <main class="sectionPd">

                <section id="compra" class="compras"></section>

            </main>
            <footer>${get("footer").innerHTML}</footer>
        `;

        montarCompra();
    } else{
        alert("O carrinho está vazio.")
    }

    
}