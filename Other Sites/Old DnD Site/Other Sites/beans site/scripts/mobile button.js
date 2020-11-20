$(document).ready(function(){
    $("#show").hide();
    
    $("#hide").click(function(){
       $(".navlink").hide();
       $("#show").show();
        $("#hide").hide();
    });
    
    $("#show").click(function(){
        $(".navlink").show();
       $("#show").hide();
        $("#hide").show();
    });
});