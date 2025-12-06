


const environmentName = "Jabba's Palace: Tatooine Crime Den";

const keyArtifacts = ["Carbonite Block", "Slave Leia's Chain", "Holochess Table", "Rancor Pit Trap"];


const palaceDetails = {
    location: "Tatooine, Outer Rim",
    status: "Active Crime Syndicate Headquarters",
    leader: "Jabba Desilijic Tiure",
    population: 40,
    security: ["Gamorrean Guards", "B'omarr Monks", "Gonk Droids"],
    describe: function() {
        return `This is a high-security Hutt residence on ${this.location}.`;
    }
};


const bountyHunters = [
    {
        name: "Boba Fett",
        species: "Human (Clone)",
        specialty: "Tracking, Armored Combat",
        status: "Currently employed"
    },
    {
        name: "Greedo",
        species: "Rodian",
        specialty: "Negotiation, Shooting",
        status: "Deceased (Past)"
    },
    {
        name: "Boushh",
        species: "Ubesian",
        specialty: "Disguise, Thermal Detonators",
        status: "Hidden"
    }
];



function printEnvironmentDetails() {
    let outputHTML = "<h3>- Environment Data Loaded -</h3>";
    
    
    outputHTML += `<p><strong>Environment:</strong> ${environmentName}</p>`;
    
    
    outputHTML += `<p><strong>Location:</strong> ${palaceDetails.location} | <strong>Status:</strong> ${palaceDetails.status}</p>`;

    
    outputHTML += `<p><strong>Key Artifacts:</strong> ${keyArtifacts.join(' | ')}</p>`;
    
    
    outputHTML += `<p><strong>Bounty Crew (partial list):</strong></p>`;
    outputHTML += "<ul>";
    bountyHunters.forEach(hunter => {
        outputHTML += `<li>${hunter.name} (${hunter.species}) - ${hunter.status}</li>`;
    });
    outputHTML += "</ul>";
    
    
    $("#env-details").html(outputHTML);
}


$(document).ready(function() {
    printEnvironmentDetails();
});



function askNumberAndChangeScene(whatNumber, characterName) {
    let userNumber = prompt(`Guess a number between 1 and 10 to decide the bounty hunters' fate!`);
    let guess = parseInt(userNumber);

   
    if (guess === whatNumber) {
        
        $("#output").html(`SUCCESS! The force is strong with you, ${characterName}! Bounty Crew Iced!`);
        
        
        $("#bounty").fadeOut(1500); 
        
        
        $("#jabba-original-dialogue").hide();
        
        
        $("#jabba-reaction-dialogue").show();
        
        
        $("#env-details").hide();

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