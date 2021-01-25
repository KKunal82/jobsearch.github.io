$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(this).toggleClass("fa-times");
        $("#nav").toggleClass("nav-toggle");
    });
    $(".on").click(function () {
        $("#register").css("top","60%");
    });
    $(".off").click(function () {
        $("#register").css("top","-200rem");
    })
    $(".off").click(function () {
        $("#login").css("top","-200rem");
    })
    $(window).on('load scroll', function () {
        $(".fa-bars").removeClass("fa-times");
        $("#nav").removeClass("nav-toggle");
    });

    $(".login").click(function () {
        $("#login").css("top", "60%");
        $("#register").css("top", "-200rem")
    });

   
    
});