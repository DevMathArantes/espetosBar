let Total = 0.0;
let Status;
let listaFinal = "Seu pedido: <br>";
let link = "https://wa.me/5516992467515/?text=Pedido%0A";
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

//Variável que confirma a montagem da lista
let montar = true;

//Variável que recebe a forma de pagamento
let forma;

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
                link+="%0ATroco%20para%20R$"+get('troco').value+"%20(R$%20"+calculaTroco()+")%0A";
                listaFinal+=`Troco para R$ `+get('troco').value+" (R$ "+calculaTroco()+")<br>";
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

    //gera a lista final (após as verificações)
    function gerarLista(){
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
        get('combo'+identificador).innerHTML+=`<a class='enviarPedido btnPedido' href="${linkCombo}">Enviar pedido</a>`;
        get('gerar'+identificador).style.display="none";
    }
}

aberto();