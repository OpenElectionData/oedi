---
title: '6. Cómo evaluar las tendencias temporales en el registro de votantes'
lang: es
module_id: 6
permalink: '/academy/evaluating-temporal-trends-in-voter-registration/'
excerpt: "Module 6 will solidify skills you began to master in Module 5 to allow you to do a more advanced analysis of voter registration data. We hope that by the end you will be able to:
<ul><li>Master your understanding of SUMIF functions,</li>
<li>integrate SUMIF functions into basic Excel operations, and</li>
<li>consider political ramifications of your data.</li></ul>"
---

Resumen breve
-------------

En el Módulo 6 consolidará las habilidades que comenzó a dominar en el Módulo 5 y que le permitirán realizar análisis más avanzados de los datos del registro de votantes. El objetivo de este módulo es que al finalizar usted:

*   domine su entendimiento de las funciones SUMIF \[SUMAR.SI\],
*   sea capaz de integrar funciones SUMIF \[SUMAR.SI\] en operaciones básicas de Excel, y
*   sea capaz de considerar las ramificaciones políticas de sus datos.

¿Por qué son importantes los datos del registro de votantes?
------------------------------------------------------------

Como ya mencionamos en la [Guía de datos electorales](https://openelectiondata.net/es/guide/key-categories/ballot-qualification/), a fair [registro de votantes](https://openelectiondata.net/es/guide/key-categories/voter-registration/) justo fomenta la igualdad política y promueve activamente la inclusión de las personas con derecho a votar. Cuando el proceso de registro de votantes es justo y transparente, esto puede aumentar la legitimidad de las elecciones. Por el contrario, si el proceso de registro de votantes se lleva a cabo de una manera inadecuada o no ofrece las mismas oportunidades de participación para todos, puede poner en entredicho la legitimidad de toda una elección.

Las organizaciones de la sociedad civil con frecuencia utilizan las estadísticas del registro de votantes para determinar si el proceso en general fue justo e incluyente. Los módulos del 5 al 7 mejorarán su capacidad para llevar a cabo este importante análisis.

¡Bienvenido nuevamente a Opendya!
---------------------------------

¡Estamos de regreso en Opendya! Como recordará, usted logró obtener un conjunto de datos del registro de votantes recopilado por la comisión electoral. El archivo contiene los datos de un ejercicio de cinco semanas que se llevó a cabo para actualizar el padrón electoral en anticipación a las elecciones de 2014.

Aunque no es un requisito, le sugerimos terminar primero el Módulo 5 para que se familiarice con los datos y los antecedentes políticos de Opendya. Por si no ha terminado el Módulo 5, a continuación le proporcionamos algunos antecedentes importantes que debe conocer:

*   Opendya celebró elecciones nacionales en 2010 y en 2014.
*   La capital de Opendya se encuentra en el distrito de Opa City (código de distrito: 47), el cual abarca tanto zonas urbanas como rurales.
*   Desde las elecciones de 2010 han surgido conflictos violentos en dos distritos: Conflicteri (código de distrito: 9) y Disputana (código de distrito: 23),
*   En anticipación a las elecciones de 2014, la comisión electoral de Opendya llevó a cabo un ejercicio de cinco semanas para actualizar el padrón electoral, durante el cual se añadieron nuevos votantes al mismo.

Para realizar el presente ejercicio puede seguir utilizando el conjunto de datos que descargó en el Módulo 5, o puede **volver a descargar el archivo [aquí](/files/academy/exercise/Module_6_Registered_Voters.xlsx)**.

Cómo analizar los datos del registro de votantes
------------------------------------------------

Revise el contenido del archivo para que se familiarice con los datos del registro de votantes de Opendya. Si ya terminó el Módulo 5 y ya conoce estos datos, **[puede saltarse esta sección](#evalweeklyregistration)** y pasar directamente al análisis.

Primero revisaremos la pestaña Registration\_Data \[Datos de registro\], la cual contiene varios datos sobre el proceso de registro en Opendya. Posteriormente le echaremos un vistazo a la pestaña Data\_Summary \[Resumen de datos\], que es donde haremos el análisis.

#### **District\_Name**

La columna de la izquierda de la pestaña Registration\_Data contiene los nombres de todos los distritos de Opendya. Observe que este es el único nivel geográfico que ofrece el conjunto de datos. En este punto no contamos con más información sobre si estos distritos están cerca uno del otro o si se ubican dentro de la misma unidad geográfica en un nivel más alto.

[![Image 1](/images/academy/module_6/Module_6_Photo_1.png)](/images/academy/module_6/Module_6_Photo_1.png)

#### **District\_Code**

La Comisión Electoral de Opendya también le asigna a cada distrito un código o identificador único. Tómese unos minutos para revisar el archivo e identificar el patrón de numeración de los distritos. (¡Esto es muy sencillo!)

Como ya se mencionó en el [Módulo 2: Cómo analizar una lista de centros de votación](https://openelectiondata.net/es/academy/reviewing-a-polling-station-list/), los identificadores únicos son sumamente útiles en el manejo de los conjuntos de datos. Nos ayudan a detectar registros duplicados y distinguir adecuadamente entre unidades con nombres similares.

[![Image 2](/images/academy/module_6/Module_6_Photo_2.png)](/images/academy/module_6/Module_6_Photo_2.png)

#### **Type**

La columna C, “Type” (Tipo), clasifica a cada uno de los distritos de Opendya según sus características. Revise todos los datos para identificar qué descriptores se utilizan para indicar el tipo de distrito. ¿Cuántos tipos diferentes observa?

[![Image 3](/images/academy/module_6/Module_6_Photo_3.png)](/images/academy/module_6/Module_6_Photo_3.png)

Existen tres tipos de distritos en este conjunto de datos: urbanos, rurales y la capital.

#### **2010\_Registered**

Como ya se mencionó, Opendya celebró elecciones nacionales en 2010. Este conjunto de datos muestra el número final de votantes registrados al momento de las elecciones. Podemos usar la columna D, “2010\_Registered”, para comparar las cifras de registro de los dos ciclos electorales.

[![Image 4](/images/academy/module_6/Module_6_Photo_4.png)](/images/academy/module_6/Module_6_Photo_4.png)

#### **Reg\_Week1, Reg\_Week2, Reg\_Week3, and Reg\_Week4**

Como también se mencionó, en 2014 la comisión electoral de Opendya realizó una actualización del padrón electoral mediante un ejercicio de registro de votantes que duró cinco semanas. Las siguientes cuatro columnas: “Reg\_Week1”, “Reg\_Week2”, “Reg\_Week3”, y “Reg\_Week4”, muestran el número total de votantes registrados al final de cuatro de las cinco semanas que duró el ejercicio de actualización de 2014. La diferencia entre cada semana nos da el número de nuevos votantes registrados durante este periodo.

Estos números nos pueden dar un indicio del desempeño de la comisión electoral durante ese tiempo y resaltar los puntos de mayor y menor registro en distritos y/o momentos específicos. Trabajaremos con estas columnas para terminar el Módulo 6.

[![Image 5](/images/academy/module_6/Module_6_Photo_5.png)](/images/academy/module_6/Module_6_Photo_5.png)

#### **Reg\_Tot\_Final**

La columna I, “Reg\_Tot\_Final”, muestra el total de votantes registrados por distrito al final de la quinta semana del ejercicio de registro de 2014. Note que la diferencia entre las cifras de la columna H, “Reg\_Week4” y las de la columna I, “Reg\_Tot\_Final”, es el número de votantes que se registraron durante la quinta y última semana del periodo de actualización.

[![Image 6](/images/academy/module_6/Module_6_Photo_6.png)](/images/academy/module_6/Module_6_Photo_6.png)

#### **Final\_Female, Final\_Male**

Esta columna nos muestra cuántos hombres y cuántas mujeres en total se registraron para votar en las elecciones de 2014 en cada distrito. Observe que el número de votantes del sexo femenino y masculino para 2014 son cifras finales, y no cifras semanales.

[![Image 7](/images/academy/module_6/Module_6_Photo_7.png)](/images/academy/module_6/Module_6_Photo_7.png)

Ahora que conocemos los datos, prosigamos con el análisis.

#### **Cómo analizar la pestaña Data\_Summary**

En el Módulo 6 utilizaremos la pestaña Data\_Summary del archivo de Excel para sacar un resumen de cálculos basados en datos tomados de la pestaña Registration\_Data. Específicamente utilizaremos la columna A y las columnas de la F a la O (las columnas B a la E se utilizaron en el Módulo 5). Se ve así:

[![Image 8](/images/academy/module_6/Module_6_Photo_8.png)](/images/academy/module_6/Module_6_Photo_8.png)

_Nota: Los cálculos de las columnas B a la E se realizaron en el Módulo 5._

Cómo evaluar las tendencias de registro semanal en los distintos tipos de distrito
----------------------------------------------------------------------------------

En el Módulo 6 hará uso de todas sus habilidades de análisis para evaluar tendencias en el registro de votantes a lo largo del tiempo en cada uno de los tres tipos de distrito de Opendya. Esto le dará una idea de dónde y cuándo se registraron los votantes durante el periodo de actualización de 2014.

El análisis que haremos consiste en lo siguiente:

*   Para cada tipo de distrito (urbano, rural y la capital), calcular el número de nuevos votantes que se añadieron durante cada semana del ejercicio de registro de votantes de 2014.
*   Calcular el porcentaje de nuevos votantes que se añadieron durante cada semana del ejercicio de actualización en los tres tipos de distrito.
*   Analizar los patrones en el registro a lo largo del tiempo y considerar sus ramificaciones políticas.

#### **Recordatorio: Cómo usar la función SUMIF \[SUMAR.SI\] para sumar datos en una categoría específica**

En este módulo continuaremos utilizando bastante la función [SUMIF \[SUMAR.SI\]](https://support.office.com/en-us/article/SUMIF-function-169B8C99-C05C-4483-A712-1697A653039B) de Excel. Como recordatorio, la función SUMIF \[SUMAR.SI\] se utiliza para sumar los valores en un rango específico de celdas que cumplen con el criterio que buscamos. En este caso, utilizaremos SUMIF \[SUMAR.SI\] para sumar los números de votantes registrados que correspondan específicamente a los distritos urbanos, a los distritos rurales, y al distrito capital.

La fórmula tiene la siguiente estructura: SUMIF(rango, criterios, \[sum\_range\])

*   **Range \[Rango\]**: El rango especifica el grupo de celdas que desea evaluar de acuerdo con sus criterios. En este caso, vamos a sumar los datos con base en el tipo de distrito. Considerando que nuestro criterio es el tipo de distrito, ¿qué columna de la hoja de cálculo cree que debemos usar para el rango? ¿En qué columna buscamos la información sobre el tipo de distrito? (Respuesta = Columna C, “Type” \[Tipo\]).
*   **Criteria \[Criterios\]**: Los criterios indicarán si un número debe sumarse o no. Los criterios pueden tomar la forma de un número, una expresión, una referencia de celda, texto, o una función que defina qué celdas deben sumarse. Para este ejercicio seleccionaremos de entre tres criterios distintos (“urban”, “rural” y “capital district”) y le indicaremos a Excel que sume los números del registro de votantes de los distritos que coincidan con alguna de estas categorías específicas.
*   **Sum\_range \[Rango de suma\]**: Esto le indica a Excel qué celdas debe sumar, en caso de que desee sumar celdas distintas a las que se especifican en el argumento de rango.

### A. Cómo calcular el aumento semanal de registro en los distintos tipos de distrito

Queremos calcular el número de votantes adicionales registrados durante cada semana del ejercicio de actualización del padrón electoral de Opendya en 2014 de acuerdo con el tipo de distrito. En otras palabras, queremos calcular la diferencia en el número de votantes registrados semana a semana en los distritos urbanos, en los rurales, y en la capital.

Esperamos que recuerde cómo utilizar la función [SUMIF \[SUMAR.SI\]](https://openelectiondata.net/es/academy/evaluating-gender-and-geographic-trends-in-voter-registration/) aprendida en el Módulo 5, porque seguro la necesitará aquí.

##### **Número de nuevos votantes agregados durante la primera semana de registro (“nW1\_incr”)**

La columna F, “nW1\_icnr”, de la pestaña Data\_Summary es donde se calcula el número de nuevos votantes añadidos al padrón durante la 1ª Semana del proceso de registro de 2014. Nuevamente, necesitamos calcular esta cifra para los tres tipos de distrito. Antes de empezar, piense en cómo podría realizar usted este cálculo. ¿Qué funciones y columnas necesitará? (Nota: tendrá que extraer datos de la pestaña Registration\_Data).

Para calcular el número de nuevos votantes durante la 1ª Semana de registro, tendrá que utilizar la columna F, “Reg\_Week1”, de la pestaña Registration\_Data. Recuerde que esa columna contiene el total de votantes registrados en cada distrito al final de la primera semana de la actualización del padrón electoral de 2010; no indica el número de votantes que se registraron durante esa semana específica. Luego tendrá que usar la columna A, “RV2010”, de la pestaña Data\_Summary. Deberá haber realizado los cálculos de la columna A en el Módulo 5, ya que necesitará extraer datos de ella. (Si aún no ha terminado el Módulo 5, [haga clic aquí](https://openelectiondata.net/es/academy/evaluating-gender-and-geographic-trends-in-voter-registration/) para que pueda realizar este análisis y continuar con el resto del Módulo 6).

A continuación se presenta la explicación de la lógica que necesita aplicar para realizar este cálculo para los distritos urbanos. La misma estructura básica se aplicará para los distritos rurales y la capital.

[![Image 1](/images/academy/module_6/Module_6_Formula_1.png)](/images/academy/module_6/Module_6_Formula_1.png)

1\. Ponga en práctica sus habilidades para el uso de la función SUMIF \[SUMAR.SI\] y utilice la celda F2 de la pestaña Data\_Summary para calcular el número total de votantes urbanos registrados al final de la primera semana. Si necesita ayuda, haga clic aquí.

La fórmula tiene la siguiente estructura: SUMAR.SI(rango, criterios, \[sum\_range\]). A continuación se muestra cómo puede utilizar la función SUMIF \[SUMAR.SI\] para sacar el número total de votantes urbanos registrados al final de la primera semana de registro.

*   **Range \[Rango\]**: El rango especifica el grupo de celdas que desea evaluar de acuerdo con sus criterios. En este caso, vamos a sumar los datos con base en el tipo de distrito. Considerando que nuestro criterio es el tipo de distrito, necesitamos utilizar la columna C, “Type” \[Tipo\], de la pestaña Registration\_Data.
*   **Criteria \[Criterios\]**: Los criterios indicarán si un número debe sumarse o no. Los criterios pueden tomar la forma de un número, una expresión, una referencia de celda, texto, o una función que defina qué celdas deben sumarse. Para este ejercicio seleccionaremos de entre tres criterios distintos (“urban”, “rural” y “capital district”) y le indicaremos a Excel que sume los números que coincidan con alguna de estas categorías específicas. En este caso puede hacer clic en las celdas A2, A3 o A4 de la pestaña Data\_Summary para especificar sus criterios.
*   **Sum\_range \[Rango de suma\]**: Esto le indica a Excel qué celdas debe sumar, en caso de que desee sumar celdas distintas a las que se especifican en el argumento de rango. Con esto le estamos indicando a Excel que sume el número de votantes registrados al final de la 1ª Semana de actualización, únicamente en los distritos urbanos (columna E = “Reg\_Week1”).

[![Image 9](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_9.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_9.png)

Una vez que termine de escribir la función SUMIF \[SUMAR.SI\] cierre los paréntesis, pero no oprima “Enter”. Vamos a agregar ahora una función de sustracción en la misma celda. Sí, ¡se pueden utilizar varias fórmulas de Excel a la vez!

2\. Al final de la fórmula en la celda F2, escriba un signo de menos (-) y haga clic en la celda B, la cual contiene el número de votantes urbanos registrados en 2010.

[![Image 10](/images/academy/module_6/Module_6_Photo_10.png)](/images/academy/module_6/Module_6_Photo_10.png)

3\. Oprima “Enter” y revise su respuesta. ¿Qué resultado obtuvo? Si el cálculo le dice que se agregaron 18,358 votantes urbanos después de la primera semana de registro, ¡es correcto!

4\. Ahora indíquele a Excel que repita la fórmula para las zonas rurales y la capital, utilizando el método que ya vimos. Le recomendamos que revise los resultados de los cálculos que genera Excel automáticamente para asegurarse de que el programa haya hecho lo que usted quería. En este caso, como se muestra en la siguiente imagen, observe cómo Excel modificó automáticamente sus “criterios” a un tipo de distrito distinto al mover hacia abajo las opciones de la columna A. En cada una de las filas, Excel también identificó que debía restar distintas celdas en la columna B “RV2014”, la cual corresponde a la población de votantes registrados en 2010 en los distritos rurales y el distrito capital.

[![Image 11](/images/academy/module_6/Module_6_Photo_11.png)](/images/academy/module_6/Module_6_Photo_11.png)

##### **Número de nuevos votantes agregados durante de la segunda semana de registro (“nW2\_incr”)**

La fórmula para calcular la diferencia entre la 1ª Semana y la 2ª Semana del proceso de registro de Opendya se vuelve un poco más complicada. Aquí tenemos que usar dos fórmulas SUMIF \[SUMAR.SI\] en la misma celda. Suena difícil, pero lo hará bien.

A continuación se presenta la lógica de este cálculo. Revísela cuidadosamente para asegurarse de haberlo entendido.

[![Image 2](/images/academy/module_6/Module_6_Formula_2.png)](/images/academy/module_6/Module_6_Formula_2.png)

1\. Empecemos ahora con el cálculo de la 2ª Semana en la celda G2. Primero, utilizando SUMIF \[SUMAR.SI\], calcule el total de votantes urbanos después de la 2ª Semana de registro. La siguiente imagen nos muestra cómo debe verse la fórmula.

[![Image 12](/images/academy/module_6/Module_6_Photo_12.png)](/images/academy/module_6/Module_6_Photo_12.png)

2\. A continuación escribiremos el signo de menos (-) para indicarle a Excel que tiene que realizar una sustracción. ¡Aún no oprima “Enter”!

3\. Ahora hay que escribir una segunda fórmula SUMIF \[SUMAR.SI\] para indicarle a Excel que sume el número total de votantes urbanos al final de la 1ª Semana de registro. (Nota: Esta es exactamente la misma fórmula SUMIF \[SUMAR.SI\] que debió haber escrito para realizar el cálculo “nW1\_incr” hace rato, sin embargo, no necesita restarle “RV2010”.) La siguiente imagen nos muestra la fórmula completa.

[![Image 13](/images/academy/module_6/Module_6_Photo_13.png)](/images/academy/module_6/Module_6_Photo_13.png)

4\. Oprima “Enter” y ¡observe el resultado! Si el cálculo le dice que 21,944 nuevos votantes urbanos se registraron durante la 2ª Semana, ¡es correcto!

Si su resultado es distinto, revise la fórmula para ver si en algún momento por accidente hizo clic en la celda equivocada. Recuerde que Excel automáticamente ingresa los datos de las fórmulas según donde haga clic.

5\. Ahora repita el cálculo de la 2ª Semana para los distritos rurales y la capital. A continuación se muestra lo que debe tener.

[![Image 14](/images/academy/module_6/Module_6_Photo_14.png)](/images/academy/module_6/Module_6_Photo_14.png)

##### **Número de nuevos votantes agregados durante la tercera semana de registro (“nW3\_incr”)**

El cálculo de la 3ª Semana ya no debe asustarle. Se aplican exactamente la misma lógica y fórmulas que ya utilizó anteriormente, pero esta vez va a restarle el total de votantes registrados en la 3ª Semana al total de votantes registrados en la 2ª Semana.

¡Intente hacerlo usted solo(a)! Una vez que termine, puede hacer clic aquí para ver la fórmula y los resultados.

[![Image 15](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_15.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_15.png)

##### **Número de nuevos votantes agregados durante la cuarta semana de registro (“nW4\_incr”)**

Ahora ya debe estar listo(a) para hacer los cálculos de la 4ª Semana usted solo(a). ¡La lógica y las fórmulas son las mismas!

Una vez que termine, haga clic aquí para ver las fórmulas y los resultados.

[![Image 16](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_16.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_16.png)

##### **Número de nuevos votantes agregados durante de la última semana de registro (“nWf\_incr”)**

¡Ya casi terminamos! Esta última fórmula será un poco más sencilla, pero tendrá que pensar cuidadosamente para entender la lógica. En este caso vamos a calcular cuánto aumentó el registro de votantes durante la quinta y última semana de registro.

[![Image 3](/images/academy/module_6/Module_6_Formula_3.png)](/images/academy/module_6/Module_6_Formula_3.png)

Recuerde que en la Parte A de este módulo calculamos el número total de votantes de cada uno de los tipos de distrito de Opendya (columna C, “RV2014”), en 2014. Esto le ahorrará esfuerzos, ya que no tendrá que hacer otra función SUMIF \[SUMAR.SI\] para ese componente.

1\. En la celda J2 escriba el signo de igual (=) y haga clic en la celda C2, la cual contiene el total final de votantes urbanos registrados para las elecciones de 2014.

2\. Agregue el signo de menos (-). Esto es lo que debe tener:

[![Image 17](/images/academy/module_6/Module_6_Photo_17.png)](/images/academy/module_6/Module_6_Photo_17.png)

3\. Ahora viene la última fórmula SUMIF \[SUMAR.SI\]. Con esto calcularemos el total de votantes urbanos registrados al final de la 4ª Semana del proceso de registro. Realice el cálculo con la fórmula SUMIF \[SUMAR.SI\] usted solo(a).

¿Cuántos nuevos votantes urbanos se registraron durante la 5ª Semana? Haga clic aquí si desea ver una imagen de la fórmula.

[![Image 18](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_18.png)](https://openelectiondata.net/images/academy/module_6/Module_6_Photo_18.png)

4\. Ahora repita la fórmula para los dos tipos de distrito restantes. A continuación se muestra lo que debe tener.

[![Image 19](/images/academy/module_6/Module_6_Photo_19.png)](/images/academy/module_6/Module_6_Photo_19.png)

¡Felicidades! Ya domina la fórmula SUMIF \[SUMAR.SI\] y logró realizar cálculos útiles relacionados con el ejercicio de registro de votantes de Opendya en 2014.

Prosiga con la última parte de este módulo para entender mejor las cifras del proceso de registro que ha calculado, mediante el uso de porcentajes y análisis político.

### B. Cómo calcular el aumento semanal en el registro como porcentaje del incremento total

Ya calculó con éxito cuánto aumentó el número de votantes registrados en Opendya cada semana en los distintos tipos de distrito. En el contexto de la actualización general del padrón, sería interesante conocer en qué semana(s) se registró el mayor número de votantes adicionales en los distintos tipos de distrito. ¿Qué tendencias espera ver a lo largo del tiempo?

Para realizar este cálculo necesitamos trabajar con las columnas de la H a la L de la pestaña Data\_Summary, así como con la columna D, “2010-2014”, que indica el aumento en el número total de votantes registrados para las elecciones de 2010 y de 2014 por tipo de distrito.

##### **Porcentaje de nuevos votantes registrados durante la primera semana (“Wk1\_%of\_total”)**

Veamos qué porcentaje de todos los nuevos votantes registrados durante el ejercicio de actualización del padrón electoral de Opendya de 2014 se registraron en cada tipo de distrito durante la 1ª Semana del ejercicio. ¿Qué columnas de datos cree que necesitamos utilizar para realizar este cálculo? Recuerde que estamos buscando el incremento semanal en comparación con el incremento total durante el ejercicio de actualización.

Sin salir de la pestaña Data\_Summary, usaremos la columna H “nWk1\_inc” y la columna D, “2010-2014”. Observe a continuación la estructura del cálculo.

[![Image 4](/images/academy/module_6/Module_6_Formula_4.png)](/images/academy/module_6/Module_6_Formula_4.png)

1\. En la celda K1, indíquele a Excel que divida el número de votantes urbanos agregados durante la 1ª Semana (celda K2) entre el número total de votantes urbanos agregados entre 2010 y 2014 (celda D2). ¿Qué porcentaje de los nuevos votantes urbanos corresponde a la 1ª Semana?

Revise su respuesta abajo.

[![Image 20](/images/academy/module_6/Module_6_Photo_20.png)](/images/academy/module_6/Module_6_Photo_20.png)

2\. Ahora repita su cálculo para los dos tipos de distrito restantes. Puede revisar sus respuestas abajo.

[![Image 21](/images/academy/module_6/Module_6_Photo_21.png)](/images/academy/module_6/Module_6_Photo_21.png)

##### **Porcentaje de nuevos votantes registrados durante la 2ª, 3ª, 4ª y 5ª semana, respectivamente (“Wk2\_%of\_total”, “Wk3\_%of\_total”, “Wk4\_%of\_total”, y “Wkf\_%of\_total”)**

Utilice exactamente las mismas fórmulas de Excel y lógica matemática para realizar los cálculos de porcentaje para las Semanas de la 2ª a la 5ª del ejercicio de actualización del padrón electoral de 2014.

Recuerde que para cada tipo de distrito hay que dividir el número de nuevos votantes registrados durante cada semana específica (columnas G a la J) entre el número total de nuevos votantes agregados entre 2010 y 2014 (columna D).

Los cálculos finales deben verse así:

[![Image 22](/images/academy/module_6/Module_6_Photo_22.png)](/images/academy/module_6/Module_6_Photo_22.png)

##### **¿Qué observa?**

Observe cómo cambió el padrón electoral de Opendya durante el ejercicio de actualización de 2014 y en los distintos tipos de distrito.

*   ¿En qué momento y en qué tipo de distrito se registró el mayor número de votantes nuevos durante la actualización de 2014?
*   ¿Cuándo y dónde se registró el menor número de votantes nuevos durante la actualización de 2014?
*   ¿Qué tendencias políticas podrían indicar estos patrones?
*   Como observador electoral, ¿qué información adicional le gustaría reunir para apoyar su análisis de estas tendencias? ¿Cómo podría recopilar esa información?
