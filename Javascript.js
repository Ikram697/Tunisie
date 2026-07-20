const button = document.getElementById("Bouton");
const p = document.getElementById("Phrase_paragraphe");

button.addEventListener("click",function() {
    button.innerHTML = "Vous m'avez cliqué.";
    p.innerHTML = "Vous maitrisez le DOM.";
});
