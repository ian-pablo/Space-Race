// algumas funções utilitárias
function isNumero(numero){
    let a = parseFloat(numero);
    if (isNaN(a))
        return false;

    else{
        return true;
    }
}

// este bloco de código é responsável pela animação do menu do site
{

    // as constantes que o código precissa para funcionar normalmente
    const menu = document.querySelector("#menu");
    const botaoMenu = document.querySelector("#botaoMenu");
    const animationFramesCount = 10;
    const velocidadeOpacidade = 1 / animationFramesCount;

    // variáveis importantes para controlar a animação do menu
    let mostrar = false;
    let posição = "-var(--width)";
    let opacidade = 0;

    // função a ser executada toda vez que o botão de abrir menu for pressionado
    botaoMenu.addEventListener('click', () => {

        mostrar = !mostrar;

        if (mostrar == true) {
            menu.style.display = "block";
        }

        if ( posição == 0 || !isNumero(posição) ){
            animação();
        }
    });

    // responsável por executar a animação em si
    function animação(){

        // atualiza a width e a velocidade do menu para uma melhor responsividade
        width = parseFloat( getComputedStyle(menu).getPropertyValue('--width') );
        const velocidadeMenu = width / animationFramesCount;

        // checa se a posição é igual a 'var(--width)', caso sim muda ela para o valor desta variável CSS
        if (!isNumero(posição)){
            posição = -width;
        }
        

        // muda os valores da posição do menu assim como a sua opacidade
        posição += mostrar == true ? velocidadeMenu : -velocidadeMenu;
        opacidade += mostrar == true ? velocidadeOpacidade : - velocidadeOpacidade;


        // verifica se a animação deve continuar...
        if ( ( mostrar == false && (posição > -width || opacidade > 0)) || ( mostrar == true && (posição < 0 || opacidade < 1)) ){
            requestAnimationFrame(animação);
        }

        // caso o contrário posiciona os elementos na posição correta para o caso de eles terem passado desta
        else{

            if(mostrar == false ){

                menu.style.display = "none";

                if(posição < -width){

                    posição = "-var(--width)";

                }
            }

            else if(mostrar == true && posição > 0){
                posição = 0;
            }
        }

        // muda as propriedades CSS dos elementos
        menu.style.right = isNumero(posição) ? `${posição}px` : posição;
        menu.style.opacity = `${opacidade}`;
        
    }
}

/* este bloco de código faz com que o evento de menu com o botão direito do mouse não ocorra
   fazendo com que não haaja menu do mouse */
document.addEventListener('contextmenu', (evento) => {
    evento.preventDefault();
});






