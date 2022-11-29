let menutoggle = document.querySelector('.menu_toggle');
let menutoggleIcon = document.querySelector('.menu_toggle i');
let menu = document.getElementById('menu');

menutoggle.addEventListener('click', e=> {
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menutoggleIcon.setAttribute('class', 'fa fa-times');
    }
    else {
        menutoggleIcon.setAttribute('class', 'fa fa-bars');
    }
})