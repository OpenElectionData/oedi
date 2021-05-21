---
title: 6. Évaluer les tendances sur l&#39;inscription des électeurs dans le temps
lang: fr
module_id: 6
permalink: "/academy/evaluating-temporal-trends-in-voter-registration/"
excerpt: 'Module 6 will solidify skills you began to master in Module 5 to allow you
  to do a more advanced analysis of voter registration data. We hope that by the end
  you will be able to: <ul><li>Master your understanding of SUMIF functions,</li>
  <li>integrate SUMIF functions into basic Excel operations, and</li> <li>consider
  political ramifications of your data.</li></ul>'

---
## Résumé

Le module 6 consolidera les compétences que vous avez commencé à maîtriser dans le module 5 pour vous permettre de faire une analyse plus poussée des données sur l’inscription des électeurs. Nous espérons qu'à la fin vous serez en mesure de:

* Maîtriser votre compréhension des fonctions SUMIF,
* intégrer les fonctions SUMIF dans les opérations Excel de base, et
* tenir compte des implications politiques de vos données.

## Pourquoi s’intéresser aux données sur l’inscription des électeurs?

Comme nous le mentionnons dans [le Guide Des Données Electorales](https://openelectiondata.net/fr/guide/), un processus [d'inscription des électeurs](http://openelectiondata.net/fr/guide/key-categories/voter-registration/) équitable favorise l'égalité politique et encourage activement l'inclusion des électeurs admissibles. Lorsque le processus d'inscription des électeurs est équitable et transparent, il peut accroître la légitimité d'une élection. A contrario, lorsque le processus d'inscription des électeurs est mal exécuté ou ne prévoit pas une participation équitable, il peut créer des doutes sur la légitimité de l’ensemble d'une élection.

Les organisations de la société civile utilisent souvent les statistiques d'inscription des électeurs pour déterminer si le processus global était juste et inclusif. Les modules 5-7 amélioreront votre capacité à entreprendre ce type d'analyse importante.

## Bon retour à Opendya!

Nous sommes de retour à Opendya! Comme vous vous en souvenez, vous avez pu obtenir un ensemble de données sur l’inscription des électeurs compilé par la Commission électorale. Le fichier contient des données, sur un exercice, de cinq semaines, d’actualisation de l'inscription des électeurs qui a été organisé avant l'élection de 2014.

Bien que cela ne soit pas obligatoire, nous vous suggérons de compléter d'abord le module 5, afin de vous familiariser avec l'ensemble de données et le contexte politique d'Opendya. Si vous n'avez pas terminé le module 5, voici quelques antécédents politiques importants que vous devriez connaître:

* Opendya a eu des élections nationales en 2010 et 2014.
* La capitale d'Opendya se trouve dans la circonscription de la ville d'Opa (code du district: 47), qui contient un mélange de zones urbaines et rurales.
* Depuis les élections de 2010, un conflit violent a éclaté dans deux circonscriptions: Conflicteri (code de district: 9) et Disputana (code de district: 23).
* En prévision des élections de 2014, la Commission électorale d'Opendya a procédé à un exercice pendant cinq semaines de mise à jour de l'inscription des électeurs, pour ajouter de nouveaux électeurs aux listes.

Pour compléter cet exercice, vous pouvez continuer à utiliser l'ensemble de données que vous avez téléchargé dans le Module 5, ou vous pouvez **télécharger de nouveau le fichier** [**ici.**](/assets/academy/exercise/Module_6_Registered_Voters.xlsx)

## Examiner les données sur l’inscription des électeurs

Familiarisons-nous une fois de plus avec les données d'inscription des électeurs d'Opendya en examinant le contenu de notre fichier. Si vous avez terminé le Module 5 et que vous connaissez déjà ces données, [**vous pouvez passer cette section**](#evalweeklyregistration) et passer directement à votre analyse.

Nous allons d'abord examiner l'onglet Registration_Data, qui contient une variété de données sur le processus d’inscription dans Opendya. Ensuite, nous allons jeter un coup d'œil à l'onglet Data_Summary, où nous ferons notre analyse.

#### **District_Name**

La colonne située à l'extrême gauche de l'onglet Registration_Data contient les noms de toutes les circonscriptions d'Opendya. Notez que c'est le seul niveau géographique fourni pour l'ensemble de données. À ce stade, nous n'avons aucune autre indication quant à savoir si ces circonscriptions sont proches les unes des autres ou s'ils relèvent à un niveau supérieur des mêmes unités géographiques. [![Image 1](/assets/images/academy/module_6/Module_6_Photo_1.png)](/assets/images/academy/module_6/Module_6_Photo_1.png)

#### **District_Code**

La Commission électorale d'Opendya attribue également à chaque circonscription un code ou un identifiant unique. Prenez une seconde pour faire défiler le fichier et notez la façon dont les circonscriptions sont numérotées (c’est facile!).

Comme nous l'avons mentionné dans [le Module 2: Examiner la liste de bureaux de vote](https://openelectiondata.net/fr/academy/reviewing-a-polling-station-list/), les identifiants uniques sont extrêmement utiles pour traiter des ensembles de données. Ils nous aident à identifier les doublons et / ou à distinguer correctement les unités ayant des noms similaires.

[![Image 2](/assets/images/academy/module_6/Module_6_Photo_2.png)](/assets/images/academy/module_6/Module_6_Photo_2.png)

#### **Type**

La colonne Type indique les caractéristiques des circonscriptions d'Opendya. Vérifiez les données pour voir quels sont les descriptions utilisées pour indiquer le type de circonscription. Quelles sont les différentes descriptions que vous pouvez observer?

[![Image 3](/assets/images/academy/module_6/Module_6_Photo_3.png)](/assets/images/academy/module_6/Module_6_Photo_3.png)

Il y a trois types de circonscriptions dans cet ensemble de données: urbaine, rurale et la circonscription de la capitale.

#### **2010_Registered**

Nous avons mentionné précédemment qu'Opendya a tenu des élections nationales en 2010. Cet ensemble de données contient le nombre final d'électeurs inscrits lors de cette élection a eu lieu. Nous pouvons utiliser la colonne 2010_Registered pour comparer les chiffres d'enregistrement entre les différents cycles électoraux.

[![Image 4](/assets/images/academy/module_6/Module_6_Photo_4.png)](/assets/images/academy/module_6/Module_6_Photo_4.png)

#### **Reg_Week1, Reg_Week2, Reg_Week3, and Reg_Week4**

Nous avons mentionné que la Commission électorale d'Opendya a entrepris en 2014 et pendant cinq semaine une actualisation de l'inscription des électeurs. Les quatre colonnes suivantes - Reg_Week1, Reg_Week2, Reg_Week3 et Reg_Week4 - nous fournissent le nombre total d'électeurs inscrits à la fin de quatre des cinq semaines de l'exercice de mise à jour réalisé en 2014. La différence entre chaque semaine nous donne le nombre de nouveaux électeurs qui se sont inscrits pendant l'exercice.

Ces chiffres peuvent nous indiquer comment la Commission électorale s'est comportée au fil du temps et peuvent mettre en évidence les pics ou les ralentissements enregistrées dans certaines circonscriptions et / ou à des moments spécifiques. Vous travaillerez avec ces colonnes pour compléter le module 6.

[![Image 5](/assets/images/academy/module_6/Module_6_Photo_5.png)](/assets/images/academy/module_6/Module_6_Photo_5.png)

#### **Reg_Tot_Final**

La colonne Reg_Tot_Final fournit le chiffre total des électeurs inscrits par circonscription après l'exercice d'inscription de cinq semaines en 2014. Notez que la différence entre les chiffres dans Reg_Week4 et Reg_Tot_Final porte sur les électeurs qui se sont inscrits durant la cinquième et dernière semaine de la période de mise à jour.

[![Image 6](/assets/images/academy/module_6/Module_6_Photo_6.png)](/assets/images/academy/module_6/Module_6_Photo_6.png)

#### **Final_Female, Final_Male**

Ici, nous pouvons voir combien de femmes et d'hommes, au total, sont inscrits pour voter dans chaque district pour l'élection de 2014. Notez que nous n'avons que les chiffres définitifs pour 2014 des électrices et des électeurs, plutôt que des chiffres hebdomadaires.

[![Image 7](/assets/images/academy/module_6/Module_6_Photo_7.png)](/assets/images/academy/module_6/Module_6_Photo_7.png)

Maintenant que nous connaissons les données, nous pouvons avancer avec l’analyse.

#### **Consulter l'onglet Data_Summary**

Dans le module 6, nous utiliserons l'onglet Data_Summary de votre fichier Excel pour extraire un résumé des calculs basés sur les données de l'onglet Registration_Data. Ça ressemble à ça. Nous utiliserons spécifiquement les colonnes A et les colonnes F à O (les colonnes B à E ont été utilisées dans le module 5).

[![Image 8](/assets/images/academy/module_6/Module_6_Photo_8.png)](/assets/images/academy/module_6/Module_6_Photo_8.png)

_Notez que les calculs de la colonne B à la colonne E ont été effectués dans le Module 5:_

## Évaluation des tendances d'inscription hebdomadaires selon le type de circonscription

Dans le module 6, vous regrouperez toutes vos compétences d’analyse pour évaluer les tendances de l'inscription des électeurs au fil du temps dans chacun des trois types de circonscription d'Opendya. Cela nous donnera une idée de l'endroit et du moment où les électeurs se sont inscrits au cours de la période d’actualisation des données en 2014.

Nous ferons les types d'analyses suivantes:

* Pour chaque type de circonscription (urbaine, rurale et circonscription de la capitale), nous calculerons le nombre de nouveaux électeurs ajoutés chaque semaine durant l'exercice d'inscription des électeurs de 2014.
* Nous calculerons le pourcentage de nouveaux électeurs qui ont été ajoutés chaque semaine de la mise à jour de l'inscription des électeurs dans les trois types de circonscription.
* Analyser les tendances de l'inscription au fil du temps et tenir compte de leurs implications politiques.

#### **Rappel: Utiliser SUMIF pour ajouter des données dans une catégorie spécifique**

Dans ce module, nous continuerons à utiliser la fonction Excel [SUMIF](https://support.office.com/fr-fr/article/fonction-somme-si-169b8c99-c05c-4483-a712-1697a653039b?ui=fr-FR&rs=fr-FR&ad=FR) Pour rappel, la fonction SUMIF est utilisée pour ajouter des valeurs dans une plage spécifique de cellules répondant aux critères que vous recherchez. Pour nos besoins, nous utiliserons SUMIF pour additionner les chiffres des électeurs inscrits qui concernent spécifiquement les.

Voici comment la formule est structurée: SUMIF (range, criteria, \[sum_range\])

* **Range**: « range » spécifie la zone des cellules que vous souhaitez évaluer selon vos critères spécifiques. Pour nos besoins, nous additionnons les données en fonction du type de district. Puisque le "type de district" est notre critère, quelle colonne de votre fiche technique pensez-vous devoir utiliser pour notre « range »? Quelle est la colonne à consulter pour avoir des informations sur le type de district? (Réponse = Colonne C, Type)
* **Criteria**: Criteria: Vos critères indiqueront si un nombre doit être additionné ou non. Les critères peuvent prendre la forme d'un nombre, d'une expression, d'une référence de cellule, d'un texte ou d'une fonction qui définit les cellules qui seront ajoutées. Pour cet exercice, vous devrez choisir parmi trois critères différents \[circonscription urbaine, rurale et circonscription de la capitale\] et demander à Excel d'ajouter les numéros d'inscription des électeurs des circonscriptions qui appartiennent à l'une de ces catégories spécifiques.
* **Sum_range**: Cela permet d’indiquer Excel quelles cellules à additionner, si vous voulez additionner des cellules autres que celles spécifiées dans l'argument.

### A. Calculer l'augmentation hebdomadaire de l’inscription dans les différents types de circonscriptions

Nous aimerions que vous calculiez le nombre d'électeurs supplémentaires enregistrés chaque semaine de l’actualisation de l'inscription des électeurs 2014 d'Opendya selon le type de circonscription. En d'autres termes, vous devez calculer la différence du nombre d'électeurs inscrits d'une semaine à l'autre pour les circonscriptions urbaines, les circonscriptions rurales ou la circonscription de la capitale.

Nous espérons que vous n'avez pas déjà oublié le savoir acquis sur la fonction [SUMIF](https://openelectiondata.net/fr/academy/evaluating-gender-and-geographic-trends-in-voter-registration/) du Module 5! Vous allez en avoir besoin.

##### **Nombre de nouveaux électeurs ajoutés après la 1ère semaine d'inscription ("nW1_incr")**

La colonne "nW1_icnr" dans votre onglet Data_Summary vous permet de calculer le nombre de nouveaux électeurs ajoutés à la liste après la 1ère semaine de mise à jour des inscriptions en 2014. Encore une fois, vous devrez calculer ce chiffre de façon unique pour les trois types de district. Avant de vous guider, réfléchissez comment vous pourriez procéder à ce calcul? De quelles fonctions et colonnes aurez-vous besoin? (Remarque: vous devez extraire des données de l'onglet Registration_Data.)

Pour calculer le nombre de nouveaux électeurs ajoutés lors de la 1ère semaine d'inscription, vous devez utiliser la colonne F "Reg_Week1" de votre onglet Registration_Data. N'oubliez pas que cette colonne contient le total des électeurs inscrits dans chaque circonscription après la première semaine de la mise à jour de l’inscription de 2010; il ne vous dit pas le nombre d'électeurs qui se sont inscrits pendant cette semaine spécifique. Deuxièmement, vous aurez à utiliser votre colonne A "RV2010" dans votre onglet Data_Summary. Vous devez avoir compléter les calculs pour la colonne A lors du module 5, sur lequel vous aurez besoin de vous basez maintenant. (Si vous n'avez pas encore terminé le Module 5, [cliquez ici](https://openelectiondata.net/fr/academy/evaluating-gender-and-geographic-trends-in-voter-registration/) maintenant pour que vous puissiez compléter cette analyse et passer au reste du Module 6.)

Voici la logique que vous devrez utiliser pour faire ce calcul pour les circonscriptions urbaines. La même structure de base s'appliquera aux circonscriptions rurale et à celle de la capitale.

[![Image 1](/assets/images/academy/module_6/Module_6_Formula_1.png)](/assets/images/academy/module_6/Module_6_Formula_1.png)

1\. En utilisant vos compétences SUMIF, utilisez la cellule F2 dans l'onglet Data_Summary pour calculer les nombre cumulatif d’électeurs urbains inscrits après la 1ère semaine. Cliquez ici si vous avez besoin d'aide

Voici comment la formule SUMIF est structurée: SUMIF (range, criteria, \[sum_range\]). Voici comment vous pouvez utiliser SUMIF pour additionner le nombre cumulatif d'électeurs inscrits en milieu urbain après la 1ère semaine d'inscription.

* **Range**: Range spécifie la zone des cellules que vous souhaitez évaluer selon vos critères spécifiques. Pour nos besoins, nous additionnons les données en fonction du type de district. Comme le type de circonscription est notre critère, nous devons utiliser la colonne C, "Type" de l'onglet Registration_Data.
* **Criteria**: vos critères indiqueront si un nombre doit être additionné ou non. Les critères peuvent prendre la forme d'un nombre, d'une expression, d'une référence de cellule, d'un texte ou d'une fonction qui définit les cellules qui seront ajoutées. Pour cet exercice, vous choisirez parmi trois critères différents \[circonscription urbaine, circonscription rurale et capitale\] et demanderez à Excel d'ajouter des numéros qui appartiennent à l'une de ces catégories spécifiques. Ici, vous pouvez cliquer sur la cellule A2, A3 ou A4 dans votre onglet Data_Summary pour spécifier vos critères.
* **Sum_range**: Indique à Excel quelles cellules ajouter, si vous voulez additionner des cellules autres que celles spécifiées dans l'argument range. Ici, vous demandez à Excel d'additionner le nombre d'électeurs inscrits après la 1ère semaine de la mise à jour, uniquement dans les circonscriptions urbaines (colonne E = Reg_Week1).

[![Image 9](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_9.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_9.png)

Après avoir terminé avec votre fonction SUMIF, insérez une parenthèse fermée \[)\] mais ne tapez pas entrée! Nous allons ajouter une fonction de soustraction dans la même cellule. Oui, vous pouvez utiliser plusieurs formules Excel à la fois!

2\. À la fin de votre formule dans la cellule F2, tapez un signe moins \[-\] et cliquez sur la cellule B2, ce qui nous donne le nombre d'électeurs inscrits en milieu urbain en 2010.

[![Image 10](/assets/images/academy/module_6/Module_6_Photo_10.png)](/assets/images/academy/module_6/Module_6_Photo_10.png)

3\. Cliquez sur Entrée et vérifiez votre réponse! Qu'est-ce que vous obtenez? Si vous avez calculé qu'il y avait 18 358 électeurs urbains en plus après la première semaine d'inscription, vous avez raison!

4\. Comme nous l'avons déjà fait, demandez à Excel de reproduire votre formule pour les circonscriptions rurales et les circonscriptions de la capitale. C'est toujours une bonne pratique de cliquer sur les calculs qu'Excel génère automatiquement pour s'assurer que le programme a fait ce que vous vouliez. Dans ce cas, comme illustré ci-dessous, vous remarquerez qu'Excel a automatiquement modifié vos "critères" pour un autre type de circonscription, en déplaçant vos options dans la colonne A. En ligne avec vos rangées, Excel a également su soustraire des cellules différentes dans la colonne B "RV2014", qui correspondent à la population des électeurs inscrits en 2010 dans les circonscriptions rurales et dans la circonscription de la capitale.

[![Image 11](/assets/images/academy/module_6/Module_6_Photo_11.png)](/assets/images/academy/module_6/Module_6_Photo_11.png)

##### **Nombre de nouveaux électeurs ajoutés après la 2ème semaine d'inscription ("nW2_incr")**

Votre formule sera un peu plus compliquée car nous allons calculer la différence entre la 1ère semaine et 2ème semaine du processus d'inscription d'Opendya. Ici, nous aurons besoin d'utiliser deux arguments SUMIF dans la même cellule. C'est un peu plus dur, mais tout ira bien.

Voici la logique que vous utiliserez pour ce calcul. Examinez-la attentivement pour vous assurer de bien comprendre.

[![Image 2](/assets/images/academy/module_6/Module_6_Formula_2.png)](/assets/images/academy/module_6/Module_6_Formula_2.png)

1\. Commençons à travailler sur le calcul de la 2ème semaine dans la cellule G2. Premièrement, en utilisant SUMIF, calculez la somme cumulative des électeurs urbains après la deuxième semaine d'inscription. Voir ci-dessous pour voir à quoi ça ressemble.

[![Image 12](/assets/images/academy/module_6/Module_6_Photo_12.png)](/assets/images/academy/module_6/Module_6_Photo_12.png)

2\. Ensuite, nous allons demander à Excel de soustraire quelque chose en tapant un signe moins \[-\]. Pas besoin de taper sur entrée pour le moment!

3\. Vous allez maintenant saisir une deuxième formule SUMIF qui demande à Excel d’additionner le nombre cumulé d'électeurs urbains après la première semaine d'inscription. (Remarque: Ceci est la même formule SUMIF que vous auriez dû taper pour compléter le calcul "nW1_incr" il y a peu de temps, mais vous n'avez pas besoin de soustraire "RV2010".) Ci-dessous l’image de la formule complète.

[![Image 13](/assets/images/academy/module_6/Module_6_Photo_13.png)](/assets/images/academy/module_6/Module_6_Photo_13.png)

4\. Tapez sur Entrée et observez ce que vous obtenez! Si vous avez calculé que 21.944 électeurs urbains supplémentaires ont été inscrits pendant la 2ème semaine, vous avez raison!

Si ce n'est pas votre réponse, examinez votre formule pour voir si vous avez accidentellement cliqué sur le mauvais endroit à un moment donné. Rappelez-vous qu'Excel remplit vos formules en fonction de l'endroit où vous cliquez!

5\. Reproduisez maintenant votre calcul de la semaine 2 pour les circonscriptions rurales et la capitale. Voici ce que vous devriez avoir.

[![Image 14](/assets/images/academy/module_6/Module_6_Photo_14.png)](/assets/images/academy/module_6/Module_6_Photo_14.png)

##### **Nombre de nouveaux électeurs ajoutés après la 3ème semaine d'inscription (nW3_incr)**

Votre calcul pour la 3ème semaine ne devrait pas être aussi effrayant. C'est exactement la même logique et les mêmes formules que celles que vous avez utilisées ci-dessus, mais cette fois, vous soustrayez le total cumulatif des électeurs inscrits lors de la 3ème semaine au nombre total cumulé d'électeurs inscrits lors de la 2ème semaine.

Essayez ceci par vous-même! Une fois que vous avez terminé, n'hésitez pas à cliquer ici pour la formule et les réponses.

[![Image 15](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_15.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_15.png)

##### **Nombre de nouveaux électeurs ajoutés après la 4ème semaine d'inscription ("nW4_incr")**

Nous espérons que vous pourrez maitriser les calculs de la semaine 4 par vous-même. Même vieille logique et formules!

Une fois que vous avez terminé, cliquez ici pour vérifier les formules et les calculs finaux.

[![Image 16](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_16.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_16.png)

##### **Nombre de nouveaux électeurs ajoutés après la dernière semaine d'inscription ("nWf_incr")**

Vous avez presque franchi la ligne d'arrivée! Cette dernière formule sera un peu plus simple, mais vous devrez réfléchir attentivement à la logique. Ici, vous calculez de combien l'inscription des électeurs a augmenté au cours de la cinquième et dernière semaine d'inscription.

[![Image 3](/assets/images/academy/module_6/Module_6_Formula_3.png)](/assets/images/academy/module_6/Module_6_Formula_3.png)

Rappelez-vous que dans la partie A de ce module, vous avez calculé le nombre cumulé d'électeurs de 2014 dans chacun des types de circonscription d'Opendya (colonne C "RV2014"). Cela vous épargnera quelques efforts ici, donc vous n'aurez pas besoin de faire une autre fonction SUMIF pour cette composante.

1\. Dans la cellule J2, tapez votre signe égal \[=\] et cliquez sur la cellule C2, qui donne le nombre total final des électeurs urbains pour l'élection de 2014.

2\. Ajoutez un signe moins \[-\]. Voici où vous devriez vous trouverez:

[![Image 17](/assets/images/academy/module_6/Module_6_Photo_17.png)](/assets/images/academy/module_6/Module_6_Photo_17.png)

3\. Maintenant, il est temps d’utiliser votre dernière formule SUMIF. Vous l'utiliserez pour calculer le nombre d’électeurs urbains cumulés à partir de la 4ème semaine du processus d'inscription. Faites cette formule SUMIF par vous-même.

Combien de nouveaux électeurs urbains ont été enregistrés au cours de la 5ème semaine? Cliquez ici si vous souhaitez voir une image de la formule.

[![Image 18](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_18.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_18.png)

4\. Maintenant reproduisez votre formule pour les 2 autres types de circonscription. Voilà ce que vous devez trouver.

[![Image 19](/assets/images/academy/module_6/Module_6_Photo_19.png)](/assets/images/academy/module_6/Module_6_Photo_19.png)

Félicitations! Vous maitrisez la fonction SUMIF et vous avez réalisé avec succès des calculs sur l’exercice d’inscription des électeurs à Opendya en 2014.

Passez à la dernière partie de ce module pour donner aux chiffres des inscriptions que vous avez calculé plus de sens à travers des pourcentages et des analyses politiques.

### B. Calculer l'augmentation de l'inscription hebdomadaire en pourcentage de l'augmentation totale

Vous avez calculé avec succès combien de fois l'inscription des électeurs a augmenté à Opendya chaque semaine dans différents types de circonscriptions. Dans le contexte de l’actualisation générale de l'inscription, il serait intéressant de savoir quelles semaines ont généré les plus grandes vagues d'inscription dans les différents types de circonscriptions. Quelles sont les tendances que vous pensez vois apparaitre au fil du temps?

Pour effectuer ce calcul, vous devez utiliser les colonnes H-L dans votre onglet Data_Summary, ainsi que la colonne F «2010-2014» qui indique l'augmentation totale de la différence entre les électeurs inscrits lors des élections de 2010 et celles de 2014 par type de circonscription.

##### **Pourcentage de nouveaux électeurs inscrits qui se sont inscrits pendant la 1ère semaine ("Wk1_% of_total")**

Voyons quel pourcentage de nouveaux électeurs inscrits à Opendya par type de circonscription se sont inscrits au cours de la 1ère semaine de la période de mise à jour des listes. Quelles colonnes de données pensez-vous que nous devons utiliser pour effectuer ce calcul? Gardez à l'esprit que nous examinons l'augmentation hebdomadaire par rapport à l'augmentation totale au cours de l'exercice de mise à jour.

En utilisant seulement l'onglet Data_Summary, nous utiliserons la colonne H "nWk1_inc" et la colonne F "2010-2014". Voir ci-dessous pour la structure de calcul.

[![Image 4](/assets/images/academy/module_6/Module_6_Formula_4.png)](/assets/images/academy/module_6/Module_6_Formula_4.png)

1\. Dans la cellule K1, demandez à Excel de diviser le nombre d'électeurs urbains ajoutés au cours de la 1ère semaine (cellule K2) par le nombre total d'électeurs urbains ajoutés entre 2010-2014 (cellule D2). Quel pourcentage d’électeurs urbains a été ajouté au cours de la première semaine?

Vérifiez votre réponse ci-dessous.

[![Image 20](/assets/images/academy/module_6/Module_6_Photo_20.png)](/assets/images/academy/module_6/Module_6_Photo_20.png)

2\. Maintenant répétez votre calcul pour les deux types de circonscriptions restantes. Ci-dessous vous pouvez vérifier vos réponses.

[![Image 21](/assets/images/academy/module_6/Module_6_Photo_21.png)](/assets/images/academy/module_6/Module_6_Photo_21.png)

##### **Pourcentage de nouveaux électeurs inscrits qui se sont inscrits respectivement au cours des 2ème, 3ème, 4ème et 5ème semaines ("Wk2_% of_total", "Wk3_% of_total", "Wk4_% of_total" et "Wkf_% of_total")**

Utilisez les mêmes formules Excel et la même logique mathématique pour compléter les calculs de pourcentage pour les semaines 2 à 5 de l’actualisation des listes en 2014.

Rappelez-vous pour chaque type de circonscription, vous divisez le nombre de nouveaux électeurs inscrits pendant une semaine spécifique (colonnes G à J), par le nombre total de nouveaux électeurs ajoutés entre 2010 et 2014 (colonne D).

Voici à quoi devrait ressembler votre dernière série de calculs!

[![Image 22](/assets/images/academy/module_6/Module_6_Photo_22.png)](/assets/images/academy/module_6/Module_6_Photo_22.png)

##### **Qu’est ce vous pouvez observer?**

Observez comment l’actualisation de l'inscription des électeurs en 2014 à Opendya s'est déroulée au fil du temps et dans les différents types de circonscriptions.

* À quels moments et dans quels types de circonscriptions les électeurs se sont-ils inscrits le plus lors de la mise à jour de 2014?
* Quand et où les électeurs ont-ils été les moins nombreux lors de la mise à jour de 2014?
* Quelles tendances politiques ces observations pourraient-elles indiquer?
* En tant qu'observateur électoral, quelles informations supplémentaires aimeriez-vous recueillir pour étayer votre analyse de ces tendances? Comment collecteriez-vous cette information?