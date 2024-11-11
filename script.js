let Total = 0.0;
let Status;
let listaFinal = "Seu pedido: <br>";
let link = "https://wa.me/5516992467515/?text=Pedido";
let controle = 0;
let linkCombo = "https://wa.me/5516992467515/?text=Combo";
let quant1;
let quant2;
let quant3;
let quant4;
let quant5;
let Combo = 0;
let tipoCombo;
let totalChopp;
let nomeChopp;
let linkChopp ="https://wa.me/5516992467515/?text=";

//coleta ids 
function get(id){
    return document.getElementById(id);
}

//atualiza o Status de 1 para aberto e 0 para fechado 
function aberto(){
    const agora = new Date();
    const hora = agora.getHours();
    let status = get('status');
    if((hora>=18) && (hora<=23)){
        status.innerHTML=`Aberto`;
        Status = 1;
    }
    else{
        status.innerHTML=`Fechado`;
        Status = 0;
    }
}

//funções auxiliares de adicionar ou retirar itens

    //verifica se o finalizar deve aparecer
    function verificaTotal(){
        if(Total>0){
            get('finalizar').style.display="flex";
            get('Total').innerHTML=Total.toFixed(2);
        }
        else{
            get('finalizar').style.display="none";
        }
    }

    //retorna o valor do produto como float
    function valorItem(identificador){
        let valor = get('valor'+identificador).innerHTML;
        let valorFinal = parseFloat(valor.slice(3));
        return valorFinal;
    }

//adiciona os itens
function adicionarItem(identificador){
    let itens = parseInt(get('quantidade'+identificador).innerHTML);
    itens++;
    get('quantidade'+identificador).innerHTML=itens;
    Total+=valorItem(identificador);
    verificaTotal();
}

//remove os itens
function retirarItem(identificador){
    if(parseInt(get('quantidade'+identificador).innerHTML) != 0){
        let itens = parseInt(get('quantidade'+identificador).innerHTML);
        itens--;
        get('quantidade'+identificador).innerHTML=itens;
        Total-=valorItem(identificador);
        verificaTotal();
    }
}

//abre o modal
function abrirModal(){
    get('modal').style.display='flex';
    get('fundoModal').style.display='block';
}

//fecha o modal
function fecharModal(){
    get('modal').style.display='none';
    get('fundoModal').style.display='none';
}

//gera a lista final (após as verificações)
function gerarLista(){
    if((get('nome').value!="")){
        if(get('formaPagamento').value!=1 && verificaTroco()){
            link +=get('nome').value+"%0A%0A";
            for(let i=1; i<=38;i++){
                if(parseInt(get('quantidade'+i).innerHTML)> 0){
                    listaFinal+=get('quantidade'+i).innerHTML+" - "+ get('produto'+i).innerHTML+"<br>";
                    link +=get('quantidade'+i).innerHTML+"%20-%20"+ get('produto'+i).innerHTML+"%20(R$"+(valorItem(i)*get('quantidade'+i).innerHTML).toFixed(2)+")%0A";
                        
                }
            }
            if(get('campoEntrega').value != ""){
                listaFinal+="<br>Endereço: "+get('campoEntrega').value+"<br>";
                link+="%0AEndereço:%20"+get('campoEntrega').value+"%0A";
            }
            listaFinal+=`<br>Total: R$ ${Total.toFixed(2)}<br>`
            link+="%0ATotal=%20R$"+Total.toFixed(2);
            get('listaFinal').innerHTML=listaFinal;
            get('separarEnviar').innerHTML=`<a class="enviar" href="${link}">Enviar pedido</a>`
            get('infoCliente').style.display='none';
        }
        else{
            alert("Pagamento inválido")
        }
    }
    else{
        alert("Preencha seu nome")
    }
}

//abre o campo para troco
function troco(){
    if(get('formaPagamento').value=="2"){
        get('troco').style.display='block';
    }
    else{
        get('troco').style.display='none';
    }
}

//Verifica o valor do troco
function verificaTroco(){
    if(get('formaPagamento').value=="1"){
        return false;
    }
    else{
        if(get('formaPagamento').value=="2" && get('troco').value>=Total){
            let Tr = parseFloat(get('troco').value)-Total;
            link+="%0ATroco%20para%20R$%20"+parseFloat(get('troco').value).toFixed(2)+"%20-%20(%20R$%20"+parseFloat(Tr).toFixed(2)+")%0A";
            listaFinal+="<br>Troco para R$ "+parseFloat(get('troco').value).toFixed(2) +" - (R$ "+parseFloat(Tr).toFixed(2)+")<br>";
            return true;
        }
        if(get('formaPagamento').value=="3"){
            link+="%0ACartão%0A"
            listaFinal+="Cartão<br>";
            return true;
        }
        if(get('formaPagamento').value=="4"){
            link+="%0APix%0A"
            listaFinal+="Pix<br>";
            return true;
        }
        else{
            return false;
        }
    }
}

//Gera o link para pedir combos
function pedirCombo(identificador){
    let nome = prompt("Digite o seu nome: ");
    if(nome===""){
        alert("Preencha o campo com seu nome.")
    }
    else{
        Combo = 'combo'+identificador;
        switch( Combo){
            case 'combo1':
                tipoCombo = "P";
                quant1 = 2;
                quant2 = 1;
                quant3 = "1/2";
                quant4 = 1;
                quant5 = "36.90"
                break;
            case 'combo2':
                tipoCombo = "M"
                quant1 = 4;
                quant2 = 2;
                quant3 = "1/2";
                quant4 = 2;
                quant5 = "68.90"
                break;
            case 'combo3':
                tipoCombo = "G"
                quant1 = 6;
                quant2 = 4;
                quant3 = 1;
                quant4 = 3;
                quant5 = "109.90"
                break;
        }
        linkCombo+="%20"+tipoCombo+"%20para%20"+nome+"%0A%0A"+quant1+"%20Espetos%20de%20R$%206.00%0A"+quant2+"%20Espetos%20de%20R$%207.00%0A"+quant3+"%20Tábua%0ATorre%20de%20chopp%20de%20"+quant4+"%20litro(s)%0A%0ATotal:%20R$%20"+quant5;
        get('combo'+identificador).innerHTML+=`<a href="${linkCombo}">Enviar pedido</a>`;
        get('gerar'+identificador).style.display="none";
    }
}

//Adiciona chopps
function addChopp(identificador){
    let quantChopp = get('quantChopp'+identificador).innerHTML
    quantChopp++;
    quantChopp.toString();
    get('quantChopp'+identificador).innerHTML=quantChopp;
}

//Retira chopps
function retChopp(identificador){
    if(quantChopp!=0){
        let quantChopp = get('quantChopp'+identificador).innerHTML
        quantChopp--;
        quantChopp.toString();
        get('quantChopp'+identificador).innerHTML=quantChopp;
    }
}

//gerar pedido de chopp
function gerarChopp(identificador){
    if(get('quantChopp'+identificador).innerHTML!=0){
        let nome = prompt("Digite o seu nome: ");
        if(nome===""){
            alert("Preencha o campo com seu nome.")
        }
        else{
            totalChopp= valorItem(identificador)*parseInt(get('quantChopp'+identificador).innerHTML);
            nomeChopp= get('chopp'+identificador).innerHTML;
            linkChopp+= get('quantChopp'+identificador).innerHTML+"%20"+nomeChopp+"%20(s)%20para%20"+nome;
            get('gerarChopp'+identificador).style.display="none";
            get('divChopp'+identificador).innerHTML+=`<a class='gerarPedido' href="${linkChopp}">Pedir</a>`;
        }
    }
}

aberto();

