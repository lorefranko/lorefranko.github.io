 $(function () {

    $("#slider1").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider2").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider3").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider4").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider5").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider6").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 600,
        namespace: "large-btns"
    });
    
    $("#slider7").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });

    $("#slider8").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
   
});   

$('.nav-list').localScroll();
$('.grid').localScroll();
$('#footer').localScroll();

  $(function() {
    $(".rslides").responsiveSlides();
  });



$('.pieces a').on('click',function(eventObject){
    eventObject.preventDefault();
    var id = $(this).attr('href');
    var container = $(id);
    var isOpen = container.attr('data-state');

    $('.projectcontainer[data-state="open"]').attr('data-state','closed');

    if (isOpen == 'open'){
        container.attr('data-state','closed');
        $('#contact').animate({
            'marginTop' : "0rem"
        });
    } else {
        container.attr('data-state','open');
        $('#contact').animate({
            'marginTop' : "31rem"
        });
    }
})
    
