"use strict"


$('.how__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true, 
    prevArrow: "<div class='arrow-wrap prev'><img src='img/icons/prev.png' alt=''></div>",
    nextArrow: "<div class='arrow-wrap next'><img src='img/icons/next.png' alt=''></div>",
    
});


$('.show-popup').click(function(e){
    e.preventDefault();

    $('.popup').addClass('popup--active')
})

$('.popup__closer, .popup__close').click(function(e){
    e.preventDefault();

    $('.popup').removeClass('popup--active')
})

$('.show-search').click(function(e){
    e.preventDefault();

    $('.delivery-popup').addClass('delivery-popup--active')
})

$('.delivery-popup__closer, .delivery-popup__close').click(function(e){
    e.preventDefault();

    $('.delivery-popup').removeClass('delivery-popup--active')
})



function myFunction() {
/* Get the text field */
var copyText = document.getElementById("refer");

/* Select the text field */
copyText.select();

/* Copy the text inside the text field */
document.execCommand("copy");


}
$(".menu-btn").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $(".mobile-nav ").toggleClass('mobile-nav--active');

})


let onChange = function(){
	let range = document.getElementById('range');
  
    document.getElementById('output').value = range.value;

}


const range = document.getElementById('range');
if (range) {
    document.getElementById('range').addEventListener('input', function(){		
        onChange();
    });	
    onChange();
}






document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {

        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed) / 100
        const y = (window.innerHeight - e.pageY*speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;

    })
}


