$(function () {
    var costom_nav = $('.costom_nav').offset().top;

    $(window).on("scroll", function () {
        var winscroll = $(window).scrollTop();

        if(winscroll > costom_nav){
            $('.costom_nav').addClass('menu_fixed');
        }else{
            $('.costom_nav').removeClass('menu_fixed');
        }

                   //menufixed end
                   
         if(winscroll > 300){
             $('.back_button').fadeIn(1000);
         }else{
             $('.back_button').fadeOut(1000);
         }         

    });
    $('.back_button').on("click", function(){
        $('html').animate({
            scrollTop:0
        },1000)
    });
});
