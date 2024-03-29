---
title:
  7. L’utilisation des données du recensement pour renforcer l'analyse sur l'inscription
  des électeurs
module_id: 7
excerpt:
  Le module 7 consolidera les compétences acquises au cours des modules 5 et
  6 afin de vous permettre de faire une analyse plus avancée sur les données d'inscription
  des électeurs. Nous présenterons également de nouvelles astuces qui vous aideront
  à recouper des données provenant d'autres sources utiles, telles que les données
  du recensement, pour compléter votre analyse sur l'inscription des électeurs. Nous
  espérons qu'à la fin du module 7, vous serez en mesure de:<ul><li>Utiliser la combinaison
  de fonctions Excel INDEX MATCH [INDEX EQUIV],</li> <li>Maîtriser votre compréhension
  de la fonction SUMIF [SOMME.SI],</li> <li>Maîtriser les opérations MS Excel de base,
  comme les pourcentages, et</li> <li>Explorer les considérations politiques de vos
  données.</li> </ul>
---

Le module 7 consolidera les compétences acquises au cours des modules 5 et 6 afin de vous permettre de faire une analyse plus avancée sur les données d'inscription des électeurs. Nous présenterons également de nouvelles astuces qui vous aideront à recouper des données provenant d'autres sources utiles, telles que les données du recensement, pour compléter votre analyse sur l'inscription des électeurs. Nous espérons qu'à la fin du module 7, vous serez en mesure de:

- Utiliser la combinaison de fonctions Excel INDEX MATCH \[INDEX EQUIV\],
- Maîtriser votre compréhension de la fonction SUMIF \[SOMME.SI\],
- Maîtriser les opérations MS Excel de base, comme les pourcentages, et
- Explorer les considérations politiques de vos données.

## Quel est le lien entre les données du recensement et l'inscription des électeurs ?

Comme nous le mentionnons dans [le Guide des données électorales](https://openelectiondata.net/fr/guide/) et dans les modules 5 et 6, un processus crédible [d'inscription des électeurs](https://openelectiondata.net/fr/guide/key-categories/voter-registration/) favorise l'égalité politique et encourage activement l'inclusion des électeurs admissibles. Lorsque le processus d'inscription des électeurs est équitable et transparent, il peut accroître la légitimité d'une élection. Alternativement, lorsque le processus d'inscription des électeurs est mal exécuté ou n'offre pas des chances égales de participation, il peut créer des doutes sur la légitimité d’une élection dans son intégralité. Les organisations de la société civile utilisent souvent les statistiques d'inscription des électeurs pour déterminer si le processus global a été équitable et inclusif.

Lorsqu'elles sont disponibles, les données du recensement complètent les données d'inscription des électeurs en fournissant un aperçu sur la population qui est admissible au vote. Grâce aux données du recensement, les analystes peuvent évaluer les tendances des taux d'inscription et comprendre dans quelle mesure les différents segments d'une population votante sont sur ou sous-représentés dans le registre électoral. Le module 7 renforcera votre capacité à croiser des ensembles de données complémentaires de cette nature et à contribuer à ce type important d'analyse.

## Bon retour à Opendya !

Les joies électorales à Opendya continuent ! Comme vous vous en souvenez, vous avez pu obtenir par l’intermédiaire de la Commission électorale un ensemble de données compilées sur l’inscription des électeurs sur les listes électorales. Le fichier contient des données sur un exercice de mise à jour de l'inscription des électeurs pendant cinq semaines organisé avant les élections de 2014. Cette fois, vous avez également pu obtenir des données de recensement auprès de l’Office des statistiques sur la population électorale d’Opendya.

Bien que cela ne soit pas obligatoire, nous vous suggérons de compléter d'abord les modules 5-6, afin de vous familiariser avec l'ensemble de données et le contexte politique d'Opendya. Si vous n'avez pas terminé les modules précédents, voici les informations générales pertinentes que vous devez connaître:

- Opendya a organisé des élections nationales en 2010 et 2014.
- La capitale d'Opendya se trouve dans la circonscription d'Opa City (code de district: 47), qui contient une mixité de zones urbaines et rurales.
- Depuis les élections de 2010, un violent conflit a éclaté dans deux circonscriptions: Conflicteri (code de district: 9) et Disputana (code de district: 23).
- Le recensement a été effectué avant que la violence n'éclate dans les 2 circonscriptions.
- Avant les élections de 2014, la Commission électorale d'Opendya a mené, durant cinq semaines, un exercice d’inscription des électeurs.

## Les fichiers de données

Vous aurez besoin de deux fichiers différents pour compléter cet exercice :

- [**Données d'inscription des électeurs**]({{ site.url }}/\_assets/academy/exercise/module*7_registered_voters_2014_for_user.xlsx) d'Opendya *(cela inclut les mêmes données brutes que les modules 5-6, mais avec des en-têtes de colonne différents à utiliser pour l'analyse)\_; et
- [**Données du recensement**]({{ site.url }}/\_assets/academy/exercise/module_7_census_data.xlsx) d'Opendya.

Si vous avez terminé les modules 5 et / ou 6, vous pouvez continuer à utiliser votre fichier de données d'inscription des électeurs mais vous devrez télécharger le nouveau fichier de recensement. Si vous continuez à utiliser votre fichier existant, vous devrez ajouter quelques colonnes supplémentaires pour l'analyse dans le module 7 (voir les captures d'écran de l'exercice), car vos en-têtes ne seront pas pré-remplis. Vous pouvez également télécharger un nouveau fichier de données avec des en-têtes de colonne pré-remplis pour analyser spécifiquement ce module.

## Examiner les données sur l’inscription des électeurs

Refaisons connaissance avec les données d’inscription des électeurs d’Opendya. Cliquez sur l'onglet Registration_Data du [**fichier d’inscription des électeurs**]({{ site.url }}/\_assets/academy/exercise/module_7_registered_voters_2014_for_user.xlsx).

#### **District_Name \[Nom de la circonscription\]**

La colonne située à l'extrême gauche de l'onglet Registration_Data contient les noms de toutes les circonscriptions d'Opendya. Notez que c'est le seul niveau géographique fourni pour l'ensemble de données. À ce stade, nous n'avons aucune autre indication quant à savoir si ces circonscriptions sont proches les unes des autres ou si elles relèvent à un niveau supérieur des mêmes unités géographiques.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/1_dist_name.png)]({{ site.url }}/\_assets/images/academy/module_7/1_dist_name.png)

#### **District_Code \[Code de la circonscription\]**

La Commission électorale d'Opendya attribue également à chaque circonscription un code ou un identifiant unique. Prenez une seconde pour faire défiler le fichier et notez la façon dont les circonscriptions sont numérotées.

Comme nous l'avons mentionné dans [le Module 2: Examiner une liste de bureaux de vote](https://openelectiondata.net/fr/academy/reviewing-a-polling-station-list/), les identifiants uniques sont extrêmement utiles pour traiter des ensembles de données. Ils nous aident à identifier les doublons et / ou à distinguer correctement les unités ayant des noms similaires.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/2_dist_code.png)]({{ site.url }}/\_assets/images/academy/module_7/2_dist_code.png)

#### **Type \[Type de circonscription\]**

La colonne Type indique les caractéristiques des circonscriptions d'Opendya. Vérifiez les données pour voir quels sont les descriptions utilisées pour indiquer le type de circonscription. Quelles sont les différents types de descriptions que vous pouvez observer ?

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/3_type.png)]({{ site.url }}/\_assets/images/academy/module_7/3_type.png)

Il y a trois types de circonscriptions dans cet ensemble de données: urbaine, rurale et la circonscription de la capitale.

#### **2010_Registered \[Electeurs inscrits en 2010\]**

Nous avons mentionné précédemment qu'Opendya a tenu des élections nationales en 2010. Cette série de données contient le nombre final d'électeurs inscrits au moment où les élections se sont déroulées. Nous pouvons utiliser la colonne 2010_Registered pour comparer les chiffres des inscriptions entre les différents cycles électoraux.(Notez que cette colonne a été principalement utilisée pour l'analyse dans les modules 5 et 6, mais nous n'en aurons pas besoin dans le module 7.)

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/4_2010_reg.png)]({{ site.url }}/\_assets/images/academy/module_7/4_2010_reg.png)

#### **Reg_Week1, Reg_Week2, Reg_Week3, et Reg_Week4 \[Nombre d’électeurs inscrits semaine 1, 2, 3, 4\]**

Nous avons mentionné que la Commission électorale d'Opendya a entrepris en 2014 et pendant cinq semaine une actualisation de l'inscription des électeurs. Les quatre colonnes suivantes - Reg_Week1, Reg_Week2, Reg_Week3 et Reg_Week4 - nous fournissent le nombre total d'électeurs inscrits à la fin de quatre des cinq semaines de l'exercice de mise à jour réalisé en 2014. La différence entre chaque semaine nous donne le nombre de nouveaux électeurs qui se sont inscrits pendant l'exercice. (Notez que cette colonne a été principalement utilisée pour l'analyse dans le module 6, mais nous n'en aurons pas besoin dans le module 7.)

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/5_reg_weeks.png)]({{ site.url }}/\_assets/images/academy/module_7/5_reg_weeks.png)

#### **Reg_Tot_Final \[Total des électeurs inscrits\]**

La colonne Reg_Tot_Final fournit le chiffre total des électeurs inscrits par circonscription après l'exercice d'inscription de cinq semaines en 2014.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/6_reg_tot_final.png)]({{ site.url }}/\_assets/images/academy/module_7/6_reg_tot_final.png)

#### **Final_Female, Final_Male \[Femmes et hommes inscrits\]**

Les colonnes J et K, nous indiquent respectivement le nombre de femmes et d'hommes inscrits pour voter dans chaque circonscription lors des élections de 2014.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/7_final_fem_male.png)]({{ site.url }}/\_assets/images/academy/module_7/7_final_fem_male.png)

#### **De la colonne L à Q**

Les colonnes L à Q de votre onglet Registration_Data seront utilisées pour l'analyse du module 7. Elles seront expliquées plus en détail une fois que vous aurez commencé vos calculs.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/8_columns_l-q.png)]({{ site.url }}/\_assets/images/academy/module_7/8_columns_l-q.png)

_(Remarque: Si vous utilisez votre fichier de données d'inscription des électeurs des modules 5-6, vous n'aurez pas les colonnes L à Q pré-remplies comme indiqué ci-dessous. Prenez un moment et ajoutez les en-têtes de colonne suivants à votre onglet Registration_Data comme indiqué ci-dessous: Match_VAP_Tot, Match_Female_VAP, Match_Male_VAP, Calculated_Reg_Rate, Calculated_Female_Reg_Rate, Calculated_Male_Reg_Rate.)_

#### **L’onglet Data_Summary \[Résumé des données\]**

Vous effectuerez des calculs supplémentaires dans l'onglet Data_Summary de votre fichier d'inscription des électeurs (révisé à partir des modules 5-6). Nous les expliquerons plus en détail au moment de votre analyse.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/9_data_summary.png)]({{ site.url }}/\_assets/images/academy/module_7/9_data_summary.png)

## Examiner les données du recensement

#### **District_Name, District_Code, Type (Nom, Code et type de circonscription)**

Comme les données d'inscription des électeurs, [**le fichier de données du recensement **]({{ site.url }}/\_assets/academy/exercise/module_7_census_data.xlsx)contient les noms de toutes les circonscriptions d'Opendya (District_Name, colonne A) et les identifiants ou codes uniques pour chaque circonscription (District_Code, colonne B). Il énumère également le type de circonscription, à savoir si la localité est urbaine, rurale ou correspond à la capitale (Type, colonne C). Ces trois colonnes se chevauchent avec les données incluses dans votre fichier d'inscription des électeurs.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/10_distname_code_type.png)]({{ site.url }}/\_assets/images/academy/module_7/10_distname_code_type.png)

#### **VAP_Tot (Population totale en âge de voter)**

La colonne D de votre fichier de données de recensement indique la population en âge de voter (VAP) dans chacune des 47 circonscriptions d'Opendya.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/11_vap_tot.png)]({{ site.url }}/\_assets/images/academy/module_7/11_vap_tot.png)

#### **Female_VAP, Male_VAP (Population Féminine et masculine en âge de voter)**

Les colonnes E et F de votre fichier de données de recensement spécifient respectivement les populations féminines et masculines en âge de voter (VAP) dans chacune des 47 circonscriptions d’Opendya. La somme de ces deux colonnes est égale à la colonne VAP_Tot.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/12_female_male_vap.png)]({{ site.url }}/\_assets/images/academy/module_7/12_female_male_vap.png)

## Relier les données du recensement aux données d'inscription des électeurs

Nous disposons de deux ensembles de données utiles et complémentaires concernant le nombre d'électeurs inscrits à Opendya et la population en âge de voter du pays. La combinaison de nos données d'inscription électorale et de recensement de la population dans un seul fichier nous permettra d'entreprendre une analyse plus intéressante des taux d'inscription et des tendances démographiques des inscriptions sur les listes électorales à Opendya.

N'oubliez pas que votre fichier de données de recensement contient trois colonnes (colonnes A-C) qui chevauchent le fichier de données des inscriptions électorales et trois colonnes qui offrent de toutes nouvelles informations relatives à la population en âge de voter d'Opendya (colonnes D-F). Ajouter soigneusement ou relier les données du recensement à notre fichier de données sur l'inscription des électeurs (colonnes L-N) est notre première grande tâche! Pour ce faire, nous devons nous assurer que les données sur la population en âge de voter pour chaque circonscription d'Opendya sont correctement insérées sur les lignes des circonscriptions de notre fichier d'inscription des électeurs. Nous automatiserons cette tâche en utilisant une combinaison de fonctions Excel appelée [INDEX MATCH](http://www.randomwok.com/excel/how-to-use-index-match/) [\[INDEX EQUIV\]](http://www.randomwok.com/excel/how-to-use-index-match/). Cette formule est un peu compliquée, mais extrêmement utile pour le nettoyage et l'analyse des données électorales. Restez avec nous !

### Un aperçu d’INDEX MATCH \[INDEX EQUIV\]

The INDEX MATCH formula combines two different Excel formulas: [INDEX](https://support.office.com/en-us/article/INDEX-function-a5dcf0dd-996d-40a4-a822-b56b061328bd) and [MATCH.](https://support.office.com/en-us/article/MATCH-function-e8dffd45-c762-47d6-bf89-533f4a37673a) La formule INDEX MATCH \[INDEX EQUIV\] combine deux formules différentes d’Excel: [INDEX](https://support.office.com/fr-fr/article/index-fonction-a5dcf0dd-996d-40a4-a822-b56b061328bd) et MATCH \[[EQUIV](https://support.office.com/fr-fr/article/equiv-equiv-fonction-e8dffd45-c762-47d6-bf89-533f4a37673a)\]

#### **La fonction INDEX**

La fonction INDEX renvoie une valeur ou une référence à une valeur (c'est-à-dire le numéro de cellule) provenant d’un tableau ou d’une plage. En d'autres termes, vous spécifiez une plage de cellules dans lesquelles vous effectuez une recherche, ainsi qu'un numéro de ligne et / ou de colonne. Excel recherche ensuite et vous donne la valeur de la cellule spécifique que vous avez spécifiée.

La fonction INDEX contient les arguments suivants : **INDEX (array, row_num, \[column_num\])**, i.e. **INDEX (matrice, no_lig, \[no_col\])**

- **Array \[matrice\]** (obligatoire) : la matrice est juste une plage de cellules dans laquelle vous recherchez des données
  - Si l’argument matrice contient une seule ligne ou colonne, l’argument row_num \[no_lig\] ou column_num \[no_col\] correspondant est facultatif.
- **Row_num \[No_lig\]** (obligatoire) : Sélectionne la ligne de la matrice/tableau auquel une valeur doit être renvoyée. Si no_lig est omis, l’argument column_num \[no_col\] est requis.
- **Column_num \[no_col\]** (facultatif) Sélectionne la colonne de la matrice/tableau auquel une valeur doit être renvoyée. Si column_num \[no_col\] est omis, l’argument row_num \[no_lig\] est requis.

Voici un exemple rapide de la façon dont INDEX sera utilisé dans cet exercice. Supposons que vous ayez une courte liste de plusieurs circonscriptions d'Opendya avec le nombre d'électeurs inscrits correspondants.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/13_index_example_1.png)]({{ site.url }}/\_assets/images/academy/module_7/13_index_example_1.png)

Dans une cellule distincte, vous souhaitez qu'Excel recherche ou vous renvoie le nombre d'électeurs inscrits à Yodia. Cette information se trouve dans la cellule C3. Vous pouvez utiliser INDEX pour cela.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/14_index_example_2.png)]({{ site.url }}/\_assets/images/academy/module_7/14_index_example_2.png)

Dans la formule ci-dessus, la cellule «C2: C6» sert de **matrice** (surligné dans le carré bleu). La matrice est simplement la plage ou le groupe de cellules dans lequel nous voulons qu'Excel recherche. Ensuite, pour garantir qu'Excel renvoie le nombre d'électeurs inscrits à Yodia, nous listons «2» comme **rown_num \[no_lig\]** ou numéro de ligne. Bien que les données pour le district de Yodia se trouvent dans la ligne 3 de la feuille Excel, elles sont comprises techniquement dans la ligne 2 de notre tableau puisque nous avons omis la ligne 1 (en-têtes de colonne) de notre plage ou matrice.

Lorsque nous appuyons sur Entrée, la formule INDEX a recherché et nous a renvoyé au nombre d'électeurs inscrits à Yodia comme nous le voulions !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/15_index_example_3.png)]({{ site.url }}/\_assets/images/academy/module_7/15_index_example_3.png)

#### **La fonction MATCH \[EQUIV\]**

Examinons maintenant la fonction MATCH \[EQUIV\]. La fonction MATCH \[EQUIV\] recherche un élément spécifique dans une plage de cellules, puis vous donne la position ou le numéro de ligne de cet élément. Voici comment la fonction est structurée:

**MATCH (lookup_value, lookup_array, \[match_type\])**, i.e. **EQUIV (valeur_cherchée, tableau_recherche, \[type\])**

- **Lookup_value \[valeur_cherchée\]** (obligatoire): il s'agit de la valeur pour laquelle vous souhaitez qu'Excel recherche une correspondance dans une plage spécifique, ou dans lookup_array \[tableau_recherche\].
- **Lookup_array \[tableau_recherche\]** (obligatoire): votre tableau_recherche est la plage de cellules dans laquelle vous demandez à Excel d’effectuer une recherche. Pour la fonction MATCH \[EQUIV\], votre plage doit être une ligne ou une colonne continue, plutôt qu'un tableau. MATCH \[EQUIV\] ne peut spécifier que la position verticale ou horizontale pour une valeur (pas les deux en même temps).
- **Match_type \[type\]** (facultatif): L’argument Type indique à Excel le type de correspondance que vous recherchez ou le niveau de spécificité à rechercher. Type est défini par les nombres -1, 0 ou 1. La valeur par défaut de cet argument est 1 si vous ne spécifiez rien. Voici ce que signifient les différentes valeurs:
  - 1 = MATCH \[EQUIV\] recherche la plus grande valeur inférieure ou égale à votre valeur_cherchée
  - 0 = MATCH \[EQUIV\] renvoie uniquement une valeur égale à votre valeur_cherchée
  - -1 = MATCH \[EQUIV\] recherche la plus petite valeur supérieure ou égale à votre valeur_cherchée

Revenons à notre exemple Opendya pour comprendre comment EQUIV fonctionne. En plus de notre mini-feuille de calcul d'inscription des électeurs montrée dans l'exemple INDEX, disons que nous avons un tableau séparé qui contient des données de recensement sur la population en âge de voter (VAP) d'Opendya. Notez que les circonscriptions ne sont pas dans le même ordre d'un tableau à l'autre.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/16_match_example_1.png)]({{ site.url }}/\_assets/images/academy/module_7/16_match_example_1.png)

La fonction MATCH \[EQUIV\] nous indiquera la position, ou numéro de ligne, dans laquelle chaque circonscription d'Opendya se trouve dans les données complémentaires du recensement.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/17_match_example_2.png)]({{ site.url }}/\_assets/images/academy/module_7/17_match_example_2.png)

Dans la formule ci-dessus:

- Nous avons spécifié la cellule B2, District_Code = 23, comme **lookup_value \[valeur_cherchée\]**;
- Les cellules «B10: B14» de notre tableau de données de recensement servent de **lookup_array \[tableau_recherche\]**, ou plage;
- Enfin, nous avons sélectionné «0» comme **match_type \[type\]**, ce qui signifie que nous voulons uniquement la correspondance exacte de notre valeur de recherche, «23».

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/18_match_example_3.png)]({{ site.url }}/\_assets/images/academy/module_7/18_match_example_3.png)

Nous l'avons ici ! Dans notre colonne "Match", Excel nous a indiqué sur quelles lignes se situent les circonscriptions d'Opendya dans le tableau de recensement. N'oubliez pas que nous avons omis la totalité de la ligne 9 (en-têtes de colonne) de notre lookup_array \[tableau_recherche\], ou plage, de sorte que la valeur MATCH \[EQUIV\] correspond à une valeur de moins que le numéro de ligne de chaque circonscription dans le fichier du recensement.

#### **Combiner INDEX et EQUIV**

Maintenant que vous comprenez ce que réalisent INDEX et MATCH \[EQUIV\] séparément, voyons ce que les deux fonctions peuvent faire lorsqu'elles sont combinées.

Supposons que vous souhaitiez importer automatiquement les données sur la population en âge de voter (VAP) depuis votre fichier de recensement dans votre fichier d'inscription des électeurs. La combinaison INDEX MATCH \[INDEX EQUIV\] va pouvoir vous aidez à le faire !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/19_index_match_example_1.png)]({{ site.url }}/\_assets/images/academy/module_7/19_index_match_example_1.png)

N'oubliez pas que la fonction INDEX peut renvoyer à des valeurs (le contenu réel d'une cellule) lorsque l'utilisateur sélectionne un tableau ou une plage, un numéro de ligne et / ou un numéro de colonne. Fonction = **INDEX (array, row_num, \[column_num\])**, i.e. **INDEX (matrice, no_lig, \[no_col\])**. Cependant, lorsque vous travaillez avec des ensembles de données complets pour l'inscription des électeurs et le recensement d'Opendya - vous ne connaîtrez pas toujours automatiquement le numéro de ligne dans lequel la valeur que vous recherchez apparaît. C’est là que la fonction MATCH \[EQUIV\] intervient !

N'oubliez pas que la fonction MATCH \[EQUIV\] renvoie à la position (numéro de ligne ou de colonne) de la valeur que vous recherchez spécifiquement dans une plage de cellules (une seule colonne ou ligne). Fonction = **MATCH (lookup_value, lookup_array, \[match_type\]),** i.e. **EQUIV (valeur_cherchée, tableau_recherche, \[type\]).** Vous pouvez utiliser la fonction MATCH \[EQUIV\] pour servir d’argument **row_num** \[**no_lig\]** à votre fonction INDEX. Cela signifie qu'Excel recherche automatiquement le numéro de ligne que vous devez utiliser pour vous renvoyer à votre valeur INDEX. Voici comment en pratique cela fonctionne.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/20_index_match_example_2.png)]({{ site.url }}/\_assets/images/academy/module_7/20_index_match_example_2.png)

Dans l'exemple ci-dessus, nous demandons à Excel de nous fournir automatiquement la population en âge de voter (VAP) des circonscriptions d'Opendya, en extrayant les données du tableau de recensement vers le tableau d'inscription des électeurs. Voici comment la formule se décompose:

##### INDEX

- Parce que nous souhaitons in fine que les données sur la population en âge de voter (VAP) soient entrées dans la cellule E2, nous savons que notre valeur de retour souhaitée se situe dans les cellules C10: C14 pour le VAP de Disputana. Cette plage nous servira d’array **\[matrice\]** pour notre formule.
- La fonction MATCH \[EQUIV\] servira d'argument **row_num** \[**no_lig\]** de notre fonction INDEX. Dans ce cas, MATCH \[EQUIV\] nous indique sur quelle ligne la valeur de la cellule B2 (District Code = 23) se situe dans notre plage. Étant donné que District, District_Codes et leurs VAP correspondants se trouvent sur la même ligne de notre tableau, nous savons que le numéro de ligne de «District Code 23» correspond au numéro de ligne de son VAP.

##### MATCH \[EQUIV\]

- La cellule B2, soit le code de la circonscription de Disputana : 23, servira de **lookup_value \[valeur_cherchée\]** dans notre fonction MATCH \[EQUIV\]. C'est la valeur cherchée par Excel et dont le numéro de ligne sera donnée par la fonction MATCH \[EQUIV\]
- Notre **lookup_array \[tableau_recherche\]**, ou plage, est B10: B14, car c'est là que tous les codes de circonscriptions sont spécifiés dans nos données de recensement.
- Notre **match_type \[type\]** est "0", ce qui signifie que nous recherchons une correspondance exacte pour la cellule B2, donc "23" dans notre plage B10: B14.

Lorsque nous appuyons sur Entrée, notre formule INDEX MATCH \[INDEX EQUIV\] nous donne automatiquement le VAP de Disputana, pour le code de circonscription 23 ! Si nous reproduisons la même logique de formule dans d'autres circonscriptions, nous pouvons également extraire leurs VAP du tableau de données du recensement. Voici une copie de notre feuille de calcul une fois que nous avons fait correspondre toutes les données VAP d'un tableau à l'autre.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/21_index_match_example_3.png)]({{ site.url }}/\_assets/images/academy/module_7/21_index_match_example_3.png)

Et c'est ainsi que fonctionne la formule INDEX MATCH \[INDEX EQUIV\] ! Nous espérons que vous avez maintenant une compréhension de base de la logique qui se cache derrière cette formule.

#### **Pourquoi utiliser INDEX MATCH \[INDEX EQUIV\] par rapport à d’autres méthodes ?**

À ce stade, vous vous demandez peut-être pourquoi nous avons utilisé cette formule Excel complexe, INDEX MATCH \[INDEX EQUIV\], alors que vous auriez pu soit copier-coller manuellement les données de la population en âge de voter, soit trier puis copier-coller les données. Voici pourquoi !

L'une des principales raisons pour lesquelles nous automatisons de cette manière le processus de correspondance des données est d'éviter les erreurs humaines. Il est essentiel d'éviter les erreurs lorsque vous travaillez avec des données électorales sensibles et cela permet aussi de vous assurer que votre analyse est de bonne qualité. Copier et coller manuellement des données est très sujet aux erreurs humaines (en particulier lorsque vous travaillez avec de grands ensembles de données) et est déconseillé dans la plupart des cas. Le tri des données est également sujet aux erreurs humaines et, dans de nombreux cas, ne vous aidera pas à atteindre votre objectif. Par exemple, le nombre de lignes ou l'organisation de séries de données triés que vous essayez de faire correspondre peut ne pas être exactement le même, ce qui rend un simple copier-coller impossible (ou très délicat !). Enfin, nous travaillons souvent avec des données électorales qui contiennent des milliers, voire des dizaines de milliers de lignes. Copier et coller manuellement des données n’est pas seulement sujet à des erreurs, il faudrait de nombreuses heures de travail insensé. Donc, prendre une minute ou deux pour configurer une formule INDEX MATCH \[INDEX EQUIV\] peut vous faire économiser de nombreuses heures de travail ! Et plus vous utiliserez INDEX MATCH \[INDEX EQUIV\], plus vous pourrez configurer la formule rapidement.

INDEX MATCH \[INDEX EQUIV\], bien que complexe, est donc l'un des moyens les plus précis et efficaces pour relier ou rechercher des données parmi différentes sources.

### Relier les données du recensement

Il est maintenant temps de mettre vos nouvelles connaissances à l'épreuve ! Dans cette partie du module, vous utiliserez la formule INDEX MATCH \[INDEX EQUIV\] à trois différentes reprises pour faire correspondre les données du fichier de données du recensement au fichier de données d'inscription des électeurs - créant ainsi un fichier de référence pour l'analyse.

Assurez-vous que vos fichiers d'inscription des électeurs et de recensement sont ouverts, et nous pourrons commencer.

#### **Matching VAP_Tot (Relier la population totale en âge de voter)**

Dans votre première application pratique d'INDEX MATCH \[INDEX EQUIV\], nous aimerions que vous puissiez relier avec précision les données sur les populations en âge de voter pour chacune des circonscriptions d'Opendya dans votre fichier de données de recensement (colonne D, VAP*Tot) à la colonne vide Match_VAP_Tot (L) dans votre fichier de données d’inscription électorale. *(Notez que si vous n'avez pas téléchargé un nouveau fichier de données d'inscription électorale, vous devrez créer une nouvelle colonne pour Match*VAP_Tot et pour tous les calculs restants à venir.)*

Nous allons commencer notre formule dans la cellule L2 de notre fichier d'inscription des électeurs. Dans ce fichier, la ligne 2 contient des données relatives à la circonscription de Legosakool. Encore une fois, notre objectif ici en utilisant INDEX MATCH \[INDEX EQUIV\] est d'extraire automatiquement la population totale en âge de voter de Legosakool (VAP_Tot) de notre fichier de données de recensement dans notre fichier d'inscription des électeurs.

1\. Dans la cellule L2 de votre fichier d'inscription des électeurs, tapez "=INDEX(". Comme pour les autres fonctions, Excel vous indique les spécifications ou les arguments requis pour que cette fonction marche.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/22_index_match_vap_tot.png)]({{ site.url }}/\_assets/images/academy/module_7/22_index_match_vap_tot.png)

2\. Vous devez maintenant sélectionner votre **matrice de données**. N'oubliez pas que dans une fonction INDEX, votre array \[matrice\] est le groupe de cellules dans lequel se trouve la valeur souhaitée. En d'autres termes, la matrice indique à Excel où rechercher votre valeur. Puisque vous essayez spécifiquement de trouver la population en âge de voter pour Legosakool, **votre array \[matrice\] est la colonne D (VAP_Tot) de votre fichier de données de recensement**.

Tout en laissant votre fonction INDEX ouverte dans le fichier d'inscription des électeurs, cliquez sur votre fichier de données du recensement et sélectionnez toute la colonne D en cliquant sur l'étiquette de la colonne portant la lettre «D.» Notez qu'Excel remplit automatiquement votre formule en fonction de l'endroit où vous avez cliqué, y compris lorsque vous avez sélectionné un tableau dans un autre fichier source.

N’appuyez pas encore sur Entrée !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/23_vap_tot_click.png)]({{ site.url }}/\_assets/images/academy/module_7/23_vap_tot_click.png)

3\. Tapez une virgule "," \[point-virgule " ; "\] et écrivez "MATCH( ", i.e., "EQUIV (". Vous pouvez garder votre fichier de recensement ouvert. Tant que vous n'appuyez pas sur Entrée, Excel sait que vous travaillez toujours sur une formule qui provient de votre fichier d’inscription électorale.

Vous êtes maintenant à l'étape où vous devez imbriquer une fonction MATCH \[EQUIV\] dans votre fonction INDEX. Comme nous l'avons mentionné précédemment, MATCH \[EQUIV\] remplira l’argument row_num \[no_lig\] de la fonction INDEX.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/24_vap_tot_match.png)]({{ site.url }}/\_assets/images/academy/module_7/24_vap_tot_match.png)

4\. Tout en laissant votre fonction ouverte, cliquez de nouveau sur votre fichier de données d'inscription des électeurs. Cliquez sur la cellule B2, "1." Le contenu de la cellule B2, le code de district de Legosakool, servira de **lookup_value \[valeur_cherchée\]** dans votre fonction MATCH \[EQUIV\].

Nous avons sélectionné un District_Code au lieu d'un District_Name comme lookup_value \[valeur_cherchée\] car elle est destinée à servir d'identifiant unique. Vos fichiers de recensement et d'inscription des électeurs contiennent des colonnes pour District_Code et District_Name, mais relier les données correspondantes en fonction du nom est plus sujet aux erreurs en raison d'orthographes erronées, d'orthographes différentes ou de doublons.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/25_vap_tot_match_criteria.png)]({{ site.url }}/\_assets/images/academy/module_7/25_vap_tot_match_criteria.png)

5\. Tapez une virgule "," \[point-virgule " ; "\]. Vous devez maintenant spécifier votre lookup_array \[tableau_recherche\]. Vous avez déjà demandé à Excel de trouver une correspondance pour la valeur « 1 » de District_Code, qui correspond à la circonscription Legosakool. Ensuite, vous devez indiquer à Excel où chercher afin de renvoyer le numéro de ligne correct.

Cliquez de nouveau sur votre fichier de données du recensement et sélectionnez toute la colonne B, District_Code. Ici, vous avez demandé à Excel de vérifier sur quelle ligne de votre fichier de recensement les données pour Legosakool sont stockées (marquées par une valeur District_Code de 1).

Une fois qu'Excel a trouvé sur quelle ligne les données de Legosakool apparaissent dans votre fichier de recensement, le numéro de ligne renvoyé par la fonction MATCH \[EQUIV\] deviendra le critère **row_num \[no_lig\]** de votre fonction INDEX. N'oubliez pas que votre objectif global est de copier avec précision les données sur la population en âge de voter du fichier de recensement pour Legosakool dans votre fichier d'inscription des électeurs. Si vous avez utilisé MATCH \[EQUIV\] avec succès, Excel sait maintenant sur quel numéro de ligne de la colonne D (VAP_Tot) se trouvent les données de population en âge de voter de Legosakool.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/26_vap_tot_match_array.png)]({{ site.url }}/\_assets/images/academy/module_7/26_vap_tot_match_array.png)

6\. Tapez une autre virgule ",", \[point-virgule " ; "\] puis tapez "0". Cela indique à Excel que vous recherchez une correspondance exacte pour la valeur District_Code de "1" dans la colonne B de votre fichier de données de recensement.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/27_vap_tot_match_type.png)]({{ site.url }}/\_assets/images/academy/module_7/27_vap_tot_match_type.png)

7\. Entrez deux parenthèses fermées "))", car vous avez entré deux fonctions au total, puis appuyez sur Entrée. Quelle valeur Excel a donné pour la population en âge de voter de Legosakool ?

Si vous avez obtenu 91 696 électeurs, vous avez terminé avec succès votre première application INDEX MATCH \[INDEX EQUIV\] !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/28_vap_tot_match_final.png)]({{ site.url }}/\_assets/images/academy/module_7/28_vap_tot_match_final.png)

8\. Vous devez à présent répliquer cette combinaison de fonctions afin d'extraire les données sur la population en âge de voter pour toutes les autres circonscriptions d'Opendya. Ne vous inquiétez pas, vous n'aurez pas besoin d'INDEX MATCH \[INDEX EQUIV\] 46 fois ! Cliquez simplement sur le petit carré dans le coin inférieur droit de la cellule L2.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/29_vap_tot_match_duplicate.png)]({{ site.url }}/\_assets/images/academy/module_7/29_vap_tot_match_duplicate.png)

Excel doit renseigner automatiquement vos calculs dans les lignes restantes de la colonne L, en conservant constamment toutes les spécifications de la formule, à l'exception de la valeur **lookup_value \[valeur_cherchée\]** dans votre fonction MATCH \[EQUIV\]. Excel a prévu que vous vouliez que vos valeurs de recherche varient selon les lignes. Cliquez sur une cellule aléatoire dans la colonne L (Match_VAP_Tot) pour vous assurer qu'Excel a fait ce dont vous aviez besoin.

Par exemple, l'image ci-dessous met en évidence la valeur renvoyée dans Match_VAP_Tot pour la circonscription de Goro. Vous remarquerez qu'Excel a automatiquement changé la valeur MATCH \[EQUIV\] lookup_value \[valeur_cherchée\] en prenant le District_Code de la circonscription de Goro. Cela garantit que les données sur la population en âge de voter qui sont renvoyées correspondent uniquement à la circonscription de Goro (District_Code = 7), par opposition à un autre district d'Opendya.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/30_vap_tot_match_duplicate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/30_vap_tot_match_duplicate_final.png)

#### **Matching Female_VAP \[Relier la population féminine en âge de voter\]**

Nous espérons que vous êtes prêt pour une deuxième application de la formule INDEX MATCH \[INDEX EQUIV\] ! Cette fois, nous cherchons à remplir la colonne M, Match_Female_VAP, avec les données sur les femmes en âge de voter pour chaque circonscription d'Opendya.

Nous appliquerons une logique très similaire à celle réalisée précédemment pour la formule de Match_VAP_Tot. Prenez un moment pour réfléchir à la façon dont vous pourriez relier les données de votre fichier de recensement à votre fichier d'inscription des électeurs. Pensez aux colonnes dont vous aurez besoin pour référencer et / ou extraire des données ?

1\. Dans la cellule M2 de votre fichier d'inscription des électeurs, tapez "= INDEX (".

2\. Sélectionnez maintenant votre **array \[matrice\]** INDEX, qui est la plage de données que vous souhaitez qu'Excel renvoie dans la cellule M2. Cette fois-ci, vous êtes intéressé par les données sur la population féminine en âge de voter de Legosakool présentées dans la colonne E, Female_VAP, de votre fichier de données de recensement. Cliquez sur vos données de recensement et sélectionnez toute la colonne E.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/31_female_vap_array.png)]({{ site.url }}/\_assets/images/academy/module_7/31_female_vap_array.png)

3\. Tapez une virgule ","\[point-virgule " ; "\], puis MATCH \[EQUIV ("\]. Vous utiliserez à nouveau la formule EQUIV pour localiser la ligne contenant les données de Legosakool dans votre fichier de recensement. Les résultats de votre formule EQUIV serviront de critère **row_num \[no_lig\]** dans votre fonction INDEX. Ce MATCH \[EQUIV\] sera exactement le même que votre calcul précédent pour Match_VAP_Tot.

4\. Avec votre fonction ouverte, cliquez de nouveau sur votre fichier de données d'inscription des électeurs. Cliquez sur la cellule B2, "1." Le contenu de la cellule B2, le code de la circonscription de Legosakool, servira à nouveau de **lookup_value \[valeur_cherchée\]** dans votre fonction MATCH \[EQUIV\].

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/32_female_vap_lookup_val.png)]({{ site.url }}/\_assets/images/academy/module_7/32_female_vap_lookup_val.png)

5\. Tapez une virgule "," \[point-virgule " ; "\] et spécifiez votre **lookup_array \[tableau_recherche\]**. Vous avez déjà demandé à Excel de trouver une correspondance pour la valeur District_Code de 1, ce qui correspond à Legosakool. Vous devez maintenant indiquer à Excel où chercher les codes de district afin de vous donner le bon numéro de ligne.

Cliquez de nouveau sur votre fichier de données du recensement et sélectionnez toute la colonne B, District_Code. Ici, vous avez demandé à Excel de vérifier sur quelle ligne de votre fichier de recensement les données pour Legosakool sont stockées (marquées par la valeur 1 du District_Code).

6\. Tapez une autre virgule "," \[point-virgule " ; "\], puis tapez "0" pour spécifier que vous souhaitez une correspondance exacte pour la valeur District_Code de "1" dans la colonne B de votre fichier de données de recensement.

7\. Tapez deux parenthèses fermées “))” et appuyez sur Entrée. Quelle valeur Excel vous donne pour la population féminine en âge de voter à Legosakool ?

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/33_female_vap_lookup_prelim.png)]({{ site.url }}/\_assets/images/academy/module_7/33_female_vap_lookup_prelim.png)

8\. Maintenant, reproduisez vos formules INDEX MATCH \[INDEX EQUIV\] dans toutes les circonscriptions restantes d'Opendya. (Astuce: double-cliquez sur le coin inférieur droit de la cellule M2.)

Maintenant, revérifiez quelques-unes de vos réponses pour vous assurer que vous étiez sur la bonne voie !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/34_female_vap_lookup_final.png)]({{ site.url }}/\_assets/images/academy/module_7/34_female_vap_lookup_final.png)

#### **Matching Male_VAP \[Relier la population masculine en âge de voter\]**

Enfin et surtout, nous aimerions que vous compariez les données du recensement sur la population masculine en âge de voter d'Opendya avec le fichier de données d'inscription des électeurs. Vous utiliserez pour se faire la colonne N, Match_Male_VAP. Avant de commencer, réfléchissez à la façon dont cette formule pourrait différer de vos deux utilisations précédentes d'INDEX MATCH \[INDEX EQUIV\] ? Quels arguments ou critères devrez-vous modifier pour faire correspondre correctement ces données ? Qu’est ce qui ne nécessite pas de modifications ?

Nous aimerions que vous essayiez cette formule INDEX MATCH \[INDEX EQUIV\] sans trop d'instructions. Si vous avez besoin d'aide, cliquez sur les exercices précédents pour Match_VAP_Tot et Match_Female_VAP. À titre indicatif, l'étape 2 où vous sélectionnez votre tableau INDEX est le seul point sur lequel vos formules doivent différer entre les colonnes L-N.

Vous voyez, la formule INDEX MATCH \[INDEX EQUIV\] est plus facile que prévu ! Vérifiez vos réponses ci-dessous.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/35_male_vap_final.png)]({{ site.url }}/\_assets/images/academy/module_7/35_male_vap_final.png)

#### **Coller les données correspondantes en tant que valeurs**

Vous avez réussi à extraire les données correspondantes de votre fichier de recensement vers votre fichier d'inscription des électeurs ! Cependant, vous remarquerez que les données des colonnes L-N de votre fichier de données d’inscriptions ne sont pas des nombres ou des valeurs, elles restent en fait des références de formule qui sont extraites de données d'autres sources. Bien que vous puissiez toujours effectuer des calculs à l'aide de ces données, vous risquez de perdre tous les chiffres du VAP que vous venez de relier si vous supprimez ou perdez le fichier source de données de recensement. Les liens dans vos formules INDEX MATCH \[INDEX EQUIV\] se briseront. Vous ne pourrez pas non plus envoyer correctement votre jeu de données à une autre personne, car leur fichier contiendra des erreurs de référence dans les colonnes L-N, puisque les données sont extraites d’un fichier de données du recensement séparé.

Pour éviter que cela ne se produise, envisagez de copier toutes les colonnes L-N et de coller les données «en tant que valeurs». Voici comment procéder.

1\. Sélectionnez toutes les colonnes L-M en cliquant sur la lettre "L" en haut de la colonne et, tout en la maintenant enfoncée, faire glisser votre curseur sur la colonne "N."

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/36_paste_vals_1.png)]({{ site.url }}/\_assets/images/academy/module_7/36_paste_vals_1.png)

2\. Tapez "Ctrl + C" qui est le raccourci clavier pour la copie. Vous pouvez également faire un clic droit et sélectionner «Copier».

3\. Une fois que vos données ont été copiées, faites un clic droit. Sous « Paste Options \[«Options de collage»\], sélectionnez l'option « Paste as Values » \[«Coller des valeurs»\] illustrée ci-dessous (avec le symbole «123»).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/37_paste_vals_2.png)]({{ site.url }}/\_assets/images/academy/module_7/37_paste_vals_2.png)

Maintenant, cliquez sur quelques cellules dans les colonnes L-N et notez que la barre de formule affiche maintenant ces cellules sous forme de nombres plutôt que sous forme de formules.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/38_paste_vals_3.png)]({{ site.url }}/\_assets/images/academy/module_7/38_paste_vals_3.png)

_Conseil: Pour plus de sécurité, avant de coller vos données en tant que valeurs, enregistrez une copie de votre onglet avec les références de formule INDEX MATCH \[INDEX EQUIV\] au cas où vous commettriez accidentellement une erreur lors du processus de collage en tant que valeurs et que vous deviez revenir sur vos pas. Vous pouvez le faire en cliquant avec le bouton droit sur votre onglet intitulé "Registration Data" en bas de votre fenêtre Excel, en sélectionnant “Move or Copy” \["Déplacer ou copier"\] et en cochant la case "Create a Copy" \["Créer une copie"\]._

### Calculer les taux d’inscription circonscription par circonscription

Grâce à vos compétences d’expert sur la formule INDEX MATCH \[INDEX EQUIV\], nous avons maintenant un fichier consolidé avec la population en âge de voter d'Opendya et les données des électeurs inscrits sur les listes électorales dans toutes les circonscriptions. La combinaison des données du recensement et des données d'inscription des électeurs nous permet de calculer le pourcentage d'électeurs admissibles au vote inclus dans le registre électoral d'Opendya après l'exercice d’actualisation de 2014.

#### **Calculated_Reg_Rate \[le taux d’inscription calculé\]**

Nous allons utiliser la division dans Excel pour calculer le taux d'électeurs inscrits dans chaque district d'Opendya en 2014. Nous le ferons dans la colonne O de votre fichier d'inscription des électeurs, intitulée Calculated*Reg_Rate. *(Remarque: si vous n'avez pas téléchargé un nouveau fichier de données d'inscription des électeurs au début du module 7 et que vous utilisez plutôt vos fichiers des modules 5-6, vous devez créer une nouvelle colonne pour Calculated*Reg_Rate ainsi que pour tous les besoins des analyses restantes.)*

Pour calculer les taux d'inscription par circonscription, nous devons diviser les chiffres de la colonne I, Reg_Tot_Final, par les chiffres de la colonne L, Match_VAP_Tot.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/formula_1_District_by_District_Rates.png)]({{ site.url }}/\_assets/images/academy/module_7/formula_1_District_by_District_Rates.png)

1\. Dans la cellule O2, tapez un signe égal "=". Cliquez ensuite sur la cellule I2. Vous remarquerez qu'Excel ajoute automatiquement le terme «I2» à votre formule une fois que vous avez cliqué sur cette cellule. Alternativement, vous pouvez simplement taper le terme «I2» et Excel fera le lien automatiquement avec cette cellule.

2\. Tapez maintenant une barre oblique «/» et cliquez sur la cellule L2, la population en âge de voter à Legosakool.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/39_calculated_reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/39_calculated_reg_rate.png)

3\. Appuyez sur Entrée ! Quel est le taux d'inscription à Legosakool ?

4\. Maintenant, reproduisez votre formule de division dans toutes les circonscriptions restantes d'Opendya. (Astuce: Double-cliquez sur le carré dans le coin inférieur droit de la cellule O2. Pour être sûr, cliquez sur quelques cellules dans la colonne O pour vous assurer qu'Excel a correctement répliqué votre calcul de division dans les autres circonscriptions.) Vérifiez vos réponses ci-dessous !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/40_calculated_reg_rate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/40_calculated_reg_rate_final.png)

Notez que vos cellules peuvent ne pas se remplir automatiquement sous forme de pourcentages, mais plutôt sous forme de décimales ou de 0 et de 1. Si tel est le cas, cliquez sur le haut de la colonne O pour sélectionner la colonne entière. Faites un clic droit et sélectionnez le symbole «%». Vous pouvez également via un clic droit, sélectionner « Format Cells » \[«Format de cellules»\], puis sélectionnez « Percentage » \[«Pourcentage»\] dans le menu de gauche de la fenêtre contextuelle.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/41_format_cells.png)]({{ site.url }}/\_assets/images/academy/module_7/41_format_cells.png)

#### **Calculated_Female_Reg_Rate \[Le taux d’inscription féminine calculé\]**

Maintenant, nous aimerions que vous calculiez le taux d'inscription parmi les électrices admissibles dans chacune des circonscriptions d'Opendya. Une autre formule de division rapide devrait faire l'affaire ! Utilisons la colonne P, Calculated_Female_Reg_Rate.

Avant de vous expliquer ceci, quelles colonnes pensez-vous que vous devrez utiliser pour calculer les taux d'inscription des femmes ?

Voici votre logique mathématique pour cette analyse:

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/formula_2_Calculated_Female_Reg_Rate.png)]({{ site.url }}/\_assets/images/academy/module_7/formula_2_Calculated_Female_Reg_Rate.png)

1\. Commencez votre calcul de division par un signe égal "=". Cliquez ensuite sur la cellule J2, le nombre final d’électrices inscrites à Legosakool.

2\. Tapez une barre oblique «/» et cliquez sur la cellule M2, la population féminine admissible au vote à Legosakool.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/42_calculated_fem_reg_rate_formula.png)]({{ site.url }}/\_assets/images/academy/module_7/42_calculated_fem_reg_rate_formula.png)

3\. Appuyez sur Entrée. Quel est pourcentage de femmes admissibles inscrites pour voter à Legosakool ? Nous espérons que vous avez calculé un taux d'inscription des femmes de 70% !

4\. Maintenant, reproduisez votre calcul dans toutes les circonscriptions restantes d'Opendya. Croisez quelques-unes de vos réponses ci-dessous pour vous assurer que les résultats correspondent.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/43_calculated_fem_reg_rate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/43_calculated_fem_reg_rate_final.png)

#### **Calculated_Male_Reg_Rate \[Le taux d’inscription masculine calculé\]**

Maintenant, calculez vous-même le pourcentage d'électeurs masculins admissibles inscrits dans les différentes circonscriptions. Si vous avez besoin d'aide, reportez-vous aux calculs des taux d’inscription précédents.

Vérifiez vos calculs ci-dessous !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/44_calculated_male_reg_rate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/44_calculated_male_reg_rate_final.png)

#### **Qu’est-ce que vous observez ?**

Maintenant que nous avons calculé les taux totaux, masculins et féminins d'inscription électorale dans toutes les circonscriptions, prenez un moment pour parcourir les données. Repensez au contexte politique qui vous a été présenté au début de ce module.

1. Quelles sont les circonscriptions qui vous paraissent avoir des taux d'inscription globaux particulièrement bas ? Qu'en est-il des taux les plus bas pour les électeurs masculins et féminins ? De quels types de circonscriptions s'agit-il ? Qu'est-ce qui pourrait expliquer ces tendances ?
2. Quelles sont les circonscriptions qui vous paraissent avoir des taux d'inscription globaux particulièrement élevés ? Qu'en est-il des taux les plus élevés pour les électeurs masculins et féminins ? De quels types de circonscriptions s'agit-il ? Qu'est-ce qui pourrait expliquer ces tendances ?

## Évaluer les taux d’inscription entre les différents types de circonscriptions

Félicitations pour avoir atteint la dernière partie du module 7 ! Vous pouvez mettre de côté vos compétences INDEX MATCH \[INDEX EQUIV\] pendant que nous passons à un autre type d'analyse à l'aide de la fonction SUMIF \[SOMME.SI\]. Nous utiliserons l'onglet Data_Summary de votre fichier d'inscription des électeurs pour le reste de cet exercice. N'hésitez pas à fermer votre fichier de données du recensement.

Si vous avez terminé les modules 5 et / ou 6, vous vous souviendrez que nous avons utilisé SUMIF \[SOMME.SI\], et les pourcentages pour résumer et analyser les données d'inscription électorale selon les différents types de circonscriptions d'Opendya. Nous ferons un type d’analyse similaire dans cette dernière partie du module 7 pour évaluer les différences de taux d’inscription entre les circonscriptions urbaines d’Opendya, les circonscriptions rurales et la circonscription de la capitale.

#### **Utiliser SUMIF \[SOMME.SI\] pour ajouter des données dans une catégorie spécifique.**

Pour rappel, la fonction SUMIF \[SOMME.SI\] est utilisée pour additionner des valeurs dans une plage spécifique de cellules qui répondent à un critère que vous recherchez. Dans le module 7, nous utiliserons deux fois [SUMIF](https://support.office.com/fr-fr/article/somme-si-somme-si-fonction-169b8c99-c05c-4483-a712-1697a653039b) \[SOMME.SI\] pour 1) additionner respectivement la population en âge de voter des circonscriptions urbaines, rurales et de la capitale; et 2) additionner le nombre d'électeurs inscrits des trois types de circonscription.

Voici comment la fonction est structurée: **SUMIF (range, criteria, sum_range\[\]),** i.e, **SOMME.SI(plage;critère;\[somme_plage\])**

- **Range \[Plage\]**: La plage spécifie la zone de cellules que vous souhaitez évaluer selon vos critères spécifiques. Pour nos besoins, nous additionnons les données en fonction du type de circonscription. Puisque le «type de circonscription» est notre critère, quelle colonne de votre feuille de calcul pensez-vous que nous devons utiliser pour notre plage ? Dans quelle colonne examinons-nous des informations sur le type de circonscription ? (Réponse = colonne C, type)
- **Criteria \[Critère\]**: Votre critère indiquera si un nombre doit être additionné ou non. Vos critères indiqueront si un nombre doit être additionné ou non. Les critères peuvent prendre la forme d'un nombre, d'une expression, d'une référence de cellule, d'un texte ou d'une fonction qui définit les cellules qui seront ajoutées. Pour cet exercice, vous devrez choisir parmi trois critères différents \[circonscription urbaine, rurale et circonscription de la capitale\] et demander à Excel d'ajouter les numéros de recensement et d'inscription des électeurs des circonscriptions qui appartiennent à l'une de ces catégories spécifiques.
- **Sum_range \[somme_plage\]**: permet d’indiquer à Excel quelles cellules sont à additionner, si vous voulez additionner des cellules autres que celles spécifiées dans l'argument « plage » Pour cet exercice, votre sum-range \[somme_plage\] sera soit les données de la population en âge de voter, soit les données des électeurs inscrits.

Mettons cela en pratique dans notre onglet Data_Summary !

#### **SUMIF Pop_Tot \[SOMME.SI de la population total en âge de voter\]**

Dans la colonne B, Pop_Tot, de votre onglet Data_Summary, utilisons SUMIF \[SOMME.SI\] pour additionner les totaux de la population en âge de voter pour chacun des trois types de circonscription d'Opendya. Cela nous dira combien d'électeurs admissibles vivent dans les circonscriptions urbaines par rapport aux circonscriptions rurales ou à la circonscription de la capitale.

Commençons par additionner le nombre d'électeurs inscrits pour les circonscriptions urbaines, puis passons aux circonscriptions rurales et à celle de la capitale.

1\. Dans la cellule B2, tapez "= SUMIF \[SOMME.SI\] (". Notez qu'Excel vous fournit automatiquement les informations nécessaires pour compléter le reste de la fonction.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/45_type_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/45_type_sumif.png)

2\. Nous devons maintenant spécifier **la plage** à partir de laquelle Excel peut extraire vos données. Étant donné que nous recherchons un type de circonscription spécifique, votre plage sera la colonne C, Type, dans l'onglet Registration_Data. Pour référencer votre plage, laissez votre fonction ouverte et cliquez sur l'onglet Registration_Data dans le coin inférieur gauche de votre fichier. (Ne cliquez pas sur Entrée avant de passer à l'onglet des données principales, sinon votre fonction ne continuera pas à se remplir !)

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/46_click_tab_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/46_click_tab_sumif.png)

Notez que lorsque vous revenez à Registration_Data, votre barre de formule continue de se mettre à jour en fonction de l'endroit où vous cliquez. Excel voit que vous essayez d'établir une connexion entre votre calcul SUMIF \[SOMME.SI\] sur votre onglet Data_Summary et les informations sur votre onglet Registration_Data.

Pour terminer la sélection de la plage, sélectionnez toute la colonne C en cliquant sur le haut de la colonne. Notez à nouveau que tout en cliquant Excel remplit automatiquement votre formule.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/47_click_c_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/47_click_c_sumif.png)

Vous avez maintenant sélectionné votre plage ! Tapez une virgule "," \[point-virgule " ;"\] et nous allons continuer.

3\. SUMIF \[SOMME.SI\] exige maintenant que vous sélectionniez vos critères spécifiques. Vos critères indiquent à Excel ce qu'il faut additionner et ce qu'il faut omettre. Sans appuyer sur Entrée, cliquez de nouveau sur l'onglet Data_Summary et cliquez sur la cellule A2 «Urban». Vous venez de dire à Excel que vous souhaitez uniquement qu'il saisisse et additionne les données des circonscriptions urbaines d'Opendya.

Tapez une autre virgule «,» \[point-virgule " ;"\].

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/48_click_urban_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/48_click_urban_sumif.png)

4\. Enfin, nous devons indiquer à Excel les données à additionner en fonction de nos critères (urban). Dans ce cas, nous additionnons la population totale en âge de voter. Ces informations sont désormais stockées dans la colonne L, Match_VAP_Tot, de l'onglet Registration_Data (après notre exercice INDEX MATCH \[INDEX EQUIV\]). En laissant votre fonction ouverte, cliquez de nouveau sur l'onglet Registration_Data et sélectionnez toute la colonne L.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/49_click_vap_tot_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/49_click_vap_tot_sumif.png)

5\. Fermez vos parenthèses ")" et appuyez sur Entrée ! Quelle est la population totale en âge de voter dans les circonscriptions urbaines d'Opendya ?

Nous espérons que vous avez calculé 3 072 916 citoyens !

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/50_match_vap_tot_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/50_match_vap_tot_sumif.png)

6\. Maintenant, demandez à Excel de répliquer votre calcul Pop_Tot pour les circonscriptions rurales et la circonscription de la capitale. Pour rappel, vous pouvez double-cliquer sur la case dans le coin inférieur droit de la cellule B2 ou vous pouvez ressaisir manuellement les formules en utilisant «rural» et «capital district» comme nouveaux critères. Voici ce que vous devriez avoir.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/51_final_match_vap_tot_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/51_final_match_vap_tot_sumif.png)

#### **SUMIF RV2014 \[SOMME.SI Nombre d’électeurs inscrits en 2014\]**

Une fonction SUMIF \[SOMME.SI\] accomplie, une de plus à faire ! Vous allez utiliser à nouveau SUMIF \[SOMME.SI\] pour calculer le nombre final d'électeurs inscrits en 2014 dans les trois types de circonscriptions d'Opendya. _(Remarque: si vous avez terminé le module 5 et que vous utilisez votre fichier de données d'origine, vous devriez déjà avoir effectué ce calcul dans la colonne intitulée «RV2014». Si vous préférez, vous pouvez passer au calcul final du module 7, Reg_Rate Si vous n'avez pas fait le module 5 ou si vous souhaitez simplement essayer ce calcul une seconde fois, respectez cette section de l'exercice.)_

Réfléchissez au procédé que vous venez d'utiliser pour additionner les populations en âge de voter selon le type de circonscription. En quoi cette fonction pourrait-elle correspondre ou différer de votre prochaine tâche pour additionner les totaux des électeurs inscrits ?

1\. Répétez les étapes 1 et 2 ci-dessus qui vous indiquent comment sélectionner la plage et les critères de votre fonction SUMIF \[SOMME.SI\]. Votre plage est toujours la colonne C, Type, de votre onglet Registration_Data, et vous sélectionnez toujours un type spécifique de circonscription comme critère, en commençant probablement par les circonscriptions urbaines.

2\. Maintenant, allez dans l'onglet Registration_Data et sélectionnez toute la colonne I, Reg_Tot_Final, qui contient les totaux des électeurs inscrits pour chaque circonscription en 2014.

Voici à quoi ressemblent vos calculs finaux:

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/52_final_rv2014_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/52_final_rv2014_sumif.png)

#### **Calculer Reg_Rate**

Vous avez franchi certaines fonctions difficiles dans ce module, et vous êtes presque à la ligne d'arrivée ! Nous avons un autre calcul à compléter, qui devrait nous éclairer sur les tendances d’inscriptions électorales à Opendya.

Dans la colonne D, Reg_Rate, de votre onglet Data_Summary, calculez les taux d'inscription des électeurs pour les trois types de circonscription d'Opendya. La logique derrière ce calcul est la même que les taux d’inscription circonscription par circonscription que vous avez calculé dans les colonnes O-Q de votre onglet Registration_Data (Calculated_Reg_Rate, Calculated_Female_Reg_Rate et Calculated_Male_Reg_Rate).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/formula_3_Calculating_Reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/formula_3_Calculating_Reg_rate.png)

1\. Dans la cellule D2, correspondant aux circonscriptions urbaines, tapez un signe égal "=". Cliquez ensuite sur la cellule C2, qui indique le nombre d'électeurs inscrits dans les circonscriptions urbaines d'Opendya.

2\. Tapez une barre oblique "/" qui indique que vous souhaitez diviser le contenu de la cellule C2 par autre chose. Cliquez ensuite sur la cellule B2, la population en âge de voter dans les circonscriptions urbaines d'Opendya.

3\. Appuyez sur Entrée. Quel est le taux d'inscription des électeurs urbains à Opendya ?

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/53_urban_reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/53_urban_reg_rate.png)

4\. Maintenant, reproduisez ce calcul pour les circonscriptions rurales et la circonscription de la capitale.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/54_final_reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/54_final_reg_rate.png)

#### **Qu’est-ce que vous observez ?**

Magistralement réalisé !

Maintenant que vous avez calculé les taux d'inscription pour les trois types de circonscriptions d'Opendya, quelles tendances remarquez-vous ? Quels types de circonscriptions ont les taux d'inscription les plus élevés et les plus bas ? En repensant au contexte politique qui vous a été présenté au début de ce module, qu'est-ce qui pourrait expliquer ces tendances ?
