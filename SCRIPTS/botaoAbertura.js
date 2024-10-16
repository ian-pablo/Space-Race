
/* esta variável controla se é possível executar a função 'abrir()', pois se ela for executada a qualquer 
   momento isso pode causar efeitos visuais desagradaveis */
canAbrir = true;

function abrir(conteudoCartao, cartao) {

    /* checa se ele pode alternar o cartão, caso sim vai fazer com que não se possa faze-lo mais para que 
       outras iterações desta função não possam causar efeitos visuais desagradaveis */
    if (!canAbrir) {
        return;
    }
    canAbrir = false;

    // consegue os elementos em si
    let _conteudoCartao = document.querySelector(`${conteudoCartao}`);
    let _cartao = document.querySelector(`${cartao}`)

    // consegue a propriedade --time do 'cartao'
    tempoAnimacao = parseFloat( getComputedStyle(_cartao).getPropertyValue('--time') );

    // caso o display seja nulo muda ele para 'none'
    if (_cartao.style.display == ""){
        _cartao.style.display = "none";
    }

    // altera a sua propriedade display
    if (_cartao.style.display == "none") {

        _cartao.style.display = "block";

        setTimeout(() => {
            _cartao.style.height = 'var(--height)';
        }, 5);

        setTimeout(() => {
            _conteudoCartao.style.transform = "rotateX(0deg)";

            setTimeout(() => {
                canAbrir = true;
            }, tempoAnimacao * 1000);
        }, tempoAnimacao * 1000);


    } else {

        _conteudoCartao.style.transform = "rotateX(90deg)";

        setTimeout(() =>{
            _cartao.style.height = "0px";

            setTimeout(() => {
                _cartao.style.display = "none";
                canAbrir = true;
            }, tempoAnimacao * 1000);
        }, tempoAnimacao * 1000);
        

        

    }

}
