
$(document).ready(function () {
    var $navbar = $(".sticky");
    var $grid = $("#gridContainer");
    var $projects = $("div[id^='project']");
    var $fillin = $(".filling");
    var $projectName = $(".projectName");
    
    
    $navbar.hide();
    $navbar.fadeIn(1000);
    $grid.css({ "opacity": "0", "padding-top": "20em" });
    $grid.animate({ "opacity": "1", "padding-top": "10em" }, { duration: 1500, easing: "swing" });

});


