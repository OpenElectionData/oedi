---
title: '2. Examiner une Liste de Bureaux de Vote'
lang: fr
module_id: 2
permalink: '/academy/reviewing-a-polling-station-list/'
excerpt: "Dans ce tutoriel, nous allons nous pencher sur une liste de bureaux de vote. Après avoir eu une idée du contenu de ce type de données dans l'ensemble de données, nous allons utiliser Excel pour faire un tableau croisé dynamique afin que nous puissions explorer les données et, en particulier, pour déterminer le nombre de bureaux de vote et le nombre total des électeurs inscrits dans chaque circonscription."
---

Dans ce tutoriel, nous allons apprendre à explorer et donner un sens à une liste de bureaux de vote. Après avoir eu une idée du type de données contenues dans l'ensemble de données, nous allons utiliser un tableau croisé dynamique Excel pour explorer les données et, en particulier, pour déterminer le nombre de bureaux de vote et le nombre total d'électeurs inscrits dans chaque circonscription.

## Introduction

L'une des exigences fondamentales pour la préparation de l'observation le jour du scrutin est d'avoir accès à une liste complète et exacte de tous les bureaux de vote de votre pays avant le jour du scrutin. La liste doit avoir tous les bureaux où l'organisme de gestion électorale (OGE) tiendra des élections. Si vous faites de l'observation basée sur un échantillon comme le [Comptage Parallèle des Résultats (PVT en anglais)](https://www.ndi.org/pvt), alors vous tirez probablement votre échantillon de cette liste.

Parfois, les OGE publient des listes de bureaux de vote dans des formats qui créent une barrière pour l'analyse. Par exemple, si la liste du bureau de vote est partagée dans un format qui n'est pas analysable (lisible par machine), comme un document PDF, puis les données doivent être converties dans un format qui peut être analysé (comme un CSV, XLS ou format de fichier TXT). Cette conversion peut être effectuée par entrée manuelle de données ou par une procédure automatisée comme la rédaction d'un script ou en utilisant un ensemble de données en ligne outil comme [import.io](https://www.import.io/) ou [ScraperWiki](https://scraperwiki.com/). En fait, ces données étaient à l'origine de plusieurs documents PDF (par exemple, le fichier [PDF pour la région Ashanti](/files/academy/exercise/Ghana_Ashanti_example.pdf)) et nous les avons converties en un format lisible à la machine pour vous. Maintenant que nous avons la liste dans un format qui peut être lu et traité dans Excel (ou un autre programme d'analyse des données), nous sommes prêts à commencer notre analyse.

## Excel et l'Analyse des Listes

Actuellement, Excel est le logiciel d'analyse de données le plus omniprésent dans le monde et ce que nous allons utiliser pour ce tutoriel. Il peut traiter une quantité importante de données très rapidement et facilement, et manipulera nos 26 000 points de données. Dans cette analyse, nous allons utiliser Excel pour consulter la liste des bureaux de vote visuellement, puis analyser leur répartition par circonscription et par région en utilisant la fonction «tableau croisé dynamique», qui est une caractéristique d'Excel qui permet aux données d'être facilement regroupées en même temps sur la base de différents domaines et résumées dans une variété de façons. Les tableaux croisés dynamiques facilitent ainsi la manipulation et l'examen des données.

## Analyser les données de la liste des bureaux de vote

Jetons un oeil à un exemple d'une liste du bureau de vote dans un format analysable. Nous allons commencer par regarder la liste des bureaux de vote basée sur les élections de 2008 au Ghana. Télécharger [la Liste des Bureaux de Vote en 2008 en format Excel (XLS)](/files/academy/exercise/Polling_Station_List_2008_1.xls). Nous allons utiliser Excel pour créer un tableau croisé dynamique, mais voici le fichier PS 2008 en [Valeurs Séparées par des Virgules](/files/academy/exercise/Polling_Station_List_2008_1.csv) (Comma Separated Values format-CSV) et le [format Open Document (ODS)](/files/academy/exercise/Polling_Station_List_2008_1.ods) dans le cas où vous utilisez un programme différent. Maintenant que le document est enregistré et ouvert sur votre écran, regardons sur chaque ligne et colonne à partir d'en haut à gauche. La première ligne contient le nom des données ci-dessous.

### «PS_Code» (Code_BV)

Dans la colonne de gauche, vous verrez «PS_Code» (Code_BV) Pouvez-vous deviner ce que cela signifie?

[![Image 1](/assets/images/academy/reviewing-a-polling-station-list/image1.png)](/assets/images/academy/reviewing-a-polling-station-list/image1.png)

Qu'est-ce que «PS_Code» (Code_BV) signifie dans notre ensemble de données le Code du Bureau de Vote, ou l'identifiant unique pour chaque bureau de vote. Prenez une seconde pour faire défiler manuellement le document et remarquer la façon dont les bureaux de vote sont comptés.

Notez que le titre de la colonne («PS_Code») est répertorié comme une chaîne continue de lettres. Beaucoup de listes de bureaux de vote (et des ensembles de données électorales en général) sont exportées ou extraites de la base de données de l'OGE. Un des principes fondamentaux des bases de données est qu'il ne peut y avoir aucun espaces entre les lettres. Voilà pourquoi il y a un trait de soulignement entre le «PS» (BV) et «Code.» Bien qu'Excel soit capable de traiter les données avec des espaces, il est de bonne pratique d'étiqueter les titres des colonnes sans espaces.

### «PS_Name» (Nom_BV)

«PS_Name» (Nom_BV) se réfère, littéralement aux noms des bureaux de vote. Ceci est la colonne qui doit avoir le plus de sens pour les observateurs, et souvent cette colonne sera la plus utile pour les observateurs pour savoir où aller le jour du scrutin.

[![Image 3](/assets/images/academy/reviewing-a-polling-station-list/image3.png)](/assets/images/academy/reviewing-a-polling-station-list/image3.png)

Par exemple, regardez à la ligne 180, A00179; l'observateur, qui sera recruté parmi la circonscription d'Adansi Asokwa dans la province d'Adansi du Nord, deva savoir où l'Église Pentacostal Anitoa se trouve, puisque c'est l'un des endroits où les élections se tiendront.

[![Image 6](/assets/images/academy/reviewing-a-polling-station-list/image6.png)](/assets/images/academy/reviewing-a-polling-station-list/image6.png)

### «Region_Name» (Nom_Région)

Si vous faites défiler vers le bas l'ensemble de données, vous verrez que le titre de la colonne «Region_Name» (Nom_Région) a le moins de noms uniques parmi tous les groupes géographiques, ce qui en fait le plus grand niveau géographique disponible dans l'ensemble de données.

[![Image 12](/assets/images/academy/reviewing-a-polling-station-list/image12.png)](/assets/images/academy/reviewing-a-polling-station-list/image12.png)

### «District_Name» (Nom_District)

Après à la région, le district est la deuxième plus grande entité géographique dans cet ensemble de données.

[![Image 13](/assets/images/academy/reviewing-a-polling-station-list/image13.png)](/assets/images/academy/reviewing-a-polling-station-list/image13.png)

### «Constituency_Name» (Nom_Circonscription)

Dans cet exemple, les circonscriptions sont encore plus petites que les districts. Quand on regarde ces données dans un tableau croisé dynamique, nous verrons combien de circonscriptions sont dans cet ensemble de données par rapport aux districts et régions.

[![Image 2](/assets/images/academy/reviewing-a-polling-station-list/image10.png)](/assets/images/academy/reviewing-a-polling-station-list/image10.png)

### «Registered_Voters» (Electeurs_Inscrits)

Enfin, nous avons le nombre officiel d'électeurs inscrits assignés à chaque bureau de vote. Dans de nombreux endroits, il y a un nombre maximum d'électeurs pour chaque bureau. Dans certains pays, ce seuil ne représente pas plus de 700 électeurs. Dans d'autres pays, le nombre maximum dans les zones urbaines peut être de 1 000 électeurs inscrits ou plus. Des limites telles que celle-ci sont conçues pour rendre plus facile et plus gérable l'administration de l'élection en assurant qu'aucun bureau de vote n'est une trop grande affluence de telle manière qu'il empêcherait les électeurs de voter en raison d'une longue attente. Pour les données utilisées dans ce tutoriel, la limite est de 1000.

[![Image 7](/assets/images/academy/reviewing-a-polling-station-list/image7.png)](/assets/images/academy/reviewing-a-polling-station-list/image7.png)

## Faire un Tableau Croisé Dynamique pour Aider à Examiner les Données (Excel)

Faire un tableau croisé dynamique peut effectivement être la partie la plus facile de l'exercice. Comprendre comment manipuler les données, cependant, peut-être plus difficile. Les étapes suivantes sont conçues pour les utilisateurs Windows et présentent des captures d'écran à partir d'Excel 2010; si vous avez un Mac ou une version antérieure de Windows, l'interface peut varier.

#### 1\. Tout Sélectionner

Nous voulons sélectionner toutes les données dans cette fiche. Pour ce faire, cliquez dans la cellule A1 («PS_Code») et cliquez sur Ctrl + A (ie, maintenez la touche «Ctrl» tout en appuyant sur la touche «A» sur le clavier). Vous pouvez également cliquer sur le carré en haut à gauche avec le petit triangle

[![Image 4](/assets/images/academy/reviewing-a-polling-station-list/image4.png)](/assets/images/academy/reviewing-a-polling-station-list/image4.png)

#### 2\. Insertion du Tableau

Maintenant que toutes vos données sont sélectionnées, cliquez sur l'onglet «Insertion» dans le menu du haut, puis cliquez sur «Pivot Table» (Tableau Croisé Dynamique) sur la gauche. Une fenêtre apparaîtra avec la mention suivante: «Create Pivot Table» («Créer un tableau croisé dynamique»).

[![Image 11](/assets/images/academy/reviewing-a-polling-station-list/image11.png)](/assets/images/academy/reviewing-a-polling-station-list/image11.png)

Laissez les options par défaut et cliquez sur «OK», et Excel créera un nouveau tableau dynamique croisé dans une nouvelle feuille de calcul.

[![Image 2](/assets/images/academy/reviewing-a-polling-station-list/image2.png)](/assets/images/academy/reviewing-a-polling-station-list/image2.png)

#### 3\. Trier par Districts

Maintenant que vous avez un tableau dynamique croisé dans une nouvelle feuille de calcul, nous pouvons commencer à travailler avec les données. Sur la droite on trouve une fenêtre intitulée «Pivot Table Field List.» («Liste de Champ de Tableau Croisé Dynamique») Cliquez sur «District_Name» (Nom_District) et glissez / ajouter à la zone «Row Labels» («Étiquettes de ligne»). Tout sera trier par rapport aux valeurs listées dans le champ «District_Name» («Nom_District»). Vous pouvez remarquer que «District_Name» («Nom_District») est maintenant inscrit dans la fenêtre en bas à droite appelée «Row Labels» («Étiquettes de ligne») Si cela est fait correctement, nous aurons tous nos districts insérés dans la colonne A. Faites défiler et notez qu'il y a 223 lignes de noms de district et une rangée «total» en bas (le nombre total n'est pas encore montré cependant). Faites défiler jusqu'en haut. Ce qui nous permettra d'ajouter d'autres critères basés sur ces champs.

[![Image 14](/assets/images/academy/reviewing-a-polling-station-list/image14.png)](/assets/images/academy/reviewing-a-polling-station-list/image14.png)

#### 4\. Déterminer les bureaux de vote

Ensuite, nous allons voir combien de bureaux de vote il y a dans chaque district. Prenez «PS_Code» («BV_Code») sur la droite et faites glisser et déposez-le dans la section «Values» («Valeurs») sur le bas. Si tout va bien, le tableau dynamique devrait montrer par défaut le total de toutes les cellules qui ont une valeur pour «PS_Code» («BV_Code») dans chaque district. Vous pouvez le vérifier en plaçant le pointeur de la souris sur les valeurs de la colonne B, et une note doit énoncer «Count of PS_Code» («Nombre de BV_Code») Notez que maintenant «Count of PS_Code» («Nombre de BV_Code») est listé dans la fenêtre en bas à droite sous «Values.» («Valeurs»). Si vous l'avez fait correctement, il doit afficher 407 pour Ablekuma, 91 pour Abura / Asebu / Kwamankese et ainsi de suite. Voir ci-dessous.

Si au contraire, vous ne disposez que de zéros au niveau des totaux de la colonne B, alors nous avons besoin de demander à Excel de compter le nombre de différents codes / lignes. Au lieu de cela, Excel tente de résumer les valeurs dans cette colonne, et, comme c'est un champ de texte, les sommes sont tous nuls. Pour vous assurer que Excel compte les champs (au lieu de les additionner), nous avons besoin d'aller à «Sum of PS_Code» («Somme des Code_BV») dans la fenêtre des valeurs et cliquez sur la flèche pointant vers le bas. Cela nous donnera une fenêtre où nous avons besoin de cliquer sur «Value field settings,» («paramètres des champs de valeurs»), et nous aurons une nouvelle fenêtre. Sous «Summarize Value Field By» («Résumer le Champ de Valeur par») choisir «Count» («Compter») Si vous l'avez fait correctement, il doit afficher 407 pour Ablekuma, 91 pour Abura / Asebu / Kwamankese et ainsi de suite. Voir ci-dessous.

[![Image 8](/assets/images/academy/reviewing-a-polling-station-list/image8.png)](/assets/images/academy/reviewing-a-polling-station-list/image8.png)

Maintenant, vous savez comment faire un tableau croisé dynamique dans Excel!

#### 5\. Déterminer les électeurs inscrits par district

Maintenant, nous allons avoir une idée de combien d'électeurs inscrits sont dans chaque district. Cliquez et faites glisser «Registered_Voters» (our vous assurer qu' Excel additionne les champs des «Registered_Voters» («Electeurs_Inscrits») dans la zone de valeurs. Ce que nous voulons est la somme de toutes les valeurs pour le nombre d'électeurs inscrits. Cependant, Excel peut peut-être montrer le «Count of Registered_Voters» («Nombre des Electeurs Inscrits») (vous le savez, car il liste les mêmes numéros dans la colonne C que sont énumérés dans la colonne B pour «Count of PS_Code» («Compte des Code_BV»). Pour vous assurer qu' Excel additionne les champs des «Registered_Voters» («Electeurs_Inscrits») (au lieu de compter les lignes individuelles), nous avons besoin d'aller à «Count Registered_Voters» («Nombre des Electeurs Inscrits») dans la fenêtre «Values» («Valeurs») en bas à droite de l'écran, puis cliquez sur la flèche pointant vers le bas. Cela nous donnera une fenêtre où nous pouvons cliquer sur «Value field settings,» («paramètres de champ de valeur»), et nous aurons une nouvelle fenêtre. Sous «Summarize Value Field By» («Résumer le Champ de Valeur par») choisir «Sum» (Somme). Excel résumera le nombre d'électeurs inscrits dans chaque district et affichera les grands nombres que vous pouvez voir ci-dessous.

[![Image 9](/assets/images/academy/reviewing-a-polling-station-list/image9.png)](/assets/images/academy/reviewing-a-polling-station-list/image9.png)

#### 6\. Déterminer la proportion d'électeurs inscrits par district

Enfin, nous allons voir ce que représente la répartition des pourcentages d'électeurs inscrits dans les districts. Cela impliquera de répéter certaines des mêmes étapes de l'étape 5, ci-dessus. D'abord, ajouter à nouveau «Registered_Voters» (our vous assurer qu' Excel additionne les champs des «Registered_Voters» («Electeurs_Inscrits») dans le champ valeurs. Aller sur la ligne «Count of Registered_Voters» («Nombre des Electeurs Inscrits») dans la fenêtre «Valeurs» en bas à droite et cliquez sur la flèche pointant vers le bas. Ensuite, cliquez sur les «Value field settings» («paramètres des champs de valeur») pour obtenir la nouvelle fenêtre. Sous «Summarize Value Field By» («Résumer le Champ de Valeur par») choisissez («Sum») «Somme» et puis cliquez sur l'onglet «Show values as» («Afficher les valeurs comme»). Sur la liste déroulante, choisissez «show values as percentage (%) of column total» («Afficher les valeurs en pourcentage (%) du total de la colonne») puis cliquez sur «OK». Maintenant vous avez le nombre d'électeurs inscrits dans chaque district, exprimé en pourcentage du nombre total d'électeurs inscrits globaux.

[![Image 5](/assets/images/academy/reviewing-a-polling-station-list/image5.png)](/assets/images/academy/reviewing-a-polling-station-list/image5.png)

## Utiliser un Tableau Croisé Dynamique pour Examiner les Données

L'utilisation d'un tableau croisé dynamique est un moyen très facile d'examiner un grand nombre de données très rapidement. Toutefois, si de mauvaises données sont utilisées pour alimenter le tableau croisé dynamique, nous aurons encore des problèmes. En tant qu'analyste, il est de votre devoir de consulter les données pour vous assurer qu'elles sont logiques et précises, ou que les données soient les plus «propres» possibles.

Par exemple, regardez les lignes 147 et 148 sur votre tableau croisé dynamique. Vous pouvez voir que dans 147, il y a un district appelé Moagduri et sur la ligne 148 un autre appelé Moagdurii. Est-ce juste une coïncidence? Probablement pas. Lorsque vous revenez en arrière et observer la feuille de données brutes et faites défiler jusqu'à la ligne 14127, vous pouvez voir que les changements du nom de district avec Moagdurii avec deux «i». Si nous regardons plus loin sur les données «Moagduri» et «Moagdurii,» nous voyons que le même code de bureau de vote continue, les deux sont dans la même région et circonscription et ont des nombres très similaires d'électeurs inscrits. Ainsi, nous pouvons soupçonner que l'OGE a simplement mal orthographié le nom du district dans sa base de données. À ce stade, en tant qu'analyste, vous voulez vérifier avec un collègue ou toute autre personne qui connaît la situation plus en détail, et vérifier doublement les données.

## Qu'est-ce que vous pouvez voir?

Jetez un oeil au tableau croisé dynamique et répondez aux questions suivantes:

1.  Quels sont les 3 districts qui ont le plus grand nombre d'électeurs inscrits?
2.  Quels sont les 3 districts qui ont le nombre le plus bas d'électeurs inscrits?
3.  Question Bonus: Observez la liste originale. Est ce qu'il y a un élement qui vous semble étrange? (à part le cas des noms des districts Moagduri/Moagdurii)?
