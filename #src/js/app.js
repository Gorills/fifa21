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

$('.header__select').click(function(e){
    e.preventDefault();

    $(this).toggleClass('header__select--active')
    $('.header__select-drop').toggleClass('header__select-drop--active')

})



$('.success').click(function(e){
    e.preventDefault();
    $('.alert--success').addClass('alert--success--active')
})


$('.alert__close').click(function(e){
    e.preventDefault();
    $('.alert--success').removeClass('alert--success--active')
})


$('.congrat').click(function(e){
    e.preventDefault();
    $('.alert--congr').addClass('alert--congr--active')
})

$('.alert__close').click(function(e){
    e.preventDefault();
    $('.alert--congr').removeClass('alert--congr--active')
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


if(range) {
    document.getElementById("range").oninput = function() {
        var value = (this.value-this.min)/(this.max-this.min)*100
    
    
    
        this.style.background = 'linear-gradient(to right, #ffaf00 0%, #ffaf00 ' + value + '%, rgba(101, 101, 154, 0.25) ' + value + '%, rgba(101, 101, 154, 0.25) 100%)'
      };
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







 var $radioButtons = $('.custom-radio');
 $radioButtons.click(function() {
     $radioButtons.each(function() {
         $(this).parent().parent().toggleClass('active', this.checked);
     });
 });
 

 

 $(document).ready(function() {
    const toolLip = $('.progress__bar').val()

    $('.progress__point-wrap').addClass(`s${toolLip}`)

    
    });
    
 


    $(window).scroll(function() {
        var height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
        if(height > 20){
            $('.mobile-footer').addClass('mobile-footer--active');
           
            
        } else{
            /*Если меньше 100px удаляем класс для header*/
            $('.mobile-footer').removeClass('mobile-footer--active');
            
        }
    });