import {get} from "./functions.js";
import { montagemMontado } from "./montarPartes.js";

//inicializando variáveis
let categoria;
let settings;
let identifique;
let idHtml;
let categoriaHtml;
let nomeCategoria;
let produto;
let nomeProduto;
let descreverProduto;
let valorProduto;
let id = 0;
let adicionaisProduto;
let inclusos;

//Seleção da estrutura html das categorias
function definirCategoria(idHtml, nome, categoriaHtml){

    switch(categoriaHtml){
        case 1:
            return `
                <h2 class="tituloPd">${nome}</h2>
                <div id="${idHtml}" class="carrossel"></div>
            `;
        case 2:
            return `
                <h2 class="tituloPd">${nome}</h2>
                <div class="campoMontagem">

                    <h3>Monte seu produto</h3>

                    <p>Após selecionar os 2 campos, o item será liberado para pedido.</p>

                    <div class="selectMontagem">
                        <h4>Metade 1</h4>
                        <select onchange="globalMontarParte()" id="Metade1">
                            <option value="nenhum">Nenhum</option>
                            ${montagemMontado(idHtml+"Metade1")}
                        </select>
                    </div>

                    <div class="selectMontagem">
                        <h4>Metade 2</h4>
                        <select onchange="globalMontarParte()" id="Metade2">
                            <option value="nenhum">Nenhum</option>
                            ${montagemMontado(idHtml+"Metade2")}
                        </select>
                    </div>

                    <div id="itemMontado" class="itemMontado">
                        <h3>Seu produto está pronto</h3>
                        <div id="${idHtml}"></div>
                    </div>
                </div>

            `;
    }

}

//Seleção da estrutura html dos produtos
function definirProduto(identificador, idHtml, numeroImagem, id, nome, descrever, valor, adicionaisProduto, inclusos){
    switch(identificador){
        case 1:
            return `
                <div id="produto${id}" onclick="globalPedir('${id}', '${adicionaisProduto}', ${inclusos})" class="item">
                    <img id="imagemProduto${id}" src="Assets/Images/${idHtml}${numeroImagem}.png" alt="imagem produto">
                    <h3 id="titulo${id}">${nome}</h3>
                    <span>R$ <i id="valor${id}">${(parseFloat(valor)).toFixed(2)}</i></span>
                    <p id="texto${id}">${descrever}</p>
                </div>
        `;
        case 2:
            return `
                <div id="produto${id}" onclick="globalPedir('${id}', '${adicionaisProduto}', ${inclusos})" class="item">
                    <img id="imagemProduto${id}" src="Assets/Images/logo.png" alt="logo da empresa">
                    <h3 id="titulo${id}">${nome}</h3>
                    <span>R$ <i id="valor${id}">${(parseFloat(valor)).toFixed(2)}</i></span>
                    <p id="texto${id}">${descrever}</p>
                </div>
            `;
        case 3:
            return `
                <div id="produto${id}" onclick="globalPedir('${id}', '${adicionaisProduto}', ${inclusos})" class="itemGrande">
                    <img id="imagemProduto${id}" src="Assets/Images/${idHtml}${numeroImagem}.png" alt="imagem produto">
                    <div class="itemGrandeTxt">
                        <h3 id="titulo${id}">${nome}</h3>
                        <p id="texto${id}">${descrever}</p>
                        <span>R$ <i id="valor${id}">${(parseFloat(valor)).toFixed(2)}</i></span>
                    </div>
                </div>
            `;
        case 4:
            return `
                <div id="produtoMontado" onclick="globalPedir('Montado', '${adicionaisProduto}', ${inclusos})" class="item">
                    <img id="imagemProdutoMontado" src="Assets/Images/logo.png" alt="logo da empresa">
                    <h3 id="tituloMontado">${nome}</h3>
                    <span>R$ <i id="valorMontado"></i></span>
                    <p id="textoMontado"></p>
                </div>
            `;
    }
}

//Montagem de itens por categoria
export function montarCategorias(categorias){    

    //Adicionando grupo de categorias ao select
    get("grupoAtual").innerHTML+=`
        <option value="${categorias[0]}">${categorias[1]}</option>
    `

    //Criando html com grupo de categorias
    get("produtos").innerHTML+=`
        <div id="${categorias[0]}"></div>
    `

    for(let i = 2; i < categorias.length; i++){
        
        //Coletando a categoria da lista de categorias
        categoria = categorias[i];

        //Coletando array com detalhes da categoria
        settings = categoria[0];

        //identificando html do item
        identifique = settings[0];

        //identificando id para adicionar o item
        idHtml = settings[1];

        //identificando título da categoria
        nomeCategoria = settings[2];

        //Settings dos adicionais do item
        adicionaisProduto = settings[3];

        //Selecionando o html da categoria
        categoriaHtml = settings[4];

        //Adicionando categorias
        get(categorias[0]).innerHTML+=definirCategoria(idHtml, nomeCategoria, categoriaHtml);
        
        for(let j = 1; j < categoria.length; j++){

            //coletando produto
            produto = categoria[j];

            //título do produto
            nomeProduto = produto[0];

            //descrição do produto
            descreverProduto = produto[1];

            //preço do produto
            valorProduto = produto[2];
            
            //inclusos
            inclusos = produto[3];

            //acrescentando o id
            id++;

            //Adicionando produtos
            get(idHtml).innerHTML += definirProduto(
                identifique, 
                idHtml, 
                j, 
                id, 
                nomeProduto, 
                descreverProduto, 
                valorProduto,
                adicionaisProduto,
                inclusos
            );
        }
    }
}

