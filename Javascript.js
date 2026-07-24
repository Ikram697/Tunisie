const button = document.getElementById("Bouton");
const p = document.getElementById("Phrase_paragraphe");

button.addEventListener("click",function() {
    button.innerHTML = "Vous m'avez cliqué.";
    p.innerHTML = "Vous maitrisez le DOM.";
});

const bouton_decollage = document.getElementById("Bouton_decollage");
const titre_Aeroport = document.getElementById("Aeroport");
const image_Aeroport = document.getElementById("Image_Aeroport");

bouton_decollage.addEventListener("click",function() {
    titre_Aeroport.innerHTML = "Tunis";
    image_Aeroport.src = "Aeroport_Tunis_Carthage.jpg";
});