let Total = 0.0;
let Status;
let listaFinal = "Seu pedido: <br>";
let link = "https://wa.me/5516992467515/?text=Pedido";
let controle = 0;
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

aberto();

