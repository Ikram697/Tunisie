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

let taux_de_change = 3.3;

let billet_avion_texte = billet_avion_euros.innerText;
let billet_avion_nombre = parseFloat (billet_avion_texte);
let billet_avion_convertis = billet_avion_nombre * taux_de_change;

let restaurants_texte = restaurants_euros.innerText;
let restaurant_nombre = parseFloat (restaurants_texte);
let restaurant_convertis = restaurant_nombre * taux_de_change;

let courses_texte = courses_euros.innerText;
let courses_nombre = parseFloat (courses_texte);   
let courses_convertis = courses_nombre * taux_de_change;

let activites_texte = activites_euros.innerText;
let activites_nombre = parseFloat (activites_texte);
let activites_convertis = activites_nombre * taux_de_change;

let souvenirs_texte = souvenirs_euros.innerText;
let souvenirs_nombre = parseFloat (souvenirs_texte);
let souvenirs_convertis = souvenirs_nombre * taux_de_change;

let total_texte = total_euros.innerText;
let total_nombre = parseFloat(total_texte);
let total_convertis = total_texte * taux_de_change;


bouton_conversion.addEventListener("click",function() {
    billet_avion_dinards.innerHTML = billet_avion_convertis;
    restaurants_dinards.innerHTML = restaurant_convertis;
    courses_dinards.innerHTML = courses_convertis;
    activites_dinards.innerHTML = activites_convertis;
    souvenirs_dinards.innerHTML = souvenirs_convertis;
    total_dinards.innerHTML = total_convertis;
});

const bouton_bleu = document.getElementById("Bouton_bleu");
const titre_bleu = document.getElementById("Titre_bleu");


bouton_bleu.addEventListener("click",function() {
    titre_bleu.style.color = "blue";
    
});