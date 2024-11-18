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



// responsável por adicionar o tradutor em todas as páginas automaticamente e os botões do menu
{
    let nome = window.location.href.split('/');
    let header = document.querySelector('header');
    let nav = document.querySelector('nav');

    if (!nome[nome.length - 1].includes('eng')) {
        if (nome[nome.length - 1]){
            header.innerHTML = `<button id="traduzir" class="button" type="button" aria-label="click here to go to the english version of the website" onclick="window.location.href = '${nome[nome.length - 1].replace('.', '_eng.')}'"> </button>` + header.innerHTML;
        } else{
            header.innerHTML = `<button id="traduzir" class="button" type="button" aria-label="click here to go to the english version of the website" onclick="window.location.href = 'index_eng.html'"> </button>` + header.innerHTML;
        }
        nav.innerHTML = `<br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <button class="button styledButton lightButton" type="button" aria-label="Clique aqui para saber mais sobre o nosso website" onclick="window.location.href='about.html'"> sobre nós </button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Clique aqui para saber sobre os mais importantes feitos da humanidade no espaço" onclick="window.location.href='milestones.html'"> conquistas </button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Clique aqui para saber mais sobre os piores incidentes na história da exploração espacial" onclick="window.location.href='incidents.html'"> incidentes </button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Clique aqui para aprender sobre diversos conceitos importantes para missões espaciais e as aplicações no cotidiano de tecnologias espaciais" onclick="window.location.href='learning.html'"> aprendizado </button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Clique aqui para descobrir o que o futuro nos reserva" onclick="window.location.href='future.html'"> futuro </button>`;

    } else {
        header.innerHTML = `<button id="translate" class="button" type="button" aria-label="clique aqui para ir a versão em português do website" onclick="window.location.href = '${nome[nome.length - 1].replace('_eng', '')}'"> </button>` + header.innerHTML;
        nav.innerHTML = `<br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <button class="button styledButton lightButton" type="button" aria-label="Click here to learn more about our website" onclick="window.location.href='about_eng.html'">about us</button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Click here to learn about humanity's most important achievements in space" onclick="window.location.href='milestones_eng.html'">milestones</button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Click here to learn more about the worst incidents in the history of space exploration" onclick="window.location.href='incidents_eng.html'">incidents</button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Click here to learn about important concepts for space missions and the everyday applications of space technologies" onclick="window.location.href='learning_eng.html'">learning</button><br>
        <button class="button styledButton lightButton" type="button" aria-label="Click here to discover what the future holds" onclick="window.location.href='future_eng.html'">future</button>
        `;
    }
}


// este bloco de código é responsável pela animação do menu do site
{

    // as constantes que o código precissa para funcionar normalmente
    const menu = document.querySelector("#menu");
    const botaoMenu = document.querySelector("#botaoMenu");
    const animationFramesCount = 10;
    const body = document.querySelector("body");

    // variáveis importantes para controlar a animação do menu
    let mostrar = false;
    let posição = "-var(--width)";
    
    // função a ser executada toda vez que o botão de abrir menu for pressionado
    botaoMenu.addEventListener('click', () => {
        
        body.style.overflow = 'hidden';

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
                
                body.style.overflow = 'auto';
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







