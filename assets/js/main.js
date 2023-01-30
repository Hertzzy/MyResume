//Menu Responsive
const hamburger = document.querySelector(".hamburger"); //select class hambuger
const navMenu = document.querySelector(".menu-movie"); //select class manu.movie

//add Envent humbuger ciick
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // Add class active
  navMenu.classList.toggle("active"); //  Add class active
});

//Dowdownload CV
const download = () => {
  fetch("Helter Currículo.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "SamplePDF.pdf";
      alink.click();
    });
  });
};

//Animate Scroll
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
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
const target = document.querySelectorAll("[data-anime]");

// 2 - Definir a classe que é adicionada durante a animação
const animationClass = "animate";

// 3 - Criar função de animação
function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 200)
  );
}

// Modal
let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".close-modal").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});
