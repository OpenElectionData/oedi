---
title: '4. Détecter des biais dans l’enregistrement des candidats'
lang: fr
module_id: 4
permalink: '/academy/detecting-bias-in-ballot-qualification/'
excerpt: "Using sample ballot qualification data in Module 4, you’ll enhance your ability to:
<ul><li>use pivot tables and some more advanced features within them;</li>
<li>employ the COUNTIF function for a variety of use cases;</li>
<li>use basic operators in Microsoft Excel (including calculating percentages), and</li>
<li>examine your data with a political eye.</li></ul>"
---

## Résumé

En utilisant des exemples de données de l’enregistrement des candidats dans le Module 4, vous améliorerez votre capacité à:

- utiliser des tableaux croisés dynamiques ainsi que d’autres fonctionnalités plus avancées;
- utiliser la fonction COUNTIF pour traiter une diversité de cas pratiques;
- utiliser des opérateurs de base dans Microsoft Excel (incluant le calcul de pourcentages), et
- examinez vos données avec un regard politique.

## Pourquoi s’intéresser aux données liées à l’enregistrement des candidats?

Les règles et la conduite du processus de [l’enregistrement des candidats](https://openelectiondata.net/fr/guide/key-categories/ballot-qualification/) peuvent avoir un profond impact sur la qualité et l'équité d'une élection. Des critères injustes de qualification ou une mise en œuvre inéquitable de ces exigences peuvent fausser les règles du jeu où une partie importante des candidats peuvent être disqualifiés et interdits de participer au scrutin électoral. Les règles et le processus d’enregistrement d’une candidature peuvent être décisifs dans la détermination du résultat électoral. Par conséquent, lorsque les données sur l’enregistrement des candidats sont disponibles, les organisations de la société civile et les citoyens doivent être dotés des connaissances et des compétences nécessaires pour savoir utiliser ces données. Bien avant le jour du scrutin, une telle analyse peut être essentielle pour déterminer la crédibilité d'une élection.

## L’enregistrement des candidats à Opendya

Ci-dessous vous découvrirez le contexte politique pour l'ensemble des données que vous allez analyser dans ce module.

Une nation insulaire connue sous le nom d'Opendya a des élections présidentielles et parlementaires qui approchent. Les candidats potentiels viennent de soumettre leur nom à l'approbation de la commission électorale, et la commission vient de rendre ses décisions sur les candidats acceptés et rejetés. Vous avez reçu une copie des données avec toutes les décisions pour chaque candidat, à la fois pour les candidats aux législatives ainsi qu’aux présidentielles.

Tous les candidats qui se sont inscrits au scrutin électoral d'Opendya étaient issus de l'un des trois partis politiques: **Draconia** (le parti au pouvoir), **Shireling** (un parti d'opposition), and **Zalog** (un nouveau parti d'opposition). Il y a des rumeurs selon lesquelles Zalog, le plus récent parti d'opposition d'Opendya, a conclu une alliance avec le parti au pouvoir, mais ces allégations n'ont pas encore été confirmées.

## Revoir les données sur l’enregistrement des candidats

Pour commencer l'exercice, **[téléchargez ici](/assets/academy/exercise/Module_4_Ballot_Qualification.xlsx)** le fichier de données sur l’enregistrement des candidats.

Avant d’aborder l'analyse, familiarisons-nous avec les données disponibles dans le fichier.

### Full_name

La colonne A, Full_name semble contenir le prénom et le nom de chaque candidat potentiel.

[![Image 1](/assets/images/academy/module_4/Module_4_Photo_1.png)](/assets/images/academy/module_4/Module_4_Photo_1.png)

### Gender

Le sexe de chaque candidat potentiel est fourni dans la colonne B de la base de données.

### Age

L’âge de chaque candidat potentiel est disponible au niveau de la colonne C de la base de données. Il est à noter qu’Opendya n’impose pas de limites d’âges pour les candidats au scrutin législatif ou présidentiel.

[![Image 2](/assets/images/academy/module_4/Module_4_Photo_2.png)](/assets/images/academy/module_4/Module_4_Photo_2.png)

### Party

La colonne D présente le parti de chaque candidat.

### Decision

La colonne E, Decision, précise si la candidature de chaque individu a été acceptée ou rejetée par la commission électorale.

[![Image 3](/assets/images/academy/module_4/Module_4_Photo_3.png)](/assets/images/academy/module_4/Module_4_Photo_3.png)

### Election

La colonne F, Election, spécifie le type d’élections pour lequel l’individu a soumis sa candidature, soit législative ou présidentielle.

### District_code

La commission électorale attribue un code pour chaque circonscription électorale. Prenez un moment pour faire défiler le fichier et prendre connaissance de la façon dont les circonscriptions sont numérotées.

Comme nous l'avons mentionné dans le [Module 2: Revoir la Liste des Bureaux de Vote](https://openelectiondata.net/fr/academy/reviewing-a-polling-station-list/), les identifiants uniques sont extrêmement utiles pour traiter des séries de données. Ils nous aident à détecter les doublons et / ou à distinguer correctement les unités ayant des noms similaires.

[![Image 4](/assets/images/academy/module_4/Module_4_Photo_4.png)](/assets/images/academy/module_4/Module_4_Photo_4.png)

### District_name

La colonne H contient le nom de toutes les circonscriptions électorales à Opendya. Vous remarquez que c’est la seule référence géographique fournie dans la série de données. A ce stade, nous n’avons pas d’indications complémentaires nous permettant de voir si les circonscriptions sont proches les unes des autres ou font partie, à un niveau supérieur, de la même entité géographique.

[![Image 5](/assets/images/academy/module_4/Module_4_Photo_5.png)](/assets/images/academy/module_4/Module_4_Photo_5.png)

### Type

La colonne Type indique les caractéristiques des circonscriptions d’Opendya. Parcourez les données pour examiner quelles descriptions sont utilisées pour identifier chaque type de circonscription. Quels sont les différents types de circonscriptions que vous pouvez identifier?

[![Image 6](/assets/images/academy/module_4/Module_4_Photo_6.png)](/assets/images/academy/module_4/Module_4_Photo_6.png)

## Evaluer les caractéristiques démographiques sur l’âge des candidats par parti

Le calcul de l'âge moyen des candidats potentiels à Opendya vous donnera une idée des différences démographiques entre les partis politiques. Pour calculer l'âge moyen (c.-à-d. La «moyenne») des personnes qui se sont portées candidats, selon le parti politique, nous allons créer un tableau croisé dynamique. Votre utilisation de la fonction du tableau croisé dynamique dans cet exercice s'appuiera sur les compétences acquises à partir du Module 2.

### **Qu’est-ce que vous vous attendez à observer?**

Compte tenu de ce que vous savez sur les trois partis politiques en compétition lors des prochaines élections, quelles tendances en termes d’âge moyen des candidats vous attendez vous à observer?

Suivez ces étapes faciles pour réaliser votre tableau croisé dynamique.

#### 1\. Sélectionnez Tout

Pour commencer, vous devez sélectionner toutes les données dans l'onglet "Candidate_Information" de votre feuille de calcul. Pour ce faire, cliquez sur le carré en haut à gauche de la feuille contenant le petit triangle. Vous pouvez également cliquer sur la cellule A1 ("Full_name"), puis sur Control + A (en maintenant le bouton "Ctrl" enfoncé tout en appuyant sur la touche "A" du clavier).

[![Image 7](/assets/images/academy/module_4/Module_4_Photo_7.png)](/assets/images/academy/module_4/Module_4_Photo_7.png)

#### 2\. Insérer votre tableau croisé dynamique

Maintenant, toutes les données sont sélectionnées. \[Si vous utilisez Excel 2013\], cliquez sur l'onglet "Insert" dans le menu supérieur, puis cliquez sur "Pivot Table" sur la gauche. Une fenêtre apparaîtra qui dit «"Create Pivot Table». Laissez les options comme valeurs par défaut et cliquez sur «OK», et Excel créera un nouveau tableau croisé dynamique dans une nouvelle feuille de calcul.

[![Image 8](/assets/images/academy/module_4/Module_4_Photo_8.png)](/assets/images/academy/module_4/Module_4_Photo_8.png)

#### 3\. Trier par parti

Maintenant que votre tableau croisé dynamique est prêt, nous pouvons faire quelques calculs. Sur la droite vous trouverez une fenêtre intitulée "Pivot Table Field List". Cliquez sur "Party" et faites-le glisser / ajouter à la zone "Row Labels". Cela va tout trier pour toutes les valeurs répertoriées dans le champ "Party". Notez que "Party" est maintenant répertorié dans la fenêtre inférieure droite appelée "Row Labels". Si cela est fait correctement, les trois partis seront insérés dans la colonne A.

[![Image 9](/assets/images/academy/module_4/Module_4_Photo_9.png)](/assets/images/academy/module_4/Module_4_Photo_9.png)

#### 4\. Déterminer l'âge moyen

Ensuite, observons la composition par âge des trois partis d'Opendya: Draconia, Shireling et Zalog. Prenez "Age" et faites le glisser et déposez le dans la section "Values" sur le bas de votre liste de champs du tableau croisé dynamique. Si tout se passe bien, le tableau croisé dynamique devrait afficher par défaut toutes les cellules qui ont une valeur pour "Age" selon le parti politique. Vous pouvez vérifier cela en passant le pointeur de votre souris sur les valeurs de la colonne B, et une note doit indiquer «Count of Age». Notez que maintenant "Count of Age" est répertorié dans la fenêtre inférieure droite sous "Values". Si vous l'avez fait correctement, le tableau doit afficher 131 pour Draconia, 92 pour Shireling et 67 pour Zalog. Voir l'image ci-dessous pour confirmation.

[![Image 10](/assets/images/academy/module_4/Module_4_Photo_10.png)](/assets/images/academy/module_4/Module_4_Photo_10.png)

Ensuite, nous avons besoin qu’Excel nous montre l'âge moyen des candidats au lieu de compter le nombre de cellules avec une valeur pour "Age". Pour ce faire, nous allons à "Count of Age" dans la fenêtre "Values" en bas à droite de l'écran et on clique sur la flèche pointant vers le bas.

[![Image 11](/assets/images/academy/module_4/Module_4_Photo_11.png)](/assets/images/academy/module_4/Module_4_Photo_11.png)

Cela nous donnera une fenêtre où nous pouvons cliquer sur "Value Field Settings", comme vous pouvez le voir ci-dessous. Sous " Summarize Value Field By ", choisissez "Average". Excel fera le calcul de la moyenne de l'âge des candidats potentiels selon le parti politique.

[![Image 12](/assets/images/academy/module_4/Module_4_Photo_12.png)](/assets/images/academy/module_4/Module_4_Photo_12.png)

Afin d’épurer les données, nous avons renommé l'ensemble de cet onglet de données en Average_Age. Si vous préférez afficher vos calculs d'âge moyen sans les décimales, vous pouvez dans la fenêtre "Value Field Settings »" sélectionner l'option "Number Format Option". Sélectionnez "Number" et ajustez le nombre de décimales à 0, ou quel que soit le nombre de décimales que vous souhaitez voir apparaitre.

[![Image 13](/assets/images/academy/module_4/Module_4_Photo_13.png)](/assets/images/academy/module_4/Module_4_Photo_13.png)

#### **Qu’est-ce que vous pouvez observer?**

Quelles sont les tendances ou les différences que vous remarquez dans l’âge moyen pour chacun des trois partis à Opendya. Quel est à votre avis le parti le plus récent selon cette information?

## Faire une analyse globale des décisions sur l’enregistrement des candidats

#### Consulter l'onglet Candidate_Summary

Pour cette partie du module, nous allons commencer à utiliser l'onglet « Candidate_Summary » dans votre fichier Excel. Cet onglet permettra d’extraire un résumé des calculs basés sur les données de l'onglet « Candidate_Information ». Voilà à quoi cela ressemble:

[![Image 14](/assets/images/academy/module_4/Module_4_Photo_14.png)](/assets/images/academy/module_4/Module_4_Photo_14.png)

Pour accélérer les choses, nous avons pré-rempli toutes les en-têtes de colonne pour vous, qui seront composées de tous les différents calculs que vous aurez besoin de faire. Commençons avec des formules et des calculs plus complexes!

#### Utiliser COUNTIF et COUNTIFS pour compter le nombre de cellules qui répondent à vos critères

Pour le reste du module 4, nous utiliserons fréquemment les fonctions [COUNTIF](https://support.office.com/fr-fr/article/nb-si-nb-si-fonction-e0de10c6-f885-4e71-abb4-1f464816df34?omkt=fr-001&ui=fr-FR&rs=fr-001&ad=US) and [COUNTIFS](https://support.office.com/fr-fr/article/nb-si-ens-nb-si-ens-fonction-dda3dc6e-f74e-4aee-88bc-aa8c2a866842?omkt=fr-001&ui=fr-FR&rs=fr-001&ad=US). COUNTIF et COUNTIFS comptent le nombre de cellules remplies qui répondent aux critères que vous recherchez. Pour cet exercice, nous utiliserons ces formules pour additionner les cas où les candidats potentiels ont été acceptés ou rejetés par la commission électorale d'Opendya, en fonction des trois différents partis politiques. Notez que **a fonction COUNTIF ne fonctionne qu'avec une plage et un critère. COUNTIFS est capable de compter les cellules qui répondent à plusieurs critères.**

Voici comment la formule est structurée: COUNTIF (range, criteria) ou COUNTIFS (range_1, criteria_1, range_2, criteria_2, range_3, criteria_3,......).

- **« Range » (la plage)**: spécifie le groupe de cellules à partir duquel vous voulez compter.
- **«Criteria » (les critères)**: vos critères indiqueront si un nombre doit être compté ou non. Les critères peuvent prendre la forme d'un nombre, d'une expression, d'une référence de cellule, d'un texte ou d'une fonction qui définit les cellules qui seront comptabilisées.

Faisons un essai avec COUNTIF et COUNTIFS!

#### Compter les candidats potentiels en fonction du parti (Tot_Cand)

Vous commencerez votre exploration de la formule COUNTIF en calculant le nombre de personnes qui ont tenté de s'inscrire en tant que candidats en fonction de leurs partis politiques. Nous réaliserons cette opération dans la colonne B, Tot_Cand. Commençons par compter le nombre de candidats potentiels pour le parti Draconia, puis nous passerons à Shireling et Zalog.

1\. Dans la cellule B2, tapez "= COUNTIF (" Notez qu'Excel vous fournit automatiquement les informations nécessaires pour compléter le reste de la formule)

[![Image 15](/assets/images/academy/module_4/Module_4_Photo_15.png)](/assets/images/academy/module_4/Module_4_Photo_15.png)

2\. Maintenant, nous devons spécifier le **« range »** (la "plage") pour qu’Excel puisse extraire vos critères. Puisque nous examinons spécifiquement les partis politiques, votre plage sera la colonne D de l'onglet Candidate_Information. Pour référencer votre plage, laissez votre formule ouverte et cliquez sur l'onglet Candidate_Information dans le coin inférieur gauche de votre fichier. (Ne cliquez pas sur Entrée avant de passer à l'onglet de données principal, ou votre formule ne continuera pas à se remplir!)

Remarquez que quand vous revenez à l'onglet Candidate_Information que votre barre de formule continue à se mettre à jour en fonction de l'endroit où vous cliquez. Excel comprend que vous essayez d'établir une connexion entre votre calcul COUNTIF sur votre onglet Candidate_Summary et des informations contenues sur votre onglet Candidat_Information.

Pour terminer la sélection de la plage, sélectionnez toute la colonne D en cliquant sur le haut de la colonne (la lettre "D"). Encore une fois, vous pouvez remarquer qu’Excel rempli votre formule au fur et à mesure de vos clics.

[![Image 16](/assets/images/academy/module_4/Module_4_Photo_16.png)](/assets/images/academy/module_4/Module_4_Photo_16.png)

Maintenant, vous avez sélectionné votre plage avec COUNTIF! Tapez une virgule \[,\] et nous pourrons continuer.

3\. COUNTIF exige maintenant que vous sélectionniez vos « criteria » (« critères »). Sans appuyer sur Entrée, cliquez de nouveau sur l'onglet Candidate_Summary et cliquez sur la cellule A2 «Draconia». Vous venez de dire à Excel que vous souhaitez seulement compter les données pour les candidats membres du parti Draconie.

[![Image 17](/assets/images/academy/module_4/Module_4_Photo_17.png)](/assets/images/academy/module_4/Module_4_Photo_17.png)

4\. Fermez vos parenthèses \[)\] et appuyez sur Entrée. En utilisant COUNTIF, vous venez de calculer le nombre de personnes affiliées à Draconia qui se sont portées candidats pour la prochaine élection à Opendya!

[![Image 18](/assets/images/academy/module_4/Module_4_Photo_18.png)](/assets/images/academy/module_4/Module_4_Photo_18.png)

5\. Vous devez maintenant répliquer ce calcul pour les partis Zalog et Shireling. Pour ce faire, vous pouvez double-cliquer sur la case dans le coin inférieur droit de la cellule B2 ou vous pouvez entrer une nouvelle fois manuellement les formules en utilisant les cellules B2 (Zalog) et B3 (Shireling) comme nouveaux critères. Voici ce qui doit apparaitre:

[![Image 19](/assets/images/academy/module_4/Module_4_Photo_19.png)](/assets/images/academy/module_4/Module_4_Photo_19.png)

#### Compter les candidats "acceptés" en fonction du parti (Tot_Accept)

Ensuite, nous aimerions calculer le nombre total de candidats que la commission électorale d'Opendya a "accepté" comme candidats pour les prochaines élections et cela en fonction du parti. Ici, vous aurez besoin d'utiliser la formule COUNTIFS car nous comptons maintenant les cellules en fonction de deux critères au lieu d'un. Vous avez besoin d'Excel pour compter:

1.  1\. les candidats potentiels d'un **parti politique spécifique**, et
2.  2\. les candidats **acceptés**

La formule prendra la forme de deux formules COUNTIF normales mais en une seule formule **COUNTIFS (range_1, criteria_1, range_2, criteria_2)**. NNotez que la première moitié de cette formule ressemblera à notre calcul pour la colonne Tot_Cand, puisque nous comptons toujours en fonction des partis politiques. Commençons notre calcul dans la colonne C, Tot_Accept.

1\. Dans la cellule C2, répétez les étapes 1 et 2 de votre dernier calcul (Tot_Cand) qui vous indique comment sélectionner la plage et le critère. **N'oubliez pas de taper "= COUNTIFS" au lieu de "= COUNTIF".** Votre première plage est toujours la colonne D "Party" de l'onglet Candidate_Information, et votre premier critère sera le parti Draconia (cellule A2 dans l'onglet Candidate_Summary).

Si vous en avez besoin, cliquez ici pour voir à quoi ressemble cette étape.

N'appuyez pas sur Entrée ou ne fermez pas vos parenthèses pour l'instant! Au lieu de cela, tapez une virgule \[,\] et passons à la deuxième partie de la formule.

[![Image 20](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_20.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_20.png)

2\. Rappelez-vous que nous sommes en train de calculer le nombre de candidats « acceptés » au sein du parti Draconia. Notre formule actuelle est prête à afficher tous les candidats du parti Draconia, mais nous devons encore distinguer les candidats «acceptés» des «rejetés». Pour ce faire, nous devrons spécifier une deuxième plage et un second critère. Puisque nous sommes en train de trier les « accepted » des « rejected », notre plage est la colonne E "Decision" de l'onglet Candidate_Information. Cliquez sur l'onglet Candidate_Information et sélectionnez l'ensemble de la colonne E. Votre formule doit ressembler à ceci:

[![Image 21](/assets/images/academy/module_4/Module_4_Photo_21.png)](/assets/images/academy/module_4/Module_4_Photo_21.png)

3\. Tapez une virgule \[,\]. Nous sommes maintenant prêts à spécifier notre deuxième critère - les candidats acceptés. Pour ce faire, tapez "accepted", incluant les guillemets.

4\. Fermez vos parenthèses et appuyez sur Entrée. Vous venez de terminer votre premier calcul COUNTIFS qui doit ressembler à cela.

[![Image 22](/assets/images/academy/module_4/Module_4_Photo_22.png)](/assets/images/academy/module_4/Module_4_Photo_22.png)

5\. Maintenant, répétez ce calcul pour les deux parties Zalog et Shireling! Cliquez ici si vous avez besoin d’astuces pour procéder à cette opération. Jetez un oeil à ce que vos calculs finaux devraient arriver.

[![Image 23](https://openelectiondata.net//images/academy/module_4/Module_4_Photo_23.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_23.png)

Double-cliquez sur la case en bas à droite de la cellule C2!

#### Compter les candidats "rejected" par parti (Tot_Rej)

En outre, il est important pour nous de comprendre combien de candidats potentiels ont été invalidés comme candidats en fonction du parti. Ce calcul ressemblera presque exactement à la colonne C "Tot_Accept", mais avec une différence majeure.

1\. Répétez les étapes 1 et 2 de votre dernier calcul.

2\. Tapez une virgule \[,\] et réfléchissez à la façon dont vous devez exprimer votre deuxième critère pour ce calcul afin de ne compter que les candidats qui ont été rejetés par la commission électorale d'Opendya.

**Nous espérons que vous avez tapé "rejected" (en incluant les guillemets)!**

3\. Appuyez sur Entrée et répétez le calcul pour les deux partis politiques restants. Voici ce que vous devriez voir apparaitre.

[![Image 24](/assets/images/academy/module_4/Module_4_Photo_24.png)](/assets/images/academy/module_4/Module_4_Photo_24.png)

#### Calculer le pourcentage de candidats acceptés (%Accept)

Bien que nous ayons les chiffres totaux pour les candidats acceptés et rejetés pour les trois partis politiques d'Opendya, le calcul des pourcentages de validation et d’invalidation nous dira quelle est la part des candidats proposés par chaque parti politique qui a pu se présenter aux élections ou qui en a été empêcher. Compte tenu de ce que vous savez sur les totaux pour ces chiffres, prenez un moment et posez-vous les questions suivantes: quels pourcentages de validation vous attendez vous à trouver?

Commençons par calculer le pourcentage de candidats, par parti politique, acceptés par la commission électorale. Dans la colonne E,% Accept, de votre onglet Candidate_Summary, vous devrez utiliser une simple formule de division. Plus précisément, nous devrons diviser la colonne C, Tot_Accept, par la colonne B, Tot_Cand. Voici donc la logique mathématique pour ce calcul.

[![Formula 1](/assets/images/academy/module_4/Module_4_Formula_1.png)](/assets/images/academy/module_4/Module_4_Formula_1.png)

1\. Dans la cellule E2, tapez un signe égal \[=\]. Puis cliquez sur la cellule C2. Vous remarquerez qu'Excel ajoute automatiquement le terme "C2" à votre formule (listée dans la barre de formule) une fois que vous avez cliqué sur cette cellule. Vous pouvez aussi de manière alternative taper le terme "C2" et Excel créera automatiquement un lien avec cette cellule.

2\. Ensuite, tapez une barre oblique \[/\] qui indique à Excel que vous souhaitez diviser la cellule C2 par autre chose. Maintenant, cliquez sur la cellule B2 pour signifier à Excel que vous souhaitez diviser le contenu de la cellule C2 (candidats acceptés de Draconia) par la cellule B2 (nombre total de candidats potentiels proposés par Draconia).

[![Image 25](/assets/images/academy/module_4/Module_4_Photo_25.png)](/assets/images/academy/module_4/Module_4_Photo_25.png)

3\. Cliquez sur "Entrée" et Excel calculera pour vous le taux de validation des candidats pour Draconia. Quel est ce taux de validation?

4\. Répétez ce calcul pour les partis Shireling et Zalog. Voici ce que vous devriez trouver.

[![Image 26](/assets/images/academy/module_4/Module_4_Photo_26.png)](/assets/images/academy/module_4/Module_4_Photo_26.png)

Notez que si vos cellules n'ont pas été renseignées en pourcentages, vous devrez peut-être modifier la mise en forme des cellules. Cliquez sur la lettre "E" pour sélectionner la ligne entière. Faites un clic droit et sélectionnez "Format Cells".

[![Image 27](/assets/images/academy/module_4/Module_4_Photo_27.png)](/assets/images/academy/module_4/Module_4_Photo_27.png)

Sélectionnez "Percentage", ajustez les décimales comme vous le souhaitez et cliquez sur OK.

#### Calcul du pourcentage de candidats rejetés (% Reject)

Cette analyse est similaire à votre dernier calcul pour « % Accept ». Quelles colonnes pensez-vous devoir utiliser pour calculer le pourcentage de candidats rejetés? Nous espérons que vous avez deviné que ce sont bien les colonnes D et B, Tot_Reg et Tot_Cand!

Allez-y et faites ce calcul tout seul. Cliquez ici si vous avez besoin d'aide avec la formule.

[![Image 28](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_28.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_28.png)

Voici les réponses.

[![Image 29](/assets/images/academy/module_4/Module_4_Photo_29.png)](/assets/images/academy/module_4/Module_4_Photo_29.png)

#### Qu’est-ce que vous pouvez observer?

Vous venez de faire cinq calculs importants en matière d’enregistrement des candidats à Opendya! Quelles tendances remarquez-vous concernant le nombre de candidats présentés par chaque parti politique, le nombre / pourcentage de candidats acceptés et le nombre / pourcentage de candidats rejetés?

\[les réponses seront révéler après le basculement\]:

Résultats: Avez-vous remarqué que les candidats de l'opposition ont été rejetés à des taux plus élevés (en particulier le parti Shireling)? Avez-vous observé que dans l’ensemble le parti au pouvoir a présenté beaucoup plus de candidats?

## Analyser les décisions de l’enregistrement des candidats par sexe

#### A. Calculer les données par sexe des candidats

Comprendre la dynamique démographique par sexe des candidats proposés à Opendya (à la fois de ceux qui ont été acceptés et de ceux qui ont été rejetés) nous donnera une indication plus claire pour savoir si les partis sont représentatifs de la population hommes-femmes. Cela nous aidera également à comprendre si les hommes et les femmes ont une chance égale de se présenter aux élections par le biais du processus de l’enregistrement des candidats.

Nous commencerons par calculer les chiffres nets pour le nombre d'hommes et de femmes qui ont postulé comme candidats, qui ont été acceptés et qui ont été rejetés. Ensuite, nous aborderons le calcul de quelques pourcentages.

#### Nombre de femmes candidates par parti (nFem_Cand)

Dans la colonne G de votre onglet Candidate_Summary, nous allons calculer le nombre de femmes candidates potentielles proposées par chaque parti politique à Opendya.

De quelle formule avez-vous besoin pour réaliser ce calcul?

Si vous pensez à COUNTIFS, vous avez raison! Maintenant quelles sont vos « range »(plages) et « criteria » (critères)? Prenez un moment pour élaborer tout seul la formule, si vous avez besoin d’assistance cliquez ici.

Voici vos plages et critères pour effectuer le calcul:

- Range_1 : Party, column D, Candidate_Information tab
- Criteria_1 : Draconia (subsequently, Zalog and Shireling), cell A2, Candidate_Summary tab
- Range_2 : Gender, column B, Candidate_Information tab
- Criteria_2: “female”
  [![Image 30](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_30.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_30.png)

Une fois que vous avez fini de calculer le nombre total de femmes candidates pour tous les partis, vérifiez ci-dessous vos réponses.

[![Image 31](/assets/images/academy/module_4/Module_4_Photo_31.png)](/assets/images/academy/module_4/Module_4_Photo_31.png)

##### Nombre de candidates acceptées par parti (nFem_Accept)

Maintenant, nous allons calculer le nombre de candidates acceptées en fonction du parti politique. C'est votre premier calcul COUNTIFS où trois plages et critères différents sont requis. Vous allez compter des cellules en vous basant sur: 1) le parti politique, 2) le sexe, 3) la validation de la candidature.

1\. Répétez l'intégralité de votre formule pour la cellule G2, nFem_Cand, pour spécifier qu'Excel ne doit compter que les candidatures féminines pour Draconia. **Ne fermez pas vos parenthèses ou n’appuyez pas sur Entrée pour le moment!** Au lieu de cela, ajoutez une virgule \[,\] pour ajouter votre troisième plage et critères.

2\. Vous devez toujours spécifier que vous recherchez uniquement des candidats acceptés. Cliquez sur l'onglet Candidate_Summary et sélectionnez l'ensemble de la colonne E, «Decision». Tapez une virgule \[,\].

[![Image 32](/assets/images/academy/module_4/Module_4_Photo_32.png)](/assets/images/academy/module_4/Module_4_Photo_32.png)

3\. Maintenant ajouter votre critère final. Tapez « accepted » (avec les guillemets) dans votre barre de formule. Fermez vos parenthèses \[)\] et tapez Entrée. Succès! Vous avez réussi à maitriser la triple fonction COUNTIFS.

[![Image 33](/assets/images/academy/module_4/Module_4_Photo_33.png)](/assets/images/academy/module_4/Module_4_Photo_33.png)

4\. Répétez vos formules pour les partis politiques restants et vérifiez ci-dessous votre travail.

[![Image 34](/assets/images/academy/module_4/Module_4_Photo_34.png)](/assets/images/academy/module_4/Module_4_Photo_34.png)

#### Nombre de candidates par parti dont la candidature a été rejetée (nFem_Rej)

Maintenant que vous êtes devenu un pro dans l’utilisation de COUNTIFS, calculez le nombre de candidates rejetées pour chacun des trois partis. Cliquez ici si vous avez besoin d'un peu d'aide pour trier vos plages, vos critères ou vos formules.

Voici vos plages (range) et critères (criteria) pour effectuer ce calcul:

- Range_1 : Party, column D, Candidate_Information tab
- Criteria_1 : Draconia (en consequence, Zalog and Shireling), cellule A2, Candidate_Summary tab
- Range_2 : Gender, colonne B, Candidate_Information tab
- Criteria_2: “female”
- Range_3: Decision, colonne E, Candidate_Information tab
- Criteria_3: “rejected”
  [![Image 35](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_35.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_35.png)

Vérifiez vos réponses ici

[![Image 36](/assets/images/academy/module_4/Module_4_Photo_36.png)](/assets/images/academy/module_4/Module_4_Photo_36.png)

#### Nombre de candidats hommes par parti (nMale_Cand),

#### Nombre de candidats hommes acceptés par parti (Male_Accept), et

#### Nombre de candidats hommes rejetés par parti (nMale_Rej)

Nous pensons que vous maitrisez ces calculs! Repensez à vos calculs pour les colonnes G (nFem_Cand), H (nFem_Accept) et I (nFem_Rej), et effectuez les ajustements nécessaires dans les formules uniquement pour les candidats masculins. Cliquez ici pour obtenir un indice.

N'oubliez pas de modifier votre deuxième critère à "male" pour chaque calcul! C'est à peu près tout ce que vous devez changer.

Voici à quoi vos calculs doivent ressembler.

[![Image 37](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_37.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_37.png)

#### B. Calcul des pourcentages de candidats par sexe

Vous êtes presque à la ligne d'arrivée! Pour finir nous aimerions que vous calculiez les taux de validation et d’invalidation des candidats masculins et féminins à Opendya, pour tous les partis politiques. Cela nous donnera une idée de la façon dont les candidats masculins et féminins ont été acceptés et rejetés par la commission électorale.

#### Pourcentage de candidates par parti (% Fem_Cand)

Voici un calcul simple. Pour commencer, nous aimerions simplement connaître la répartition en pourcentage des candidats masculins et féminins pour chaque parti politique. Encore une fois, prenez un moment pour faire une estimation des pourcentages? En utilisant votre expérience et votre instinct, pensez-vous qu'il y aura un pourcentage plus élevé de candidats hommes ou femmes ? Avec quels champs de données pensez-vous que nous devrons travailler pour effectuer ces calculs?

Oui en effet, c’est Fem_Cand (colonne G) et colonne Tot_Cand (column B). Voici la logique.

[![Formula 2](/assets/images/academy/module_4/Module_4_Formula_2.png)](/assets/images/academy/module_4/Module_4_Formula_2.png) Cliquez ici si vous avez besoin d’aide pour utiliser cette formule

[![Image 38](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_38.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_38.png)

Quel est le pourcentage de candidats potentiels proposés par Draconia qui sont des femmes ? On espère que vous avez trouvé comme résultat 36%. Maintenant faites le même calcul pour les 2 autres partis politiques. Nous vous dévoilerons toutes les réponses après avoir calculer quelques pourcentages supplémentaires.

#### Pourcentage de candidates acceptées (%Fem_Accept)

Maintenant nous allons découvrir la proportion de candidates par parti qui ont été acceptées par la commission électorale.

Réfléchissez à ce calcul ou cliquez ici si vous avez besoin d’aide.

Divisez le nombre de candidates acceptées (colonne H, nFem_Accept) par le nombre de femmes candidates potentielles (colonne G, nFem_Cand)!

#### Pourcentage de candidates rejetées (%Fem_Rej)

Pareillement, essayons de voir quel pourcentage de femmes candidates potentielles ont vu leurs candidatures rejetées pour l’ensemble des partis politiques. Avant d’effectuer ce calcul, en sachant le pourcentage de femmes acceptées, quel sera selon vous le pourcentage de validation des candidats féminines?

Si vous avez besoin d’aide avec les calculs, cliquez ici.

Divisez le nombre de candidates acceptées (colonne I, nFem_Rej) par le nombre total de femmes qui ont soumis leurs candidatures à la commission électorale (colonne G, nFem_Cand)!

#### Pourcentage de candidats masculins par parti (%Male_Cand), pourcentage de candidats masculins acceptés (%Male_Accept), et pourcentage candidats masculins rejetés (%Male_Rej).

Effectuez les calculs pour vos trois dernières colonnes relatives aux candidats masculins en utilisant une logique similaire à vos calculs pour l'acceptation et le rejet des candidates. Pour rappel, vous calculez pour chaque parti politique la part des candidats masculins (% Male_Cand), le pourcentage de candidats masculins acceptés dans chaque parti (% Male_Accept) et le pourcentage de candidats masculins rejetés pour chaque parti (% Male_Rej).

Découvrez toutes vos réponses pour cette section du module ici!

[![Image 39](/assets/images/academy/module_4/Module_4_Photo_39.png)](/assets/images/academy/module_4/Module_4_Photo_39.png)

#### Qu’est-ce que vous pouvez observer?

YVous avez terminé un nombre impressionnant de calculs! Quelles types de tendances vous attendez vous à observer concernant les taux d'acceptation et de rejet des candidats masculins et féminins parmi les trois partis d'Opendya. Est-ce que vos attentes ont été confirmées? Qu'avez-vous trouvé de surprenant? Quelles tendances liées au genre dans le processus de l’enregistrement des candidats pouvez-vous observer en vous appuyant sur votre analyse?

Cliquez pour voir quelques résultats:

Résultats: Les femmes candidates étaient, à tous les niveaux, plus souvent rejetées.
