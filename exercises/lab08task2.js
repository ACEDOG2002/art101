document.addEventListener('DOMContentLoaded', () => {
    const captureDevice = document.getElementById('creature');
    const squirtleElement = document.getElementById('squirtle');
    const selectionArea = document.getElementById('selection-area');
    const statusMessage = document.getElementById('status-message');
    
    const resetButton = document.getElementById('reset-button');
    
    let selectedPokemon = 'squirtle';

    resetButton.addEventListener('click', () => {
        
        window.location.reload(); 
    });

    const updateSelection = (pokemonName) => {
        selectedPokemon = pokemonName;
        statusMessage.textContent = `${pokemonName.toUpperCase()} selected. Click the Poké Ball to reveal!`;
    };

    selectionArea.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (button && button.dataset.pokemon) {
            updateSelection(button.dataset.pokemon);
        }
    });

    captureDevice.addEventListener('click', () => {
        
        captureDevice.style.opacity = 0;
        
        squirtleElement.className = ''; 
        squirtleElement.classList.remove('hidden');
        squirtleElement.classList.add(selectedPokemon); 
        
        statusMessage.textContent = `${selectedPokemon.toUpperCase()} revealed!`;
        
        captureDevice.style.pointerEvents = 'none';
        selectionArea.style.pointerEvents = 'none';
        selectionArea.style.opacity = '0.5';
    });
    updateSelection(selectedPokemon);
});