//Total pedido no cardápio em R$
let Total = 0.0;

//Total pedido de chopps
let TotalChopp = 0.0;

//Variável aberto/fechado para horário de funcionamento
let Status;

//Lista de pedidos do cardápio
let listaFinal = "Seu pedido: <br>";

//Link de pedidos do cardápio
let link = "https://wa.me/5516992467515/?text=Pedido%0A";

let controle = 0;

//Link de combo
let linkCombo = "https://wa.me/5516992467515/?text=Combo%20";

//Variável que confirma a montagem da lista
let montar = true;

//Variável que recebe a forma de pagamento
let forma;

//Variável link para pedido de chopps
let linkChopp ="https://wa.me/5516992467515/?text=Chopp%0A";

//Funções coringa

    //coleta ids 
    function get(id){
        return document.getElementById(id);
    }
 
//Funções auxiliares

    //adiciona os itens
    function adicionarItem(identificador){
        let itens = parseInt(get('quantidade'+identificador).innerHTML);
        itens++;
        get('quantidade'+identificador).innerHTML=itens;
        if(identificador<=38){
            Total+=valorItem(identificador);
            verificaTotal();
        }
    }

    //remove os itens
    function retirarItem(identificador){
        if(parseInt(get('quantidade'+identificador).innerHTML) != 0){
            let itens = parseInt(get('quantidade'+identificador).innerHTML);
            itens--;
            get('quantidade'+identificador).innerHTML=itens;
            if(identificador<=38){
                Total-=valorItem(identificador);
                verificaTotal();
            }
        }
    }

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

    //retorna o preço do produto como float
    function valorItem(identificador){
        let valor = get('valor'+identificador).innerHTML;
        let valorFinal = parseFloat(valor.slice(3));
        return valorFinal;
    }

    //Monta a lista e o link final, tipo 1 para cardápio e tipo 2 para chopps
    function coletarPedido(tipo){
        if(tipo == 1){
            for(let i=1; i<=38;i++){
                if(parseInt(get('quantidade'+i).innerHTML)> 0){
                    listaFinal+=get('quantidade'+i).innerHTML+" - "+ get('produto'+i).innerHTML+"<br>";
                    link +=get('quantidade'+i).innerHTML
                    +"%20-%20"
                    + get('produto'+i).innerHTML+"%20(R$"
                    +(valorItem(i)*get('quantidade'+i).innerHTML).toFixed(2)
                    +")%0A";
                }
            }
        }
        if(tipo ==2){
            for(let i=39; i<=42;i++){
                if(parseInt(get('quantidade'+i).innerHTML)> 0){
                    linkChopp +=get('quantidade'+i).innerHTML
                    +"%20-%20"
                    + get('produto'+i).innerHTML+"%20(R$"
                    +(valorItem(i)*get('quantidade'+i).innerHTML).toFixed(2)
                    +")%0A";
                    TotalChopp+= parseInt(get('quantidade'+i).innerHTML)*parseFloat(get('valor'+i));
                }
            }
        }
    }

    //Verifica se o campo nome está preenchido
    function verificaNome(nome){
        if(get(nome).value == ""){
            montar = false;
            alert("Preencha o campo Nome");
        }
    }

    //Retorna o valor do troco
    function calculaTroco(){
        let dinheiro = parseFloat(get('troco').value);
        let troco = dinheiro - Total;
        return (troco.toFixed(2)).toString();
    }

    //Verifica a forma de pagamento
    function verificaPagamento(){
        let tipo = get('formaPagamento').value;
        if(tipo==1){
            montar = false;
            alert("Informe o método de pagamento");
        }
        if(tipo==2){
            forma = "Dinheiro";
            if((get('troco').value < Total) || (get('troco').value == "")){
                montar = false;
                alert("Troco inválido");
            }
            else{
                let troco = parseFloat(get('troco').value);
                link+="%0ATroco%20para%20R$"+troco.toFixed(2)+"%20(R$%20"+calculaTroco()+")%0A";
                listaFinal+=`Troco para R$ `+troco.toFixed(2)+" (R$ "+calculaTroco()+")<br>";
            }
        }
        if(tipo==3){
            forma = "Cartão";
        }
        if(tipo==4){
            forma = "Pix";
        }
    }

    //Verifica o endereço
    function verificaEndereço(){
        let endereco = get('campoEntrega').value;
        if(endereco != ""){
            let entrega = get('campoEntrega').value;
            listaFinal+=`<br>Entregar: `+entrega+`<br>`;
            link+="%0AEntregar:%20"+entrega+"%0A";
        }
    }

//Funções principais

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

    //abre o modal final
    function abrirModal(){
        get('modal').style.display='flex';
    }

    //fecha o modal final
    function fecharModal(){
        get('modal').style.display='none';
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

    //gera a lista final (após as verificações), '1' para cardápio e '2' para chopps
    function gerarLista(tipo){
        if(tipo == '1'){
            verificaNome('nome');
            verificaPagamento();
            verificaEndereço();
            if(montar){
                link +="%0ANome:%20"+get('nome').value+"%0A%0APago%20em%20"+forma+"%0A%0A";
                coletarPedido(1);
                listaFinal += forma+`<br>`;
                listaFinal+=`<br>Total: R$ ${Total.toFixed(2)}<br>`
                link+="%0ATotal=%20R$"+Total.toFixed(2);
                get('modal').innerHTML+=`<p>${listaFinal}</p>`;
                get('modal').innerHTML+=`<a class="enviarPedido btnPedido" href="${link}">Enviar pedido</a>`
                get('infoCliente').style.display='none';
            }
        }
        if(tipo == '2'){
            let nome = prompt("Digite o seu nome: ");
            if(nome != ""){
                linkChopp +="%0ANome:%20"+nome+"%0A%0A";
                coletarPedido(2);
                linkChopp+="%0ATotal=%20R$"+TotalChopp.toString();
                get('principal').innerHTML+=`<a class="enviarPedido btnPedido" href="${linkChopp}">Enviar pedido</a>`
                get('gerarChopp').style.display='none';
            }
            else{
                alert("Preencha o campo Nome");
            }
        }
    }

    //Gera o link para pedir combos
    function pedirCombo(combo){
        let nome = prompt("Digite o seu nome: ");
        if(nome===""){
            alert("Preencha o campo com seu nome.")
        }
        else{
            linkCombo+=combo+"%0A"+nome+"%0A%0A"
            for(let i = 1; i<=4; i++){
                linkCombo+=get('combo'+combo+i).innerHTML+"%0A"
            }
            linkCombo+="%0A"+get('valorCombo'+combo).innerHTML
            get(combo).innerHTML+=`<a class='enviarPedido btnPedido' href="${linkCombo}">Enviar pedido</a>`;
            get('gerarCombo'+combo).style.display="none";
        }
    }

//Script padrão

aberto();