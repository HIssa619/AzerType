const listeMots = ["Cachalot","Pétunia","Serviette"]
const listePhrase = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0
let i=0


while(score ===0 && i ===0 ){
let ChoixUtilisateur = prompt( "Voulez-vous une liste de mot (tapez 1) ou une liste de phrase (tapez 2)?")

if (ChoixUtilisateur == 1){
    while(i<listeMots.length){
    let motUtilisateur = prompt( "ecrivez le mot :" + listeMots[i])
    if (motUtilisateur === listeMots[i]) {
        score++;
        i++;
    console.log("Bravo! votre score"+score)
    }  else {
        console.log("faux!")
    }
}}

ChoixUtilisateur = prompt( "Voulez-vous une liste de mot (tapez 1) ou une liste de phrase (tapez 2)?")

if(ChoixUtilisateur == 2){
    i=0
    while(i<listePhrase.length){
    let phraseUtilisateur = prompt( "ecrivez le mot :" + listePhrase[i])
    if (phraseUtilisateur === listePhrase[i]) {
        score++;
        i++;
    console.log("Bravo! votre score"+score)
    }  else {
        console.log("faux!")
    }
}
}
score=0
i=0
}





