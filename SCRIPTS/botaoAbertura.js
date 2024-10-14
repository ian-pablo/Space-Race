
function abrir(item) {
    // consegue o elemento em si
    item = document.querySelector(`${item}`);

    // altera a sua propriedade display
    if (item.style.display == "none") {
        item.style.display = "flex";
        console.log("a");
    } else /*if (item.style.display == "flex")*/ {
        item.style.display = "none";
        console.log("b");
    } /*else{
        */console.error(item.style.display);/*
    }*/
}
