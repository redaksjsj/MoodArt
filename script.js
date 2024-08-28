function generateArt() {
    const mood = document.getElementById('moodInput').value;
    const artDisplay = document.getElementById('artDisplay');

    if (mood) {
        // Simuler la génération d'art
        artDisplay.innerHTML = `<p>Art généré pour l'humeur: "${mood}"</p><img src="https://via.placeholder.com/300" alt="Art généré">`;
    } else {
        artDisplay.innerHTML = '<p>Veuillez entrer votre humeur.</p>';
    }
}
