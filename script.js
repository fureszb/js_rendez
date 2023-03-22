import { SZAMLISTA } from "./adat.js";
import { SZOVEGLISTA } from "./adat.js";
console.log(SZAMLISTA);

$(function () {
 /*let megKevertIndexLista= keveres1(SZAMLISTA);
    keveres1(SZAMLISTA);
    for (let index = 0; index < SZAMLISTA.length; index++) {
        console.log(SZAMLISTA[index],megKevertIndexLista[index] , SZAMLISTA[megKevertIndexLista[index]])
        
    }*/
    keveres1(SZAMLISTA)
    console.log(SZOVEGLISTA)
    rendezes1(SZOVEGLISTA)
    console.log(SZOVEGLISTA)

    console.log(SZAMLISTA)
    rendezes2(SZAMLISTA)
    console.log(SZAMLISTA)

    keveres2(SZAMLISTA)
});
function keveres1(lista) {
  
  let megKevertIndex = [];
  let szamok;
  while (megKevertIndex.length < lista.length) {
    szamok = Math.floor(Math.random() * lista.length);
    let index = 0;
    while ( index < megKevertIndex.length && !(szamok == megKevertIndex[index])) {
    

      index++;
    }
    if (index >= megKevertIndex.length) {
      megKevertIndex.push(szamok);
    }
  }
  console.log(megKevertIndex);
  return megKevertIndex;
}
function rendezes1(lista){
    lista.sort();
}
function rendezes2(lista){
    lista.sort(function(a, b){return a - b});
}
function keveres2(lista) {
    lista.sort(function(a, b){return 0.5-Math.random()});
  }
