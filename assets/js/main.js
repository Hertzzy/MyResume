//Menu Toggle
// function menuShow() {
//     let menuMobile = document.querySelector('.mobile-menu')
//     if(menuMobile.classList.contains('open')){
//         menuMobile.classList.remove('open');
//         document.querySelector('.iconToggle').src='/assets/imgs/menu-aberto.png'
//     }else {
//         menuMobile.classList.add('open');
//         document.querySelector('.iconToggle').src = "/assets/imgs/x.png";
//     }
// }

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

// //Relogio
// //Selecionando as classes para manipular as horas
// const hours = document.querySelector('.horas');
// const minutes = document.querySelector('.minutos');
// const segundo = document.querySelector('.segundos');

// //Arrow funciton SetInterval
// const timerHour = setInterval(function time(){
//     let dateToday = new Date();
//     let hora = dateToday.getHours();
//     let min = dateToday.getMinutes();  
//     let sec = dateToday.getSeconds();  

//     if (hora < 10) {
//         hora = '0' + hora;
//     }
//     if (min < 10) {
//         min = '0' + min;
//     }
//     if (sec < 10) {
//         sec = '0' + sec;
//     }

//     hours.textContent = hora;
//     minutes.textContent = min;
//     segundo.textContent = sec;
// })

// console.log(hours, minutes, sec)



