---
title: '4. Cómo detectar preferencias en el registro de candidatos'
lang: es
module_id: 4
permalink: '/academy/detecting-bias-in-ballot-qualification/'
excerpt: "Using sample ballot qualification data in Module 4, you’ll enhance your ability to:
<ul><li>use pivot tables and some more advanced features within them;</li>
<li>employ the COUNTIF function for a variety of use cases;</li>
<li>use basic operators in Microsoft Excel (including calculating percentages), and</li>
<li>examine your data with a political eye.</li></ul>"
---

Mediante el uso de datos de muestra del registro de candidatos, en el Módulo 4 usted mejorará su capacidad para:

- utilizar tablas dinámicas y algunas funciones más avanzadas dentro de ellas;
- emplear la función COUNTIF \[CONTAR.SI\] para distintos fines;
- utilizar operadores básicos en Microsoft Excel (incluyendo el cálculo de porcentajes), y
- analizar su información desde una perspectiva política.

## ¿Por qué son importantes los datos del registro de candidatos?

Las reglas y la manera en que se lleva a cabo el proceso de registro de candidatos puede tener un impacto profundo en la calidad e imparcialidad de una elección. Si los requisitos para el registro de candidatos [registro de candidatos](https://openelectiondata.net/es/guide/key-categories/ballot-qualification/) son injustos, o si esos requisitos se implementan de manera no equitativa, se puede crear un campo de juego desigual descalificando a una gran parte de los candidatos, y quedando fuera del boleto electoral. Las reglas y los procesos para el registro de candidatos pueden ser decisivos en el resultado electoral. Por lo tanto, cuando se cuenta con datos sobre el registro de candidatos, las organizaciones de la sociedad civil y los ciudadanos deben estar dotados de los conocimientos y las habilidades necesarias para poder hacer uso de esa información. Mucho antes del día de las elecciones, este tipo de análisis puede ser crucial para determinar la credibilidad de la votación.

## Registro de candidatos en Opendya

A continuación se presenta el contexto político del conjunto de datos que se analizarán en este módulo.

En la isla nación de Opendya próximamente se celebrarán elecciones presidenciales y parlamentarias. Se han registrado los nombres de los posibles candidatos para que la comisión electoral los apruebe y la comisión acaba de publicar su veredicto de aprobación y rechazo de candidatos. Se le ha entregado a usted una copia de los datos de todas las decisiones sobre el registro de candidatos, tanto presidenciales como legislativos, para cada candidato.

Todos los candidatos que presentaron su solicitud de inclusión en el boleto electoral de Opendya pertenecían a uno de tres partidos políticos: **Draconia** (el partido en el poder), **Shireling** (el partido de oposición), and **Zalog** (un nuevo partido de oposición). Existen rumores de que Zalog, el nuevo partido de oposición en Opendya, ha formado una alianza con el partido en el poder, sin embargo, esto no ha sido confirmado.

## Cómo analizar los datos del registro de candidatos

Para comenzar el ejercicio **descargue **[aquí](/files/academy/exercise/Module_4_Ballot_Qualification.xlsx)** el archivo con los datos del registro de candidatos.** .

Antes de entrar a fondo en el análisis, familiarícese con los datos disponibles en el archivo.

### Full_name

La columna A, “Full_name”, contiene el nombre y apellido de cada posible candidato.

[![Image 1](/assets/images/academy/module_4/Module_4_Photo_1.png)](/assets/images/academy/module_4/Module_4_Photo_1.png)

### Gender

En la columna B se indica el sexo de cada uno de los posibles candidatos \[femenino, “female” o masculino, “male”\].

### Age

En la columna C se indica la edad de cada uno de los posibles candidatos. Cabe destacar que Opendya no tiene límite de edad para los candidatos parlamentarios o presidenciales.

[![Image 2](/assets/images/academy/module_4/Module_4_Photo_2.png)](/assets/images/academy/module_4/Module_4_Photo_2.png)

### Party

En la columna D se indica el nombre del partido al que pertenece cada candidato.

### Decision

En la columna E se indica el veredicto sobre candidatura, o bien la persona fue aceptada \[“accepted”\] o rechazada \[“rejected”\] por la comisión electoral.

[![Image 3](/assets/images/academy/module_4/Module_4_Photo_3.png)](/assets/images/academy/module_4/Module_4_Photo_3.png)

### Election

En la columna F se indica si la solicitud de candidatura de la persona correspondía a la elección parlamentaria \[“parliamentary”\] o la elección presidencial \[“presidential”\].

### District_code

La comisión electoral de Opendya le asigna a cada distrito un código o identificador único. Tómese unos minutos para revisar el archivo e identificar el patrón de numeración de los distritos.

Como ya se mencionó en el [Módulo 2: Cómo analizar una lista de centros de votación](https://openelectiondata.net/es/academy/reviewing-a-polling-station-list/), los identificadores únicos son sumamente útiles en el manejo de los conjuntos de datos. Nos ayudan a detectar registros duplicados y a distinguir adecuadamente entre unidades con nombres similares.

[![Image 4](/assets/images/academy/module_4/Module_4_Photo_4.png)](/assets/images/academy/module_4/Module_4_Photo_4.png)

### District_name

La columna H contiene los nombres de todos los distritos de Opendya. Tome nota de que este es el único nivel geográfico que ofrece el conjunto de datos. A esta altura, no contamos con más información sobre si estos distritos están cerca uno del otro o si se ubican dentro de la misma unidad geográfica en un nivel más alto.

[![Image 5](/assets/images/academy/module_4/Module_4_Photo_5.png)](/assets/images/academy/module_4/Module_4_Photo_5.png)

### Type

La columna I, “Type” \[Tipo\], clasifica a cada uno de los distritos de Opendya según sus características. Revise todos los datos para identificar qué descriptores se utilizan para indicar el tipo de distrito. ¿Cuántos tipos diferentes observa?

[![Image 6](/assets/images/academy/module_4/Module_4_Photo_6.png)](/assets/images/academy/module_4/Module_4_Photo_6.png)

## Cómo evaluar la demografía de edad del partido

Calcular el promedio de edad de los posibles candidatos de Opendya le dará una idea de las diferencias demográficas entre los distintos partidos políticos. A continuación crearemos una tabla dinámica para calcular el promedio de edad (es decir, la “media”) de las personas que solicitaron su candidatura según el partido político. El uso de la función de tablas dinámicas en este ejercicio se basa en las habilidades aprendidas en el Módulo 2.

### **¿Que esperamos ver?**

Considerando lo que sabe acerca de los tres partidos políticos que contienden en las próximas elecciones, ¿qué tendencias esperaría ver en el promedio de edad de los candidatos?

Siga estos sencillos pasos para crear la tabla dinámica.

#### 1\. Seleccionar todo

Para comenzar, necesita seleccionar todos los datos que se encuentran en la pestaña “Candidate_Information” \[Información de candidatos\] de su hoja de cálculo. Para hacerlo, haga clic en el recuadro del lado superior izquierdo con el pequeño triángulo. También puede hacer clic en la celda A1 (“Full_name”) y luego oprima Control+T (es decir, oprima las teclas “Ctrl” y “T” al mismo tiempo).

[![Image 7](/assets/images/academy/module_4/Module_4_Photo_7.png)](/assets/images/academy/module_4/Module_4_Photo_7.png)

#### 2\. Insertar tabla dinámica

Ahora que todos los datos están seleccionados, (si está utilizando Excel 2013) haga clic en la pestaña “Insert” \[Insertar\] que se encuentra en el menú superior y luego haga clic en “Pivot Table” \[Tabla dinámica\] del lado izquierdo. Aparecerá una ventana que dice “Create Pivot Table” \[Crear tabla dinámica\]. Deje las opciones como predeterminadas y solo haga clic en “OK” \[Aceptar\], y Excel creará una nueva tabla dinámica en una nueva hoja de cálculo.

[![Image 8](/assets/images/academy/module_4/Module_4_Photo_8.png)](/assets/images/academy/module_4/Module_4_Photo_8.png)

#### 3\. Ordenar por partido

Una vez que ya se tiene la estructura de la tabla dinámica, podemos hacer algunos cálculos. En el lado derecho hay una ventana llamada “Pivot Table Field List” \[Campos de tabla dinámica\]. Haga clic en “Party” \[Partido\] y arrástrelo hacia abajo para agregarlo al área “Row Labels” \[Filas\]. Esto ordenará todo por el valor que se indica en el campo “Party”. Observe que “Party” ahora está incluido en la ventana inferior derecha llamada “Row Labels” \[Filas\]. Si se ha hecho correctamente, los tres partidos aparecerán en la Columna A.

[![Image 9](/assets/images/academy/module_4/Module_4_Photo_9.png)](/assets/images/academy/module_4/Module_4_Photo_9.png)

#### 4\. Determinar la edad promedio

Ahora veremos cuál es la composición de edad de los tres partidos de Opendya: Draconia, Shireling y Zalog. Tome el campo “Age” \[Edad\] y arrástrelo hasta la sección “Values” \[Valores\] en la parte inferior de la tabla dinámica. Si todo sale bien, la tabla dinámica mostrará un conteo de todas las celdas que contengan un valor para el campo “Age” según el partido político. Para verificarlo, coloque el cursor sobre los valores de la Columna B y deberá aparecer una nota con la leyenda “Count of Age” \[Cuenta de Edad\]. Observe que ahora el texto “Count of Age” \[Cuenta de Edad\] aparece en la ventana inferior derecha, en el cuadro “Values” \[Valores\]. Si lo ha hecho correctamente, debe mostrar 131 para Draconia, 92 para Shireling, y 67 para Zalog. Vea la imagen que se muestra a continuación para confirmarlo.

[![Image 10](/assets/images/academy/module_4/Module_4_Photo_10.png)](/assets/images/academy/module_4/Module_4_Photo_10.png)

Ahora necesitamos que Excel nos muestre la edad promedio de los candidatos, en lugar del conteo del número de celdas que contienen un valor para “Age”. Para hacer esto, es necesario ir a “Count of Age” \[Cuenta de Edad\] en la ventana “Values” \[Valores\] en la parte inferior derecha de la pantalla, y hacer clic en la flecha que indica hacia abajo.

[![Image 11](/assets/images/academy/module_4/Module_4_Photo_11.png)](/assets/images/academy/module_4/Module_4_Photo_11.png)

This will give us a window where we can click "Value field settings," like you can see below Under "Summarize Value Field By" choose "Average." Excel will average the age of prospective candidates according to political party.

[![Image 12](/assets/images/academy/module_4/Module_4_Photo_12.png)](/assets/images/academy/module_4/Module_4_Photo_12.png)

Esto nos abrirá una ventana donde hay que hacer clic en “Value Field Settings” \[Configuración de campo de valor\], como se ve en la siguiente imagen. Debajo de “Summarize Value Field By” \[Resumir campo de valor por\] elija “Average” \[Promedio\]. Excel calculará el promedio de edad de los posibles candidatos de cada partido político.

[![Image 13](/assets/images/academy/module_4/Module_4_Photo_13.png)](/assets/images/academy/module_4/Module_4_Photo_13.png)

#### **¿Qué observa?**

¿Qué tendencias o diferencias observa en la edad promedio de cada uno de los tres partidos de Opendya? ¿Qué partido cree usted que es nuevo con base únicamente en esta información?

## Cómo analizar las decisiones generales sobre el registro de candidatos

#### Cómo analizar la pestaña Candidate_Summary \[Resumen de candidatos\]

En esta parte del módulo vamos a comenzar utilizando la pestaña Candidate_Summary del archivo de Excel. Esta pestaña contiene un resumen de los cálculos basados en los datos de la pestaña Candidate_Information. Se ve así:

[![Image 14](/assets/images/academy/module_4/Module_4_Photo_14.png)](/assets/images/academy/module_4/Module_4_Photo_14.png)

Para facilitar las cosas, ya ingresamos previamente los datos de los encabezados de todas las columnas, las cuales almacenarán los distintos cálculos que tendrá que hacer. Comencemos ahora con algunas fórmulas y cálculos más complejos.

#### Cómo usar COUNTIF \[CONTAR.SI\] y COUNTIFS \[CONTAR.SI.CONJUNTO\] para contar el número de celdas que cumplen los criterios

Durante el resto del Módulo 4, con frecuencia utilizaremos las funciones [COUNTIF](https://support.office.com/en-us/article/COUNTIF-function-e0de10c6-f885-4e71-abb4-1f464816df34) \[CONTAR.SI\] y [COUNTIFS](https://support.office.com/en-US/article/COUNTIFS-function-DDA3DC6E-F74E-4AEE-88BC-AA8C2A866842) \[CONTAR.SI.CONJUNTO\]. Tanto COUNTIF \[CONTAR.SI\] como COUNTIFS \[CONTAR.SI.CONJUNTO\] cuentan el número de celdas con datos que cumplen los criterios que se buscan. Para este ejercicio utilizaremos estas fórmulas para sumar las veces que los posibles candidatos fueron aceptados o rechazados por la comisión electoral de Opendya según cada uno de los tres partidos políticos. Observe que la **función COUNTIF \[CONTAR.SI\] funciona con un solo rango y criterio. COUNTIFS \[CONTAR.SI.CONJUNTO\], en cambio, puede contar celdas que cumplan con varios criterios.**

La estructura de la fórmula es la siguiente: CONTAR.SI(rango, criterios) O CONTAR.SI.CONJUNTO(rango_1,criterios_1,rango_2,criterios_2,rango_3,criterios_3,...).

- **Range \[Rango\]**: El rango especifica el grupo de celdas en el que desea hacer el conteo.
- **Criteria \[Criterios\]**: Los criterios indicarán si un número debe o no ser contado. Los criterios pueden tomar la forma de un número, una expresión, una referencia de celda, texto, o una función que defina qué celdas deben sumarse.

¡Probemos las funciones COUNTIF \[CONTAR.SI\] y COUNTIFS \[CONTAR.SI.CONJUNTO\]!

#### Cómo contar los posibles candidatos según el partido (“Tot_Cand”)

Empezaremos su experiencia con COUNTIF \[CONTAR.SI\] calculando el número de personas que intentaron registrarse como candidatos de cada partido. Lo haremos en la columna B, “Tot_Cand”. Primero vamos a contar el número de posibles candidatos del partido Draconia, luego seguiremos con Shireling y finalmente con Zalog.

1\. En la celda B2, escriba “=COUNTIF(” \[=CONTAR.SI(\] Observe que Excel automáticamente le proporciona la información que necesita para completar el resto de la fórmula.

[![Image 15](/assets/images/academy/module_4/Module_4_Photo_15.png)](/assets/images/academy/module_4/Module_4_Photo_15.png)

2\. A continuación necesitamos especificar el rango \[“range”\] del que Excel debe extraer los criterios. Como estamos analizando específicamente los partidos políticos, el rango será la columna D de la pestaña Candidate_Information. Para remitirse al rango, deje la fórmula abierta y haga clic en la pestaña Candidate_Information en la esquina inferior izquierda del archivo. (No oprima “Enter” antes de cambiarse a la pestaña principal de datos o los datos de su fórmula no se seguirán ingresando).

Observe que al regresar a la pestaña Candidate_Information la barra de fórmula continúa actualizándose según donde haga clic. Excel identifica que usted está tratando de establecer un vínculo entre su cálculo COUNTIF \[CONTAR.SI\] en la pestaña Candidate_Summary y la información en la pestaña Candidate_Information.

Para terminar de seleccionar el rango, haga clic en la parte superior de la columna D para seleccionarla. Nuevamente, observe que Excel ingresa automáticamente los datos de su fórmula en cuanto hace clic.

[![Image 16](/assets/images/academy/module_4/Module_4_Photo_16.png)](/assets/images/academy/module_4/Module_4_Photo_16.png)

¡Ya seleccionó el rango de COUNTIF \[CONTAR.SI\]! Ahora escriba una coma (,) y continuemos.

3\. COUNTIF \[CONTAR.SI\] ahora requiere que seleccione sus criterios específicos. Sin oprimir “Enter”, regrese a la pestaña Candidate_Summary y dé clic en la celda A2 “Draconia”. Con esto le está indicando a Excel que usted solo quiere que cuente los datos que apliquen únicamente a los candidatos del partido Draconia.

[![Image 17](/assets/images/academy/module_4/Module_4_Photo_17.png)](/assets/images/academy/module_4/Module_4_Photo_17.png)

4\. Cierre los paréntesis y oprima “Enter”. Al utilizar la función COUNTIF \[CONTAR.SI\], calculó el número de personas afiliadas al partido Draconia que solicitaron su candidatura para las próximas elecciones de Opendya.

[![Image 18](/assets/images/academy/module_4/Module_4_Photo_18.png)](/assets/images/academy/module_4/Module_4_Photo_18.png)

5\. Ahora repita este cálculo para los partidos Shireling y Zalog. Para hacerlo, puede dar doble clic en el recuadro que aparece en la esquina inferior derecha de la celda B2, o bien, ingresar manualmente las fórmulas utilizando las celdas B2 (Zalog) y B3 (Shireling) como sus nuevos criterios. A continuación se muestra lo que debe tener.

[![Image 19](/assets/images/academy/module_4/Module_4_Photo_19.png)](/assets/images/academy/module_4/Module_4_Photo_19.png)

#### Cómo contar los candidatos aceptados \[“accepted”\] por partido (“Tot_Accept”)

Ahora nos gustaría calcular el número total de solicitantes que la comisión electoral de Opendya aceptó como candidatos de cada partido para las próximas elecciones. Para esto necesitará utilizar la fórmula COUNTIFS \[CONTAR.SI.CONJUNTO\] ya que contaremos las celdas con base en dos criterios, en lugar de uno. Necesita Excel para contar:

1.  los solicitantes de candidatura de un **partido político específico**, y
2.  los candidatos **aceptados**.

Básicamente la fórmula se ve como dos fórmulas COUNTIF \[CONTAR.SI\] en una: **CONTAR.SI.CONJUNTO(rango_1, criterios_1, rango_2, criterios_2)**. Note que la primera mitad de esta fórmula se verá exactamente igual que el cálculo que hicimos para la columna “Tot_Cand”, ya que seguimos haciendo el conteo de acuerdo con el partido político. Comencemos ahora nuestro cálculo en la columna C, “Tot_Accept”.

1\. En la celda C2 repita los pasos 1 y 2 de su último cálculo (“Tot_Cand”), que explican cómo seleccionar el rango y los criterios. Sin embargo, **recuerde escribir “=COUNTIFS” \[=CONTAR.SI.CONJUNTO\] en lugar de “=COUNTIF” \[=CONTAR.SI\]**. u primer rango continúa siendo la columna D, “Party”, de la pestaña Candidate_Information, y su primer criterio será el partido Draconia (celda A2 de la pestaña Candidate_Summary).

Si es necesario, haga clic aquí para ver una imagen de cómo debe verse la pantalla en este paso.

No oprima “Enter” ni cierre los paréntesis todavía, solo escriba una coma (,) y continúe con la segunda parte de la fórmula.

[![Image 20](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_20.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_20.png)

2\. Recuerde que en este caso estamos calculando el número de candidatos aceptados del partido Draconia. Nuestra fórmula actual está lista para extraer los datos de todos los candidatos del partido Draconia, pero aún falta distinguir entre los candidatos aceptados \[“accepted”\] y los rechazados \[“rejected”\]. Para hacerlo, necesitamos especificar un segundo rango y un segundo criterio. Como estamos diferenciando entre los aceptados y los rechazados, nuestro rango es la columna E, “Decision”, de la pestaña Candidate_Information. Haga clic en la pestaña Candidate_Information y seleccione toda la columna E. La fórmula debe verse así:

[![Image 21](/assets/images/academy/module_4/Module_4_Photo_21.png)](/assets/images/academy/module_4/Module_4_Photo_21.png)

3\. Escriba una coma (,). Ahora estamos listos para especificar nuestro segundo criterio: candidatos aceptados. Para hacerlo, escriba “accepted”, con todo y comillas.

4\. Cierre los paréntesis y oprima “Enter”. ¡Ya terminó su primer cálculo con la función COUNTIFS \[CONTAR.SI.CONJUNTO\]! Debe verse así:

[![Image 22](/assets/images/academy/module_4/Module_4_Photo_22.png)](/assets/images/academy/module_4/Module_4_Photo_22.png)

5\. Ahora repita este cálculo para los partidos Shireling y Zalog.

Haga clic aquí si necesita consejos sobre cómo hacerlo. Así es como deben verse los cálculos. Así es como deben verse los cálculos.

Haga doble clic en el recuadro de la esquina inferior derecha de la celda C2.

[![Image 23](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_23.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_23.png)

#### Cómo contar los candidatos rechazados \[“rejected”\] por partido (“Tot_Rej”)

Por otro lado, es importante entender cuántos solicitantes de cada partido fueron rechazados como candidatos. Este cálculo será casi exactamente igual al de la columna C, “Tot_Accept”, salvo por una diferencia importante.

1\. Repita los pasos 1 y 2 del último cálculo.

2\. Escriba una coma (,) y considere cómo debe expresar su segundo criterio para este cálculo de manera que únicamente se cuenten los candidatos que fueron rechazados por la comisión electoral de Opendya.

**¿Escribió “rejected” (con todo y comillas)? ¡Bien hecho!**

3\. Oprima “Enter” y repita el cálculo para el resto de los partidos políticos. A continuación se muestra lo que debe tener.

[![Image 24](/assets/images/academy/module_4/Module_4_Photo_24.png)](/assets/images/academy/module_4/Module_4_Photo_24.png)

#### Cómo calcular el porcentaje de candidatos aceptados (“%Accept”)

Si bien ya tenemos las cifras del total de candidatos de los tres partidos políticos de Opendya, así como de los aceptados y rechazados de cada uno, calcular los porcentajes de aceptación y rechazo nos dirá qué proporción de los candidatos propuestos por cada partido lograron postularse como candidatos para las elecciones. Considerando lo que ya sabe sobre los totales de esas cifras, tómese un momento para reflexionar, ¿qué porcentajes de aceptados esperaría usted ver?

Comencemos con el cálculo del porcentaje de candidatos aceptados por la comisión electoral, por partido político. En la columna E, “%Accept”, de la pestaña Candidate_Summary, necesitará utilizar una sencilla fórmula de división. Específicamente necesitamos dividir la Columna C, “Tot_Accept”, entre la columna B, “Tot_Cand”. La lógica matemática de este cálculo es la siguiente:

[![Formula 1](/assets/images/academy/module_4/Module_4_Formula_1.png)](/assets/images/academy/module_4/Module_4_Formula_1.png)

1\. En la celda E2, escriba el signo de igual (=). Luego haga clic en la celda C2. Observe que Excel automáticamente agrega el término “C2” a su fórmula (que se incluye en la barra de fórmula) en cuanto hace clic en esa celda. Otra opción es que simplemente escriba “C2” y Excel automáticamente creará el vínculo con esa celda.

2\. A continuación escriba una diagonal (/) para indicarle a Excel que quiere dividir la celda C2 por otro valor. Ahora haga clic en la celda B2 para indicarle a Excel que desea dividir el contenido de la celda C2 (candidatos aceptados de Draconia) por la celda B2 (total de solicitantes de candidatura pertenecientes al partido Draconia).

[![Image 25](/assets/images/academy/module_4/Module_4_Photo_25.png)](/assets/images/academy/module_4/Module_4_Photo_25.png)

3\. Oprima “Enter” y Excel calculará el porcentaje de aceptación de registros de candidatos del partido Draconia. ¿Cuál es el porcentaje de aceptación?

4\. Repita este cálculo para los partidos Shireling y Zalog. A continuación se muestra lo que debe tener.

[![Image 26](/assets/images/academy/module_4/Module_4_Photo_26.png)](/assets/images/academy/module_4/Module_4_Photo_26.png)

Considere que si los datos que se ingresaron automáticamente en las celdas no aparecen como porcentajes, quizás necesite cambiar el formato de la celda. Haga clic en la letra “E” para seleccionar toda la fila. Haga clic con el botón derecho del mouse y seleccione “Format Cells” \[Formato de celda\].

[![Image 27](/assets/images/academy/module_4/Module_4_Photo_27.png)](/assets/images/academy/module_4/Module_4_Photo_27.png)

Seleccione “Percentage” \[Porcentaje\], especifique el número de decimales que desee y haga clic en “OK” \[Aceptar\].

#### Cómo calcular el porcentaje de candidatos rechazados (“% Reject”)

Esta siguiente parte del análisis es similar al cálculo anterior que realizó para “%Accept”. ¿Con qué columnas cree que deberá trabajar para calcular el porcentaje de candidatos rechazados? Si respondió que las columnas D (“Tot_Rej”) y B (“Tot_Cand”), ¡bien hecho!

Ahora realice este cálculo usted solo(a). Haga clic aquí si necesita ayuda con la fórmula.

[![Image 28](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_28.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_28.png)

A continuación se muestran los resultados:

[![Image 29](/assets/images/academy/module_4/Module_4_Photo_29.png)](/assets/images/academy/module_4/Module_4_Photo_29.png)

#### ¿Qué observa?

¡Acaba de realizar cinco cálculos importantes sobre el registro de candidatos en Opendya! ¿Qué tendencias observa en el número de candidatos propuestos por cada partido político, el número o porcentaje de candidatos aceptados y el número o porcentaje de candidatos rechazados?

\[para ver las respuestas utilice el comando “Alternar”\]

Hallazgos: ¿Notó que el porcentaje de candidatos de oposición rechazados fue mayor (especialmente del partido Shireling)? ¿Observó que, en general, el partido gobernante propuso un mayor número de candidatos?

## Cómo analizar las decisiones sobre el registro de candidatos según el sexo

#### A. Cómo calcular las cifras netas de candidatos según el sexo

Entender la demografía de género de los candidatos propuestos en Opendya (tanto aceptados como rechazados) nos dará una idea más clara de si los partidos son representativos o no, tanto de los hombres como de las mujeres. Asimismo, nos ayudará a entender si los hombres y las mujeres tienen las mismas oportunidades de postularse para cargos de elección popular a través del proceso de registro de candidatos.

Comenzaremos con el cálculo de las cifras netas del número de hombres y mujeres que solicitaron su candidatura y cuántos de estos fueron aceptados o rechazados. Luego sacaremos algunos porcentajes.

#### Número de candidatas por partido (“nFem_Cand”)

En la columna G de la pestaña Candidate_Summary, calcularemos el número de candidatas propuestas por cada partido político en Opendya.

¿Qué fórmula necesita para hacer este cálculo?

Si respondió que COUNTIFS \[CONTEO.SI.CONJUNTO\], ¡está en lo correcto! Ahora ¿cuáles son los rangos y criterios? Tómese un momento para definir la fórmula por sí solo(a). Si necesita ayuda, haga clic aquí.

Los rangos y criterios para este cálculo son los siguientes:

- Rango_1: “Party”, columna D, pestaña Candidate_Information
- Criterios_1: “Draconia” (después, “Zalog” y “Shireling”), celda A2, pestaña Candidate_Summary
- Rango_2: “Gender”, columna B, pestaña Candidate_Information
- Criterios_2: “female”
  [![Image 30](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_30.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_30.png)

Una vez que termine de calcular el número de candidatas de todos los partidos, compare sus respuestas con la siguiente imagen:

[![Image 31](/assets/images/academy/module_4/Module_4_Photo_31.png)](/assets/images/academy/module_4/Module_4_Photo_31.png)

##### Número de candidatas aceptadas por partido (“nFem_Accept”)

Ahora vamos a calcular el número de candidatas aceptadas de cada partido político. Este será el primer cálculo que realice en donde se requieren tres distintos rangos y criterios para la función COUNTIFS \[CONTAR.SI.CONJUNTO\]. Se van a contar las celdas con base en: 1) Partido político, 2) sexo, 3) aceptación como candidatos.

1\. Repita toda la fórmula para la celda G2, “nFem_Cand”, para indicarle a Excel que debe contar únicamente a los solicitantes de candidatura del partido Draconia del sexo femenino. **No cierre los paréntesis ni oprima “Enter” todavía,** solo escriba una coma (,) para agregar el tercer rango y criterio.

2\. Aún necesita especificar que está buscando únicamente a los candidatos aceptados. Haga clic en la pestaña Candidate_Summary y seleccione toda la columna E, “Decision”. Escriba una coma \[,\].

[![Image 32](/assets/images/academy/module_4/Module_4_Photo_32.png)](/assets/images/academy/module_4/Module_4_Photo_32.png)

3\. Ahora agregue sus criterios finales. Escriba “accepted” (entre comillas) en la barra de fórmula. Cierre los paréntesis y oprima “Enter”. ¡Felicidades! ¡Ya domina la función triple de COUNTIFS \[CONTAR.SI.CONJUNTO\]!

[![Image 33](/assets/images/academy/module_4/Module_4_Photo_33.png)](/assets/images/academy/module_4/Module_4_Photo_33.png)

4\. Repita las fórmulas con el resto de los partidos políticos y compare sus resultados con la siguiente imagen:

[![Image 34](/assets/images/academy/module_4/Module_4_Photo_34.png)](/assets/images/academy/module_4/Module_4_Photo_34.png)

#### Número de candidatas rechazadas por partido (“nFem_Rej”)

Ahora que ya es todo(a) un(a) experto(a) en el uso de COUNTIFS \[CONTAR.SI.CONJUNTO\], calcule el número de candidatas rechazadas para cada uno de los partidos. Haga clic aquí si necesita ayuda para definir los rangos, criterios, o la fórmula en general.

Los rangos y criterios para este cálculo son los siguientes:

- Rango_1: “Party”, columna D, pestaña Candidate_Information
- Criterios_1: “Draconia” (después, “Zalog” y “Shireling”), celda A2, pestaña Candidate_Summary
- Rango_2: “Gender”, columna B, pestaña Candidate_Information
- Criterios_2: “female”
- Rango_3: “Decision”, columna E, pestaña Candidate_Information
- Criterios_3: “rejected”
  [![Image 35](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_35.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_35.png)

Confirme sus respuestas aquí.

[![Image 36](/assets/images/academy/module_4/Module_4_Photo_36.png)](/assets/images/academy/module_4/Module_4_Photo_36.png)

#### Número de candidatos por partido (“nMale_Cand”),

#### Número de candidatos aceptados por partido (“nMale_Accept”), y

#### Número de candidatos rechazados por partido (“nMale_Rej”),

¡Ahora sí ya domina todos esos cálculos! Recuerde cómo realizó los cálculos de las columnas G (“nFem_Cand”), H (“nFem_Accept”), e I (“nFem_Rej”), y haga los ajustes que sean necesarios a la fórmula para obtener únicamente los candidatos del sexo masculino. Haga clic aquí para ver una pista.

Recuerde cambiar su segundo criterio a “male” \[masculino\] en cada cálculo. Eso es lo único que necesita cambiar.

A continuación se muestra cómo deben verse los resultados de los cálculos:

[![Image 37](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_37.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_37.png)

#### B. Cómo calcular el porcentaje de candidatos según el sexo

¡Ya casi terminamos! Por último, queremos calcular los porcentajes de aceptación y rechazo de los candidatos del sexo femenino y masculino en Opendya, por cada partido político. Esto nos dará una idea de lo uniformes que fueron los veredictos de aceptación y rechazo a los que llegó la comisión electoral.

#### Porcentaje de candidatas por partido (“%Fem_Cand”)

Este es un cálculo sencillo. Para empezar, queremos saber cuál es el desglose de los porcentajes de candidatos del sexo femenino y masculino de cada partido político. Nuevamente, tómese un momento para tratar de adivinar cuáles serán esos porcentajes. Basándose en su experiencia y sus instintos, ¿qué porcentaje de candidatos cree que será mayor, el de sexo femenino o el de sexo masculino? ¿Con qué campos cree que tendremos que trabajar para hacer estos cálculos?

Efectivamente, con “nFem_Cand” (columna G) y con “Tot_Cand” (columna B). La lógica es la siguiente:

[![Formula 2](/assets/images/academy/module_4/Module_4_Formula_2.png)](/assets/images/academy/module_4/Module_4_Formula_2.png) Haga clic aquí si necesita ayuda para entender la fórmula.

[![Image 38](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_38.png)](https://openelectiondata.net/images/academy/module_4/Module_4_Photo_38.png)

¿Qué porcentaje de los candidatos propuestos por el partido Draconia son mujeres? Si la respuesta que obtuvo fue 35% ¡felicidades, está en lo correcto! Ahora realice el mismo cálculo para los otros dos partidos políticos. Le mostraremos todos los resultados una vez que termine de calcular unos cuantos porcentajes más.

#### Porcentaje de candidatas aceptadas (“%Fem_Accept”)

Ahora realizaremos un cálculo para darnos una idea de la proporción de candidatas aceptadas por la comisión electoral según el partido.

Piense cómo hacer este cálculo, o haga clic aquí si necesita ayuda.

Divida el número de candidatas aceptadas (columna H, “nFem_Accept”) entre el número de candidatas (columna G, “nFem_Cand”).

#### Porcentaje de candidatas rechazadas (“%Fem_Rej”)

De igual manera, veamos qué porcentaje de candidatas fueron rechazadas en los distintos partidos políticos. Antes de que realice el cálculo, y considerando lo que ya sabe sobre el porcentaje de mujeres aceptadas, ¿cuál espera que sea el porcentaje de rechazo?

Si necesita ayuda con los cálculos, haga clic aquí.

Divida el número de candidatas rechazadas (columna I, “nFem_Rej”) entre el número de candidatas (columna G, “nFem_Cand”).

#### Porcentaje de candidatos del sexo masculino por partido (“%Male_Cand”), porcentaje de candidatos del sexo masculino aceptados (“%Male_Accept”), y porcentaje de candidatos del sexo masculino rechazados (“%Male_Rej”).

Realice los cálculos para las últimas tres columnas relativas a los candidatos del sexo masculino utilizando la misma lógica de los cálculos para candidatas aceptadas y rechazadas. Recuerde que está calculando la participación de candidatos del sexo masculino (“%Male_Cand”) de cada partido político, el porcentaje de candidatos del sexo masculino aceptados (“%Male_Accept”) dentro de cada partido, y el porcentaje de candidatos del sexo masculino rechazados (“%Male_Rej”) en cada partido.

Compare aquí sus resultados para esta parte del módulo.

[![Image 39](/assets/images/academy/module_4/Module_4_Photo_39.png)](/assets/images/academy/module_4/Module_4_Photo_39.png)

#### ¿Qué observa?

¡Ha realizado una gran cantidad de cálculos! Piense un momento acerca de qué tendencias esperaba ver en cuanto a los porcentajes de aceptación y rechazo de los candidatos del sexo femenino y masculino en los tres partidos de Opendya. ¿Sus expectativas fueron correctas? ¿Hubo algo que le sorprendiera? ¿Qué tendencias relacionadas con el género pudo detectar en el proceso de registro de candidatos con base en su análisis?

Haga clic aquí para ver los hallazgos:

Hallazgos: De manera general, el número de candidatas rechazadas fue mayor.
