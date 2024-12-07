// Riferimento agli elementi
const hamburger = document.getElementById('hamburger');
const modal = document.getElementById('modalMenu');

// Gestione dell'apertura del menu mobile
hamburger.addEventListener('click', () => {
    modal.style.right = '0'; // Mostra la modale
});

// Gestione della chiusura del menu mobile (cliccando fuori)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.right = '-250px'; // Nascondi la modale
    }
});
