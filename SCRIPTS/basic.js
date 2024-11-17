// algumas funções utilitárias
function isNumero(numero){
    let a = parseFloat(numero);
    if (isNaN(a))
        return false;

    else{
        return true;
    }
}

function cprint(str){
    console.log(str);
}



// responsável por adicionar o tradutor em todas as páginas automaticamente
{
    let nome = window.location.href.split('/');
    let header = document.querySelector('header');

    if (!nome[nome.length - 1].includes('eng')) {
        header.innerHTML = `<button id="traduzir" class="button" type="button" aria-label="click here to go to the english version of the website" onclick="window.location.href = '${nome[nome.length - 1].replace('.', '_eng.')}'"> </button>` + header.innerHTML;
    } else {
        header.innerHTML = `<button id="translate" class="button" type="button" aria-label="clique aqui para ir a versão em português do website" onclick="window.location.href = '${nome[nome.length - 1].replace('_eng', '')}'"> </button>` + header.innerHTML;
    }
}


// este bloco de código é responsável pela animação do menu do site
{

    // as constantes que o código precissa para funcionar normalmente
    const menu = document.querySelector("#menu");
    const botaoMenu = document.querySelector("#botaoMenu");
    const animationFramesCount = 10;

    // variáveis importantes para controlar a animação do menu
    let mostrar = false;
    let posição = "-var(--width)";
    
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
        

        // muda os valores da posição do menu
        posição += mostrar == true ? velocidadeMenu : -velocidadeMenu;


        // verifica se a animação deve continuar...
        if ( ( mostrar == false && posição >= -width ) || ( mostrar == true && posição <= 0 ) ){
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
        
    }
}

/* este bloco de código faz com que o evento de menu com o botão direito do mouse não ocorra
   fazendo com que não haaja menu do mouse */
document.addEventListener('contextmenu', (evento) => {
    evento.preventDefault();
});







