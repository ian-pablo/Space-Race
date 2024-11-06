/*
    este código tenta mudar o conteúdo do texto de certos elementos para que haja uma maior responsividade da página
*/

function resize(){
    // procura por todos os elementos que podem ter o seu texto adaptado
    let elementos = document.querySelectorAll(".textoAdaptavel");

    elementos.forEach(element => {
        try{
            // consegue todas as larguras e textos para mudar no futuro
            let larguras = element.dataset.largurasAdaptavel.split(';');
            let textos = element.dataset.textosAdaptavel.split(';');

            // muda o texto para o seu original
            element.innerText = textos[0];
            
            // muda o texto caso a largura esteja menor que a largura para cada texto
            larguras.forEach((largura, index) => {
                if (window.innerWidth < parseFloat(largura)){
                    element.innerText = textos[index + 1];
                } else{
                    return;
                }
            });




        }
        catch (e){
            console.log("O erro ocorreu:\n\t" + e);
        }
    });

}

// toda vez que a largura mudar ele vai acionar
window.addEventListener('resize', resize);

// roda ele uma vez no início do site para que em caso de o site ter sido aberto em um celular ele já se adaptar
resize();
