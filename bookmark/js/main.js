$(function() {

    'use strict';
    // mobile navbar
    $(".burger").on("click", function() {

        // console.log("clicked")
        $(this).addClass("d-none")
        $(".cover").addClass("d-block").removeClass("d-none")
        $(".cover").siblings("span.logo-box").addClass("d-none")
        $(".logo-box .logo img").addClass("d-none")
    })
    $(".close").on("click", function() {

        $(".burger").addClass("d-block").removeClass("d-none")
        console.log("clicked")
        $(".cover").addClass("d-none").removeClass("d-block")
        $(".cover").siblings("span.logo-box").addClass("d-block").removeClass("d-none")
        $(".logo-box .logo img").addClass("d-block").removeClass("d-none")
    });

    // illustration
    const headerIllus = document.querySelector(".illustration");
    
    console.log(document.body.getBoundingClientRect());

    console.log(headerIllus.getBoundingClientRect());
    // headerIllus.style.setProperty("--illusRightPos", `${}px`);

    
    
})