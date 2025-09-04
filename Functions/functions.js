//Retorna o ID desejado
export function get(id){
    return document.getElementById(id);
}

//Muda o display de itens entre "none" e "block"
export function dijuntor(id){

    if(get(id).style.display=="block"){

        document.body.style.overflow="auto";
        get(id).style.display="none";
    
    } else{
    
        document.body.style.overflow="hidden";
        get(id).style.display="block";
    
    }

}
