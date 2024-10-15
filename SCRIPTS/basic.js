// este bloco de código é responsável pela animação do menu do site
{

    // as constantes que o código precissa para funcionar normalmente
    const menu = document.querySelector("#menu");
    const botaoMenu = document.querySelector("#botaoMenu");
    const animationFramesCount = 20;
    const velocidadeOpacidade = 1 / animationFramesCount;

    // variáveis importantes para controlar a animação do menu
    let width = parseFloat( getComputedStyle(menu).getPropertyValue('--width') );
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

        // atualiza a width e a velocidade do menu para uma melhor responsividade
        width = parseFloat( getComputedStyle(menu).getPropertyValue('--width') );
        const velocidadeMenu = width / animationFramesCount;
        

        // muda os valores da posição do menu assim como a sua opacidade
        posição += mostrar == true ? velocidadeMenu : -velocidadeMenu;
        opacidade += mostrar == true ? velocidadeOpacidade : - velocidadeOpacidade;


        // verifica se a animação deve continuar...
        if ( ( mostrar == false && posição > -width ) || ( mostrar == true && posição < 0 ) ){
            requestAnimationFrame(animação);
        }

        // caso o contrário posiciona os elementos na posição correta para o caso de eles terem passado desta
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

        // muda as propriedades CSS dos elementos
        menu.style.right = `${posição}px`;
        menu.style.opacity = `${opacidade}`;
        
    }
}

/* este bloco de código faz com que o evento de menu com o botão direito do mouse não ocorra
   fazendo com que não haaja menu do mouse */
document.addEventListener('contextmenu', (evento) => {
    evento.preventDefault();
});






