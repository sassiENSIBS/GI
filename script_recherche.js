// Ajouter un gestionnaire d'événement pour la soumission du formulaire
document.getElementById('formulaire_recherche_JS').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire
    const motRecherche = document.getElementById('recherche_mot').value.toLowerCase(); // Obtenir le mot-clé en minuscule (recherche insensible à la casse)
    console.log("Mot recherché:", motRecherche);
    const resultats = document.getElementById('resultats'); // Div où les résultats seront affichés
    resultats.innerHTML = ''; // Réinitialiser le contenu des résultats

    // Liste des pages à rechercher
    const pages = ['page1.html', 'Média.html', 'pagejavaScript.html'];

    // Parcourir chaque page pour effectuer la recherche
    pages.forEach(page => {
        console.log("Recherche dans:", page);
        fetch(page) // Faire une requête pour obtenir le contenu de la page
            .then(response => response.text()) // Convertir la réponse en texte
            .then(data => { // Vérifier si le mot est présent dans le contenu de la page (converti en minuscule)
                // Vérifier si le mot-clé est présent dans le contenu de la page
                if (data.toLowerCase().includes(motRecherche)) {
                    console.log(`Mot-clé trouvé dans ${page}`);
                    // Si trouvé, ajouter un lien vers la page dans les résultats
                    resultats.innerHTML += `<div><a href="${page}">${page}: Mot-clé trouvé</a></div>`;
                } else {
                    console.log(`Mot-clé non trouvé dans ${page}`);
                    // Si non trouvé, indiquer que le mot-clé n'est pas présent
                    resultats.innerHTML += `<div>${page}: Mot-clé non trouvé</div>`;
                }
            })
            .catch((error) => {
                // En cas d'erreur lors de la récupération de la page, afficher un message d'erreur
                console.error('Erreur lors de la récupération de la page:', error);
                resultats.innerHTML += `<div>${page}: Erreur lors de la récupération de la page</div>`;
            });
    });
});