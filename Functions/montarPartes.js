import { listaMontaveis } from "../Lists/montaveis.js";
import { get } from "./functions.js";

let settings;
let categoria;
let item;
let htmlOpcs;
let nome1;
let identificado1;
let valor;
let nome2;
let identificado2;

export function montarParte(){

    if((get("Metade1").value != "nenhum") && (get("Metade2").value != "nenhum")){
        
        get("itemMontado").style.display="flex";

        if(parseFloat(get("Metade1").value) >= parseFloat(get("Metade2").value)){
            valor = get("Metade1").value
            get("valorMontado").innerHTML=(parseFloat(valor)).toFixed(2);
        } else{
            valor = get("Metade2").value
            get("valorMontado").innerHTML=(parseFloat(valor)).toFixed(2);
        }

        identificado1 = get("Metade1").selectedIndex;
        nome1 = get("Metade1").options[identificado1];

        identificado2 = get("Metade2").selectedIndex;
        nome2 = get("Metade2").options[identificado2];

        get("textoMontado").innerHTML=nome1.innerHTML+" + "+nome2.innerHTML;
        
    } else{
        get("itemMontado").style.display="none";
    }

}

export function montagemMontado(id){

    //Reiciando o html
    htmlOpcs = ``;
    settings = listaMontaveis[0];

    //Percorrendo a lista de ids
    for(let j = 0; j < settings.length; j++){
        
        //Verificando se a lista atual é a do id atual
        if(id === settings[j]){

            //Percorrendo a lista de categorias do montado
            for(let n = 1; n < listaMontaveis.length; n++){
                
                categoria = listaMontaveis[n];
                
                //Percorrendo a categoria
                for(let m = 1; m < categoria.length; m++){

                    item = categoria[m];
                    
                    htmlOpcs += `
                        <option value="${item[2]}">${item[0]}</option>
                    `;

                }
            }
        }
    }

    return htmlOpcs;
}