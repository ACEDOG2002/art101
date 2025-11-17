$(document).ready(function() {
    
    const $crName = $('#crName');
    const $crDesc = $('#crDesc');
    const $crAdd = $('#crAdd');
    const $clearAll = $('#clearAll');
    const $creatureList = $('#creature-list');
    const $status = $('#status');

    
    function updateStatus(message, isError = false) {
        $status.text(message);
        
        $status.css('color', isError ? '#f44336' : '#00796b');
        $status.css('background-color', isError ? '#ffebee' : '#e0f7fa');
        $status.attr('aria-live', 'polite'); 
    }

    
    $crAdd.on('click', function() {
        
        const name = $crName.val().trim();
        const description = $crDesc.val().trim();

        
        if (name === '') {
            updateStatus('Error: Creature needs a name!', true);
            $crName.focus();
            return;
        }

        
        const $newCard = $('<div>')
            .addClass('card') 
            .html(`
                <h3>${name}</h3>
                <p>${description || 'No description provided'}</p>
                <p>Click me to play!</p>
            `);

       
        $creatureList.append($newCard);
        
       
        $crName.val('');
        $crDesc.val('');
        updateStatus(`Successfully added creature: **${name}** to the garden.`, false);
    });

   
    $clearAll.on('click', function() {
        if ($creatureList.children().length > 0) {
            $creatureList.empty(); // Remove all children from the list
            updateStatus('All creatures cleared from the garden.', false);
        } else {
            updateStatus('The garden is already empty!', true);
        }
    });

    
    $creatureList.on('click', '.card', function() {
        const $card = $(this);
        
        
        $card.addClass('enthusiastic');

        
        setTimeout(function() {
            $card.removeClass('enthusiastic');
        }, 700); 

        
        const creatureName = $card.find('h3').text();
        updateStatus(`**${creatureName}** is exploding with enthusiasm!`, false);
    });

});