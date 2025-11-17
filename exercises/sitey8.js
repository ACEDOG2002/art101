$(document).ready(function() {

    $(".interactive-link").hover(
        
        function() {
            
            $("#secret-content").stop().animate({
                
                height: "100px",
                
                backgroundColor: "#00FF00" 
            }, 500, function() {
                
                if ($("#secret-content").css('display') === 'none') {
                    $("#secret-content").css('display', 'block');
                }
            });
        },
        
        function() {
            
            $("#secret-content").stop().animate({
                height: "0px",
                backgroundColor: "#333333" 
            }, 500, function() {
                
                $(this).css('display', 'none');
            });
        }
    );
});