
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
var items = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];


var caixa1 = document.getElementById("input-texto");
var caixa2 = document.getElementById("msg");
var btnCripto = document.getElementById("btn-cripto");

btnCripto.addEventListener("click", myFunction);

function myFunction() {
    btnCripto.style.color = "red";
    caixa2.value = caixa1.value.replace("dio", "Gabriel");
  }