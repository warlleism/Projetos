const imgs = document.getElementById("imagem");
const img = document.querySelectorAll("#imagem img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 430}px)`;
}

setInterval(carrossel, 1800);