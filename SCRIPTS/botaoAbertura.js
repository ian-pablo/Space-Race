function abrir(conteudoCartao, cartao) {

    // consegue os elementos em si
    let _conteudoCartao = document.querySelector(`${conteudoCartao}`);
    let _cartao = document.querySelector(`${cartao}`);

    // consegue a propriedade --time do 'cartao'
    let tempoAnimacao = parseFloat( getComputedStyle(_cartao).getPropertyValue('--time') );

    //estoca o 'display' do '_cartao'
    let _display = _cartao.style.display;


    // altera a sua propriedade display
    if (_display == "none" || _display == "") {

        _cartao.style.display = "block";
        // console.log(getComputedStyle(_cartao).getPropertyValue('height'));
        // console.log(getComputedStyle(document.querySelector('html')).getPropertyValue('height'));
        
        setTimeout(() => {
            _cartao.style.height = "max-content";
            _conteudoCartao.style.transform = "rotateX(0deg)";
        }, 0);


    } else {
        // console.log(getComputedStyle(_cartao).getPropertyValue('height'));
        // console.log(getComputedStyle(document.querySelector('html')).getPropertyValue('height'));
        _conteudoCartao.style.transform = "rotateX(90deg)";

        setTimeout(() => {
            _cartao.style.height = '0px';
            _cartao.style.display = "none";
        }, tempoAnimacao * 1200);

    }

}
