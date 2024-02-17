$(document).ready(function() {

    $('.toggle-collapse').click(function() {
        $('.nav').toggleClass('collapse');
    });

    $(".navbtn").click(function(e) {
        $(".lform").show();
        e.stopPropagation();
        $(".lform").css('display', 'flex');

    });

    $(".lform").click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        $(".lform").hide();
    });


    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

});