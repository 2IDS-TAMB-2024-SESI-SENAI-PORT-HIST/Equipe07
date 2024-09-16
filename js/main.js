(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

var primeira = document.getElementById("primeira")
var segunda = document.getElementById("segunda")
var terceira = document.getElementById("terceira")
var linha1 = document.getElementById("linha1")
var linha2 = document.getElementById("linha2")
var linha3 = document.getElementById("linha3")
var texto = document.getElementById("texto")

primeira.addEventListener("click", function(){
    if(linha2.style.display == "flex" || linha3.style.display == "flex"){
        linha1.style.display = "flex"
        linha2.style.display = "none"
        linha3.style.display = "none"
        texto.textContent = "A primeira fase do modernismo brasileiro, ou primeira geração modernista no Brasil, é como ficou conhecido o período da literatura nacional que foi de 1922 (seu marco inicial foi a Semana de Arte Moderna) a 1930. As obras dessa fase são caracterizadas pelo seu caráter inovador, antiacadêmico e nacionalista. Assim, o movimento modernista no Brasil surgiu durante o fim da República Velha e mostrou o descontentamento dos artistas com a arte e a política nacionais vigentes até aquele momento." + "\n" +
        "A primeira fase do modernismo brasileiro teve início, em 1922, com o advento da Semana de Arte Moderna, evento que buscou renovar a arte nacional e que tomou como base as seguintes tendências europeias (vanguardas europeias): cubismo; surrealismo; dadaísmo; expressionismo; futurismo." + "\n" +
        "Assim, a chamada fase heroica ou fase de destruição (dos valores estéticos do passado) apresentou as seguintes características: inovação; ousadia; nacionalismo; crítica sociopolítica; releitura dos símbolos nacionais; busca pela identidade brasileira; liberdade de criação; liberdade formal; uso de versos livres; valorização da linguagem oral; defesa de uma língua brasileira; antiacademicismo."
    }
    else if(linha1.style.display == "flex"){
        linha1.style.display = "none"
        texto.textContent = ""
    }
    else{
        linha1.style.display = "flex"        
        texto.textContent = "A primeira fase do modernismo brasileiro, ou primeira geração modernista no Brasil, é como ficou conhecido o período da literatura nacional que foi de 1922 (seu marco inicial foi a Semana de Arte Moderna) a 1930. As obras dessa fase são caracterizadas pelo seu caráter inovador, antiacadêmico e nacionalista. Assim, o movimento modernista no Brasil surgiu durante o fim da República Velha e mostrou o descontentamento dos artistas com a arte e a política nacionais vigentes até aquele momento." + "\n" +
        "A primeira fase do modernismo brasileiro teve início, em 1922, com o advento da Semana de Arte Moderna, evento que buscou renovar a arte nacional e que tomou como base as seguintes tendências europeias (vanguardas europeias): cubismo; surrealismo; dadaísmo; expressionismo; futurismo." + "\n" +
        "Assim, a chamada fase heroica ou fase de destruição (dos valores estéticos do passado) apresentou as seguintes características: inovação; ousadia; nacionalismo; crítica sociopolítica; releitura dos símbolos nacionais; busca pela identidade brasileira; liberdade de criação; liberdade formal; uso de versos livres; valorização da linguagem oral; defesa de uma língua brasileira; antiacademicismo."
    }
})

segunda.addEventListener("click", function(){
    if(linha1.style.display == "flex" || linha3.style.display == "flex"){
        linha1.style.display = "none"
        linha2.style.display = "flex"
        linha3.style.display = "none"
        texto.textContent = "A segunda fase do modernismo brasileiro, ou segunda geração modernista no Brasil, é como ficou conhecido o período da literatura nacional que foi de 1930 a 1945. As obras dessa fase são caracterizadas pelo conflito existencial, além da crítica sociopolítica. Surgiram em um contexto de crises políticas e sociais, marcado pela ditadura de Vargas e pela Segunda Guerra Mundial." + "\n" + 
        "As características das obras escritas na segunda fase do modernismo brasileiro relacionam-se a dois aspectos distintos: o poético e o prosaico. Características poéticas: reflexão sobre os problemas contemporâneos; conflito existencial e espiritual; busca por um sentido para a vida; crítica sociopolítica; liberdade de criação; uso de versos regulares, brancos e livres." + "\n" +
        "Características prosaicas: regionalismo ou neorregionalismo;realismo ou neorrealismo; crítica sociopolítica; ausência de idealizações; parcialidade da voz narrativa; determinismo; valorização do espaço narrativo; linguagem simples; enredos dinâmicos."
    }
    else if(linha2.style.display == "flex"){
        linha2.style.display = "none"
    }
    else{
        linha2.style.display = "flex"
        texto.textContent = "A segunda fase do modernismo brasileiro, ou segunda geração modernista no Brasil, é como ficou conhecido o período da literatura nacional que foi de 1930 a 1945. As obras dessa fase são caracterizadas pelo conflito existencial, além da crítica sociopolítica. Surgiram em um contexto de crises políticas e sociais, marcado pela ditadura de Vargas e pela Segunda Guerra Mundial." + "\n" + 
        "As características das obras escritas na segunda fase do modernismo brasileiro relacionam-se a dois aspectos distintos: o poético e o prosaico. Características poéticas: reflexão sobre os problemas contemporâneos; conflito existencial e espiritual; busca por um sentido para a vida; crítica sociopolítica; liberdade de criação; uso de versos regulares, brancos e livres." + "\n" +
        "Características prosaicas: regionalismo ou neorregionalismo;realismo ou neorrealismo; crítica sociopolítica; ausência de idealizações; parcialidade da voz narrativa; determinismo; valorização do espaço narrativo; linguagem simples; enredos dinâmicos."
    }

})

terceira.addEventListener("click", function(){
    if(linha1.style.display == "flex" || linha2.style.display == "flex"){
        linha1.style.display = "none"
        linha2.style.display = "none"
        linha3.style.display = "flex"
        texto.textContent = "A terceira fase do modernismo brasileiro ou terceira geração modernista é como ficou conhecido o período da literatura nacional que vai de 1945 até os anos de 1970. As obras dessa fase são caracterizadas pelo seu caráter experimental, além da crítica sociopolítica e da metalinguagem. Elas estão inseridas no contexto da Guerra Fria, conflito que acabou estimulando o consumismo capitalista." + "\n" +
        "A terceira fase do modernismo brasileiro, também conhecida como pós-modernismo, teve início em 1945 e se encerrou na década de 1970, dando espaço para a literatura contemporânea. Características da poesia de 1945: valorização da estrutura do poema; crítica sociopolítica; texto engajado; caráter realista; linguagem objetiva; uso de palavras do cotidiano; antissentimentalismo; metalinguagem. Características do concretismo de 1956: poesia de caráter experimental; valorização do espaço da folha de papel; aspecto verbivocovisual — palavra, som e imagem. Características do neoconcretismo de 1959: maior interação com o leitor; poema não objeto — só existe na interação; obras com formas geométricas, dobras ou recortes. Características da poesia práxis de 1962: supervalorização da palavra; valorização do ritmo e do verso; presença do aspecto social; multivocidade ou plurissignificação; oposição ao concretismo (anticoncretismo). Características do poema-processo de 1967: caráter antidiscursivo — uso de letras ou palavras não são essenciais; utilização de signos gráficos — figuras ou perfurações. Características da prosa pós-moderna: fluxo de consciência; narrativa fragmentada; temas universais; metalinguagem; linguagem experimental; estrutura textual não convencional."
    }
    else if(linha3.style.display == "flex"){
        linha3.style.display = "none"
    }
    else{
        linha3.style.display = "flex"
        texto.textContent = "A terceira fase do modernismo brasileiro ou terceira geração modernista é como ficou conhecido o período da literatura nacional que vai de 1945 até os anos de 1970. As obras dessa fase são caracterizadas pelo seu caráter experimental, além da crítica sociopolítica e da metalinguagem. Elas estão inseridas no contexto da Guerra Fria, conflito que acabou estimulando o consumismo capitalista." + "\n" +
        "A terceira fase do modernismo brasileiro, também conhecida como pós-modernismo, teve início em 1945 e se encerrou na década de 1970, dando espaço para a literatura contemporânea. Características da poesia de 1945: valorização da estrutura do poema; crítica sociopolítica; texto engajado; caráter realista; linguagem objetiva; uso de palavras do cotidiano; antissentimentalismo; metalinguagem. Características do concretismo de 1956: poesia de caráter experimental; valorização do espaço da folha de papel; aspecto verbivocovisual — palavra, som e imagem. Características do neoconcretismo de 1959: maior interação com o leitor; poema não objeto — só existe na interação; obras com formas geométricas, dobras ou recortes. Características da poesia práxis de 1962: supervalorização da palavra; valorização do ritmo e do verso; presença do aspecto social; multivocidade ou plurissignificação; oposição ao concretismo (anticoncretismo). Características do poema-processo de 1967: caráter antidiscursivo — uso de letras ou palavras não são essenciais; utilização de signos gráficos — figuras ou perfurações. Características da prosa pós-moderna: fluxo de consciência; narrativa fragmentada; temas universais; metalinguagem; linguagem experimental; estrutura textual não convencional."
    }

}) 