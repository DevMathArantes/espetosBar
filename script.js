//Função para coletar elementos html
function get(id){
    return document.getElementById(id);
}

//Função para mostrar se o estabelecimento está aberto
function aberto(){
    const agora = new Date();
    const hora = agora.getHours();
    let status = get('status');
    if((hora>=18) && (hora<=23)){
        status.innerHTML=`Aberto`;
    }
    else{
        status.innerHTML=`Fechado`;
    }
}

//Rodar vídeo ao clicar
function rodarVideo(){
    const video = document.getElementById('videoCombo');
    video.addEventListener('click', () => {
    video.play();
});
}

//Chamando função
aberto();
