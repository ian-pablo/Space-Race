// este bloco de código serve para que as funções e códigos fiquem dentro de um escopo local e possam ser encapsuladas
{

    // as constantes que o código precissa para funcionar normalmente
    const menu = document.querySelector("#menu");
    const botaoMenu = document.querySelector("#botaoMenu");
    const width = parseFloat( getComputedStyle(menu).getPropertyValue('--width') );
    const animationFramesCount = 10;
    const velocidadeMenu = width / animationFramesCount;
    const velocidadeOpacidade = 1 / animationFramesCount;

    // variáveis importantes para controlar a animação do menu
    let mostrar = false;
    let posição = -width;
    let opacidade = 0;

    // função a ser executada toda vez que o botão de abrir menu for pressionado
    botaoMenu.addEventListener('click', () => {

        mostrar = !mostrar;

        if (mostrar == true) {
            menu.style.display = "block";
        }

        if ( posição == 0 || posição == -width ){
            animação();
        }
    });

    // responsável por executar a animação em si
    function animação(){

        posição += mostrar == true ? velocidadeMenu : -velocidadeMenu;
        opacidade += mostrar == true ? velocidadeOpacidade : - velocidadeOpacidade;


        if ( ( mostrar == false && posição > -width ) || ( mostrar == true && posição < 0 ) ){
            requestAnimationFrame(animação);
        }

        else{

            if(mostrar == false ){

                menu.style.display = "none";

                if(posição < -width){

                    posição = -width;

                }
            }

            else if(mostrar == true && posição > 0){
                posição = 0;
            }
        }

        menu.style.right = `${posição}px`;
        menu.style.opacity = `${opacidade}`;
        
    }
}
