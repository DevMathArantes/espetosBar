let Total = 0.0;
let Status;
let listaFinal = "Seu pedido: <br><br>";
let link = "https://wa.me/seu_numero/?text=Pedido%20para%20%0A"
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

//gera a lista final
function gerarLista(){
    link +=get('nome')+"%0A%0A";
    for(let i=1; i<=38;i++){
        if(parseInt(get('quantidade'+i).innerHTML)> 0){
            listaFinal+=get('quantidade'+i).innerHTML+" - "+ get('produto'+i).innerHTML+"<br>";
            link +=get('quantidade'+i).innerHTML+"%20-%20"+ get('produto'+i).innerHTML+"%0A";
            
        }

    }
    get('listaFinal').innerHTML=listaFinal;
    get('separarEnviar').innerHTML=`<a class="enviar" href="${link}">Enviar pedido</a>`
}
aberto();
