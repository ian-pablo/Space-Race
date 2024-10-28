
/* esta variável controla se é possível executar a função 'abrir()', pois se ela for executada a qualquer 
   momento isso pode causar efeitos visuais desagradaveis */
let canAbrir = true;

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
    let tempoAnimacao = parseFloat( getComputedStyle(_cartao).getPropertyValue('--time') );

    //estoca o 'display' do '_cartao'
    let _display = _cartao.style.display;

    // caso o display seja nulo muda ele para 'none'
    if (_display == ""){
        _display = "none";
    }

    // otimização para dispositivos móveis com baixo processamento 
    /*if (window.innerWidth <= 700){
        // ele é provavelmente um dispositivo modbile...
        // altera a sua propriedade display

        _cartao.transition = "";
        _conteudoCartao.transition = "";
        if (_display == "none") {
            _cartao.style.display = "block";
            _cartao.style.height = 'var(--height)';
            _conteudoCartao.style.transform = "rotateX(0deg)";
            

        } else {

            _conteudoCartao.style.transform = "rotateX(90deg)";
            _cartao.style.height = "0px";
            _cartao.style.display = "none";

        }

        canAbrir = true;

        return;
    }*/


    _cartao.transition = "height var(--time) ease-in;";
    _conteudoCartao.transition = "transform var(--time) ease-in;";

    // altera a sua propriedade display
    if (_display == "none") {

        _cartao.style.display = "block";

        setTimeout(() => {
            _cartao.style.height = 'var(--height)';
            _conteudoCartao.style.transform = "rotateX(0deg)";
        }, tempoAnimacao * 0);

        setTimeout(() => {
            canAbrir = true;
        }, tempoAnimacao * 1000);


    } else {

        _conteudoCartao.style.transform = "rotateX(90deg)";

        
        _cartao.style.height = "0px";

        setTimeout(() => {
            _cartao.style.display = "none";
            canAbrir = true;
        }, tempoAnimacao * 1000);
        

        

    }

}
