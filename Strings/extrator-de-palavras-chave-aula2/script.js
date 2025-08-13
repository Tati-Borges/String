const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('entrada-de-texto').value;
    const campoResultor = document.querySelector('resultado-palavrachave');
    const Palavras = texto.split("");

    campoResultado.textContent = Palavras.join(", ");
}


function processaTexto(texto){
     let palavra = texto.split(/\P{L}+/u);

    let frequencia = [];
    for(let i in palavras){
      fre

    }
     
      return palavras;
}