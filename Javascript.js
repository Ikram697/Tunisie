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

const billet_avion_euros = document.getElementById("billet_avion_en_euros");
const restaurants_euros = document.getElementById("depenses_restaurants_en_euros");
const courses_euros = document.getElementById("courses_en_euros");
const activites_euros = document.getElementById("activites_en_euros");
const souvenirs_euros = document.getElementById("souvenirs_en_euros");
const total_euros = document.getElementById("total_en_euros");

const billet_avion_dinards = document.getElementById("billet_avion_en_dinards");
const restaurants_dinards = document.getElementById("depenses_restaurants_en_dinards");
const courses_dinards = document.getElementById("courses_en_dinards");
const activites_dinards = document.getElementById("activites_en_dinards");
const souvenirs_dinards = document.getElementById("souvenirs_en_dinards");
const total_dinards = document.getElementById("total_en_dinards");

const bouton_conversion = document.getElementById("Bouton_conversion");