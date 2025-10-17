let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line tp add

$("#needy-button").click(function () {
    
    let reminder=count % colors.length;

    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] ); 

    $("body").css("background-color", colors[count]);
    
    $("body").css("background-color", colors [reminder]);
    
    
    count = count + 1;



});
