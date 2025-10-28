function askNumberAndChangeScene(whatNumber, characterName) {
    let userNumber = prompt(`Guess a number between 1 and 10 to decide the bounty hunters' fate!`);
    let guess = parseInt(userNumber);

   
    if (guess === whatNumber) {
        
        $("#output").html(`SUCCESS! The force is strong with you, ${characterName}!`);
        
        
        $("#bounty").fadeOut(1500); 
        
        
        $("#jabba-original-dialogue").hide();
        
        
        $("#jabba-reaction-dialogue").show();

    } else if (guess >= 1 && guess <= 10) {
        
        $("#output").html(`FAILURE, ${characterName} is doomed! Jabba says, "Noooooope."`);
        
        
        $("#jabba-original-dialogue").show();
        $("#jabba-reaction-dialogue").hide();
        
        
        $("#bounty").fadeIn(1500); 

    } else {
        
        $("#output").html(`Invalid guess, ${characterName}. Try again!`);
    }
}


$("#good-button").click(function () {
    askNumberAndChangeScene(5, "Han Solo");
});