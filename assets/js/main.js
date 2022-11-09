function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.iconToggle').src='/assets/imgs/x.png'
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.iconToggle').src = "/assets/imgs/menu-aberto.png";
    }
}
