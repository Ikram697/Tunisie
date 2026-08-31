const button_2 = document.getElementById("Bouton_photo");
const affichage_like = document.getElementById("augmentation_like");

let Score = 0;

button_2.addEventListener ("click",function() {
    Score = Score + 1;
    affichage_like.innerHTML = Score; 

});


