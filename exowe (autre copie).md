Concevoir un algorithme calculant la commission que recevra un employé en fonction de la classe d'employé auquelle il appartient :

§         Classe 1
       Si le total de vente de l'employé est plus petit ou égal à 1000$, le taux de commission est de 6%.
       Si le total de vente de l'employé est plus grand que 1000$, mais plus petit que 2000$, le taux de commission est de 7%.
       Si le total de vente de l'employé est plus grand que 2000$, le taux de commission est de 10%.
§         Classe 2
       Si le total de vente de l'employé est plus petit que 1000$, le taux de commission est de 4%.
       Si le total de vente de l'employé est plus grand ou égal à 1000$, le taux de commission est de 6%.
§         Classe 3
       Le taux de commission est de 4.5% peut importe le total des ventes.
§         Classe 4
       Le taux de commission est de 5% peut importe le total des ventes.

§         Tout autre classe d'employé représente une erreur d'entrée de l'utilisateur.

L'algorithme doit lire le nom, le numéro, le total des ventes et la classe de l'employé. Puis, il doit afficher le nom, le numéro et la commission de l'employé.

Algorithme SalaireFonctionClasse {lit nom, numéro, total vente et classe employé et ressort le nom, le numéro ainsi que la commission calculée à partir des donneés fournies}
constantes (SEUILINF: entier)<-1000
		       (SEUILSUP: entier)<-2000
		       (COMCUNINF :réel)<-0.06
           (COMCUNSUP :réel)<-0.07
           (COMCUNSUPSUP :réel)<-0.1
           (COMCDEUXINF :réel)<-0.04
           (COMDEUXSUP :réel)<-0.06
           (COMTROIS :réel)<-0.045
           (COMQUATRE :réel)<-0.05
Variables Nom, Num, TTvente, Classe, grosseCommission:réel
Début
  Afficher("Merci de bien vouloir renseigner le nom, le numéro, le total des ventes et la classe de l'employé dont la commission doit être calculée.")
  Saisir (Nom, Num, TTvente, Classe)
    si Classe=1 et TTvente>=SEUILINF
      alors grosseCommission<-TTvente x COMCUNINF       {consigne ne prévoit pas le cas où =2000 kuso!}
      sinon si Classe=1 et SEUILINF<TTvente<SEUILSUP 
        alors grosseCommission<-TTvente x COMCUNSUP
        sinon si Classe=1 et TTvente>SEUILSUP
          alors grosseCommission<-TTvente x COMCUNSUPSUP
        fsi
      fsi
    fsi
    si Classe=2 et TTvente<SEUILINF
      alors grosseCommission<-TTvente x COMDEUXINF
      sinon  grosseCommission<-TTvente x COMCDEUXSUP
    fsi
    si Classe=3
      alors grosseCommission<-TTvente x COMTROIS
    fsi
    si Classe=4
      alors grosseCommission<-TTvente x COMQUATRE
    fsi
    si Classe=0 ou Classe>4
      alors Afficher ("mauvaise classe boulet")
    fsi
  Afficher(Nom,"esclave n° ", Num,")", "doit percevoir une commissio, de ", grosseCommission, " euros")



  *Description du problème 17*

Concevoir un algorithme calculant la moyenne de 3 notes d'un étudiant et qui détermine la cote de l'étudiant :

§         L'étudiant se mérite la cote 'S', si sa moyenne est égale ou supérieur à 65%.
§         L'étudiant obtient la cote 'U', si sa moyenne est inférieure à 65%.

L'algorithme doit lire le nom et le numéro de l'étudiant, ainsi que 3 notes. Puis, il doit afficher le nom et la cote de l'étudiant. Si la cote est 'U', on affiche aussi le nombre de points manquants pour obtenir la cote 'S'.

Algorithme MoyenneNotes
Constantes (SU: entier)<-65
Variables Note1, Note2, Note3, Moy, DistSucc, Nom, Num: Réel

Début 
Afficher ("donnez le dividende de vos 3 notes sur cent, su nombre y su numero de estudiante")
Saisir (Note1, Note2, Note3, Nom, Num)
Moy<-(Note1, Note2, Note3)/3
si Moy>=65
  alors Afficher("S, tuttui! lo lograste", Nom, Num)
  sinon DistSucc <-SU-Moy
        Afficher("U, que tonto", Nom, Num, "te faltaba :", DistSucc, "puntos para tenter un S")
fsi
Fin

*Description du problème 18*

Concevoir un algorithme capable de produire un relevé de compte mensuel pour un client faisant usage d’une carte de crédit. L’algorithme prend en compte le total des achats et des paiements effectués par le client afin de calculer le montant d’intérêts et ensuite le solde final du compte :

§         Le montant soumis à des frais financiers (intérêts), se calcule en additionnant le total des achats et des paiements au solde initial du compte.
§         Si le montant soumis à des frais financiers est plus grand ou égal à 250$, le taux d’intérêt est de 1.5%.
§         Si le montant soumis à des frais financiers est plus petit que 250$, le taux d’intérêt est de 1%.
§         Le solde final est calculé en additionnant le montant soumis à des frais financiers et le montant des intérêts.

L'algorithme doit lire le nom du client, le solde initial du compte et le total des achats et le total des paiements. Le relevé de compte mensuel qui sera affiché, doit contenir le nom du client, le solde initial, le total des achats et des paiements, le montant soumis à des frais financiers, le montant des intérêts et le solde final du compte.

Algorithme RelevéDeCompteMensuel
Constantes (SEUIL: entier)<-250
           (INTS:réel)<-0.015
           (INTI:réel)<-0.01
Variables Nom", soldeI, ttAchat, totalPaiements, montantFrais, montantIntérêts, soldeFinal: réel

Début
  Afficher ("donner votre Nom, le total des achats et des paiements ainsi que solde initial du compte")
  Saisir (Nom, ttAchat, totalPaiements, soldeI)
  montantFrais<-ttAchat+totalPaiements+soldeI
  si montantFrais>=SEUIL
    alors montantIntérêts<-montantFraisxINTS
    sinon montantIntérêts<-montantFraisxINTI
  fsi
  soldeFinal<-montantFrais+montantIntérêts
  Afficher ("nom du client: ",Nom, "solde initial: "soldeI, "total des achats: ",ttAchat, "paiements: ", totalPaiements, "montant soumis à des frais financiers: ",montantFrais, "montant des intérêts :",montantIntérêts, "solde final du compte :", soldeFinal)
Fin

 *Description du problème 19*

Concevoir un algorithme capable de produire un rapport d’inventaire pour un certain article. La valeur d’inventaire est calculée en fonction de la quantité en inventaire et du prix unitaire de l’article.

L'algorithme doit lire le numéro de l’article, la quantité en inventaire et le prix unitaire. Le rapport d’inventaire qui sera affiché, doit contenir le numéro de l’article et la valeur d’inventaire ou le montant excédant 1000$ de valeur d’inventaire, dépendamment de la valeur d’inventaire.

Algorithme RapportInventaire
Constante (SEUIL: entier)
Variables QI, PU, ValIM: rééls
     
          valI: chaine de caractère
          numArt: entier


Début
  Afficher ("Donnez le numéro de l’article, la quantité en inventaire et le prix unitaire.")
  Saisir (numArt, QI, PU)
  valI<-"QIxPU"
  ValIM<-QIxPU
  si ValIM<=SEUIL
    alors Afficher ("numéro de l’article: ",numArt, "valeur d’inventaire: ",valI)
    sinon Afficher ("numéro de l’article: ",numArt, "valeur d’inventaire: ",ValIM)
  fsi
Fin

*Description du problème 20*

Concevoir un algorithme capable de produire un rapport de facturation scolaire d’un étudiant. Les frais de scolarité sont calculés en fonction du nombre de crédits auxquels est inscrit l’étudiant :

§         Si l’étudiant est inscrit à au moins 10 crédits, les frais de scolarité sont fixes à 1000$.
§         Si l’étudiant est inscrit à moins de 10 crédits, les frais de scolarité sont de 100$ par crédits.

L'algorithme doit lire le nom et le Numéro d’Assurance Sociale (NAS) de l’étudiant, ainsi que le nombre de crédits auxquels il est inscrit. Le rapport de facturation scolaire qui sera affiché, doit comprendre le nom, le Numéro d’Assurance Sociale et les frais de scolarité de l’étudiant.

Algorithme RapportFacturationScolaire
constantes (FraisSupEQDix:réel)<-1000
           (FraisUnit:réel)<-100
           (SEUILCREDITO:entier)<-10
Variable name, nomAsSc, facture: rééls
         crédito: entier

Début
  Afficher ("nom, Numéro d’Assurance Sociale (NAS) de l’étudiant, nombre de crédits vous êtes inscrit") 
  Saisir (name, nomAsSc,crédito)
  si crédito>=SEUILCREDITO
    alors Afficher ("nom: ",name,"Numéro d’Assurance Sociale: ",nomAsSc,"frais de scolarité de l’étudiant", FraisSupEQDix)
    sinon facture<-FraisUnitxcrédito
        Afficher ("nom: ",name,"Numéro d’Assurance Sociale: ",nomAsSc,"frais de scolarité de l’étudiant", facture)
  fsi
Fin

*Description du problème 21*

Concevoir un algorithme capable de produire un relevé de compte mensuel pour un certain compte de banque :

§         Si le solde final à la fin du mois est plus petit que 100$, des frais de service de 5$ sont soustraits au solde.

L'algorithme doit lire le nom et le numéro de compte du client, le solde initial, le total des dépôts et des retraits effectués au courant du mois. Le relevé de compte qui sera affiché, doit comprendre le nom et le numéro de compte du client, ainsi que le solde initial et final du compte.

Algorithme RelevéCompteMensuel
Constantes (SEUILF:entier)<-100
           (FRAIS:entier)<-5
Variables SI, SF, Dépot, Retrait: réel
          Nom, NuméroCompte: entier

Début
  Afficher ("nom, numéro de compte du client, solde initial, total des dépôts et des retraits effectués au courant du mois")
  Saisir (Nom,NuméroCompte,SI,Dépot,Retrait)
  SF<-SI+Dépot+Retrait
  si SF<SEUILF
    alors SF<-SF-FRAIS
  fsi
  Afficher ("nom :",Nom, "numéro de compte du client",NuméroCompte ,"solde initial ",SI,"final du compte ",SF)
Fin

*Description du problème 22*

Concevoir un algorithme déterminant si une personne est, en même temps, plus grande que 1.52 mètres et si elle pèse plus de 45 kilogrammes :

L'algorithme doit lire le nom, la grandeur (en mètres) et le poids (en kilogrammes) d’une certaine personne, puis afficher ou non le nom de la personne selon sa grandeur et son poids.

Algorithme PetitGrosCulFichés
Constantes (TAILLELIMITE: réel)<-1.52
           (PDLIMTE: entier)<-45
Variables Nom, Height, PD, con:réél

Début
  Afficher ("nom, la grandeur (en mètres) et le poids")
  Saisir (Nom, Height, PD)
  si Height<=TAILLELIMITE
    alors Afficher ("pas assez petit pour être fiché connard")
    sinon si PD>PDLIMTE
      alors Afficher (Nom)
      sinon Afficher ("Ton cul n'est pas gros demi portion")
 
    fsi
  fsi

Fin

*Description du problème 23*

Concevoir un algorithme capable de produire un rapport de main-d’œuvre forfaitaire. Le salaire de chaque ouvrier est calculé en fonction de la qualification de chacun :

§         Un ouvrier qualifié a un code d’emploi de « J » et un salaire de 12.00$.
§         Un ouvrier apprenti a un code d’emploi de « A » et un salaire de 10.00$.
§         Un ouvrier d’occasion a un code d’emploi de « C » et un salaire de 8.00$.

L'algorithme doit lire le nom d’un ouvrier, la position occupée, le nombre d’heures travaillées par jour et un code. Le rapport de main-d’œuvre forfaitaire qui sera affiché, doit comprendre le nom, la position occupée, les heures travaillées et le montant de la paye.

Algorithme RapportEsclaveForfaitaire
Variable Sal_hère, HJ:réel
         Nom, Position, Code: chaine de caractère
         Postion, code :Chaine de caractère
Constantes (H:entier)<-12
           (M:entier)<-10
           (L:entier)<-8
Début
  Afficher ("nom: ",Nom,"position occupée",Position,"nombre d’heures travaillées par jour",HJ,"code",Code)
  Saisir (Nom, Position, HJ)
  si Code="J"
    alors Sal_hère<-HJxH
    sinon si Code="M"
      alors Sal_hère<-HJxM
      sinon si Code="L"
        alors Sal_hère<-HJxL
      fsi
    fsi
  fsi
Fin

*Description du problème 24*

Concevoir un algorithme calculant la moyenne d'un étudiant en fonction de 3 notes d'examen et qui détermine ensuite la note en lettre. Pour déterminer la note en lettre, on se base sur le tableau suivant :
                                           
Moyenne       |  Note en lettre
-----------------------------------
90 – 100        |       A
-----------------------------------
80 – 89          |        B
-----------------------------------
70 – 79          |        C
----------------------------------
60 – 69          |        D
----------------------------------
0 – 59            |         E
----------------------------------

L'algorithme doit lire le nom de l’étudiant et 3 notes (sur 100%), puis afficher note en lettre correspondant à la moyenne.
La sortie doit ressembler à ceci : _________ s’est mérité(e) la note ____ .

Algorithme MarginalisationDesFaibles
Variables NUn, NDeux,NTrois, M:Réel

Début
  Afficher ("Donnez votre nom, vos 3 notes (format de la saisie Dividende/diviseur)" )
  Saisir (Nom, NUn, NDeux,NTrois)
  M<-(NUn, NDeux,NTrois)/3*100
  si 90=<M<=100
    alors Afficher (Nom,"s’est mérité(e) la note A")
    sinon si 80=<M=<89
      alors Afficher (Nom,"s’est mérité(e) la note B")
      sinon si 70=<M=<79
        alors Afficher (Nom,"s’est mérité(e) la note C")
        sinon si 60=<M=<69
          alors Afficher (Nom,"s’est mérité(e) la note D")
          sinon si 0=<M=<59
            alors Afficher (Nom,"s’est mérité(e) la note E")
          fsi
        fsi
      fsi
    fsi
  fsi
Fin

*Description du problème 25*

Concevoir un algorithme capable de déterminer si un postulant est éligible pour un certain poste. Pour être éligible, un postulant doit répondre à chacun de ces critères :

§         Le postulant doit être un citoyen des États-unis.
§         Le postulant doit être âgé d’au moins 21 ans.
§         Un code est utilisé pour déterminer la citoyenneté d’un postulant. Si ce code est 1, le postulant est un citoyen des États-Unis. Si ce code est 2, il n’est pas un citoyen des États-Unis.

L'algorithme doit lire le nom et l’âge du postulant, ainsi qu’un code correspondant à sa citoyenneté. Puis, il affiche un message spécifiant lequel ou lesquels des tests qui n’ont pas été passés, ou bien, si le postulant répond à tous les critères, il n’affiche que le nom du postulant.

Algorithme Eligibilité
constante (MAJ:entier)<-21
Variables Nom : chaine de caractère
          Âge, Code, Kickhim: entier

Début
Afficher("nom, âge, code nationalité")
Saisir (Nom,Âge, Code)
si code = 1
  alors Kickhim<-0
  sinon si code = 2 
    alors Kickhim<-Kickhim+1
  fsi
fsi
si Âge<MAJ
  alors Kickhim<-Kickim+2
fsi
si Kickhim=3 
  alors afficher("étranger et trop jeune")
  sinon si Kickhim=2
    alors Afficher ("trop jeune")
    sinon si Kickhim=1
      alors Afficher ("étranger")
      sinon si Kickhim=0
        alors Afficher (Nom)
      fsi
    fsi
  fsi
fsi
Fin