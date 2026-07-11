const button = document.getElementById("Bouton_TP_Javascript");
const p = document.getElementById("Premier_Paragraphe_TP_Javascript");

button.addEventListener("click", function() {
    button.innerHTML = "Vous avez cliqué sur le bouton !";
    p.innerHTML = "Je viens de manipuler le DOM";
});
