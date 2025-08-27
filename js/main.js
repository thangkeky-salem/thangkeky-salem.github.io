
$(document).ready(function() {
    // nav toggle
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width()<768){
            $(".header .nav").slideToggle();
        }
    })
    // audio
    $("#myAudio")[0].play();
    $(".bi-music-note-beamed").click(function(){
        if($(this).hasClass("pause")){
            $("#myAudio")[0].play();
        }else{
        $("#myAudio")[0].pause();
        }
    $(this).toggleClass("pause");
    })
    //fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })
    //scroll
        $.scrollIt({
            topOffset: -50
        });
    
});
    
