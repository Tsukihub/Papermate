function plusPetit(){
var tableau = new Array;
var question = "oui";
var noDeTours, compteur, nbMini;

noDeTours = 1;
    while(question =="oui"){
     tableau.push(parseInt(prompt("donne moi un nombre entier")));
        if(noDeTours > 2){
            question=prompt("On continue? oui / non");
        }
        noDeTours++;
    }
    nbMini= tableau[0];

    for(compteur=0; compteur<=tableau.length-1; compteur++){
        if (tableau[compteur] < nbMini){
                nbMini = tableau[compteur];
             }    
    }
    
    alert("le plus petit nombre est "+nbMini);
}