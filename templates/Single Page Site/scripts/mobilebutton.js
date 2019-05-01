$(document).ready(function(){
    $("#hide").hide();
    
     if ($(window).width() < 700) {
        $(".navlink").hide();
      }
     else {
        $(".navlink").show();
     };
    
    $("#hide").click(function(){
        $("#hide").hide();
        $("#show").show();
        $(".navlink").slideUp();
    });
    
    $("#show").click(function(){
        $("#show").hide();
        $("#hide").show();
        $(".navlink").slideDown();
    });
});