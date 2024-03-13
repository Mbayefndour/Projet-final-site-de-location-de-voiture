

 //fonction permettant a l'utilisateur d'acceder au formulaire
 function showSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
    
 }

document.addEventListener('DOMContentLoaded', function() {
    // Afficher le formulaire de recherche
    const searchIcon = document.getElementById('search');
    const searchContainer = document.querySelector('.box-search-container');

    searchIcon.addEventListener('click', function(){
        searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Gestion de la soumission du formulaire d'inscription
    const signupForm = document.querySelector('#signupForm');
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche la soumission du formulaire

        // Récupération des valeurs du formulaire
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validation basique ou traitement des données...
        console.log("Inscription:", nom, prenom, email, password);

        // Ici, vous pourriez ajouter du code pour valider les entrées de l'utilisateur
        // et, par exemple, envoyer les données à un serveur

        alert("Merci pour votre inscription!");
        // Réinitialisation du formulaire après soumission (facultatif)
        signupForm.reset();
    });
});
