let Total = 0.0;
let Status;

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

aberto();