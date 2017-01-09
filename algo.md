algo :
algo   
données in=>traitement=>données out  
prog série d instruction exe en séc ou para et réalise un algo  

algo seq d'instruction qui décrit comment résoudre pb partic  
chronologie imposée. finie.  
questions à se poser :   
complexité calculabilité correction  

{commentaire}  

variable(bold) var1, var2: carac  
steps  
prépartion traitement  
données nécessaires réso  
traitement: réso pas à pas après décomposition en ss pb si nécessaire  
edition des résultats  

Language algorithmique
===============
Algorithme NomAlgorithme  
{commentaire}  
Début  
	"actions ex" afficher   
Fin  



Déclaration des données  
=======
Variable <nom de donnée>:type  
>ceci réserve de l'espace pour stocker des données  

ex variables val, unNombre: entier  

>s à variables si plusieurs  

Constante <nom de donnée>:type <- valeur ou expression  
>ceci réserve de l'espace pour stocker des données  
>valeur ne varie pas   
Constante Max:entier <-10  
          DEUXFOISMAX:entier<-MAXx2  

variable utilise camelCase  
constante tt en majuscules  

lecture ecriture données
======= 
Saisir<nom de donnée>  
Afficher<nom de donnée>  
si on ajoute autre chose que variable ou chaine de caractère mettre virgule  
"string"  

Fonction: instruction permettant de placer en mémoire data, visualiser data en mémoire.  
Afficher ("lenom est", nom, "et le prénom est", prénom)  

Analyse
===
xtraire de l'énoncé des elements de modélisation  
tech: souligner de diff couleur   
but prog  ex blue
données en entrée  ex rg
résultats en sortie  ex vert

consigne exemple tva
==
calc aff tx tva à partir tva + prixTTC
à partir
prix ht
tx tva : 20.6

Algorithme calculTVA
{}
Constantes (TVA:réel<-20.6)
		   (Titre : chaîne<-"résultat")
Variable prixHT:réel
Variables prixTTC,montantTVA: réels
Début
	afficher("donnez moi le px ht")
	saisir(prixHT)
	prixTTC<-prixHT*(1+TVA/100)
	montantTVA<-PrixTTC-prixHT
	afficher(Titre)
	afficher(prixHT, "euros H.T+TVA", TVA,"devient", prixTTC,"eurosTTC")
Fin
rq faux car pas de montantTVA affiché

algo martin
==
Algorithme CalculTVA  
Constante (TAUXTVA:réel)<-20.6 {donnée entrée}  
Variable montantTVA,prixHT,prixTTC:réel {déclaration cste et var}  
		{sortie}{entrée    {sortie} {type}
		        inconnue}            nb vir


Début{traitement}    
	Afficher("prix ht?") {question pr utilisateur}{prép traitement}    
	Saisir(prixHT)    
	prixTTC<-prixHT*(1+TAUXTVA/100){traitement}    
	montantTVA<-prixTTC-prixHT    
	Afficher("laTVA est de" montantTVA, "et le prix TTC est de", prixTTC){résultat}    
Fin    




exercice paye hebdo
énoncé voir avec julien
========

Algorithme Paye  
{calcul paye hebdomadaire<-200+(prixrégulier*6/100)+(prix rabais*3/100)}  
Constantes (PAYEBASE:réel)<-200  
		   (TAUXREGU:réél)<-6  
		   (TAUXRABAIS:réel)<-3  
Variables totalVenteRabais, totalVenteRégu,paye:réel  

Début  
	Afficher("total vente prix régulier?")  
	Saisir(totalVenteRégu)  
	Afficher("total vente prix rabais?")  
	Saisir(totalVenteRabais)  
	paye<-PAYBASE+TotalVenteRégu*TAUXREGU/100+totalVenteRabais*TAUXRABAIS/100  
	Afficher("Votre paye",paye,"$")  
Fin  

nom ht gauche prénom haut droite 

Algorithme PayeHebdomadaire

pb 8 âge de l'année en cours 


echange deux val 
val a val b val e
val e <-val b
valb <- val a
val a <-vale
! nomenclature non respectée

    
Nomenclature condition
==========

Début
	Action
		si <expression logique>
			alors Action
			[sinon Action]
		fsi
Fin
[facultatif]




Condition dans condition
====
Début
	Action
		si <expression logique>
			alors Action
			sinon si <expression logique>
				alors Action
				sinon Action
			fsi

		fsi
Fin




julien [12:00 PM]  
*Description du problème 11*

Concevoir un algorithme calculant la facture d'un client. La facture se calcule en fonction du prix d'un article et de la quantité achetée :

§         Le client obtient un rabais de 10%, seulement s'il achète pour plus de 200€.
§         Les taxes s'élèvent à 15% du prix d'achat.

L'algorithme doit lire le nom du client, l'article acheté, la quantité et le prix ht. Puis, il doit afficher le nom de ce client, l'article qu'il s'est procuré et le montant de sa facture TTC.



Algorithme Facture
Constantes (RABAIS: entier)<-10
		   (TAUXTAXE:entier)<-15
		   (SEUIL:entier)<-200
Variables  nomDuClient, articleAcheté:chaine de caractère
	      Quantité, prixht, prixTTC:réel
Début
	Afficher("quel est votre nom?")
	Saisir(nomDuClient)
	Afficher("Quel est le nom de l'article, son prix, sa quantité")
	Saisir (articleAcheté, prixht,  Quantité)
	Si prixht>SEUIL
		alors prixht(1-RABAIS/100)
	fsi
	prixTTC<-prixht(1+TAUXTAXE/100)
	Afficher("facturede m", nomDuClient, "a acheté", articleAcheté, "pour le montant TTC de",prixTTC)

Fin

*Description du problème 12*

Concevoir un algorithme capable de déterminer si un employé a travaillé des heures supplémentaires :

§         Un employé a travaillé des heures supplémentaires, seulement s'il a effectué plus de 40 heures de travail.

L'algorithme doit lire le numéro d'employé, le nom de l'employé et le nombre d'heures travaillées. Puis, il doit afficher toutes cette information, seulement si l'employé a travaillé des heures supplémentaires. Sinon, rien n'est affiché à l'écran.


Algorithme plusPetit
{algo qui retrouve le plus petit}
Variables nb1, nb2, nb3, nb4, nbPetit: rééls

Début 
Afficher ("donner 4 nb")
Saisir (nb1, nb2, nb3, nb4)
	si nb1< nb2
		alors nbPetit<-nb1
		sinon nbPetit<-nb2
	fsi
	si nb3< nbPetit
		alors nbPetit<-nb3
	fsi
	si nb4< nbPetit
	alors nbPetit<-nb4
	fsi
afficher "le plus petit nombre, nbPetit)
Fin

*Description du problème 15*

Concevoir un algorithme capable de déposer ou retirer de l'argent d'un compte bancaire selon le choix de l'utilisateur :

§         Un code de transaction de 1, signifie que le client veut faire un dépôt.
§         Un code de transaction de 2, signifie que le client veut faire un retrait.
§         Tout autre code de transaction représente une erreur d'entrée du client.

L'algorithme doit lire le nom du client, le numéro du compte, le solde initial, le montant de la transaction et un code de transaction. Puis, il doit afficher le nom du client, le numéro de compte, le solde initial et final du compte.



deux cstes (1 et 2)
si code=1
	alors soldeF<-soldeI+Montant
	sinon si code=2
		alors soldeF<-soldeI-Montant
		sinon Afficher ("erreur")
Tableaux
=======
{tableau}
variables tableau[1, 4, 3]:ENTIER
		  couou["cou", "moi"]:chaine
		  autre["cou", 3]:mixte

tableau[]<- 4 {ajoute valeur 4 à la suite du tableau}
tableau<-[2,3]{supprime tt et remplace index 0 par 2 index 1 par 3}
boucles où l'on connait le nombre de tours
=====
Variable compteur:entier<-0
{boucle}
POUR compteur allant de à à 10 au pas de 1 
FAIRE afficher("truc")
FPOUR
result 
tructruc(x9)

Variable compteur:entier<-0
{boucle}
POUR compteur allant de à à 10 au pas de 1 
	FAIRE afficher("truc")
	alaligne
FPOUR

Variable compteur:entier<-0
{boucle où l'on connait le nombre de tours}
POUR compteur allant de 0 à 10 au pas de 1 
	FAIRE tableau[compteur]<-compteur+2
	alaligne
FPOUR
{2,3,4,5,6,7,8,9,10,11,12}

Variable compteur:entier
	     tableau [2,3,4,5]:entier
{boucle}
POUR compteur allant de 0 à 3 au pas de 1 
	FAIRE afficher tableau[compteur]
	alaligne
FPOUR
{2,3,4,5}
il est interdit de modifier compteur au sein d'une boucle


Variable compteur:entier
	     tableau [2,3,4,5]:entier
{boucle}
POUR compteur allant de 0 à TailleDu tableau-1 au pas de 1 
	FAIRE afficher tableau[compteur]
	alaligne
FPOUR
{2,3,4,5}


boucles où l'on ne connait pas taille tableau
=====
Variable test:entier
test<-1
{boucle}
TANT QUE test<10
FAIRE Afficher ("non", alaligne)
test<-test+1

FINTANTQUE
result 9 non alaligne

Variable test:entier
test<-1
{boucle}
TANT QUE test<10
FAIRE Afficher ("non", alaligne)


FINTANTQUE

Forbiden


Variable test:entier
		 question["on arrête?",
		 		  "Q2", 
		 		  "Q3",
		 		  "Q4", 
		 		  "Q5", 
		 		  "Q6", 
		 		  "Q7", 
		 		  "Q8", 
		 		  "Q9"]
test<-0
{boucle}
TANT QUE test<10
FAIRE Afficher ("non", alaligne)
	  afficher ("on arrête?oui/non")
	  saisir (question[test])
	  si  question ="oui"
	  	alors test <-9
	  fsi
	  test <-test +1

FINTANTQUE

Si réponse une fois oui on arrête la boucle


Julien veut pouvoir rentrer des nombres pour que l'algo ressorte le plus petit, Julien veut pouvoir rentrer autant de nombres qu'il veut mais au moins 3. Après chaque nombre, demander si oui ou non julien veut rentrer un nombre.



ma version obsolète:
Algorithme plusPetit
{algo qui retrouve le plus petit}
constantes (YES:chaine)<-"Oui"
		   (NO:chaine)<-"Non"
variables tableau []:réel
		  yesno: entier <-0
		  nb, petit:réél 
		  compteur<-0
		  r: chaine



Début 
	Afficher ("donner vos 3 premiers nb")
	Saisir (tab[0], tab[1], tab[2])
	TANT QUE yesno=0
	FAIRE Afficher ("Veux tu entrer un autre nombre. Oui/Non")	
	  	saisir (R)
	 	 si R="non"
	  		alors yesno<-yesno+1
	  		sinon si yesno=0
	  			alors Afficher ("donner nb suivant")
	  			 	 saisir (nbS)
	  			 	 tableau[]<-nbS
	  	fsi

	FINTANTQUE
	POUR compteur allant de 0 à TailleDu tableau-1 au pas de 1
	si tab[compteur]< tab[compteur+1]
		alors petit<-tab[compteur]
		sinon petit<-tab[compteur+1]
	fsi
	FPOUR
afficher "le plus petit nombre", petit)
Fin

ma version en cours:

Algorithme plusPetit
{algo qui retrouve le plus petit}
constantes (YES:chaine)<-"Oui"
		   (NO:chaine)<-"Non"
variables tableau []:réel
		  petit:réél 
		  compteur<-0
		  r, yesno: chaine



Début 
	Afficher ("donner vos 3 premiers nb")
	Saisir (tab[0], tab[1], tab[2])
	TANT QUE yesno=YES
	FAIRE Afficher ("Veux tu entrer un autre nombre. Oui/Non")	
	  	saisir (R)
	 	 si R=YES
	  		alors Afficher ("donner nb suivant")
	  			 	 saisir (nbS)
	  			 	 tableau[]<-nbS
	  		sinon si R=NO
	  			alors Afficher ("Fin saisie")
	  			sinon Afficher ("réponse non valide")
	  	fsi

	FINTANTQUE
	POUR compteur allant de 0 à TailleDu tableau-1 au pas de 1
	si tab[compteur]< tab[compteur+1]
		alors petit<-tab[compteur]
		sinon petit<-tab[compteur+1]
	fsi
	FPOUR
afficher ("le plus petit nombre", petit)
Fin


correction:
Algorithme plusPetit
{prend un nombre illimité de nombres et retourne le plus petit}
Variables tableau[]:ENTIER
	      question:chaine<-"oui"
	      noDeTours,compteur,nbMini:ENTIER
début
	noDeTours<-1
	TANT QUE question = non 
	FAIRE afficher ("donne moi un nombre entier")
		saisir (tableau[])
		si noDeTours>=3
			afficher("on continue? Oui/Non")
			saisir(question)
		fsi
		noDeTours<-noDeTours+1
	FINTANTQUE
	nbMini<-tableau[0]
	POUR compteur ALLANT DE 0 A tailleDu tableau-1 AU PAS DE 1
		FAIRE Si tableau[compteur]<-nbMini
				alors nbMini<-Tableau[compteur]
			  fsi
	FINPOUR
Afficher ("le plus petit nombre", petit)
test
index=>Nombre=>noDeTours init,end=> question 
0=>12=>1,2=>oui
1=>8=>2,3=>oui
2=>24=>3,4=>oui(réponse utilisateur)
3=>100=>4,5=>non

nbmini => compteur 
12=>0
8=>1
8=>2
8=>3




