window.addEventListener("scroll", function(){
    let header= document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0 )
})



document.addEventListener("DOMContentLoaded", function () {
   
    const promoText = document.querySelector('.promo-text');
    
    
    promoText.classList.add('visible');
});



//carrosel principal
var radio =  document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg() 
}, 5000 //tempo q a imagem vai ficar antes de passar
)

function proximaimg(){
    cont++

    if (cont > 3){
        cont = 1;
    }

    document.getElementById('radio'+ cont).checked = true 

}

// tipos de roupa

document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel");
    const slides = document.querySelectorAll(".tiposderoupa-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        }

        const translateX = -currentIndex * (25 + 2) + "%";
        carrossel.style.transform = `translateX(${translateX})`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex--;
        showSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex++;
        showSlide(currentIndex);
    });

    // Inicialmente, mostrar o primeiro slide
    showSlide(currentIndex);
});


// aumentar imagem + escurecer fundo
document.addEventListener("DOMContentLoaded", function () {
    const imagemHover = document.querySelector(".imagem-hover");

    imagemHover.addEventListener("mouseover", function () {
        imagemHover.style.transform = "scale(1.2)"; /* Aumenta o tamanho da imagem em 20% */
        imagemHover.style.filter = "brightness(0.7)"; /* Escurece a imagem em 30% */
    });

    imagemHover.addEventListener("mouseout", function () {
        imagemHover.style.transform = "scale(1)"; /* Retorna ao tamanho original */
        imagemHover.style.filter = "brightness(1)"; /* Retorna ao brilho original */
    });
});

//interação com a mídia:
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateX = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos

    updateCarousel(); // Exibe o primeiro slide
});



