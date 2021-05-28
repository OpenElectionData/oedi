---
title: '5. Évaluer les tendances géographiques et l’aspect genre dans l&#39;inscription des électeurs'
lang: fr
module_id: 5
permalink: '/academy/evaluating-gender-and-geographic-trends-in-voter-registration/'
excerpt: "During this tutorial, you’ll practice basic data analysis with voter registration information. We’d like you to improve your ability to:
<ul><li>utilize basic operators in Microsoft Excel (including calculating sums, differences and percentages),</li>
<li>employ the SUMIF function in Excel, and</li>
<li>explore political considerations of the data you have analyzed.</li></ul>"
---

## Résumé

Au cours de ce tutoriel, vous vous exercerez à l’analyse de données basiques à partir d’informations sur l’inscription des électeurs. Nous souhaitons que vous amélioriez votre capacité à:

- utiliser les opérateurs de base dans Microsoft Excel (y compris le calcul des sommes, des différences et des pourcentages),
- utiliser la fonction SUMIF dans Excel, et
- Explorer les implications politiques des données que vous avez analysées.

## Pourquoi s’intéresser aux données d'inscription des électeurs?

Comme nous le mentionnons dans le [Guide des données électorales](https://openelectiondata.net/fr/guide/), un processus équitable [d'inscription des électeurs](http://openelectiondata.net/fr/guide/key-categories/voter-registration/) favorise l'égalité politique et encourage activement l'inclusion des électeurs admissibles. Lorsque le processus d'inscription des électeurs est équitable et transparent, il peut accroître la légitimité d'une élection. Alternativement, lorsque le processus d'inscription des électeurs est mal exécuté ou ne prévoit pas une participation équitable, il peut générer des doutes sur la légitimité d'une élection dans son ensemble.

Les organisations de la société civile utilisent souvent les statistiques d'inscription des électeurs pour déterminer si le processus global était juste et inclusif. Les modules 5-7 amélioreront votre capacité à réaliser ce type d’analyse importante.

## Bon retour à Opendya!

Pour cet exercice, nous retournons à Opendya. Vous avez été en mesure d'obtenir une série de données sur l’inscription des électeurs compilées par la Commission électorale, qui indique le nombre d'électeurs inscrits par circonscription. Avant d’examiner les données, voici quelques antécédents politiques supplémentaires que vous devriez connaître:

- Opendya a eu des élections nationales en 2010 et 2014.
- La capitale d'Opendya se trouve dans la circonscription de la ville d'Opa (code du district: 47), qui contient un mélange de zones urbaines et rurales.
- Depuis les élections de 2010, un conflit violent a éclaté dans deux circonscriptions: Conflicteri (code de district: 9) et Disputana (code de district: 23).
- En prévision des élections de 2014, la Commission électorale d'Opendya a procédé à un exercice de 5 semaines pour actualiser la liste d’inscription des électeurs en ajoutant de nouveaux électeurs aux listes existantes.

Vous avez maintenant le contexte en tête, nous pouvons désormais observer les données. **Téléchargez les données d'inscription des électeurs d'Opendya [ici](/assets/academy/exercise/Module_5_Voter_Registration_Data.xlsx)**. Vous aurez besoin de ce fichier pour compléter l'exercice.

### Revoir les données d’inscription des électeurs

Nous allons nous familiariser avec les données d'inscription d'Opendya en examinant le contenu de chaque colonne du fichier que vous venez de télécharger. Pour l'instant, nous allons simplement examiner l'onglet Registration_Data de votre fichier. (Ignorez l'onglet Data_Summary jusqu'à la deuxième partie de ce module.)

#### District_Name

La colonne à l'extrême gauche contient les noms de toutes les circonscriptions d'Opendya. Notez que c'est l’unique niveau géographique fourni pour l'ensemble des données. À ce stade, nous n'avons aucune autre indication quant à savoir si ces circonscriptions sont proches les unes des autres ou s'ils relèvent, à un niveau supérieur, des mêmes unités géographiques.

[![Image 1](/assets/images/academy/module_5/Module_5_Photo_1.png)](/assets/images/academy/module_5/Module_5_Photo_1.png)

Faites défilez jusqu’à la fin des données pour découvrir le nombre de circonscriptions à Opendya.

[![Image 2](/assets/images/academy/module_5/Module_5_Photo_2.png)](/assets/images/academy/module_5/Module_5_Photo_2.png)

#### District_Code

La Commission électorale d'Opendya attribue également à chaque circonscription un code ou un identifiant unique. Prenez une seconde pour faire défiler le fichier et observez la façon dont les circonscriptions sont numérotées. (C’est facile!)

Comme nous l'avons mentionné dans le [Module 2: Examiner une liste de bureaux de vote](https://openelectiondata.net/fr/academy/reviewing-a-polling-station-list/), les identifiants uniques sont extrêmement utiles pour traiter un ensemble de données. Ils nous aident à identifier les doublons et / ou à distinguer correctement les unités ayant des noms similaires.

[![Image 3](/assets/images/academy/module_5/Module_5_Photo_3.png)](/assets/images/academy/module_5/Module_5_Photo_3.png)

#### Type

Le « Type » indique les caractéristiques des districts d’Opendya. Vérifiez les données pour examiner les descriptions utilisées pour identifier le type de circonscription. Quels sont les différents types de circonscriptions que vous pouvez observer?

[![Image 4](/assets/images/academy/module_5/Module_5_Photo_4.png)](/assets/images/academy/module_5/Module_5_Photo_4.png)

Il y a trois types de circonscriptions dans cet ensemble de données : « urban », « rural » et « capital district »

#### 2010_Registered

On a mentionné précédemment qu’Opendya avait tenu des élections nationales en 2010. Cette série de données inclue le nombre total d’électeurs inscrits quand l’élection a été organisée. On peut utiliser la colonne 2010_Registered pour comparer les chiffres des inscriptions entre les différents cycles électoraux.

[![Image 5](/assets/images/academy/module_5/Module_5_Photo_5.png)](/assets/images/academy/module_5/Module_5_Photo_5.png)

#### Reg_Week1, Reg_Week2, Reg_Week3, and Reg_Week4

Nous avons mentionné que la Commission électorale d'Opendya a entrepris en 2014 et pendant cinq semaine une actualisation de l'inscription des électeurs. Les quatre colonnes suivantes - Reg_Week1, Reg_Week2, Reg_Week3 et Reg_Week4 - nous fournissent le nombre total d'électeurs inscrits à la fin de quatre des cinq semaines de l'exercice de mise à jour réalisée en 2014. La différence entre chaque semaine nous donne le nombre de nouveaux électeurs qui se sont inscrits pendant l'exercice.

Ces chiffres peuvent nous indiquer comment la Commission électorale s'est comportée au fil du temps et peuvent mettre en évidence les pics ou les baisses enregistrées dans certaines circonscriptions et / ou à des moments spécifiques. Vous travaillerez avec ces colonnes pour compléter le module 6, mais vous n'en aurez pas besoin pour le module 5.

[![Image 6](/assets/images/academy/module_5/Module_5_Photo_6.png)](/assets/images/academy/module_5/Module_5_Photo_6.png)

#### Reg_Tot_Final

La colonne Reg_Tot_Final fourni le nombre total d’électeurs enregistrés par district après la fin des 5 semaines d’actualisation des listes en 2014. Notez que la différence entre Reg_Week4 et Reg_Tot_Final correspond aux électeurs qui se sont inscrits durant la cinquième et dernière semaine de la période d’actualisation des inscriptions.

[![Image 7](/assets/images/academy/module_5/Module_5_Photo_7.png)](/assets/images/academy/module_5/Module_5_Photo_7.png)

#### Final_Female, Final_Male

Ici, nous pouvons déterminer combien d’hommes et de femmes sont inscrits pour voter dans chaque circonscription pour les élections de 2014. Vous pouvez également observer que nous avons seulement les chiffres finaux des hommes et femmes inscrits comme électeurs, plutôt que les chiffres d’inscrits par semaine.

[![Image 8](/assets/images/academy/module_5/Module_5_Photo_8.png)](/assets/images/academy/module_5/Module_5_Photo_8.png)

Maintenant que nous connaissons nos données, nous pouvons nous lancer dans l’analyse.

### Analyser les données d’inscription par district

Il y a beaucoup d'analyses intéressantes que vous pouvez faire avec cet ensemble de données sur l’inscription des électeurs. Considérant les types de données dont vous disposez, quels sont les trois calculs possibles que vous pourriez effectuer pour illustrer les tendances du processus d'inscription des électeurs d'Opendya?

Cherchez les réponses possibles et commencer vos propres calculs d'inscription des électeurs sur la page suivante!

#### A. Comparaison des chiffres des inscriptions entre 2010 et 2014

Voyons maintenant combien de nouveaux électeurs ont été ajoutés aux listes d'Opendya entre les élections de 2010 et de 2014. Pour ce faire, nous devrons effectuer deux calculs différents.

##### **Calcul de la différence entre les électeurs inscrits en 2010 et en 2014**

Dans un premier temps, nous voulons voir combien d'électeurs en plus ont été inscrits par circonscription en 2014 par rapport à 2010. Cela nécessitera une simple soustraction dans Excel, qui nous fournira la différence entre les électeurs inscrits entre ces deux cycles électoraux d'Opendya.

Nous avons pré-étiqueté les colonnes à utiliser pour les calculs dans l'onglet Registration_Data. Nous commencerons par utiliser la colonne L, "Caclulated_nRV_incr_from_2010". Nous ne travaillons pas encore avec les pourcentages; nous voulons simplement savoir combien de personnes sont enregistrées par district. Avant de commencer, à votre avis avec quelles colonnes devons-nous travailler pour effectuer ce calcul?

Maintenant, nous pouvons commencer!

1\. Nous devons soustraire la colonne D "2010_Registered" de la colonne J "Reg_Tot_Final." Pour ce faire, tapez un signe égal \[=\] dans la cellule L2. Cela indiquera à Excel que vous tapez une formule. Puis cliquez sur la cellule I2 (total des électeurs inscrits à Legosakool). Vous remarquerez qu'Excel ajoute automatiquement le terme "I2" à votre formule (listée dans la barre de formule) une fois que vous avez cliqué sur cette cellule. Ici, vous êtes en train de faire le lien avec le calcul dans la cellule L2 avec le contenu de la cellule I2. Alternativement, vous pouvez simplement taper le terme "I2" et Excel fera automatiquement le lien avec cette cellule.

2\. Tapez un signe moins \[-\] qui indique à Excel que vous souhaitez soustraire un montant de la cellule L2.

3\. Enfin, cliquez sur la cellule D2 (le nombre d'électeurs inscrits à Legosakool à partir de 2010).

[![Image 9](/assets/images/academy/module_5/Module_5_Photo_9.png)](/assets/images/academy/module_5/Module_5_Photo_9.png)

4\. Appuyez sur Entrée et votre calcul devrait apparaître! A Legosakool (la circonscription que vous venez de calculer), quelle est la différence entre le nombre d'électeurs inscrits en 2010 et 2014?

5\. Vous voulez maintenant qu'Excel effectue le même calcul pour les inscriptions dans chacun des 46 circonscriptions restantes d'Opendya. Heureusement, vous n'avez pas besoin de taper votre formule 46 fois de plus! Passez votre souris sur le coin inférieur droit de la cellule L2; il devrait y avoir un petit carré sur la photo. Notez que votre souris changera légèrement de forme en survolant le bon endroit.

[![Image 10](/assets/images/academy/module_5/Module_5_Photo_10.png)](/assets/images/academy/module_5/Module_5_Photo_10.png)

Double-cliquez sur le carré dans le coin en bas à droite de la cellule L2 et voilà! Toute la colonne L devrait se remplir automatiquement avec le même calcul que vous avez tapé dans la colonne L2. Excel est intelligent et sait que vous souhaitez extraire le calcul des données d'une ligne différente à chaque fois, par exemple, si vous cliquez sur la cellule L8 (District de Goro) vous remarquerez que la barre de formule indique "= I8-D8". Ces calculs possèdent la même structure que votre formule originale de soustraction, mais correspondent maintenant à chacune des différentes circonscriptions d'Opendya. Cliquez quand même sur quelques lignes différentes dans la colonne L pour vous assurer qu'Excel a fait ce que vous vouliez.

Vous connaissez maintenant la différence entre les électeurs inscrits entre 2010 et 2014 pour l'ensemble des 47 circonscriptions d'Opendya!

[![Image 11](/assets/images/academy/module_5/Module_5_Photo_11.png)](/assets/images/academy/module_5/Module_5_Photo_11.png)

##### **Calcul du pourcentage d'augmentation de l’inscription entre 2010 et 2014**

Nous avons maintenant des chiffres sur la manière dont le nombre d'électeurs a augmenté dans les circonscriptions d'Opendya entre 2010 et 2014. Cependant, nous devons calculer quelques pourcentages afin de donner plus de sens à ces chiffres. Connaître le «pourcentage d'augmentation» du nombre d'électeurs inscrits dans chaque district entre 2014 et 2010 nous donnera une meilleure idée de la façon dont les circonscriptions ont augmenté, en tenant compte de leurs tailles respectives, leurs parts d'électeurs inscrits.

Vous devrez à nouveau utiliser votre connaissance des opérateurs de base dans Excel pour effectuer ce calcul. Repensez au dernier calcul que vous avez effectué. Nous utiliserons la colonne M pour ce prochain calcul, intitulée «Calculated\_% RV_incr_from_2010». Réfléchissez au calcul que nous devons effectuer. Pour calculer le pourcentage d'augmentation des électeurs inscrits entre 2010 et 2014, quelles colonnes de l'ensemble de données pensez-vous devoir utiliser?

Pour ce calcul, nous devons utiliser la colonne L "Calculated_nRV_incr_from_2010", que vous venez de calculer, et la colonne D "2010_Registered".

[![Image 1](/assets/images/academy/module_5/Module_5_Formula_1.png)](/assets/images/academy/module_5/Module_5_Formula_1.png)

1\. Maintenant, tapez notre formule dans la cellule M2. Comme pour votre dernier calcul, vous commencerez par taper un signe égal \[=\] (qui précédera TOUS vos futurs calculs Excel).

2\. Ensuite, cliquez sur la cellule M2 (différence entre les électeurs enregistrés de 2010 et 2014 à Legosakool).

3\. Type a forward slash, \[/\], which indicates division. You just told Excel that you want to divide the contents of cell M2 by something else.

4\. Cliquez sur la cellule D2 (électeurs inscrits en 2010 à Legosakool). Appuyez sur Entrée pour afficher le résultat de l’augmentation en pourcentage.

[![Image 12](/assets/images/academy/module_5/Module_5_Photo_12.png)](/assets/images/academy/module_5/Module_5_Photo_12.png)

5\. Est-ce que vous vous souvenez comment demander à Excel de reproduire votre calcul entre les lignes? Si vous vous en souvenez allez-y sinon cliquez ici!

Double cliquez sur le coin droit en bas de la cellule M2!

[![Image 13](/assets/images/academy/module_5/Module_5_Photo_13.png)](/assets/images/academy/module_5/Module_5_Photo_13.png)

L'image ci-dessus illustre à quoi vos données doivent ressembler. Cependant, si votre colonne entière est remplie par des "0 et des 1", cela signifie que votre colonne est formatée en "nombre" sans décimales. Pour afficher votre calcul, vous devez ajouter des décimales ou reformater les cellules de la colonne O en pourcentages.

Pour reformater vos cellules, cliquez en haut de la colonne O pour sélectionner la colonne entière. Faites un clic droit et sélectionnez le symbole "%". Sinon, faites un clic droit, sélectionnez " Format Cells ", puis sélectionnez " Percentage" dans le menu de gauche de la fenêtre.

[![Image 14](/assets/images/academy/module_5/Module_5_Photo_14.png)](/assets/images/academy/module_5/Module_5_Photo_14.png)

##### **Que voyez-vous?**

Maintenant que nous avons calculé le pourcentage d'augmentation des électeurs inscrits entre 2010 et 2014, prenez le temps de parcourir les données.

1\. Quels sont les trois circonscriptions ayant le plus faible pourcentage d'augmentation des taux d'inscription? Quels sont les types de circonscriptions concernés?

2\. Quels sont les trois circonscriptions ayant le pourcentage le plus élevé d'augmentation des taux d'inscription? Quels sont les types de circonscriptions concernés?

#### B. Vérifier l'égalité des sexes dans l’inscription des électeurs

Un processus d'inscription des électeurs organisé de manière crédible comprend la participation active et l'inscription des électeurs masculins et féminins. Une analyse attentive des données d'inscription des électeurs devrait donc inclure une enquête sur la composition par sexe de la population des électeurs inscrits (lorsque ces données sont disponibles - ce qui devrait être le cas!).

Pour avoir une meilleure idée de la répartition par sexe, calculons le pourcentage d'électeurs inscrits en 2014 et le pourcentage d'hommes. Nous utiliserons à nouveau la division de base dans Excel.

##### **Calcul du pourcentage d'électrices**

1\. La colonne N contiendra nos calculs sur le pourcentage d’électrices dans chacun des 47 circonscriptions d'Opendya. Appelons-le "Calculated\_% female".

2\. Prenez un moment pour déterminer les colonnes que vous devrez diviser pour effectuer ce calcul. Gardez bien à l'esprit que nous sommes intéressés par les électrices après l'exercice d’actualisation de 2014.

Si vous avez pensé à la colonne J "Final_Female" et la colonne I "Reg_Tot_Final", vous avez raison!

[![Image 2](/assets/images/academy/module_5/Module_5_Formula_2.png)](/assets/images/academy/module_5/Module_5_Formula_2.png)

3\. C’est l’heure d’utiliser notre division ! Sur Excel, calculez le pourcentage d’électrices inscrites dans la cellule C2 (Legosakool District). Cliquez ici si vous souhaitez voir la capture d’écran qui montre à quoi doit ressembler votre formules.

_\* N’oubliez pas d’appuyer sur entrée après avoir taper votre calcul._

[![Image 15](/assets/images/academy/module_5/Module_5_Photo_15.png)](/assets/images/academy/module_5/Module_5_Photo_15.png)

4\. Après avoir calculé le pourcentage d’électrices à Legosakool, demandez à Excel de répéter le même calcul pour les 46 circonscriptions restantes d’Opendya.

##### **Calcul du pourcentage d'électeurs masculins**

Maintenant, pour le pourcentage d'électeurs masculins. Créez une nouvelle colonne et utilisez la colonne K «Final_Male» et les étapes présentées ci-dessus comme guide pour calculer le pourcentage d'électeurs masculins inscrits dans chaque district en 2014.

##### **Que voyez-vous?**

Faites défiler vers le bas pour jeter un coup d'œil à vos deux nouvelles colonnes de données.

1\. Comment comparez-vous les taux d'inscription des hommes et des femmes en un coup d'œil?

2\. Y a-t-il des circonscriptions qui apparaissent avec des pourcentages particulièrement élevés ou faibles d'électeurs ou d’électrices?

3\. Compte tenu de ce que vous savez sur Opendya, qu'est-ce qui pourrait expliquer ces tendances?

### Analyser les données des inscriptions par type de district

#### C. Évaluer les tendances globales d'inscription selon le type de district

Est-ce que vous vous rappelez de la colonne C "Type" dans l'onglet Registration_Data de notre ensemble de données? Cette colonne indique si une circonscription est urbaine, rurale ou une circonscription de la capitale. Nous utiliserons la colonne C pour vérifier s'il existe des tendances ou des différences dans la façon dont les électeurs d'Opendya provenant de différents types de circonscriptions ont pu s'inscrire. Ce type d'analyse peut révéler des tendances sociopolitiques qui pourraient avoir une incidence sur la crédibilité d'un processus électoral.

En somme, nous allons faire le type d'analyses suivantes:

- Calculer les chiffres d'inscriptions de base (sommes et pourcentages) pour les circonscriptions urbaines, les circonscriptions rurales et la circonscription de la capitale.
- Analyser les tendances des inscriptions et jauger leurs ramifications politiques.

##### **Consulter l'onglet Data_Summary**

Pour cette partie du module, nous allons commencer à utiliser l'onglet Data_Summary dans votre fichier Excel. Cet onglet pourra extraire un résumé des calculs basés sur les données de l'onglet Registration_Data. Cela ressemble à ceci:

[![Image 16](/assets/images/academy/module_5/Module_5_Photo_16.png)](/assets/images/academy/module_5/Module_5_Photo_16.png)

Vous utiliserez les colonnes A à E pour compléter le module 5 et les colonnes allant de F à O pour le module 6. Pour accélérer les choses, nous avons de nouveau pré-rempli toutes vos en-têtes de colonne pour vous, qui contiendront tous les différents calculs que vous aurez à réaliser. Ne soyez pas intimidé, ce sera un jeu d'enfant!

##### **Utilisation de SUMIF pour ajouter des données dans une catégorie spécifique**

Pour le reste de ce module, nous allons commencer à utiliser une fonction Excel appelée [SUMIF](https://support.office.com/fr-fr/article/fonction-somme-si-169b8c99-c05c-4483-a712-1697a653039b?ui=fr-FR&rs=fr-FR&ad=FR). La fonction SUMIF est utilisée pour ajouter des valeurs dans une plage spécifique de cellules répondant aux critères que vous recherchez. Pour nos besoins, nous utiliserons SUMIF pour additionner les chiffres des électeurs inscrits spécifiquement pour les circonscriptions urbaines, les circonscriptions rurales et la circonscription de la capitale. Vos nouvelles compétences avec SUMIF s'appuieront sur ce que vous avez appris en utilisant les formules COUNTIF du [Module 4: Détecter des biais dans la validation des candidatures électorales](https://openelectiondata.net/fr/academy/detecting-bias-in-ballot-qualification/).

Voici comment la formule est structurée: SUMIF (range, criteria, \[sum_range\])

- **Range**: « range » spécifie la zone des cellules que vous souhaitez évaluer selon vos critères spécifiques. Pour nos besoins, nous additionnons les données en fonction du type de circonscription. Puisque le "type de district" est notre critère, quelle colonne de votre fiche technique pensez-vous devoir utiliser pour notre « range »? Quelle est la colonne à consulter pour avoir des informations sur le type de circonscription? (Réponse = Colonne C, Type)
- **Criteria**: Vos critères indiqueront si un nombre doit être additionné ou non. Les critères peuvent prendre la forme d'un nombre, d'une expression, d'une référence de cellule, d'un texte ou d'une fonction qui définit les cellules qui seront ajoutées. Pour cet exercice, vous devrez choisir parmi trois critères différents \[circonscription urbaine, rurale et circonscription de la capitale\] et demander à Excel d'ajouter les numéros d'inscription des électeurs des circonscriptions qui appartiennent à l'une de ces catégories spécifiques.
- **Sum_range**Cela permet d’indiquer Excel quelles cellules à additionner, si vous voulez additionner des cellules autres que celles spécifiées dans l'argument « range »

##### **Additionner les électeurs inscrits en 2010 selon le type de circonscription (« RV2010 »)**

Vous utiliserez d'abord SUMIF pour calculer en fonction du type de circonscription le nombre d'électeurs inscrits en 2010. Nous commencerons par additionner le nombre d'électeurs inscrits pour les circonscriptions urbaines, puis passerons aux zones rurales et enfin à la capitale.

1\. Dans la cellule B2, tapez "SUMIF (" Notez qu'Excel vous fournit automatiquement les informations nécessaires pour compléter le reste de la formule.

[![Image 17](/assets/images/academy/module_5/Module_5_Photo_17.png)](/assets/images/academy/module_5/Module_5_Photo_17.png)

2\. Maintenant, nous devons spécifier la plage (« range ») pour qu’Excel puisse extraire vos critères. Puisque nous examinons spécifiquement le type de district, votre plage sera la colonne C de l'onglet Registration_Data. Pour référencer votre plage, laissez votre formule ouverte et cliquez sur l'onglet Registration_Data dans le coin inférieur gauche de votre fichier. (Ne cliquez pas sur Entrée avant de passer à l'onglet de données principal, sinon votre formule ne continuera pas à s'afficher!)

[![Image 18](/assets/images/academy/module_5/Module_5_Photo_18.png)](/assets/images/academy/module_5/Module_5_Photo_18.png)

Vous remarquerez que quand vous revenez à Registration_Data, votre barre de formule continue de se mettre à jour en fonction de l'endroit où vous cliquez. Excel voit que vous essayez d'établir une connexion entre votre calcul SUMIF dans votre onglet Data_Summary et des informations sur votre onglet Registration_Data.

Pour terminer la sélection de la plage (« range »), sélectionnez toute la colonne C en cliquant sur le haut de la colonne. Encore une fois, notez que Excel rempli votre formule lorsque vous cliquez.

[![Image 19](/assets/images/academy/module_5/Module_5_Photo_19.png)](/assets/images/academy/module_5/Module_5_Photo_19.png)

Maintenant que vous avez sélectionné votre plage (“range”), tapez une virgule \[,\] et continuons à avancer.

3\. SUMIF exige maintenant que vous sélectionniez vos critères spécifiques. Sans appuyer sur Entrée, cliquez de nouveau sur l'onglet Data_Summary et cliquez sur la cellule A2 «Urban». Vous venez de dire à Excel que vous voulez seulement récupérer les données des circonscriptions urbaines d'Opendya, selon l'onglet Registration_Data

Tapez une autre virgule \[,\].

[![Image 20](/assets/images/academy/module_5/Module_5_Photo_20.png)](/assets/images/academy/module_5/Module_5_Photo_20.png)

4\. Enfin, nous devons dire à Excel quelles données à ajouter en fonction de notre critère à savoir urbain. Dans ce cas, nous additionnons les électeurs inscrits à partir de 2010. Ces informations sont stockées dans la colonne D "2010_Registered" de notre onglet Registration_Data. En laissant votre formule ouverte, retournez à l'onglet Registration_Data et sélectionnez toute la colonne D.

[![Image 21](/assets/images/academy/module_5/Module_5_Photo_21.png)](/assets/images/academy/module_5/Module_5_Photo_21.png)

5\. Vous pouvez enfin fermer vos parenthèses et appuyez sur Entrée ! D’après vos calculs, combien d’électeurs inscrits en 2010 proviennent de circonscriptions urbaines?

[![Image 22](/assets/images/academy/module_5/Module_5_Photo_22.png)](/assets/images/academy/module_5/Module_5_Photo_22.png)

6\. Excel a maintenant répété votre calcul des électeurs inscrits en 2010 pour les circonscriptions rurales et la circonscription de la capitale. Pour rappel, vous pouvez double-cliquer sur la case dans le coin inférieur droit de la cellule B2 ou vous pouvez ré-entrer manuellement les formules en utilisant "rural" et "capital district" comme nouveaux critères. Voici ce que vous devriez obtenir.

[![Image 23](/assets/images/academy/module_5/Module_5_Photo_23.png)](/assets/images/academy/module_5/Module_5_Photo_23.png)

##### **Additionner les électeurs inscrits en 2014 selon le type de district (« RV2014 »)**

Vous l’avez deviné! Vous allez à nouveau utiliser SUMIF pour calculer le nombre final d'électeurs inscrits en 2014 dans les trois types de circonscriptions d'Opendya. Pensez au procédé que vous avez utilisé ci-dessus pour calculer le nombre d’électeurs inscrits en 2010. En quoi ce calcul peut-il être égal ou différent du calcul pour 2014?

1\. Répétez les étapes 1 et 2 ci-dessus pour savoir comment sélectionner la plage et les critères de votre fonction SUMIF. Vous vous focalisez toujours sur la colonne C "Type" et vous continuer à sélectionnez un type de circonscription spécifique comme critère.

2\. Maintenant, allez dans l'onglet Registration_Data et sélectionnez toute la colonne I "Reg_Tot_Final", qui contient les totaux finaux de l’inscription des électeurs de 2014 pour chaque district.

Voici à quoi devraient ressembler vos calculs finaux:

[![Image 24](/assets/images/academy/module_5/Module_5_Photo_24.png)](/assets/images/academy/module_5/Module_5_Photo_24.png)

##### **Différence entre les inscriptions de 2010 et 2014 par type de circonscription («2010-2014»)**

Maintenant, nous aimerions que vous calculiez la différence entre les électeurs inscrits entre les élections de 2010 et 2014 d'Opendya pour des types de circonscription spécifiques. Pensez aux données et à la fonction Excel dont vous avez besoin pour compléter ce calcul et allez-y!

Voici à quoi devraient ressembler vos calculs:

[![Image 25](/assets/images/academy/module_5/Module_5_Photo_25.png)](/assets/images/academy/module_5/Module_5_Photo_25.png)

##### **Pourcentage d'augmentation des inscriptions par type de circonscription (colonne E, «% change_2010-2014»)**

Maintenant que nous savons combien d'électeurs supplémentaires ont été enregistrés dans chaque type de circonscription de 2010 à 2014, calculons la différence en pourcentage entre les cycles électoraux. Nous avons fait le même type de calcul plus tôt dans ce module (Calcul du pourcentage d'augmentation de l'enregistrement entre 2010 et 2014), donc cela devrait être un jeu d'enfant! Faites votre calcul dans la colonne E "% change_2010-2014"

Si vous avez des difficultés à vous rappeler comment calculer l'augmentation en pourcentage, cliquez ici.

[![Image 3](/assets/images/academy/module_5/Module_5_Formula_3.png)](/assets/images/academy/module_5/Module_5_Formula_3.png)

Vos calculs doivent ressembler à cela: [![Image 26](/assets/images/academy/module_5/Module_5_Photo_26.png)](/assets/images/academy/module_5/Module_5_Photo_26.png)

##### **Qu’est-ce que vous observez?**

Maintenant que vous avez complété vos nouveaux calculs sur l’inscription des électeurs selon les trois types de circonscription d'Opendya, que remarquez-vous? Est-ce que les tendances en matière d'inscription dans les différents types de circonscriptions vous surprennent? Quelles conditions sur le terrain peuvent contribuer aux variations régionales des taux d'inscription?
