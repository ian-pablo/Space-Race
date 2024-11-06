function abrir(conteudoCartao, cartao) {

    // consegue os elementos em si
    let _conteudoCartao = document.querySelector(`${conteudoCartao}`);
    let _cartao = document.querySelector(`${cartao}`)

    // consegue a propriedade --time do 'cartao'
    let tempoAnimacao = parseFloat( getComputedStyle(_cartao).getPropertyValue('--time') );

    //estoca o 'display' do '_cartao'
    let _display = _cartao.style.display;

    // caso o display seja nulo muda ele para 'none'
    if (_display == ""){
        _display = "none";
    }

    _cartao.transition = "height var(--time) ease-in;";
    _conteudoCartao.transition = "transform var(--time) ease-in;";

    // altera a sua propriedade display
    if (_display == "none") {

        _cartao.style.display = "block";

        setTimeout(() => {
            _cartao.style.height = 'var(--height)';
            _conteudoCartao.style.transform = "rotateX(0deg)";
        }, 0);


    } else {

        _conteudoCartao.style.transform = "rotateX(90deg)";
        _cartao.style.height = "0px";

        setTimeout(() => {
            _cartao.style.display = "none";
            
        }, tempoAnimacao * 1000);
        

    }

}
