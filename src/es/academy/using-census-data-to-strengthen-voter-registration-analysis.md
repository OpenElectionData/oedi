---
title:
  7. Cómo utilizar los datos del censo para fortalecer el análisis del registro
  de votantes
module_id: 7
excerpt: |-
  En el Módulo 7 consolidará las habilidades que obtuvo en los Módulos 5 y 6 y que le permitirán realizar análisis más avanzados de los datos del registro de votantes. También introduciremos nuevos trucos que le ayudarán a hacer referencias cruzadas de datos provenientes de otras fuentes útiles, como los censos, a fin de complementar su análisis del registro de votantes. El objetivo de este módulo es que al finalizar usted: <ul><li>utilice la combinación de las funciones INDEX MATCH [ÍNDICE COINCIDIR] de Excel,
  </li> <li>domine su entendimiento de las funciones SUMIF [SUMAR.SI],</li> <li>domine las operaciones básicas de MS Excel, como los porcentajes, y</li> <li>analice las consideraciones políticas de los datos analizados.</li> </ul>
---

En el Módulo 7 consolidará las habilidades que obtuvo en los Módulos 5 y 6 y que le permitirán realizar análisis más avanzados de los datos del registro de votantes. También introduciremos nuevos trucos que le ayudarán a hacer referencias cruzadas de datos provenientes de otras fuentes útiles, como los censos, a fin de complementar su análisis del registro de votantes. El objetivo de este módulo es que al finalizar usted:

- utilice la combinación de las funciones INDEX MATCH \[ÍNDICE COINCIDIR\] de Excel,
- domine su entendimiento de las funciones SUMIF \[SUMAR.SI\],
- domine las operaciones básicas de MS Excel, como los porcentajes, y
- analice las consideraciones políticas de los datos analizados.

## ¿Cómo se relacionan los datos del censo con el registro de votantes?

Como ya mencionamos en la [Guía de datos electorales](http://openelectiondata.net/en/guide/) y en los Módulos 5 y 6, un proceso de [registro de votantes](http://openelectiondata.net/en/guide/key-categories/voter-registration/) creíble fomenta la igualdad política y promueve activamente la inclusión de las personas con derecho a votar. Cuando el proceso de registro de votantes es justo y transparente, esto puede aumentar la legitimidad de las elecciones. Por el contrario, si el proceso de registro de votantes se lleva a cabo de una manera inadecuada o no ofrece las mismas oportunidades de participación para todos, puede poner en entredicho la legitimidad de toda una elección. Las organizaciones de la sociedad civil con frecuencia utilizan las estadísticas del registro de votantes para determinar si el proceso en general fue justo e incluyente.

Cuando están disponibles, los datos del censo complementan los datos del registro de votantes al ofrecer información sobre la población con derecho a votar. Con los datos del censo, los analistas pueden evaluar las tendencias en las tasas de registro y entender hasta qué grado los distintos segmentos de una población con derecho a votar están sobre o subrepresentados en el padrón. El Módulo 7 fortalecerá su habilidad para hacer referencias cruzadas de conjuntos de datos complementarios de esta naturaleza y contribuir a este importante tipo de análisis.

## ¡Bienvenido nuevamente a Opendya!

¡La diversión de las elecciones en Opendya continúa! Como recordará, usted logró obtener un conjunto de datos del registro de votantes recopilado por la comisión electoral. El archivo contiene los datos de un ejercicio de cinco semanas que se llevó a cabo para actualizar el padrón electoral en anticipación a las elecciones de 2014. En esta ocasión, usted también logró obtener de la Agencia de Estadísticas los datos del censo sobre la población con derecho a votar de Opendya.

Aunque no es un requisito, le sugerimos terminar primero los Módulos 5 y 6 para que se familiarice con los datos y los antecedentes políticos de Opendya. Por si no ha terminado los módulos anteriores, a continuación le proporcionamos algunos antecedentes importantes que debe conocer:

- Opendya celebró elecciones nacionales en 2010 y en 2014.
- La capital de Opendya se encuentra en el distrito de Opa City (código de distrito: 47), el cual abarca tanto zonas urbanas como rurales.
- Desde las elecciones de 2010 han surgido conflictos violentos en dos distritos: Conflicteri (código de distrito: 9) y Disputana (código de distrito: 23),
- El censo se llevó a cabo antes de que se desatara la violencia en los dos distritos.
- En anticipación a las elecciones de 2014, la comisión electoral de Opendya llevó a cabo un ejercicio de cinco semanas para actualizar el padrón electoral.

## Archivos de datos

Necesitará dos archivos distintos para realizar este ejercicio:

- [datos del registro de votantes]({{ site.url }}/\_assets/academy/exercise/module_7_registered_voters_2014_for_user.xlsx) de Opendya (incluye los mismos datos crudos de los Módulos 5 y 6, pero para este análisis los encabezados de las columnas serán diferentes); y
- [datos del censo]({{ site.url }}/\_assets/academy/exercise/module_7_census_data.xlsx) de Opendya.

Si ya terminó los Módulos 5 y/o 6 puede continuar utilizando el archivo de los datos del registro de votantes, pero necesitará descargar el nuevo archivo del censo. Si continúa utilizando el archivo existente, necesitará agregar unas cuantas columnas adicionales para realizar el análisis del Módulo 7 (tal como se indica en las capturas de pantalla del ejercicio), ya que los encabezados no tendrán ninguna información. Si lo prefiere, también puede descargar el archivo que ya incluye los encabezados de las columnas específicas para realizar el análisis de este módulo.

## Cómo analizar los datos del registro de votantes

Familiarícese con los datos del registro de votantes de Opendya. Seleccione la pestaña Registration_Data \[Datos de registro\] del [archivo del registro de votantes]({{ site.url }}/\_assets/academy/exercise/module_7_registered_voters_2014_for_user.xlsx).

#### **District_Name**

La columna de la izquierda de la pestaña Registration_Data contiene los nombres de todos los distritos de Opendya. Observe que este es el único nivel geográfico que ofrece el conjunto de datos. En este punto no contamos con más información sobre si estos distritos están cerca uno del otro o si se ubican dentro de la misma unidad geográfica en un nivel más alto.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/1_dist_name.png)]({{ site.url }}/\_assets/images/academy/module_7/1_dist_name.png)

#### **District_Code**

La Comisión Electoral de Opendya también le asigna a cada distrito un código o identificador único. Tómese unos minutos para revisar el archivo e identificar el patrón de numeración de los distritos.

Como ya se mencionó en el [Módulo 2: Cómo analizar una lista de centros de votación](https://www.openelectiondata.net/es/academy/reviewing-a-polling-station-list/), los identificadores únicos son sumamente útiles en el manejo de los conjuntos de datos. Nos ayudan a detectar registros duplicados y distinguir adecuadamente entre unidades con nombres similares.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/2_dist_code.png)]({{ site.url }}/\_assets/images/academy/module_7/2_dist_code.png)

#### **Type**

La columna “Type” \[Tipo\], clasifica a cada uno de los distritos de Opendya según sus características. Revise todos los datos para identificar qué descriptores se utilizan para indicar el tipo de distrito. ¿Cuántos tipos diferentes observa?

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/3_type.png)]({{ site.url }}/\_assets/images/academy/module_7/3_type.png)

Existen tres tipos de distritos en este conjunto de datos: urbanos, rurales y la capital.

#### **2010_Registered**

Como ya se mencionó, Opendya celebró elecciones nacionales en 2010. Este conjunto de datos muestra el número final de votantes registrados al momento de las elecciones. Podemos usar la columna D, “2010_Registered”, para comparar las cifras de registro de los dos ciclos electorales. (Tome en cuenta que esta columna se utilizó principalmente para el análisis de los Módulos 5 y 6, pero no la necesitaremos en el Módulo 7.)

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/4_2010_reg.png)]({{ site.url }}/\_assets/images/academy/module_7/4_2010_reg.png)

#### **Reg_Week1, Reg_Week2, Reg_Week3, y Reg_Week4**

Como también se mencionó, en 2014 la comisión electoral de Opendya realizó una actualización del padrón electoral mediante un ejercicio de registro de votantes que duró cinco semanas. Las siguientes cuatro columnas: “Reg_Week1”, “Reg_Week2”, “Reg_Week3”, y “Reg_Week4”, muestran el número total de votantes registrados al final de cuatro de las cinco semanas que duró el ejercicio de actualización de 2014. La diferencia entre cada semana nos da el número de nuevos votantes registrados durante este periodo. (Considere que estas columnas se utilizaron principalmente para el análisis del Módulo 6, pero no las necesitaremos en el Módulo 7.)

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/5_reg_weeks.png)]({{ site.url }}/\_assets/images/academy/module_7/5_reg_weeks.png)

#### **Reg_Tot_Final**

La columna I, “Reg_Tot_Final”, muestra el total de votantes registrados por distrito al final de la quinta semana del ejercicio de registro de 2014.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/6_reg_tot_final.png)]({{ site.url }}/\_assets/images/academy/module_7/6_reg_tot_final.png)

#### **Final_Female, Final_Male**

Las columnas J y K, respectivamente, nos muestran cuántas mujeres y cuántos hombres en total se registraron para votar en las elecciones de 2014 en cada distrito.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/7_final_fem_male.png)]({{ site.url }}/\_assets/images/academy/module_7/7_final_fem_male.png)

#### **Columnas de la L a la Q**

Las columnas de la L a la Q que se encuentran en la pestaña Registration_Data se utilizarán en el análisis del Módulo 7. Se explicarán en más detalle una vez que empecemos con los cálculos.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/8_columns_l-q.png)]({{ site.url }}/\_assets/images/academy/module_7/8_columns_l-q.png)

_(Nota: Si está utilizando el archivo de los datos del registro de votantes de los Módulos 5 y 6, no tendrá las columnas de la L a la Q con la información incluida como se muestra más adelante. Tómese un momento para agregar los siguientes encabezados a las columnas en la pestaña Registration_Data como se muestra a continuación: “Match_VAP_Tot”, “Match_Female_VAP”, “Match_Male_VAP”, “Calculated_Reg_Rate”, “Calculated_Female_Reg_Rate”, “Calculated_Male_Reg_Rate”.)_

#### **Pestaña Data_Summary**

Usted realizará cálculos adicionales en la pestaña Data_Summary \[Resumen de datos\] del archivo del registro de votantes (modificado en los Módulos 5 y 6). Esto se explicará en más detalle cuando se lleve a cabo el análisis.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/9_data_summary.png)]({{ site.url }}/\_assets/images/academy/module_7/9_data_summary.png)

## Cómo analizar los datos del censo

#### **District_Name, District_Code, Type**

Al igual que los datos del registro de votantes, el [archivo de datos del censo]({{ site.url }}/\_assets/academy/exercise/module_7_census_data.xlsx) muestra los nombres de todos los distritos de Opendya (“District_Name”, A) y los identificadores o códigos únicos de cada distrito (“District_Code”, B). También indica el tipo de distrito, es decir, si se trata de zona urbana, rural o la capital (“Type”, C). Estas tres columnas coinciden con los datos incluidos en el archivo del registro de votantes.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/10_distname_code_type.png)]({{ site.url }}/\_assets/images/academy/module_7/10_distname_code_type.png)

#### **VAP_Tot**

En la columna D del archivo de datos del censo se muestra la población en edad de votar (“VAP”, por sus siglas en inglés) que hay en cada uno de los 47 distritos de Opendya.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/11_vap_tot.png)]({{ site.url }}/\_assets/images/academy/module_7/11_vap_tot.png)

#### **Female_VAP, Male_VAP**

En las columnas E y F del archivo de datos del censo, se muestra el total de mujeres y hombres en edad de votar (“VAP”) que hay en cada uno de los 47 distritos de Opendya. La suma de estas dos columnas equivale a la columna “VAP_Tot”.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/12_female_male_vap.png)]({{ site.url }}/\_assets/images/academy/module_7/12_female_male_vap.png)

## Cómo hacer coincidir los datos del censo con los datos del registro de votantes

Tenemos dos conjuntos de datos útiles y complementarios relacionados con el número de votantes registrados en Opendya y la población en edad de votar del país. Combinar los datos del registro de votantes y los datos del censo en un solo archivo nos permitirá realizar un análisis más interesante de las tasas de registro y las tendencias de registro demográfico en Opendya.

Recuerde que el archivo de datos del censo contiene tres columnas (columnas de la A a la C) que coinciden con el archivo de los datos del registro, y tres columnas que ofrecen información nueva relacionada con la población en edad de votar de Opendya (columnas de la D a la F). Nuestra primera tarea importante es agregar cuidadosamente o “hacer coincidir” los datos del censo con los datos del archivo del registro de votantes (columnas de la L a la N). Para hacer esto, debemos asegurarnos de que los datos de la población en edad de votar de cada distrito de Opendya se ubiquen en las filas del distrito correcto en la hoja de cálculo del registro de votantes. Automatizaremos esta tarea empleando una combinación de funciones de Excel conocida como [INDEX MATCH](http://www.randomwok.com/excel/how-to-use-index-match/) \[ÍNDICE COINCIDIR\]. Esta fórmula es un poco complicada, pero sumamente útil en la limpieza y el análisis de datos electorales. ¡Siga con nosotros!

### Panorama general de INDEX MATCH \[INDICE COINCIDIR\]

La fórmula de INDEX MATCH \[INDICE COINCIDIR\] combina dos funciones diferentes de Excel: [INDEX](https://support.office.com/en-us/article/INDEX-function-a5dcf0dd-996d-40a4-a822-b56b061328bd) \[INDICE\] Y [MATCH](https://support.office.com/en-us/article/MATCH-function-e8dffd45-c762-47d6-bf89-533f4a37673a) \[COINCIDIR\].

#### **Función INDEX \[INDICE\]**

La función INDEX \[INDICE\] devuelve o arroja un valor o la referencia a un valor (es decir, número de celda) desde una tabla o rango. En otras palabras, usted especifica un rango de celdas dentro de las cuales está haciendo una búsqueda, así como un número de fila o columna. Entonces Excel busca y le arroja el valor de la celda específica que indicó.

La sintaxis de la fórmula está estructurada de la siguiente manera: **INDEX(array, row_num, \[column_num\]) \[INDICE(matriz; núm_fila; \[núm_columna\])\]**

- **Array \[matriz\]** (obligatorio): es un rango de celdas dentro del cual se están buscando datos.
  - Si la matriz contiene solo una fila o columna, el argumento correspondiente Row_num \[Núm_fila\] o Column_num \[Núm_columna\] es opcional.
- **Row_num \[Núm_fila\]** (obligatorio): selecciona la fila de la matriz desde la cual arrojará un valor. Si se omite Row_num \[Núm_fila\], se necesita Column_num \[Núm_columna\].
- **Column_num \[Núm_columna\]** (opcional): selecciona la columna de la matriz desde la cual arrojará un valor. Si se omite Column_num \[Núm_columna\], se necesita Row_num \[Núm_fila\].

A continuación se muestra un ejemplo de la manera en que se utilizará la función INDEX \[INDICE\] en este ejercicio: supongamos que usted tiene una lista corta de varios distritos de Opendya y las cifras correspondientes de votantes registrados.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/13_index_example_1.png)]({{ site.url }}/\_assets/images/academy/module_7/13_index_example_1.png)

En una celda aparte, usted quiere que Excel busque o arroje el número de votantes registrados en Yodia. Esta información se encuentra en la celda C3. Para esto puede usar INDEX \[INDICE\].

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/14_index_example_2.png)]({{ site.url }}/\_assets/images/academy/module_7/14_index_example_2.png)

En la fórmula anterior, la celda “C2:C5” sirve como la **matriz \[array\]** (resaltada en el cuadrado azul). La matriz es solo el rango o grupo de celdas dentro de las cuales queremos que Excel realice la búsqueda. Entonces, para asegurarnos de que Excel arroje el número de votantes registrados en Yodia, indicamos “2” como el **row_num \[núm_fila\]** o número de fila. Aunque los datos del distrito de Yodia se encuentran en la fila 3 de la hoja de Excel, técnicamente se ubican en la fila 2 de nuestra matriz ya que omitimos la fila 1 (encabezados de columna) de nuestro rango o matriz.

Al oprimir “Enter”, la función INDEX \[INDICE\] busca y arroja el número de votantes registrados en Yodia tal como lo queríamos.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/15_index_example_3.png)]({{ site.url }}/\_assets/images/academy/module_7/15_index_example_3.png)

#### **Función MATCH \[COINCIDIR\]**

Ahora revisemos la función MATCH \[COINCIDIR\], la cual sirve para buscar un elemento determinado dentro de un rango de celdas y así obtener la posición, o número de fila, de dicho elemento. La fórmula se estructura de la siguiente manera:

**MATCH(lookup_value, lookup_array, \[match_type\])\[COINCIDIR(valor_buscado,matriz_buscada, \[tipo_de_coincidencia\])\]**

- **Lookup_value \[valor_buscado\]** (obligatorio): es el valor para el cual desea que Excel encuentre la coincidencia en un rango específico, o lookup_array \[matriz_buscada\].
- **Lookup_array \[matriz_buscada\]** (obligatorio): es el rango de celdas dentro del cual se le pide a Excel que realice la búsqueda. Para la función MATCH \[COINCIDIR\], el rango debe ser una fila o columna continua, en lugar de una tabla. MATCH \[COINCIDIR\] solo puede especificar la posición vertical u horizontal de un valor (no ambas al mismo tiempo).
- **Match_type \[Tipo_de_coincidencia\]** (opcional): este argumento le indica a Excel qué tipo de coincidencia está buscando, o el nivel de especificidad que desea. Match_type \[tipo_de_coincidencia\] se define con los números -1, 0 o 1. Si no se especifica nada, el valor predeterminado de este argumento es 1. Los distintos valores significan lo siguiente:
  - 1 = MATCH \[COINCIDIR\] encuentra el mayor valor que sea menor o igual que el lookup_value \[valor_buscado\]
  - 0 = MATCH \[COINCIDIR\] encuentra el valor que sea igual que el lookup_value \[valor_buscado\]
  - -1 = MATCH \[COINCIDIR\] encuentra el menor valor que sea mayor o igual que el lookup_value \[valor_buscado\]

Regresemos a nuestro ejemplo de Opendya para entender cómo funciona MATCH \[COINCIDIR\]. Además de nuestra pequeña hoja de cálculo del registro de votantes que se muestra en el ejemplo de INDEX \[INDICE\], supongamos que tenemos una tabla aparte que contiene datos del censo sobre la población en edad de votar (“VAP”) de Opendya. Observe que los distritos no están en el mismo orden en todas las tablas.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/16_match_example_1.png)]({{ site.url }}/\_assets/images/academy/module_7/16_match_example_1.png)

La función MATCH \[COINCIDIR\] nos dirá la posición, o número de fila, en que cada distrito de Opendya está organizado en los datos complementarios del censo.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/17_match_example_2.png)]({{ site.url }}/\_assets/images/academy/module_7/17_match_example_2.png)

En la fórmula anterior:

- Especificamos la celda B2, District_Code = 23, como el **lookup_value \[valor_buscado\]**;
- Las celdas “B10:B14” de la tabla de datos del censo funcionan como el **lookup_array \[matriz_buscada\]**, o rango;
- Por último, seleccionamos “0” como el **match_type \[tipo_de_coincidencia\]**, lo que significa que solo queremos una coincidencia exacta de nuestro valor de búsqueda, “23”.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/18_match_example_3.png)]({{ site.url }}/\_assets/images/academy/module_7/18_match_example_3.png)

¡Aquí está! En la columna “Match” \[Coincidencia\], Excel nos dice en qué filas se encuentran los distritos de Opendya dentro de la tabla del censo. Recuerde que omitimos toda la fila 9 (encabezados de columna) del lookup_array \[matriz_buscada\], o rango, por lo que el valor de MATCH \[COINCIDIR\] llega a uno menos que el número de fila de cada distrito en el archivo del censo.

#### **Cómo combinar INDEX \[INDICE\] Y MATCH \[COINCIDIR\]**

Ahora que ya tiene claro lo que INDEX \[INDICE\] y MATCH \[COINCIDIR\] hacen por separado, veamos qué pueden hacer las dos funciones cuando se combinan.

Supongamos que desea incorporar automáticamente los datos de la población en edad de votar (“VAP”) del archivo del censo al archivo del registro de votantes. ¡La combinación INDEX MATCH \[INDICE COINCIDIR\] puede hacer esto!

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/19_index_match_example_1.png)]({{ site.url }}/\_assets/images/academy/module_7/19_index_match_example_1.png)

Recuerde que la función INDEX \[INDICE\] puede arrojar valores (el contenido real de una celda) cuando el usuario selecciona una matriz o rango, un número de fila y/o un número de columna. Fórmula = **INDEX(array, row_num, \[column_num\]) \[INDICE(matriz; núm_fila; \[núm_columna\])\].** Sin embargo, cuando trabaje con los conjuntos de datos completos del registro de votantes y el censo de Opendya, no siempre sabrá automáticamente en qué número de fila se encuentra el valor que está buscando. ¡Ahí es donde entra MATCH \[COINCIDIR\]!

Recuerde que la función COINCIDIR arroja la posición (número de fila o columna) del valor que está buscando específicamente dentro de un rango de celdas (una sola columna o fila). Fórmula = **MATCH(lookup_value, lookup_array, \[match_type\]) \[COINCIDIR(valor_buscado,matriz_buscada, \[tipo_de_coincidencia\])\].** Puede usar la función MATCH \[COINCIDIR\] para que actúe como el componente **row_num \[núm_fila\]**de su función INDEX \[INDICE\]. Eso significa que Excel buscará automáticamente el número de fila que usted necesita usar para que le arroje el valor de INDEX \[INDICE\]. Así es como funciona en la práctica.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/20_index_match_example_2.png)]({{ site.url }}/\_assets/images/academy/module_7/20_index_match_example_2.png)

En el ejemplo anterior, le pedimos a Excel que nos arrojara automáticamente la población en edad de votar (“VAP”) de los distritos de Opendya, extrayendo los datos de la tabla del censo a la tabla del registro de votantes. Así es como se descompone la fórmula:

##### INDEX \[INDICE\]

- Dado que a final de cuentas lo que queremos es que los datos de la población en edad de votar (“VAP”) se ingresen en la celda E2 y sabemos que el valor que deseamos que se arroje (que es la población en edad de votar de Disputana) se encuentra dentro de las celdas C10: C14, ese rango actuará como la **matriz** \[array\] de nuestra fórmula.
- La función MATCH \[COINCIDIR\] será el argumento **row_num \[núm_fila\]** de nuestra función INDEX \[INDICE\]. En este caso, MATCH \[COINCIDIR\] nos dice en qué fila dentro del rango se encuentra el valor de la celda B2 (Código de distrito = 23). Dado que “District_Name”, “District_Code” y sus “VAP” correspondientes se encuentran dentro de la misma fila de nuestra tabla, sabemos que el número de fila de “Código de distrito 23” corresponde al número de fila de su “VAP”.

##### MATCH \[COINCIDIR\]

- La celda B2 (el código de distrito de Disputana (23)), actúa como el valor de búsqueda en nuestra función MATCH \[COINCIDIR\]. Ese es el valor que Excel va a buscar y cuyo número de fila nos dará la función MATCH \[COINCIDIR\].
- El **lookup_array \[matriz_buscada\]**, o rango, es B10: B14, ya que allí es donde se especifican todos los códigos de distrito dentro de los datos del censo.
- El **match_type \[tipo_de_coincidencia\]** es “0”, lo que significa que estamos buscando una coincidencia exacta para la celda B2, (23), dentro de nuestro rango B10: B14.

Al oprimir “Enter”, la fórmula de INDEX MATCH \[INDICE COINCIDIR\] nos arroja automáticamente la “VAP” de Disputana (código de distrito 23). Si repetimos la misma lógica de la fórmula en los demás distritos, también podemos extraer sus “VAP” de la tabla de datos del censo. A continuación se muestra una copia de nuestra hoja de cálculo después de haber hecho coincidir todos los datos de “VAP” entre una tabla y otra.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/21_index_match_example_3.png)]({{ site.url }}/\_assets/images/academy/module_7/21_index_match_example_3.png)

¡Y así es como funciona INDEX MATCH \[INDICE COINCIDIR\]! Esperamos que le haya quedado claro cuál es la lógica detrás de las fórmulas.

#### **¿Por qué utilizar INDEX MATCH \[INDICE COINCIDIR\] en lugar de otros métodos?**

En este punto es posible que se pregunte por qué usamos esta compleja combinación de funciones de Excel, INDEX MATCH \[INDICE COINCIDIR\], cuando podríamos haber copiado y pegado manualmente los datos de la población en edad de votar, u ordenado y luego copiado y pegado los datos. ¡Esta es la razón!

Uno de los principales motivos por los que automatizamos de esta manera el proceso de coincidencia de datos es para evitar errores humanos, lo cual es fundamental cuando se trabaja con datos electorales delicados, ya que garantiza que su análisis sea de buena calidad. Copiar y pegar datos manualmente es un proceso muy propenso a errores humanos (especialmente cuando se trabaja con grandes conjuntos de datos) y no es aconsejable en la mayoría de los casos. La clasificación y el ordenamiento de datos también son procesos susceptibles a errores humanos y, en muchos casos, no le ayudará a alcanzar su objetivo. Por ejemplo, el número de filas o la organización de los conjuntos de datos ordenados que intenta hacer coincidir pueden no ser exactamente los mismos, lo que hace que un simple proceso de copiar y pegar sea imposible (¡o muy difícil!). Por último, a menudo trabajamos con datos electorales que contienen miles, o incluso decenas de miles de filas. El proceso de copiar y pegar datos manualmente no solo sería susceptible de tener errores, sino que se llevaría muchas horas de trabajo sin sentido. ¡Así que tomarse solo uno o dos minutos para configurar una fórmula de INDEX MATCH \[INDICE COINCIDIR\] puede ahorrarle muchas horas de trabajo! Y cuanto más a menudo utilice INDEX MATCH \[INDICE COINCIDIR\], más rápido(a) será para configurarla.

Por lo tanto, INDEX MATCH \[INDICE COINCIDIR\], aunque compleja, es una de las maneras más precisas y eficientes de hacer coincidir o buscar datos de varias fuentes.

### Cómo hacer coincidir los datos del censo

¡Ahora es el momento de poner a prueba sus nuevos conocimientos! En esta parte del módulo utilizaremos la fórmula de INDEX MATCH \[INDICE COINCIDIR\] en tres diferentes ocasiones para hacer coincidir los datos del archivo de datos del censo con el archivo de datos del registro de votantes, creando así un archivo maestro para el análisis.

Asegúrese de tener abiertos tanto el archivo del registro de votantes como el archivo de datos del censo. ¡Comencemos!

#### **Cómo hacer coincidir “VAP_Tot”**

En la primera aplicación de INDEX MATCH \[INDICE COINCIDIR\], queremos que haga coincidir con precisión los datos sobre la población en edad de votar de cada uno de los distritos de Opendya que se encuentran en el archivo de datos del censo (columna D, “VAP_Tot”) con la columna vacía “Match_VAP_Tot” (L) del archivo de datos del registro de votantes. (Tome en cuenta que si no descargó un archivo nuevo de datos del registro de votantes, deberá crear una nueva columna para “Match_VAP_Tot” y para todos los cálculos que haremos en este módulo).

Comenzaremos la fórmula en la celda L2 del archivo del registro de votantes. En este archivo, la fila 2 contiene datos correspondientes al distrito de Legosakool. Nuevamente, nuestro objetivo al emplear INDEX MATCH \[INDICE COINCIDIR\] es extraer automáticamente la población en edad de votar total (“VAP_Tot”) de Legosakool del archivo de datos del censo e ingresarla en el archivo del registro de votantes.

1\. En la celda L2 del archivo del registro de votantes, escriba “=INDEX(“ \[=INDICE(\]. Al igual que con otras fórmulas, Excel le indica qué especificaciones o argumentos son necesarios para que esta función se ejecute.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/22_index_match_vap_tot.png)]({{ site.url }}/\_assets/images/academy/module_7/22_index_match_vap_tot.png)

2\. Ahora necesita seleccionar la **matriz** \[array\]. Recuerde que en una fórmula de INDEX \[INDICE\], la matriz es el grupo de celdas dentro del cual se encuentra el valor deseado. En otras palabras, la matriz le dice a Excel dónde buscar el valor. Como estamos tratando de encontrar específicamente la población en edad de votar de Legosakool, **la matriz es la columna D (“VAP_Tot”) del archivo de datos del censo.**

Deje abierta la fórmula de INDEX \[INDICE\] en el archivo del registro de votantes, regrese al archivo de datos del censo y haga clic en la columna “D” para seleccionarla. Observe que Excel completa automáticamente la fórmula de acuerdo con el lugar donde hizo clic, incluyendo la indicación de que ha seleccionado una matriz de otro archivo fuente.

¡Aún no oprima “Enter”!

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/23_vap_tot_click.png)]({{ site.url }}/\_assets/images/academy/module_7/23_vap_tot_click.png)

3\. Escriba una coma (,) y luego “MATCH(” \[COINCIDIR(\]. Puede dejar abierto el archivo del censo. Mientras no oprima “Enter”, Excel sabe que todavía está trabajando en una fórmula que se origina en el archivo del registro de votantes.

En este paso es necesario anidar la fórmula de MATCH \[COINCIDIR\] dentro de la fórmula de INDEX \[INDICE\]. Como mencionamos anteriormente, MATCH \[COINCIDIR\] cumplirá el requisito de row_num \[núm_fila\] de la fórmula de INDEX \[INDICE\].

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/24_vap_tot_match.png)]({{ site.url }}/\_assets/images/academy/module_7/24_vap_tot_match.png)

4\. Deje la fórmula abierta y regrese al archivo de datos del registro de votantes. Haga clic en la celda B2, “1”. El contenido de la celda B2 (el código de distrito de Legosakool), actuará como el **lookup_value \[valor_buscado\]** en la fórmula de MATCH \[COINCIDIR\].

Seleccionamos un “District_Code” en lugar de un “District_Name” como el lookup_value \[valor_buscado\], ya que la intención es que funcione como un identificador único. Los archivos del censo y el registro de votantes contienen columnas tanto para “District_Code” como para “District_Name”, pero es más probable que haya errores si se hacen coincidir los conjuntos de datos según el nombre debido a errores ortográficos, errores de dedo, o nombres duplicados.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/25_vap_tot_match_criteria.png)]({{ site.url }}/\_assets/images/academy/module_7/25_vap_tot_match_criteria.png)

5\. Escriba una coma (,). Ahora debe especificar la **lookup_array \[matriz_buscada\]**. Ya le pidió a Excel que encuentre una coincidencia para el valor “1” de “District_Code”, que corresponde al distrito de Legosakool. A continuación, debe decirle a Excel dónde buscar para que arroje el número de fila correcto.

Regrese al archivo de datos del censo y seleccione toda la columna B, “District_code”. Aquí le pidió a Excel que verifique en qué fila del archivo del censo se almacenan los datos de Legosakool (marcados con un valor “District_Code” de 1).

Una vez que Excel encuentre en qué fila aparecen los datos de Legosakool en el archivo del censo, el número de fila que arroje la fórmula de MATCH \[COINCIDIR\] se convertirá en el criterio **row_num \[núm_fila\]** de la fórmula de INDEX \[INDICE\]. Recuerde que el objetivo general es copiar con precisión los datos de la población en edad de votar de Legosakool que se encuentran en el archivo del censo, al archivo del registro de votantes. Si utilizó la función MATCH \[COINCIDIR\] con éxito, Excel sabrá ahora en qué número de fila dentro de la columna D, “VAP_Tot”, se almacenan los datos de la población en edad de votar de Legosakool.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/26_vap_tot_match_array.png)]({{ site.url }}/\_assets/images/academy/module_7/26_vap_tot_match_array.png)

6\. Escriba otra coma (,) y luego escriba “0”. Esto le indica a Excel que está buscando una coincidencia exacta para el valor “1” de “District_Code” dentro de la columna B del archivo de datos del censo.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/27_vap_tot_match_type.png)]({{ site.url }}/\_assets/images/academy/module_7/27_vap_tot_match_type.png)

7\. Como ya ingresó dos fórmulas en total, escriba dos paréntesis cerrados “))” y oprima “Enter”. ¿Qué valor arrojó Excel para la población en edad de votar de Legosakool?

Si obtuvo 91,696 votantes, ¡ha completado con éxito su primera fórmula de INDEX MATCH \[INDICE COINCIDIR\]!

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/28_vap_tot_match_final.png)]({{ site.url }}/\_assets/images/academy/module_7/28_vap_tot_match_final.png)

8\. Ahora deberá repetir esta combinación de fórmulas para obtener los datos de la población en edad de votar de todos los distritos restantes de Opendya. ¡No se preocupe, no necesitará usar INDEX MATCH \[INDICE COINCIDIR\] 46 veces más! Simplemente haga clic en el pequeño recuadro de la esquina inferior derecha de la celda L2.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/29_vap_tot_match_duplicate.png)]({{ site.url }}/\_assets/images/academy/module_7/29_vap_tot_match_duplicate.png)

Excel ingresará automáticamente los cálculos en las filas restantes de la columna L, manteniendo constantes todas las especificaciones de la fórmula, excepto por el **lookup_value \[valor_buscado\]** de la fórmula de MATCH \[COINCIDIR\], ya que Excel sabe que queremos que el lookup_value \[valor_buscado\] varíe en las distintas filas. Haga clic en alguna de las celdas de la columna L, “Match_VAP_Tot”, para asegurarse de que Excel haya hecho lo que necesitábamos que hiciera.

Por ejemplo, la siguiente imagen resalta el valor de “Match_VAP_Tot” que se arrojó para el distrito de Goro. Observe que Excel cambió automáticamente el lookup_value \[valor_buscado\] de MATCH \[COINCIDIR\] al “District_code” \[código de distrito\] del distrito de Goro. Esto garantiza que los datos de la población en edad de votar arrojados corresponden únicamente al distrito de Goro (“District_Code” = 7), en lugar de algún otro distrito de Opendya.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/30_vap_tot_match_duplicate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/30_vap_tot_match_duplicate_final.png)

#### **Cómo hacer coincidir “Female_VAP”**

¡Ahora prepárese para un segundo cálculo con INDEX MATCH \[INDICE COINCIDIR\]! Esta vez queremos llenar la columna M, “Match_Female_VAP”, con los datos de la población en edad de votar del sexo femenino de cada distrito de Opendya.

En esta fórmula aplicaremos una lógica muy similar a la que utilizamos en “Match_VAP_Tot”. Tómese un momento para pensar cómo podría hacer coincidir estos datos del archivo del censo con los del archivo del registro de votantes. ¿A qué columnas necesitará hacer referencia y de qué columnas necesitará extraer datos?

1\. En la celda M2 del archivo del registro de votantes, escriba “=INDEX(“ \[=INDICE(\].

2\. Ahora seleccione la **matriz \[array\]** de INDEX \[INDICE\], que es el rango de datos que desea que Excel arroje en la celda M2. En este caso, le interesan los datos de la población en edad de votar del sexo femenino de Legosakool que se encuentran en la columna E, “Female_VAP”, del archivo de datos del censo. Regrese a los datos del censo y seleccione toda la columna E.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/31_female_vap_array.png)]({{ site.url }}/\_assets/images/academy/module_7/31_female_vap_array.png)

3\. Escriba una coma (,) y luego “MATCH(” \[COINCIDIR(\]. Nuevamente utilice la fórmula de MATCH para ubicar la fila que contiene los datos de Legosakool en el archivo del censo. Los resultados de la fórmula de MATCH serán el criterio **row_num \[núm_fila\]** en la fórmula de INDEX \[INDICE\]. Esta fórmula de MATCH se verá exactamente igual a la del cálculo anterior para “Match_VAP_Tot”.

4\. Deje la fórmula abierta y regrese al archivo de datos del registro de votantes. Haga clic en la celda B2, “1”. El contenido de la celda B2 (el código de distrito de Legosakool), volverá a actuar como el **lookup_value \[valor_buscado\]** en la fórmula de MATCH \[COINCIDIR\].

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/32_female_vap_lookup_val.png)]({{ site.url }}/\_assets/images/academy/module_7/32_female_vap_lookup_val.png)

5\. Escriba una coma (,) y especifique la **lookup_array \[matriz_buscada\].** Ya le pidió a Excel que encuentre una coincidencia para el valor “1” de “District_Code”, que corresponde al distrito de Legosakool. Ahora debe decirle a Excel dónde buscar los códigos de distrito para que arroje el número de fila correcto.

Regrese al archivo de datos del censo y seleccione toda la columna B, “District_code”. Aquí le pidió a Excel que verifique en qué fila del archivo del censo se almacenan los datos de Legosakool (marcados con un valor “District_Code” de 1).

6\. Escriba otra coma (,) y luego escriba “0” para indicar que desea una coincidencia exacta para el valor “1” de “District_Code” dentro de la columna B del archivo de datos del censo.

7\. Escriba dos paréntesis cerrados “))” y oprima “Enter”. ¿Qué valor arrojó Excel para la población en edad de votar del sexo femenino de Legosakool?

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/33_female_vap_lookup_prelim.png)]({{ site.url }}/\_assets/images/academy/module_7/33_female_vap_lookup_prelim.png)

8\. ¿Ahora repita las fórmulas de INDEX MATCH \[INDICE COINCIDIR\] en todos los distritos restantes de Opendya. (Sugerencia: haga doble clic en el recuadro de la esquina inferior derecha de la celda M2).

¡Ahora revise algunas de sus respuestas para asegurarse de que va por el camino correcto!

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/34_female_vap_lookup_final.png)]({{ site.url }}/\_assets/images/academy/module_7/34_female_vap_lookup_final.png)

#### **Cómo hacer coincidir “Male_VAP”**

\_?\_Por último, pero no menos importante, nos gustaría hacer coincidir los datos de la población en edad de votar del sexo masculino de Opendya que se encuentran en el archivo del censo, con los datos del archivo del registro de votantes. Para esto utilizaremos la columna N, “Match_Male_VAP”. Antes de comenzar, ¿de qué manera podría esta fórmula ser distinta de las dos veces anteriores en las que utilizó INDEX MATCH \[INDICE COINCIDIR\]. ¿Qué argumentos o criterios habría que cambiar para que estos datos coincidan correctamente? ¿Qué quedaría igual?

Intente utilizar INDEX MATCH \[INDICE COINCIDIR\] sin instrucciones. Si necesita ayuda, regrese a los ejercicios anteriores de “Match_VAP_Tot” y “Match_Female_VAP”. Como sugerencia, el paso 2, donde selecciona la matriz de INDEX \[INDICE\], es el único punto en el que las fórmulas deben ser distintas entre las columnas de la L a la N.

Como puede ver, ¡la fórmula de INDEX MATCH \[INDICE COINCIDIR\] es más sencilla de lo que esperaba! Revise sus respuestas abajo.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/35_male_vap_final.png)]({{ site.url }}/\_assets/images/academy/module_7/35_male_vap_final.png)

#### **Cómo pegar los datos de coincidencia como valores**

Ya logró incorporar exitosamente los datos correspondientes del archivo del censo al archivo del registro de votantes. Sin embargo, observe que los datos de las columnas de la L a la N en el archivo del registro de votantes no son números ni valores, sino que siguen siendo referencias de fórmulas que extraen datos de otras fuentes. Si bien aún puede realizar cálculos con estos datos, corre el riesgo de perder todas las cifras de “VAP” que acaba de hacer coincidir si elimina o pierde el archivo original de datos del censo, ya que los vínculos en las fórmulas de INDEX MATCH \[INDICE COINCIDIR\] se romperían. Tampoco podrá enviar el conjunto de datos por correo electrónico a otra persona, ya que el archivo incluirá errores de referencia en las columnas de la L a la N, porque los datos se extraen del archivo de datos del censo que está aparte.

Para evitar que esto suceda, considere copiar todas las columnas de la L a la N y pegar los datos “como valores”. Esto se hace de la siguiente manera:

1\. Haga clic en la parte superior de la columna “L” y, mientras la mantiene presionada, arrastre el cursor hacia la columna “N” para seleccionar todas las columnas de la L a la N.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/36_paste_vals_1.png)]({{ site.url }}/\_assets/images/academy/module_7/36_paste_vals_1.png)

2\. Escriba “Ctrl + C”, que es el acceso directo para copiar. También puede hacer clic en el botón derecho del mouse y seleccionar “Copy” \[Copiar\].

3\. Una vez que se hayan copiado los datos, haga clic en el botón derecho del mouse. En “Paste Options” \[Opciones de pegado\], seleccione la opción “Paste As Values” \[Pegar como valores\] que se muestra a continuación (con el símbolo “123”).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/37_paste_vals_2.png)]({{ site.url }}/\_assets/images/academy/module_7/37_paste_vals_2.png)

Ahora haga clic en un par de celdas dentro de las columnas de la L a la N y observe que la barra de fórmulas ahora muestra esas celdas como números, en lugar de como fórmulas.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/38_paste_vals_3.png)]({{ site.url }}/\_assets/images/academy/module_7/38_paste_vals_3.png)

_Consejo: Para estar más seguros, antes de pegar los datos como valores, guarde una copia de la pestaña con las referencias de la fórmula de INDEX MATCH \[INDICE COINCIDIR\] en caso de que accidentalmente cometa un error durante el proceso de pegar como valores y necesite volver a realizar todo el cálculo. Puede hacer esto haciendo clic con el botón derecho del mouse sobre la pestaña etiquetada “Registration_Data” en la parte inferior de la ventana de Excel, seleccionar “Move or Copy” \[Mover o copiar\] y marcar la casilla “Create a Copy” \[Crear una copia\]._

### Cómo calcular las tasas de registro por distrito

Gracias a su dominio de INDEX MATCH \[INDICE COINCIDIR\], ahora tenemos un archivo consolidado con la población en edad de votar y los datos de los votantes registrados en todos los distritos de Opendya. La combinación de los datos del censo y los datos del registro de votantes nos permite calcular el porcentaje de votantes con derecho a votar incluidos en el registro de votantes de Opendya después del ejercicio de actualización de 2014.

#### **Calculated_Reg_Rate**

Vamos a utilizar la división de Excel para calcular la tasa de votantes registrados en 2014 en cada distrito en Opendya. Haremos esto en la columna O, “Calculated*Reg_Rate”, del archivo del registro de votantes. *(Nota: Si no descargó un archivo nuevo de datos del registro de votantes al comienzo del Módulo 7 y, en su lugar, está usando sus archivos de los Módulos 5-6, deberá crear una nueva columna para “Calculated*Reg_Rate” y para todos los cálculos que haremos para los análisis restantes).*

Para calcular las tasas de registro por distrito, es necesario dividir las cifras de la columna I, “Reg_Tot_Final”, entre las cifras de la columna L, “Match_VAP_Tot”.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/formula_1_District_by_District_Rates.png)]({{ site.url }}/\_assets/images/academy/module_7/formula_1_District_by_District_Rates.png)

1\. Escriba el signo de igual (=) en la celda O2. Luego haga clic en la celda I2. Observe que Excel automáticamente agrega el término “I2” a su fórmula en cuanto hace clic en esa celda. Otra opción es simplemente escribir “I2” y Excel automáticamente creará el vínculo con esa celda.

2\. Ahora escriba una diagonal (/) y haga clic en la celda L2 (población en edad de votar de Legosakool).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/39_calculated_reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/39_calculated_reg_rate.png)

3\. Oprima “Enter”. ¿Cuál es la tasa de registro en Legosakool?

4\. Ahora repita la fórmula de división en todos los distritos restantes de Opendya. (Sugerencia: haga doble clic en el recuadro de la esquina inferior derecha de la celda O2. Para evitar errores, haga clic en algunas celdas de la columna O para asegurarse de que Excel haya replicado correctamente el cálculo de la división en los demás distritos). Revise sus respuestas abajo.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/40_calculated_reg_rate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/40_calculated_reg_rate_final.png)

Considere que es posible que la información no se ingrese automáticamente en las celdas como porcentajes, sino como decimales o como 0 y 1. Si este es el caso, haga clic en la parte superior de la columna O para seleccionar toda la columna. Luego haga clic con el botón derecho del mouse y seleccione el símbolo “%”. Otra opción es hacer clic con el botón derecho del mouse, seleccionar “Format Cell” \[Formato de celda\] y luego seleccionar “Percentage” \[Porcentaje\] del menú que aparece a la izquierda en la ventana emergente.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/41_format_cells.png)]({{ site.url }}/\_assets/images/academy/module_7/41_format_cells.png)

#### **Calculated_Female_Reg_Rate**

Ahora queremos que calcule la tasa de registro de los votantes con derecho a votar del sexo femenino en cada uno de los distritos de Opendya. Otra fórmula rápida de división debería servir para esto. Usemos la columna P, “Calculated_Female_Reg_Rate”.

Antes de explicarle cómo hacer esto, ¿qué columnas cree usted que necesitará usar para calcular la tasa de registro de votantes del sexo femenino?

La lógica matemática para este análisis es la siguiente:

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/formula_2_Calculated_Female_Reg_Rate.png)]({{ site.url }}/\_assets/images/academy/module_7/formula_2_Calculated_Female_Reg_Rate.png)

1\. Comience su cálculo de división con el signo de igual (=). Luego haga clic en la celda J2 (el número definitivo de votantes del sexo femenino registradas en Legosakool).

2\. Escriba una diagonal (/) y haga clic en la celda M2 (población con derecho a votar del sexo femenino en Legosakool).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/42_calculated_fem_reg_rate_formula.png)]({{ site.url }}/\_assets/images/academy/module_7/42_calculated_fem_reg_rate_formula.png)

3\. Oprima “Enter”. ¿Qué porcentaje de mujeres con derecho a votar están registradas para votar en Legosakool? ¡Esperamos que su cálculo de la tasa de registro de las mujeres haya sido del 70%!

4\. Ahora repita el cálculo en todos los distritos restantes de Opendya. Compare sus respuestas abajo para asegurarse de que coincidan.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/43_calculated_fem_reg_rate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/43_calculated_fem_reg_rate_final.png)

#### **Calculated_Male_Reg_Rate**

Ahora, por su cuenta, calcule el porcentaje de votantes con derecho a votar del sexo masculino que están registrados en los diferentes distritos. Si necesita ayuda, consulte los cálculos de las tasas de registro anteriores.

Revise sus cálculos abajo.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/44_calculated_male_reg_rate_final.png)]({{ site.url }}/\_assets/images/academy/module_7/44_calculated_male_reg_rate_final.png)

#### **¿Qué observa?**

Ahora que ya calculamos las tasas de registro de votantes total, del sexo femenino y del sexo masculino en todos los distritos, tómese un momento para revisar los datos. Piense en el contexto político que se le dio al comienzo de este módulo.

1. ¿Qué distritos se destacan por tener en general tasas de registro particularmente bajas? ¿Qué pasa con las tasas más bajas de votantes del sexo masculino y del sexo femenino? ¿Qué tipos de distritos son esos? ¿Qué podría explicar estas tendencias?
2. ¿Qué distritos se destacan por tener en general tasas de registro particularmente altas? ¿Qué pasa con las tasas más altas de votantes del sexo masculino y del sexo femenino? ¿Qué tipos de distritos son esos? ¿Qué podría explicar estas tendencias?

## Cómo evaluar las tasas de registro en cada tipo de distrito

¡Felicidades, ha llegado a la parte final del Módulo 7! Dejemos de lado INDEX MATCH \[INDICE COINCIDIR\] por un momento y avancemos hacia otro tipo de análisis utilizando la función SUMIF \[SUMAR.SI\]. Durante el resto de este ejercicio utilizaremos la pestaña Data_Summary del archivo del registro de votantes. Si lo desea, puede cerrar el archivo de datos del censo.

Si ya terminó los Módulos 5 y/o 6, recordará que utilizamos SUMIF \[SUMAR.SI\] y porcentajes para resumir y analizar los datos del registro de votantes de acuerdo con los diferentes tipos de distritos en Opendya. En esta última parte del Módulo 7 haremos un análisis similar para evaluar las diferencias en las tasas de registro entre los distritos urbanos, los distritos rurales y el distrito capital de Opendya.

#### **Cómo usar la función SUMIF \[SUMAR.SI\] para sumar datos en una categoría específica**

Como recordatorio, la función [SUMIF](https://support.office.com/en-us/article/SUMIF-function-169B8C99-C05C-4483-A712-1697A653039B) \[SUMAR.SI\] se utiliza para sumar los valores en un rango específico de celdas que cumplen con el criterio que buscamos. En el Módulo 7 usaremos SUMIF \[SUMAR.SI\] dos veces: 1) para calcular la población en edad de votar de los distritos urbanos, los distritos rurales y el distrito capital, respectivamente; y 2) para calcular el número de votantes registrados en los tres tipos de distrito.

La fórmula se estructura de la siguiente manera: **SUMIF(range, criteria, \[sum_range\]) \[SUMAR.SI(rango, criterios,\[rango_suma\]**

- **Range \[Rango\]:** El rango especifica el grupo de celdas que desea evaluar de acuerdo con sus criterios. En este caso, vamos a sumar los datos con base en el tipo de distrito. Considerando que nuestro criterio es “tipo de distrito”, ¿qué columna de la hoja de cálculo cree que debemos usar para el rango? ¿En qué columna buscamos la información sobre el tipo de distrito? (Respuesta = Columna C, “Type” \[Tipo\]).
- **Criteria \[Criterios\]**: Los criterios indicarán si un número debe sumarse o no. Los criterios pueden tomar la forma de un número, una expresión, una referencia de celda, texto, o una función que defina qué celdas deben sumarse. Para este ejercicio seleccionaremos de entre tres criterios distintos (“urban”, “rural” y “capital district”) y le indicaremos a Excel que sume los números del registro de votantes de los distritos que coincidan con alguna de estas categorías específicas.
- **Sum_range \[Rango_suma\]**: Esto le indica a Excel qué celdas debe sumar, en caso de que desee sumar celdas distintas a las que se especifican en el argumento de rango. Para este ejercicio, el sum_range \[rango_suma\] serán los datos de la población en edad de votar o los datos de los votantes registrados.

¡Pongámoslo en práctica en la pestaña Data_Summary!

#### **SUMIF \[SUMAR.SI\] "Pop_Tot"**

En la columna B, “Pop_Tot”, de la pestaña Data_Summary, usaremos SUMIF \[SUMAR.SI\] para calcular los totales de la población en edad de votar de cada uno de los tres tipos de distrito de Opendya. Esto nos dirá cuántos votantes con derecho a votar viven en distritos urbanos en comparación con los distritos rurales y con el distrito capital.

Comenzaremos sumando el número de votantes registrados en los distritos urbanos, luego pasaremos a los distritos rurales y finalmente a la capital.

1\. Escriba “SUMIF(“ \[“SUMAR.SI(“en la celda B2. Observe que Excel automáticamente le proporciona la información que necesita para completar el resto de la fórmula.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/45_type_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/45_type_sumif.png)

2\. Ahora necesitamos especificar el **rango** \[range\] del que Excel debe extraer los criterios. Dado que estamos buscando específicamente un tipo de distrito, el rango será la columna C de la pestaña Registration_Data. Para remitirse al rango, deje la fórmula abierta y haga clic en la pestaña Registration_Data en la esquina inferior izquierda del archivo. (No oprima “Enter” antes de cambiarse a la pestaña principal de datos o los datos de su fórmula no se seguirán ingresando).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/46_click_tab_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/46_click_tab_sumif.png)

Observe que al regresar a la pestaña Registration_Data la barra de la fórmula continúa actualizándose según donde haga clic. Excel identifica que usted está tratando de establecer un vínculo entre su cálculo SUMIF \[SUMAR.SI\] en la pestaña Data_Summary y la información en la pestaña Registration_Data.

Para terminar de seleccionar el rango, haga clic en la parte superior de la columna C para seleccionarla. Nuevamente, observe que Excel ingresa automáticamente los datos de su fórmula en cuanto hace clic.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/47_click_c_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/47_click_c_sumif.png)

¡Ya seleccionó el rango! Ahora escriba una coma (,) y continuemos.

3\. SUMIR \[SUMAR.SI\] ahora requiere que seleccione sus criterios específicos. Estos criterios le indican a Excel qué debe sumar y qué debe omitir. Sin oprimir “Enter”, regrese a la pestaña Data_Summary y haga clic en la celda A2 “Urban”. Con esto le está indicando a Excel que únicamente desea obtener y sumar los datos de los distritos urbanos de Opendya.

Escriba otra coma (,).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/48_click_urban_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/48_click_urban_sumif.png)

4\. Por último, necesitamos indicarle a Excel qué datos debe sumar con base en nuestro criterio, “urban” \[urbano\]. En este caso estamos sumando toda la población en edad de votar. Esa información se encuentra ahora en la columna L, “Match_VAP_Tot”, de la pestaña Registration_Data (después del ejercicio de INDEX MATCH \[INDICE COINCIDIR\]. Deje la fórmula abierta, regrese a la pestaña Registration_Data, y seleccione toda la columna L.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/49_click_vap_tot_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/49_click_vap_tot_sumif.png)

5\. Ahora cierre el paréntesis y oprima “Enter”. ¿Cuál es la población total en edad de votar en los distritos urbanos de Opendya?

¡Esperamos que su cálculo haya sido 3,072,916 ciudadanos!

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/50_match_vap_tot_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/50_match_vap_tot_sumif.png)

6\. Ahora indíquele a Excel que repita el cálculo de “Pop_Tot” para los distritos rurales y el distrito capital. Recuerde que puede hacer doble clic en el recuadro que se encuentra en la esquina inferior derecha de la celda B2, o puede escribir manualmente las fórmulas utilizando “rural” \[rural\] y “capital district” \[distrito capital\] como sus nuevos criterios. A continuación se muestra lo que debe tener.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/51_final_match_vap_tot_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/51_final_match_vap_tot_sumif.png)

#### **SUMIF \[SUMAR.SI\] "RV2014"**

Ya terminamos con un SUMIF \[SUMAR.SI\] y ahora vamos con el siguiente. Ahora vamos a utilizar nuevamente la función SUMIF \[SUMAR.SI\] para calcular el número final de votantes registrados en 2014 en los tres tipos de distritos de Opendya. _(Nota: Si ya terminó el Módulo 5 y está utilizando su archivo de datos original, ya debe haber realizado este cálculo en la columna etiquetada “RV2014”. Si lo prefiere, puede avanzar al cálculo final del Módulo 7, “Reg_Rate”. Si no ha realizado el Módulo 5, o simplemente desea intentar hacer este cálculo por segunda vez, continúe en esta sección del ejercicio)._

Recuerde el proceso que utilizó anteriormente para sumar las poblaciones en edad de votar en cada tipo de distrito. ¿Qué similitudes o diferencias tendrá la fórmula que utilizaremos en la siguiente tarea de calcular el total de los votantes registrados?

1\. Repita los pasos 1 y 2 anteriores relativos a la selección del rango y los criterios de la función SUMIF \[SUMAR.SI\]. Seguiremos usando la columna C “Type” \[Tipo\] de la pestaña Registration_Data, y nuevamente seleccionaremos un tipo de distrito específico como criterio, comenzando probablemente con los distritos urbanos.

2\. A continuación, vaya a la pestaña Registration_Data y seleccione toda la columna I, “Reg_Tot_Final”, que contiene el total final del registro de votantes de 2014 de cada distrito.

Los cálculos finales deben verse así:

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/52_final_rv2014_sumif.png)]({{ site.url }}/\_assets/images/academy/module_7/52_final_rv2014_sumif.png)

#### **Cómo calcular “Reg_Rate”**

Ya ha logrado superar algunas funciones difíciles en este módulo, ¡y está casi en la recta final! Nos queda un cálculo más por hacer, el cual deberá darnos una idea de cuáles son las tendencias de registro en Opendya.

En la columna D, “Reg_Rate”, de la pestaña Data_Summary, calcule las tasas de registro de votantes en los tres tipos de distrito de Opendya. La lógica detrás de este cálculo es la misma que en las tasas de registro que calculó en las columnas de la O a la Q de la pestaña Registration_Data (“Calculated_Reg_Rate”, “Calculated_Female_Reg_Rate” y “Calculated_Male_Reg_Rate”).

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/formula_3_Calculating_Reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/formula_3_Calculating_Reg_rate.png)

1\. Escriba el signo de igual (=) en la celda D2, que corresponde a los distritos urbanos. Luego, haga clic en la celda C2, que contiene el número de votantes registrados en los distritos urbanos de Opendya.

2\. A continuación escriba una diagonal (/) para indicarle a Excel que quiere dividir el contenido de la celda C2 entre otro valor. Ahora haga clic en la celda B2 (población en edad de votar en los distritos urbanos de Opendya).

3\. Oprima “Enter”. ¿Cuál es la tasa de registro de votantes urbanos en Opendya?

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/53_urban_reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/53_urban_reg_rate.png)

4\. Ahora repita este cálculo para los distritos rurales y el distrito capital.

[![Image 1]({{ site.url }}/\_assets/images/academy/module_7/54_final_reg_rate.png)]({{ site.url }}/\_assets/images/academy/module_7/54_final_reg_rate.png)

#### **¿Qué observa?**

¡Lo ha hecho de maravilla!

Ahora que ha calculado las tasas de registro en los tres tipos de distrito de Opendya, ¿qué tendencias observa? ¿Qué tipos de distrito tienen las tasas de registro más altas y más bajas? Piense un momento en el contexto político que se le dio al comienzo de este módulo, ¿qué podría explicar esas tendencias?
