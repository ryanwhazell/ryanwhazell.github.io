$(document).ready(function(){
    $("#show").hide();
    
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