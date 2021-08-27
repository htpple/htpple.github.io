function showMenu(toggleId, menuId){   
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu){
        toggle.addEventListener('click', function(){
            menu.classList.toggle('active');
        })
    }
} 
showMenu('burger', 'menu');


const heroSlider = new Swiper('.hero_container', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
    effect: "fade",

    keyboard: {
        enable: true,
    },

    navigation: {
        nextEl: ".arrow-right", // направо
        prevEl: ".arrow-left"  //налево
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

        renderBullet: function(index, className){
            return '<span class = "' + className + '">' + (index + 1) + "</span>";
        },  
    }
});

const brawlStars = ScrollReveal({
    reset: true, 
    distance: '100px',
    duration: 1000,
})

brawlStars.reveal('.item-shop', {
    origin: 'bottom',
    interval: 200,
})

