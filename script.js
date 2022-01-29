var chaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];


var caixa1 = document.getElementById("input-texto");
var caixa2 = document.getElementById("msg");
var btnCripto = document.getElementById("btn-cripto");
var copybtn = document.getElementById("btn-copy");
var descriptBtn = document.getElementById("btn-descripto");

criptografar = (text) => {
    btnCripto.style.color = "red";
    chaves.forEach(element => {
        var textSearch = element[0], textReplace = element[1];
        text = text.replaceAll(textSearch, textReplace);
        console.log(text.replaceAll(textSearch, textReplace));
    });
    return text;
  }

descriptografar = (text) => {
  chaves.forEach(element => {
    var textSearch = element[1], textReplace = element[0];
    text = replaceAll(textSearch, textReplace);
  });

  return text;
}

copy = (textarea) => {
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textarea.value);
  alert("O texto foi copiado");
  }

copybtn.addEventListener("click", () => {
  copy(caixa2);
  copybtn.style.color = "red";
})

btnCripto.addEventListener("click", () => {
  let decodeText = caixa1.value, encriptedText = criptografar(decodeText);
  caixa2.value = encriptedText;
});

descriptBtn.addEventListener("click", () => {
  caixa2.value = caixa1.value;
})