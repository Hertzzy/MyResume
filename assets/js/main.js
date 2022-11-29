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

function redirectCalc(){
    location.replace('http://127.0.0.1:5500/projects/calc/calculadora.html')
}