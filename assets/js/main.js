//Menu Responsive
const hamburger = document.querySelector('.hamburger'); //select class hambuger
const navMenu = document.querySelector('.menu-movie'); //select class manu.movie

//add Envent humbuger ciick
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // Add class active
    navMenu.classList.toggle("active"); //  Add class active
});

//Dowdownload CV
const download = () => {
    fetch('CurriculoHelter.pdf').then(response => {
        response.blob().then(blob =>{
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
 }

// function redirectCalc(){
//     location.replace('http://127.0.0.1:5500/projects/calc/calculadora.html');
// }

//Animate Scroll

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

// 1 - Selecionar elementos que devem ser animados 
const target = document.querySelectorAll('[data-anime]');

// 2 - Definir a classe que é adicionada durante a animação
const animationClass = 'animate';

// 3 - Criar função de animação
function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /  4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else {
            element.classList.remove(animationClass);
        }
        // console.log(element.offsetTop);
    });
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 200))
}


// 3.1 - Verificar a distância entre a barra de Scroll e o topo do site
// 3.2 - Verificar se a distancia de 3.1 + Offset é maior  do que a distância entre o elemento e o Topo da párgina
// 3.3 - Se verdadeiro, adicionar classe  de animação, remover se for falso
// 4 - Ativar a função de animação toda vez que o usuário utilizar o scroll
// 5 - Otimizar ativação