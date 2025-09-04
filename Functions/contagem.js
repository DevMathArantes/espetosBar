import { get } from "./functions.js";
import { compra } from "../script.js";

export function atualizarContagem(){
    get('contagem').innerHTML= compra.length;
}