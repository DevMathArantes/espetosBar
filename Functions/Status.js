import { funcionamento } from "../script.js";

let agora = new Date();
let hora = agora.getHours();
let minuto = agora.getMinutes();
let dia = agora.getDay();
let diaAtual;
let abrir;
let fechar;
let diaSemana;
let funcionamentoTxt;
let semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
];
let aviso;

//Retorna se estamos abertos ou fechados
export function status(){
    diaAtual = funcionamento[dia];
    abrir = diaAtual[0];
    if(abrir == null){
        return false;
    } else{
        fechar = diaAtual[1];

        if(hora == abrir[0] && minuto > abrir[1]){
            if(hora == fechar[0] && minuto < abrir[1]){
                return true;
            } else if(hora < fechar[0]){
                return true;
            } else{
                return false;
            }
        } else if(hora > abrir[0]){
            if(hora == fechar[0] && minuto < abrir[1]){
                return true;
            } else if(hora < fechar[0]){
                return true;
            } else{
                return false;
            }
        } else{
            return false;
        }
    }

}

export function infoStatus(){

    funcionamentoTxt = "Horário de Funcionamento: \n"
    
    for(let i = 1; i < semana.length; i++){
        diaSemana = funcionamento[i];
        abrir = diaSemana[0];
        if(abrir != null){
            fechar = diaSemana[1];
            funcionamentoTxt+= "\n"+ semana[i] +": "+abrir[0]+"h"+abrir[1]+" ás "+fechar[0]+"h"+fechar[1];
        } else{
            funcionamentoTxt+= "\n"+ semana[i] +": Fechado"
        }
        
    }
    diaSemana = funcionamento[0];
    abrir = diaSemana[0];
    if(abrir != null){
        fechar = diaSemana[1];
        funcionamentoTxt+= "\n"+ semana[0] +": "+abrir[0]+"h"+abrir[1]+" ás "+fechar[0]+"h"+fechar[1];
    } else{
        funcionamentoTxt+= "\n"+ semana[0] +": Fechado"
    }

    alert(funcionamentoTxt);

}

export function avisoStatus(){
    aviso = "Agradecemos a preferência, " 
    diaAtual = funcionamento[dia];
    abrir = diaAtual[0];
    if(abrir != null){
        fechar = diaAtual[1];
        aviso += "horário de funciomento (hoje): "+abrir[0]+"h"+abrir[1]+" ás "+fechar[0]+"h"+fechar[1]+".";
    } else{
        aviso += "infelizmente não abriremos hoje."
    }
    alert(aviso);
}