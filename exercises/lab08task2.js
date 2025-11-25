
const IDS = {
    POKEBALL: 'pokeball',
    DISPLAY: 'pokemon-display',
    SELECTION: 'selection-area',
    STATUS: 'status-message',
    RESET: 'reset-button'
};

const CLASSES = {
    HIDDEN: 'hidden',
    POKEMON_BUTTON: 'select-pokemon',
    ACTIVE_DISPLAY: 'active',
    SELECTED: 'selected'
};

document.addEventListener('DOMContentLoaded', () => {
    
    const pokeball = document.getElementById(IDS.POKEBALL);
    const pokemonDisplay = document.getElementById(IDS.DISPLAY);
    const selectionArea = document.getElementById(IDS.SELECTION);
    const statusMessage = document.getElementById(IDS.STATUS);
    const resetButton = document.getElementById(IDS.RESET);
    
    
    let selectedPokemon = 'bulbasaur'; // Default starter

    /** 
     * @param {string} pokemonName 
     */
    const updateSelection = (pokemonName) => {
        selectedPokemon = pokemonName;
        
        const buttons = document.querySelectorAll(`.${CLASSES.POKEMON_BUTTON}`);
        buttons.forEach(btn => {
            if (btn.dataset.pokemon === pokemonName) {
                btn.classList.add(CLASSES.SELECTED);
            } else {
                btn.classList.remove(CLASSES.SELECTED);
            }
        });
        
        statusMessage.textContent = `${pokemonName.toUpperCase()} selected. Click the Poké Ball to begin the capture!`;
    };

    /**
     * 
     */
    const handleCapture = () => {
        
        pokeball.style.pointerEvents = 'none';
        selectionArea.style.pointerEvents = 'none';
        selectionArea.style.opacity = '0.5';
        
        
        pokeball.style.opacity = 0;
        
        
        pokemonDisplay.classList.remove(CLASSES.HIDDEN);
        
        
        pokemonDisplay.setAttribute('data-pokemon-name', selectedPokemon);
        
        
        setTimeout(() => {
            pokemonDisplay.classList.add(CLASSES.ACTIVE_DISPLAY);
        }, 10); 
        
        statusMessage.textContent = `${selectedPokemon.toUpperCase()} revealed!`;
    };

    /**
     * 
     */
    const handleReset = () => {
        
        pokeball.style.opacity = 1;
        pokeball.style.pointerEvents = 'auto';

        
        selectionArea.style.pointerEvents = 'auto';
        selectionArea.style.opacity = '1';

        
        pokemonDisplay.classList.add(CLASSES.HIDDEN);
        pokemonDisplay.classList.remove(CLASSES.ACTIVE_DISPLAY);
        pokemonDisplay.removeAttribute('data-pokemon-name');

        
        updateSelection(selectedPokemon);
    };


    
    
    
    selectionArea.addEventListener('click', (event) => {
        const button = event.target.closest(`.${CLASSES.POKEMON_BUTTON}`);
        if (button && button.dataset.pokemon) {
            handleReset(); // Clear the display first
            updateSelection(button.dataset.pokemon);
        }
    });

    
    pokeball.addEventListener('click', handleCapture);

    
    resetButton.addEventListener('click', handleReset); 
    
    
    updateSelection(selectedPokemon);
});