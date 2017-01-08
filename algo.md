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