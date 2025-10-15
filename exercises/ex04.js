
let totalNumber = 0;

// add a button titled click me

$("#needy-button").click(function(){

    totalNumber = totalNumber + 3;

    let sentence = "this is it you entered";
    let totalNumbers= sentence + totalNumber;

    $("#needy-button").html(totalNumbers);

});


//when it is clicked 
//add three to the total number

//show the total number
//on our button
//show "clicked total number times"



//a top limit

