$(document).ready(function(){
    $("#animateButton").click(function(){
        $("#animateBox").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, 1500);
    });
});
