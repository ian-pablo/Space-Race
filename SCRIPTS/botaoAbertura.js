
function abrir(conteudoCartao, cartao) {
    // consegue os elementos em si
    let _conteudoCartao = document.querySelector(`${conteudoCartao}`);
    let _cartao = document.querySelector(`${cartao}`)

    // consegue a propriedade --height do 'cartao'
    cartaoHeight = parseFloat( getComputedStyle(_cartao).getPropertyValue('--height') );
    tempoAnimacao = parseFloat( getComputedStyle(_cartao).getPropertyValue('--time') );

    // caso o display seja nulo muda ele para 'none'
    if (_cartao.style.display == ""){
        _cartao.style.display = "none";
    }

    // altera a sua propriedade display
    if (_cartao.style.display == "none") {

        _cartao.style.display = "block";

        setTimeout(() => {
            _cartao.style.height = `${cartaoHeight}px`;
        }, 5);

        setTimeout(() => {
            _conteudoCartao.style.transform = "rotateX(0deg)";
        }, tempoAnimacao * 1000);


    } else {

        _conteudoCartao.style.transform = "rotateX(90deg)";

        setTimeout(() =>{
            _cartao.style.height = "0px";

            setTimeout(() => {
                _cartao.style.display = "none";
            }, tempoAnimacao * 1000);
        }, tempoAnimacao * 1000);
        

        

    }

}
