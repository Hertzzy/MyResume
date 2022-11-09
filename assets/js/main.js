//Menu Toggle
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.iconToggle').src='/assets/imgs/menu-aberto.png'
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.iconToggle').src = "/assets/imgs/x.png";
    }
}

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