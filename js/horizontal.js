
gsap.registerPlugin(ScrollTrigger);

const horizontalContent = document.querySelector(".horizontal-content");
// A constante que define o deslocamento inicial que você quer (30vw)
const startOffsetVW = 40;
const startOffset = window.innerWidth * (startOffsetVW / 100);

// Calcula a largura total do conteúdo horizontal
const contentWidth = horizontalContent.scrollWidth;
// Calcula a largura da tela visível
const viewportWidth = window.innerWidth;

// Largura que PRECISAMOS rolar: 
// (Largura Total do Conteúdo) - (Largura da Tela) + (Deslocamento Inicial)
// Esta é a distância horizontal que o GSAP deve cobrir.
const scrollDistance = contentWidth - viewportWidth + startOffset;


// 1. A Animação (GSAP.to): Define o PONTO FINAL do movimento horizontal
const horizontalAnim = gsap.to(horizontalContent, {
    // O destino final (valor 'x') é a distância de rolagem necessária, NEGATIVA.
    // O movimento começa em +30vw e termina em -(largura total - tela - 30vw)
    x: -scrollDistance,
    ease: "none" 
});

// 2. O ScrollTrigger: Define a DURAÇÃO da rolagem vertical
ScrollTrigger.create({
    trigger: ".horizontal-scroll-container",
    animation: horizontalAnim,
    pin: true, 
    scrub: 1, 
    start: "top top", 
    
    // O "end" agora é exatamente a 'scrollDistance' calculada.
    // Isso garante que assim que o scroll vertical cobrir essa distância,
    // a animação horizontal termina e a página continua a rolagem normal.
    end: () => `+=${scrollDistance}`
});