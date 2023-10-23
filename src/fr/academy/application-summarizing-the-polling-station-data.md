---
title: '3. Application: Synthétiser les Données du Bureau de Vote'
module_id: 3
excerpt: "Dans ce tutoriel, nous allons passer en revue les cinq grandes étapes du processus d'analyse des données. Ensuite, nous nous pencherons sur quelques conseils pour la manipulation des fichiers de données et les données. Enfin, en utilisant la liste des bureaux de vote à partir du module 1, nous verrons à travers un exercice pratique comment utiliser les fonctionnalités dans Excel pour résumer la variable des «Registered_Voters» (Electeurs Inscrits)."
---

Dans ce tutoriel, nous allons passer en revue les cinq grandes étapes du processus d'analyse des données. Ensuite, nous nous pencherons sur quelques conseils pour la manipulation des fichiers de données et des données. Enfin, en utilisant la liste des bureaux de vote à partir du module 2, nous verrons à travers un exercice pratique comment utiliser ce que vous avez appris dans le Module 1 pour synthétiser la variable «Registered_Voters» (Electeurs Inscrits).

## Les Cinq Grandes Etapes dans le Processus d'Analyse de Données:

### Etape 1 : Commencer avec une question ou un objectif précis.

Prenez le temps de réfléchir à pourquoi vous cherchez à étudier cet ensemble de données. Pensez à ce que vous vous attendez à voir et ce que vous ne vous attendez pas à voir dans les données. Forcez-vous à être précis sur votre objectif cela vous aidera à être beaucoup plus efficace sur les étapes suivantes du processus. Par exemple, voici quelques-unes des questions auxquelles nous pourrions avoir à répondre en regardant la liste des bureaux de vote du [Module 2](/fr/academy/reviewing-a-polling-station-list/):

- Est-ce que la liste des bureaux de vote apparait comme complète?
- Est-ce que la liste des bureaux de vote apparait comme correcte ou propre?
- Qu'est-ce qu'une quantité typique d'électeurs inscrits dans chaque bureau de vote? Quelle est la répartition?
- A quoi ressemble la répartition des bureaux de vote à travers les différentes zones géographiques?
- Est ce que ces distributions ont changé à travers le temps de liste en liste (si vous avez plusieurs listes)?
- Pouvez-vous utiliser la liste des bureaux de vote pour prélever un échantillon?

### Etape 2: Obtenir les Données

Maintenant que vous avez réfléchi à la raison qui vous a motiver pour commencez le processus d'analyse des données, il est temps d'obtenir les données dont vous avez besoin. Rappelez-vous de sauvegarder une copie intacte des données quelque part avant de commencer à faire quelque chose avec les données.

### Etape 3: Arranger et Nettoyer les Données

Les analystes de données expérimentés savent que 80% de l'ensemble du processus d'analyse des données s'effectue en convertissant, nettoyant et / ou reformatant des données. D'abord, vous devez examiner les données et essayer de déterminer si les s'il y a des données manquantes ou des erreurs dans les données. Ensuite, vous avez souvent besoin d'arranger les données en les amenant vers une structure plus cohérente. Par exemple, certaines ou toutes les variables pour chaque ligne peuvent être fusionnées dans la même colonne (par exemple, les données pour la ville et la province peuvent être inclus dans la même colonne, de sorte que vous auriez besoin de séparer les données de la ville et de la province en deux colonnes distinctes ). Les données peuvent ne pas être dans un format qui est analysable. Autrement dit, les données peuvent ne pas être lisibles à la machine, de sorte que vous pouvez avoir besoin de comprendre comment les convertir. Rappelez-vous du [Module 2](/fr/academy/reviewing-a-polling-station-list/) où les données des bureaux de vote de 2008 ont été initialement stockés dans plusieurs fichiers PDF. Nous avons converti les informations contenues dans ces fichiers dans un format lisible à la machine pour vous (par exemple, les fichiers CSV et XLS). Il se pourrait que vous ayez besoin de fusionner ou de joindre des données à partir de deux ensembles de données différents en un seul avant de pouvoir les analyser.

### Etape 4: Synthétiser les Variables qui vous Intéressent dans vos Données

Pour chaque variable d'intérêt, vous voulez être en mesure de répondre à: qu'est ce qui est typique pour ses données, et l'état de la répartition des données? Dans le [Module 1](/fr/academy/a-gentle-introduction-to-summarizing-data/), nous avons abordé la façon de calculer ce qui était typique (c.-à-d., centre ou moyenne) concernant la variable «taille» des animaux et la façon dont les données ont été réparties en utilisant l'écart type.

### Etape 5: Recommencer.

Le processus d'analyse de données est généralement un processus itératif. Une fois que vous avez terminé votre première approche pour synthétiser certaines variables, vous pouvez réaliser que vous avez besoin d'arranger les données (par exemple, les fusionner avec un autre ensemble de données) avant de pouvoir faire une analyse plus approfondie. Synthétiser les données peut vous conduire à un nouveau but dans l'analyse qui, à son tour, vous ramène vers le processus décrit plus haut.

Afin de maintenir ce module court et digeste, nous allons passer directement à l'étape 4 dans le processus d'analyse des données. Nous allons supposer que vous savez quels sont vos questions et objectifs spécifiques, vous avez les données, et vous les avez dans le bon format (vous êtes chanceux). Avant d'aborder l'exercice pratique, passons en revue quelques conseils pour la gestion des données.

## Des Astuces pour la Manipulation des Données

- Faites une copie de travail qui est séparée du fichier source avec les données d'origine intacts. Vous voulez vous assurer que vous pouvez toujours revenir en arrière et vérifier les données originales.
- Si vous utilisez un fichier de tableur, mettez vos calculs sur une feuille séparée ou un autre onglet à partir des données.
- Documenter les étapes de votre processus. Il en est ainsi vous pouvez recréer vos étapes et savoir où une formule a pu être mal appliquée. Cela vous permet également de savoir comment vous avez pu changer les données avant d'effectuer les calculs.
- Soyez très, très, très prudents lorsque vous utilisez la fonction «Trier des données». Assurez-vous que vous avez tout mis en surbrillance. Pour être sûr, ne jamais utiliser la fonction «Trier».
- Ne pas fusionner des cellules. Cela peut rendre les choses plus présentables, mais si vous avez besoin d'automatiser et / ou de réarranger les données (par exemple, changer la mise en page), fusionner cellules rendra les choses plus difficiles. Au lieu de ça, vous pouvez utiliser des couleurs et supprimer les bordures de cellules pour rendre les choses plus propres.

Maintenant que vous savez comment pratiquer une «bonne hygiène de données», nous allons réexaminer cette liste des bureaux de vote du [Module 2](/fr/academy/reviewing-a-polling-station-list/).

## Exercice Pratique: Examiner ou Réexaminer la Liste de Bureaux de Vote en utilisant Excel

Dans [le deuxième module de l'Académie de Données Electorales](/fr/academy/reviewing-a-polling-station-list/), nous avons examiné [une liste de bureaux de vote (au format XLS)]({{ site.url }}/\_assets/academy/exercise/Polling_Station_List_2008.xls). En théorie, le fichier est censé contenir la liste de tous les bureaux de vote dans un pays[^1]. Ouvrez le fichier et jetez à nouveau un oeil aux données. Lorsque vous les faites défiler, posez-vous ces questions:

- Est-ce qu'il y a quelque chose qui manque?
- Est-ce que les données sont structurées d'une manière logique?
- Que trouve-t-on dans chaque ligne?
- Que trouve-t-on dans chaque colonne?
- Est-ce que des cellules ont été fusionnées?

La première ligne du fichier contient le nom des variables. Il y a six variables dans cette série de données: «PS_Code» (Code_BV), «PS_Name» (Nom_BV), «Region_Name» (Nom_Région), «District_Name» (Nom_District), «Constituency_Name» (Nom_Circonscription) et «Registered_Voters» (Electeurs_Inscrits).

[![Image 1]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image1.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image1.png)

Ensuite, nous allons déterminer combien observations il y a dans cet ensemble de données. Pour ce faire, nous pouvons soit faire défiler vers le bas et soustraire 1 (pour la ligne avec les noms de variables):

[![Image 2]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image2.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image2.png)

Ou, nous pouvons mettre en évidence une colonne (par exemple, l'une des variables, comme électeurs inscrits et regardez en bas à droite de l'écran pour voir le nombre après «Numerical Count» («le Compte Numérique»). «Numerical Count» («Nb (nombre)») fait exactement ce que vous devinez, il ne compte que les nombres et ignore le texte.

[![Image 3]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image3.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image3.png)

Si, pour une raison quelconque, «Numerical Count» («Nb (nombre)») ne figure pas sur cette barre d'état en bas, faites un clic droit sur la barre et choisissez «Numerical Count» («Nb (nombre)») comme l'une des statistiques à afficher.

Il y a 20 928 observations pour la variable appelée «Registered_Voters» (Electeurs_Inscrits). Ensuite, nous allons nous concentrer sur cette variable de «Registered_Voters» (Electeurs_Inscrits).

### Vérifier vos Attentes: la variable «Registered_Voters» (Electeurs_Inscrits)

La Colonne F contient le nombre d'électeurs inscrits pour chaque bureau de vote (c.-à-d les ligne). Avant de synthétiser la variable «Registered_Voters»(Electeurs_Inscrits), prenons un moment pour réfléchir à ce que nous nous attendons à voir. Posez-vous quelques questions, telles que:

- Quelles sont les valeurs possibles que vous vous attendez à voir?
- Que pensez-vous que le centre, ou la moyenne sera?
- D'après vous, quel sera le plus petit nombre d'électeurs inscrits pour un bureau de vote?
- Vous attendez-vous à voir des observations avec un zéro? Vous attendez-vous à voir un nombre négatif?
- Quel est le plus grand nombre d'électeurs inscrits que vous vous attendez à voir pour un bureau de vote?
- Quelle est la valeur ou les valeurs qui ne sembleraient pas logiques ou paraitraient improbables? Est-ce qu'un nombre avec une décimale serait normal (par exemple, 12.5)? Qu'est-ce qui serait étrange?

### Utiliser Excel pour Décrire la Variable «Registered_Voters» (Electeurs Inscrits)

Si vous mettez en surbrillance la colonne avec la variable «Registered_Voters» (Electeurs_Inscrits) (colonne F), vous pouvez demander à Excel de calculer et de montrer automatiquement certaines valeurs pour les cellules mises en évidence / sélectionnées dans la barre d'état inférieure droite. Encore une fois, vous aurez peut-être à faire un clic droit sur cette barre et personnaliser les statistiques indiquées en vérifiant chacune.

[![Image 4]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image4.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image4.png)

Dans cette liste des bureaux de vote 2008, vous pouvez voir que le nombre moyen d'électeurs inscrits pour tous les bureaux de vote est 547,8 électeurs. Vous pouvez également voir que le nombre total de cellules remplies dans (ie, le «Count» «Le Nombre (non vide)») est 20 929. Excel peut aussi vous montrer que la valeur minimale pour les cellules en surbrillance est 1 et la valeur maximale est de 55 515. Excel a une formule individuelle pour calculer chacune de ces valeurs. Vous pouvez créer un nouvel onglet de feuille de calcul et insérer les différentes fonctions pour la moyenne («[average](https://support.office.com/en-nz/article/AVERAGE-function-08cc8ca2-0177-42f8-8750-a1e9ae9637a2)» «moyenne»), minimum («[minimum](https://support.office.com/en-in/article/MIN-function-6a4b0dd8-7853-474e-bf22-6014a60cfbd1)» «minimum»), maximum («[maximum](https://support.office.com/en-za/article/MAX-function-af0b7276-3817-4dbd-a0a4-ec915397dc7a)» «maximum»), count («[count](https://support.office.com/en-us/article/COUNT-function-47858132-8828-4041-8c5b-a5fb729bab6f)» «compte»), et l'écart type («standard deviation» «écart-type»). Nous l'avons fait pour vous, avec les données sur les tailles. Notez que l'écart type n'est pas l'une des options dans cette barre d'état inférieur, mais vous pouvez saisir la formule dans un autre onglet.

### Ou Utilisez l'Utilitaire d'Analyse et Demandez à Excel de Calculer toutes les Statistiques

Si vous avez le «Analysis Toolpak» («l'Utilitaire d'analyse») installé[^2], passez à l'onglet de Données où vous devez voir «Data Analysis» («Analyse des données») figurant à l'extrême droite.

[![Image 5]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image5.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image5.png)

A partir de ce menu, cliquez sur «Data Analysis» («Analyse des données»), ce qui fera apparaître une nouvelle fenêtre.

[![Image 6]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image6.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image6.png)

Dans la liste sous «Analysis Tools,» («Outils d'analyse»), choisissez «Descriptive Statistics» («Statistiques descriptives») puis cliquez sur «OK». Il fera apparaître un nouveau menu. Dans ce nouveau menu, cliquez sur la case à la droite de «Input Range:» («Plage d'entrée:»)

[![Image 7]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image7.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image7.png)

Maintenant, vous serez en mesure de sélectionner la plage que vous voulez décrire. Nous sommes intéressés par la variable «Registered_Voters» (Electeurs_Inscrits) qui est dans la colonne F. Donc, nous sélectionnons le haut de la colonne F pour sélectionner toute la colonne.

[![Image 8]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image8.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image8.png)

Ensuite, cliquez pour revenir sur cette case à droite de la plage d'entrée (![Input box]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/input_box.png){:class="img--inline"}).

[![Image 9]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image9.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image9.png)

Il vous ramènera à la fenêtre «Descriptive Statistics» («Statistiques descriptives»). Dans cette fenêtre, assurez-vous de cliquer sur la case à côté de «Labels in First Row» («Intitulés en première ligne») et cliquez sur la case à côté de «Summary Statistics.»(«Rapport détaillé.») Assurez-vous aussi que la «New Worksheet Ply»(«Insérer une nouvelle feuille») est sélectionnée de sorte qu'elle met vos statistiques sur une nouvelle feuille . Puis cliquez sur «OK».

[![Image 10]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image10.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image10.png)

Maintenant, il va vous montrer le nouvel onglet avec toutes les statistiques sommaires pour «Registered_Voters.» (Electeurs_Inscrits)

[![Image 11]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image11.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image11.png)

Compte tenu de ce que vous savez maintenant sur la moyenne, l'écart-type et l'étendue, comment décririez-vous la variable «Registered_Voters» (Electeurs_Inscrits)? Pensez-vous que la distribution est bien dispersée ou pensez-vous qu'elle est bien regroupée?

## Comparer les Statistiques Réelles aux Attentes

Maintenant que vous avez les statistiques sommaires pour la variable des «Registered_Voters» (Electeurs_Inscrits), comment voulez-vous répondre aux questions suivantes? Comment sont les réponses par rapport aux attentes que vous aviez au début?

- Avez-vous l'impression que quelque chose manque?
- Est-ce que les données sont structurées de manière logique?
- Qu'est-ce que l'on trouve dans chaque ligne?
- Qu'est-ce que l'on trouve dans chaque colonne?

[^1]: La liste est basée sur la liste des bureaux de vote au Ghana en 2008. Certains renseignements peuvent avoir été modifiés et ajustés pour mettre en évidence les concepts présentés ici.
[^2]: Pour l' installer, sélectionnez l'onglet Fichier, puis sélectionnez «Options» («Options») vers la fin de la liste à gauche. Dans la nouvelle fenêtre «Excel Options» («Options Excel»), sélectionnez «Compléments.» «Analysis Tookpak» («Analysis Tookpak») doit être répertorié. Cliquez pour mettre en surbrillance, puis cliquez sur «Atteindre» au bas de cette fenêtre. Une nouvelle fenêtre apparaitra appelée «Add-Ins.» («Macro-Complémentaires») Sous «Add-Ins Available» («Macro-Complémentaires Disponibles»), cliquez sur la case à côté de «Analysis Tookpak» («Analysis Tookpak») puis cliquez sur «OK». Maintenant, sous l'onglet «Data» (Données), vous devriez avoir «Data Analysis» («Analyse des données») doit apparaître comme une option à l'extrême droite.
