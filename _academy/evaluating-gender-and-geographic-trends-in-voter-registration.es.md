---
title: '5. Cómo evaluar las tendencias geográficas y de género en el registro de votantes'
lang: es
module_id: 5
permalink: '/academy/evaluating-gender-and-geographic-trends-in-voter-registration/'
excerpt: "During this tutorial, you’ll practice basic data analysis with voter registration information. We’d like you to improve your ability to:
<ul><li>utilize basic operators in Microsoft Excel (including calculating sums, differences and percentages),</li>
<li>employ the SUMIF function in Excel, and</li>
<li>explore political considerations of the data you have analyzed.</li></ul>"
---

## Resumen breve

En este tutorial practicaremos el análisis básico de datos con información del registro de votantes. El objetivo es mejorar sus habilidades para:

- utilizar operadores básicos en Microsoft Excel (incluyendo el cálculo de sumas, diferencias y porcentajes),
- emplear la función SUMIF \[SUMAR.SI\] en Excel, y
- explorar consideraciones políticas de los datos analizados.

## ¿Por qué son importantes los datos del registro de votantes?

Como ya mencionamos en la [Guía de datos electorales](https://openelectiondata.net/es/guide/), un proceso de [registro de votantes](https://openelectiondata.net/es/guide/key-categories/voter-registration/) justo fomenta la igualdad política y promueve activamente la inclusión de las personas con derecho a votar. Cuando el proceso de registro de votantes es justo y transparente, esto puede aumentar la legitimidad de las elecciones. Por el contrario, si el proceso de registro de votantes se lleva a cabo de una manera inadecuada o no ofrece las mismas oportunidades de participación para todos, puede poner en entredicho la legitimidad de toda una elección.

Las organizaciones de la sociedad civil con frecuencia utilizan las estadísticas del registro de votantes para determinar si el proceso en general fue justo e incluyente. Los módulos del 5 al 7 mejorarán su capacidad para llevar a cabo este importante análisis.

## ¡Bienvenido nuevamente a Opendya!

Para este ejercicio regresamos a Opendya. Usted logró obtener un conjunto de datos del registro de votantes recopilado por la comisión electoral, el cual incluye el número de votantes registrados por distrito. A continuación presentamos algunos antecedentes políticos adicionales que debe conocer antes de analizar los datos:

- Opendya celebró elecciones nacionales en 2010 y en 2014.
- La capital de Opendya se encuentra en el distrito de Opa City (código de distrito: 47), el cual abarca tanto zonas urbanas como rurales.
- Desde las elecciones de 2010 han surgido conflictos violentos en dos distritos: Conflicteri (código de distrito: 9) y Disputana (código de distrito: 23),
- En anticipación a las elecciones de 2014, la comisión electoral de Opendya llevó a cabo un ejercicio de cinco semanas para actualizar el padrón electoral, durante el cual se añadieron nuevos votantes al mismo.

Ya tiene los antecedentes, ahora revisemos los datos. **Descargue [aquí](/assets/academy/exercise/Module_5_Voter_Registration_Data.xlsx)** los datos del registro de votantes de Opendya. Necesitará este archivo para poder realizar el ejercicio.

### Cómo analizar los datos del registro de votantes

Revise el contenido de cada columna del archivo que acaba de descargar para que se familiarice con los datos del registro de votantes de Opendya. Por el momento solo vamos a analizar la pestaña Registration_Data \[Datos de registro\] del archivo. (Haga caso omiso de la pestaña Data_Summary \[Resumen de datos\], la cual se utilizará hasta la segunda parte de este módulo).

#### District_Name

La columna de la izquierda contiene los nombres de todos los distritos de Opendya. Observe que este es el único nivel geográfico que ofrece el conjunto de datos. En este etapa aún no contamos con más información sobre si estos distritos están cerca uno del otro o si se ubican dentro de la misma unidad geográfica en un nivel más alto.

[![Image 1](/assets/images/academy/module_5/Module_5_Photo_1.png)](/assets/images/academy/module_5/Module_5_Photo_1.png)

Desplácese hacia la última fila con datos para ver cuántos distritos hay en Opendya.

[![Image 2](/assets/images/academy/module_5/Module_5_Photo_2.png)](/assets/images/academy/module_5/Module_5_Photo_2.png)

#### District_Code

La comisión electoral de Opendya también le asigna a cada distrito un código o identificador único. Tómese unos minutos para revisar el archivo e identificar el patrón de numeración de los distritos. (¡Esto es muy sencillo!)

Como ya se mencionó en el [Módulo 2: Cómo analizar una lista de centros de votación](https://openelectiondata.net/es/academy/reviewing-a-polling-station-list/), los identificadores únicos son sumamente útiles en el manejo de los conjuntos de datos. Nos ayudan a detectar registros duplicados y distinguir adecuadamente entre unidades con nombres similares.

[![Image 3](/assets/images/academy/module_5/Module_5_Photo_3.png)](/assets/images/academy/module_5/Module_5_Photo_3.png)

#### Type

La columna C, “Type” (Tipo), clasifica a cada uno de los distritos de Opendya según sus características. Revise todos los datos para identificar qué descriptores se utilizan para indicar el tipo de distrito. ¿Cuántos tipos diferentes observa?

[![Image 4](/assets/images/academy/module_5/Module_5_Photo_4.png)](/assets/images/academy/module_5/Module_5_Photo_4.png)

Existen tres tipos de distritos en este conjunto de datos: urbanos, rurales y la capital.

#### 2010_Registered

Como ya se mencionó, Opendya celebró elecciones nacionales en 2010. Este conjunto de datos muestra el número final de votantes registrados al momento de las elecciones. Podemos usar la columna D, “2010_Registered” para comparar las cifras de registro de los dos ciclos electorales.

[![Image 5](/assets/images/academy/module_5/Module_5_Photo_5.png)](/assets/images/academy/module_5/Module_5_Photo_5.png)

#### Reg_Week1, Reg_Week2, Reg_Week3, and Reg_Week4

Como también se mencionó, en 2014 la comisión electoral de Opendya realizó una actualización del padrón electoral mediante un ejercicio de registro de votantes que duró cinco semanas. Las siguientes cuatro columnas: “Reg_Week1”, “Reg_Week2”, “Reg_Week3”, y “Reg_Week4”, muestran el número total de votantes registrados al final de cuatro de las cinco semanas que duró el ejercicio de actualización de 2014. La diferencia entre cada semana nos da el número de nuevos votantes registrados durante este periodo.

Estos números nos pueden dar un indicio del desempeño de la comisión electoral durante ese tiempo y resaltar los puntos de mayor y menor registro en distritos y/o momentos específicos. Trabajaremos con estas columnas en el Módulo 6, pero no se necesitarán en el Módulo 5.

[![Image 6](/assets/images/academy/module_5/Module_5_Photo_6.png)](/assets/images/academy/module_5/Module_5_Photo_6.png)

#### Reg_Tot_Final

La columna I, “Reg_Tot_Final”, muestra el total de votantes registrados por distrito al final de la quinta semana del ejercicio de registro de 2014. Note que la diferencia entre las cifras de la columna H, “Reg_Week4” y las de la columna I, “Reg_Tot_Final”, es el número de votantes que se registraron durante la quinta y última semana del periodo de actualización.

[![Image 7](/assets/images/academy/module_5/Module_5_Photo_7.png)](/assets/images/academy/module_5/Module_5_Photo_7.png)

#### Final_Female, Final_Male

Esta columna nos muestra cuántos hombres y cuántas mujeres en total se registraron para votar en las elecciones de 2014 en cada distrito. Observe que el número de votantes del sexo femenino y masculino para 2014 son cifras finales y no cifras semanales.

[![Image 8](/assets/images/academy/module_5/Module_5_Photo_8.png)](/assets/images/academy/module_5/Module_5_Photo_8.png)

Ahora que conocemos los datos, prosigamos con el análisis.

### Cómo analizar los datos de registro por distrito

Este conjunto de datos del registro de votantes nos permite realizar una gran variedad de análisis interesantes. Dados los tipos de datos con los que se cuentan, ¿cuáles son los tres posibles cálculos que se pueden realizar para ilustrar las tendencias del proceso de registro de votantes en Opendya?

Considere las posibles respuestas y comience los cálculos del registro de votantes en la siguiente página.

#### A. Cómo comparar las cifras de registro entre 2010 y 2014

Para empezar, vamos a darnos una idea de cuántos nuevos votantes se agregaron al padrón electoral de Opendya entre las elecciones de 2010 y 2014. Para hacer esto necesitamos realizar dos cálculos distintos.

##### **Cómo calcular la diferencia entre el número de votantes registrados en 2010 y en 2014**

El primer paso es ver cuántos votantes adicionales se registraron en cada distrito en 2014 en comparación con 2010. Para esto se requiere hacer un simple cálculo de sustracción en Excel, el cual nos dará la diferencia entre el número de votantes registrados en ambos ciclos electorales de Opendya.

Las columnas que se utilizarán para los cálculos dentro de la pestaña Registration_Data ya están etiquetadas. Vamos a comenzar con la columna L, “Calculated_nRV_incr_from_2010”. Todavía no estamos trabajando con porcentajes; simplemente queremos saber cuántas personas más se registraron en cada distrito. Antes de empezar, ¿con qué columnas cree que tendremos que trabajar para hacer este cálculo?

¡Comencemos!

1\. Necesitamos restar la columna D, “2010_Registered”, de la columna J, “Reg_Tot_Final”. Para hacerlo, escriba el signo de igual (=) en la celda L2. Esto le indica a Excel que está escribiendo una fórmula. Luego haga clic en la celda I2 (total de votantes registrados en Legosakool). Observe que Excel automáticamente agrega el término “I2” a su fórmula (que aparece en la barra de fórmula) en cuanto hace clic en esa celda. Esto lo que hace es vincular el cálculo de la celda L2 con el contenido de la celda I2. Otra opción es simplemente escribir “I2” y Excel automáticamente creará el vínculo con esa celda.

2\. Escriba el signo de menos (-) para indicarle a Excel que desea restarle una cantidad a la celda L2.

3\. Por último, haga clic en la celda D2 (el número de votantes registrados en Legosakool en 2010).

[![Image 9](/assets/images/academy/module_5/Module_5_Photo_9.png)](/assets/images/academy/module_5/Module_5_Photo_9.png)

4\. Oprima “Enter” y aparecerá el resultado del cálculo. En Legosakool (el distrito que acaba de calcular), ¿cuál es la diferencia entre el número de votantes registrados en 2010 y 2014).

5\. Ahora queremos que Excel haga el mismo cálculo para cada uno de los 46 distritos restantes de Opendya. ¡Afortunadamente no tendrá que escribir la fórmula otras 46 veces! Coloque el cursor sobre la esquina inferior derecha de la celda L2; deberá aparecer un pequeño cuadrado. Observe que la forma del cursor cambia un poco cuando se mantiene sobre el punto correcto.

[![Image 10](/assets/images/academy/module_5/Module_5_Photo_10.png)](/assets/images/academy/module_5/Module_5_Photo_10.png)

Haga doble clic en el recuadro que se encuentra en la esquina inferior derecha de la celda L2 y ¡listo! La misma fórmula que escribió en la celda L2 aparecerá automáticamente en todas las celdas de la columna L. Sin embargo, Excel es listo y sabe que para este cálculo usted desea usar los datos de una fila distinta cada vez. Por ejemplo, si hace clic en la celda L8 (distrito de Goro), verá que en la barra de fórmula dice “=I8-D8”. La estructura de la fórmula que se usa para estos cálculos es la misma que la del cálculo de resta original, pero ahora cada una corresponde a un distrito de Opendya distinto. Haga clic en algunas de las distintas filas de la columna L para asegurarse de que Excel hizo lo que usted quería.

Ahora ya conoce la diferencia entre el número de votantes registrados en 2010 y 2014 en los 47 distritos de Opendya.!

[![Image 11](/assets/images/academy/module_5/Module_5_Photo_11.png)](/assets/images/academy/module_5/Module_5_Photo_11.png)

##### **Cómo calcular el incremento porcentual del registro entre 2010 y 2014**

Ahora ya sabemos cómo aumentó el número de votantes en los distritos de Opendya entre 2010 y 2014, sin embargo, necesitamos calcular algunos porcentajes para entender mejor esos números. Conocer el “incremento porcentual” de votantes registrados en cada distrito entre 2010 y 2014 nos dará una visión más precisa de cuán grande fue el incremento de su padrón electoral, considerando su respectivo tamaño.

Nuevamente, para hacer este cálculo será necesario aplicar su conocimiento de los funciones básicas de Excel. Piense en el último cálculo que realizó. Para este cálculo utilizaremos la columna M, “Calculated\_%RV_incr_from_2010”. ¿Qué cálculo debemos realizar? Para calcular el incremento porcentual de votantes registrados entre 2010 y 2014, ¿qué columnas cree que tendremos que utilizar?

Para este cálculo necesitamos usar la columna L, “Calculated_nRV_incr_from_2010”, que acabamos de calcular, y la columna D, “2010_Registered”.

[![Image 1](/assets/images/academy/module_5/Module_5_Formula_1.png)](/assets/images/academy/module_5/Module_5_Formula_1.png)

1\. Ahora escribamos la fórmula en la celda M2. Al igual que en el cálculo anterior, hay que empezar escribiendo el signo de igual (=) (que debe anteceder a TODAS las fórmulas de Excel que utilice para los cálculos posteriores).

2\. Luego haga clic en la celda M2 (diferencia de votantes registrados en Legosakool entre 2010 y 2014).

3\. Escriba una diagonal (/) para indicar la división. Con esto le está indicando a Excel que quiere dividir el contenido de la celda M2 con otro valor.

4\. Haga clic en la celda D2 (votantes registrados en Legosakool en 2010). Oprima “Enter” para mostrar el resultado del cálculo del incremento porcentual.

[![Image 12](/assets/images/academy/module_5/Module_5_Photo_12.png)](/assets/images/academy/module_5/Module_5_Photo_12.png)

5\. ¿Recuerda cómo se le indica a Excel que repita el cálculo en todas las filas? Si es así, hágalo. Si no, haga clic aquí.

Haga doble clic en la esquina inferior derecha de la celda M2.

[![Image 13](/assets/images/academy/module_5/Module_5_Photo_13.png)](/assets/images/academy/module_5/Module_5_Photo_13.png)

La imagen anterior muestra cómo deben verse los datos. Sin embargo, si toda la columna se llena de “0” y “1”, significa que la columna está formateada como “número” sin decimales. Para ver el cálculo necesitará agregar decimales o volver a formatear las celdas de la columna O como porcentajes.

Para volver a formatear las celdas haga clic en la parte superior de la columna O para seleccionar toda la columna. Luego haga clic con el botón derecho del mouse y seleccione el símbolo “%”. Otra opción es hacer clic con el botón derecho del mouse, seleccionar “Format Cell” \[Formato de celda\] y luego seleccionar “Percentage” \[Porcentaje\] del menú que aparece a la izquierda en la ventana emergente.

[![Image 14](/assets/images/academy/module_5/Module_5_Photo_14.png)](/assets/images/academy/module_5/Module_5_Photo_14.png)

##### **¿Qué observa?**

Ahora que ya calculamos el incremento porcentual de votantes registrados entre 2010 y 2014, tómese un momento para analizar los datos.

1.¿Cuáles son los tres distritos con el menor incremento porcentual en los índices de registro? ¿Qué tipo de distritos son?

2\. ¿Cuáles son los tres distritos con el mayor incremento porcentual en los índices de registro? ¿Qué tipo de distritos son?

#### B. Cómo analizar la equidad de género en el registro

Un proceso de registro de votantes organizado y creíble es aquel que incluye la participación y la inscripción activa tanto de hombres como de mujeres en el padrón electoral. Por lo tanto, un análisis cuidadoso de los datos del registro de votantes debe incluir una investigación sobre la composición de la población de votantes registrados según el sexo (cuando los datos estén disponibles, ¡que debe ser siempre!).

Para darnos una mejor idea del desglose basado en el género, vamos a calcular qué porcentaje de los votantes registrados en 2014 son hombres y qué porcentaje son mujeres. Nuevamente haremos una sencilla división en Excel.

##### **Cómo calcular el porcentaje de votantes del sexo femenino**

1\. En la columna N, “Calculated\_%female”, realizaremos el cálculo del porcentaje de votantes del sexo femenino en cada uno de los 47 distritos de Opendya.

2\. Tómese un momento para definir qué columnas tiene que dividir para hacer este cálculo. Recuerde que estamos interesados en analizar el número de votantes del sexo femenino registradas al finalizar el ejercicio de 2014.

Si su respuesta fue la columna J, “Final_Female”, y la columna I, “Reg_Tot_Final”, ¡está en lo correcto!

[![Image 2](/assets/images/academy/module_5/Module_5_Formula_2.png)](/assets/images/academy/module_5/Module_5_Formula_2.png)

3\. ¡Es hora de escribir la fórmula de división! En Excel, usted solo(a) calcule el porcentaje de votantes registrados del sexo femenino en la celda N2 (Distrito de Legosakool). Haga clic si desea ver una impresión de pantalla del comando que debe utilizar.

_\*No olvide oprimir “Enter” después de escribir la fórmula.\*_

[![Image 15](/assets/images/academy/module_5/Module_5_Photo_15.png)](/assets/images/academy/module_5/Module_5_Photo_15.png)

4\. Una vez haya calculado el porcentaje de votantes del sexo femenino registradas en Legosakool, pídale a Excel que repita el cálculo en los 46 distritos restantes de Opendya.

##### **Cómo calcular el porcentaje de votantes del sexo masculino**

NAhora obtengamos el porcentaje de votantes del sexo masculino. Cree una nueva columna y use la columna K, “Final_Male”, y los pasos anteriores como guía para calcular el porcentaje de votantes registrados en 2014 que son del sexo masculino, por distrito.

##### **¿Qué observa?**

Desplácese hacia abajo para ver las dos nuevas columnas de datos.

1\. A primera vista, ¿qué puede observar sobre los índices de registro de hombres y mujeres?

2\. ¿Algún distrito destaca por mostrar porcentajes especialmente altos o bajos de votantes del sexo femenino o masculino?

Considerando lo que sabe acerca de Opendya, ¿a qué se podrían deber estas tendencias?

### Cómo analizar los datos de registro por tipo de distrito

#### C. Cómo evaluar las tendencias generales de registro en los distintos tipos de distrito

¿Recuerda la columna C, “Type”, en la pestaña Registration_Data del archivo? Esa columna indica si un distrito es urbano, rural o la capital. Usaremos la columna C para analizar los patrones o diferencias que existen en la manera en que pudieron registrarse los votantes de los distintos distritos de Opendya. Este tipo de análisis puede revelar tendencias sociopolíticas que podrían influir en la credibilidad de un proceso electoral.

En resumen, el análisis que haremos consiste en lo siguiente:

- Calcular las cifras básicas (sumas y porcentajes) del registro en los distritos urbanos, rurales y la capital.
- Analizar los patrones en el registro y considerar sus ramificaciones políticas.

##### **Cómo analizar la pestaña Data_Summary**

En esta parte del módulo vamos a utilizar la pestaña Data_Summary del archivo de Excel. Esta pestaña contiene un resumen de los cálculos basados en datos tomados de la pestaña Registration_Data. Se ve así:

[![Image 16](/assets/images/academy/module_5/Module_5_Photo_16.png)](/assets/images/academy/module_5/Module_5_Photo_16.png)

Utilizaremos las columnas de la A a la E para terminar el Módulo 5 y de la F a la O en el Módulo 6. Para facilitar las cosas, ya ingresamos previamente los datos de los encabezados de todas las columnas, las cuales almacenarán todos los distintos cálculos que necesitará hacer. ¡No se asuste, será muy sencillo!

##### **Cómo usar la función SUMIF \[SUMAR.SI\] para sumar datos en una categoría específica**

Durante el resto de este módulo utilizaremos una función de Excel llamada [SUMIF \[SUMAR.SI\]](https://support.office.com/en-us/article/SUMIF-function-169B8C99-C05C-4483-A712-1697A653039B). La función SUMIF \[SUMAR.SI\] se utiliza para sumar los valores en un rango específico de celdas que cumplen con el criterio que buscamos. En este caso, utilizaremos SUMIF \[SUMAR.SI\] para sumar los números de votantes registrados que correspondan específicamente a los distritos urbanos, a los distritos rurales, y al distrito capital. Para el uso de la función SUMIF \[SUMAR.SI\] necesitará las habilidades aprendidas con las fórmulas COUNTIF \[CONTAR.SI\] en el [Módulo 4: Cómo detectar preferencias en el registro de candidatos](https://openelectiondata.net/es/academy/detecting-bias-in-ballot-qualification/).

La fórmula tiene la siguiente estructura: SUMAR.SI(rango, criterios, \[sum_range\])

- **Range \[Rango\]:**: El rango especifica el grupo de celdas que desea evaluar de acuerdo con sus criterios. En este caso, vamos a sumar los datos basados en el tipo de distrito. Considerando que nuestro criterio es el tipo de distrito, ¿qué columna de la hoja de cálculo cree que debemos usar para el rango? ¿En qué columna buscamos la información sobre el tipo de distrito? (Respuesta = Columna C, “Type” \[Tipo\]).
- **Criteria \[Criterios\]**: Los criterios indicarán si un número debe sumarse o no. Los criterios pueden tomar la forma de un número, una expresión, una referencia de celda, texto, o una función que defina qué celdas deben sumarse. Para este ejercicio seleccionaremos de entre tres criterios distintos (“urban”, “rural” y “capital district”) y le indicaremos a Excel que sume los números del registro de votantes de los distritos que coincidan con alguna de estas categorías específicas.
- **Sum_range \[Rango de suma\]**: Esto le indica a Excel qué celdas debe sumar, en caso de que desee sumar celdas distintas a las que se especifican en el argumento de rango.

##### **Cómo sumar los votantes registrados en 2010 por tipo de distrito (“RV2010”)**

Primero utilizaremos la función SUMIF \[SUMAR.SI\] para calcular el número de votantes registrados en 2010 de acuerdo con el tipo de distrito. Empezaremos sumando el número de votantes registrados en los distritos urbanos, luego seguiremos con los distritos rurales y finalmente con el distrito capital.

1\. Escriba “SUMIF(“ en la celda B2. Observe que Excel automáticamente le proporciona la información que necesita para completar el resto de la fórmula.

[![Image 17](/assets/images/academy/module_5/Module_5_Photo_17.png)](/assets/images/academy/module_5/Module_5_Photo_17.png)

2\. Ahora necesitamos especificar el rango \[“range”\] del que Excel debe extraer los criterios. Dado que estamos haciendo esto específicamente por tipo de distrito, el rango será la columna C de la pestaña Registration_Data. Para remitirse al rango, deje la fórmula abierta y haga clic en la pestaña Registration_Data en la esquina inferior izquierda del archivo. (No oprima “Enter” antes de cambiarse a la pestaña principal de datos o los datos de su fórmula no se seguirán ingresando)

[![Image 18](/assets/images/academy/module_5/Module_5_Photo_18.png)](/assets/images/academy/module_5/Module_5_Photo_18.png)

Observe que al regresar a la pestaña Registration_Data la barra de la fórmula continúa actualizándose según donde haga clic. Excel identifica que usted está tratando de establecer un vínculo entre su cálculo SUMIF \[SUMAR.SI\] en la pestaña Data_Summary y la información en la pestaña Registration_Data.

Para terminar de seleccionar el rango, haga clic en la parte superior de la columna C para seleccionarla. Nuevamente, observe que Excel ingresa automáticamente los datos de su fórmula en cuanto hace clic.

[![Image 19](/assets/images/academy/module_5/Module_5_Photo_19.png)](/assets/images/academy/module_5/Module_5_Photo_19.png)

¡Ya seleccionó el rango! Ahora escriba una coma (,) y continuemos.

3\. SUMIF \[SUMAR.SI\] ahora requiere que seleccione sus criterios específicos. Sin oprimir “Enter”, regrese a la pestaña Data_Summary y haga clic en la celda A2, “Urban”. Con esto le está indicando a Excel que únicamente desea obtener los datos de los distritos urbanos de Opendya, de acuerdo con la pestaña Registration_Data.

Escriba otra coma (,).

[![Image 20](/assets/images/academy/module_5/Module_5_Photo_20.png)](/assets/images/academy/module_5/Module_5_Photo_20.png)

4\. Por último, necesitamos indicarle a Excel qué datos debe sumar con base en nuestro criterio, “urban” \[urbano\]. En este caso estamos sumando los votantes registrados en 2010, y esa información se encuentra en la columna D, “2010_Registered”, de la pestaña Registration_Data. Nuevamente, deje la fórmula abierta, regrese a la pestaña Registration_Data, y seleccione toda la columna D.

[![Image 21](/assets/images/academy/module_5/Module_5_Photo_21.png)](/assets/images/academy/module_5/Module_5_Photo_21.png)

5\. Ahora cierre el paréntesis y oprima “Enter”. Según sus cálculos, ¿cuántos votantes registrados en 2010 corresponden a distritos urbanos?

[![Image 22](/assets/images/academy/module_5/Module_5_Photo_22.png)](/assets/images/academy/module_5/Module_5_Photo_22.png)

6\. Ahora indíquele a Excel que repita el cálculo de votantes registrados en 2010 para los distritos rurales y el distrito capital. Recuerde que puede hacer doble clic en el recuadro que se encuentra en la esquina inferior derecha de la celda B2, o puede escribir manualmente las fórmulas utilizando “rural” \[rural\] y “capital district” \[distrito capital\] como sus nuevos criterios. A continuación se muestra lo que debe tener.

[![Image 23](/assets/images/academy/module_5/Module_5_Photo_23.png)](/assets/images/academy/module_5/Module_5_Photo_23.png)

##### **Cómo sumar los votantes registrados en 2014 por tipo de distrito (“RV2014”)**

¡Adivinó! Ahora vamos a utilizar nuevamente la función SUMIF \[SUMAR.SI\] para calcular el número final de votantes registrados en 2014 en los tres tipos de distritos de Opendya. Recuerde el proceso que utilizó anteriormente para calcular el número de votantes registrados en 2010. ¿Qué similitudes o diferencias tendrá este cálculo con el que haremos para 2014?

1\. Repita los pasos 1 y 2 anteriores relativos a la selección del rango y los criterios de la función SUMIF \[SUMAR.SI\]. Seguiremos usando la columna C, “Type”, y nuevamente seleccionaremos un tipo de distrito específico como criterio.

2\. A continuación, vaya a la pestaña Registration_Data y seleccione toda la columna I, “Reg_Tot_Final”, que contiene el total final del registro de votantes de 2014 de cada distrito.

Los cálculos finales deben verse así:

[![Image 24](/assets/images/academy/module_5/Module_5_Photo_24.png)](/assets/images/academy/module_5/Module_5_Photo_24.png)

##### **Diferencia entre el registro de 2010 y el de 2014 por tipo de distrito (“2010–2014”)**

Ahora calcule la diferencia entre los votantes registrados para las elecciones de 2010 y para las de 2014 en Opendya, por cada tipo de distrito específico. Piense qué datos y qué función de Excel deberá usar para realizar este cálculo y ¡hágalo!

Los resultados del cálculo de la diferencia son los siguientes:

[![Image 25](/assets/images/academy/module_5/Module_5_Photo_25.png)](/assets/images/academy/module_5/Module_5_Photo_25.png)

##### **Incremento porcentual en el registro por tipo de distrito (Columna E, “%change_2010-2014”)**

Ahora que ya sabemos cuántos votantes más se registraron en cada tipo de distrito de 2010 a 2014, calculemos la diferencia porcentual entre ambos ciclos electorales. Ya realizamos este tipo de cálculo al inicio de este módulo (Cómo calcular el incremento porcentual del registro entre 2010 y 2014), así que debe ser muy sencillo. Realice el cálculo en la columna E, “%change_2010-2014”.

Si no recuerda cómo calcular el incremento porcentual, haga clic aquí.

[![Image 3](/assets/images/academy/module_5/Module_5_Formula_3.png)](/assets/images/academy/module_5/Module_5_Formula_3.png)

Los cálculos deben verse así: [![Image 26](/assets/images/academy/module_5/Module_5_Photo_26.png)](/assets/images/academy/module_5/Module_5_Photo_26.png)

##### **¿Qué observa?**

Ahora que ya terminó los cálculos del nuevo conjunto de registro de votantes de acuerdo con los tres tipos de distritos de Opendya, ¿qué observa? ¿Destaca alguna tendencia de registro en los tipos específicos de distrito? ¿Qué condiciones del lugar podrían contribuir a las variaciones regionales en los índices de registro?
