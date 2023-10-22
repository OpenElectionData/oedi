---
title: '3. Aplicación: Cómo resumir el conjunto de datos de los centros de votación'
module_id: 3
excerpt: "En este tutorial revisaremos los cinco pasos principales del proceso de análisis de datos. Luego veremos algunos consejos para el manejo de datos y archivos de datos. Por último, mediante el uso de la lista de centros de votación del Módulo 1, realizaremos un ejercicio práctico donde emplearemos lo que aprendimos en el Módulo 2 para resumir la variable \"Registered\_Voters\" (Votantes registrados)."
---

En este tutorial revisaremos los cinco pasos principales del proceso de análisis de datos. Luego veremos algunos consejos para el manejo de datos y archivos de datos. Por último, mediante el uso de la lista de centros de votación del Módulo 2, realizaremos un ejercicio práctico donde emplearemos lo que aprendimos en el Módulo 1 para resumir la variable "Registered_Voters" (Votantes registrados).

## Los cinco pasos principales en el proceso de análisis de datos:

### Paso 1: Comience con una pregunta o un objetivo específico.

Tómese un momento para pensar acerca de por qué está analizando el conjunto de datos. Piense sobre lo que espera ver y lo que no espera ver en los datos. Sea específico acerca de su objetivo y eso le ayudará a ser mucho más eficiente en los siguientes pasos del proceso. A continuación se presentan algunos ejemplos del tipo de preguntas que sugerimos responder al analizar la lista de centros de votación del [Módulo 2](/es/academy/reviewing-a-polling-station-list/):

- ¿La lista de centros de votación parece estar completa?
- ¿La lista de centros de votación parece estar correcta o limpia?
- ¿Cuál es la cantidad típica de votantes registrados en cada centro de votación? ¿Cuál es la dispersión?
- ¿Cómo se ve la distribución de los centros de votación entre las diferentes áreas geográficas?
- ¿Estas distribuciones han cambiado mucho a lo largo de los años de una lista a otra (en caso de que tenga varias listas)?
- ¿Puede usar la lista de centros de votación para extraer una muestra?

### Paso 2: Obtenga los datos.

Ahora que ya reflexionó sobre la razón por la que está iniciando el proceso de análisis de datos, es tiempo de obtener los datos que necesita. Recuerde guardar una copia original de los datos antes de comenzar a hacer cualquier cosa con ellos.

### Paso 3: Prepare y limpie los datos.

Los analistas de datos experimentados saben que el 80% de todo el proceso de análisis de datos consiste en convertir, limpiar o reformatear los datos. Primero debe revisar los datos y tratar de determinar si faltan datos o si hay algún error en ellos. Posteriormente, a menudo es necesario "preparar" los datos y hacer la estructura más uniforme. Por ejemplo, algunas o todas las variables de cada fila pueden estar combinadas en la misma columna (por ejemplo, es probable que los datos de ciudad y provincia estén incluidos en la misma columna, por lo que será necesario que separe los datos de ciudad y provincia en dos columnas distintas). Es posible que los datos no estén en un formato analizable, es decir, que no sean legibles por una máquina, por lo que será necesario ver la manera de convertirlos. Si recuerda, en el [Módulo 2](/es/academy/reviewing-a-polling-station-list/) los datos de los centros de votación de 2008 originalmente estaban almacenados en varios archivos PDF y nosotros convertimos para usted la información de esos archivos a un formato legible por una máquina (por ejemplo, archivos CSV o XLS). Podría darse el caso de que necesite combinar o unir los datos de dos conjuntos de datos distintos en uno solo para poder analizarlos.

### Paso 4: Resuma las variables de interés en sus datos.

Para cada variable de interés debe poder responder las preguntas: ¿qué es típico en los datos? y ¿cuál es la dispersión de los datos? En el [Módulo 1](/es/academy/a-gentle-introduction-to-summarizing-data/) vimos cómo calcular lo que era típico (es decir, la media o el promedio) para la variable de altura de los animales y cómo medir el grado de dispersión de los datos empleando la desviación estándar.

### Paso 5: Repita.

El proceso de análisis de datos suele ser un proceso reiterativo. Una vez que termine el primer intento de resumir algunas variables, es probable que se dé cuenta de la necesidad de formatear los datos (por ejemplo: unirlos con otro conjunto de datos) antes de que pueda hacer un análisis más profundo. Resumir los datos puede llevarlo a encontrar un nuevo objetivo del análisis, lo cual, a su vez, lo llevará a iniciar nuevamente el proceso.

Con el fin de hacer que este módulo sea breve y digerible, vamos a pasar directamente al Paso 4 del proceso de análisis de datos. Vamos a suponer que usted ya sabe cuáles son sus preguntas y objetivos específicos, que ya tiene los datos, y que los tiene en el formato correcto (¡qué suerte!). Antes de pasar al ejercicio práctico, veamos algunos consejos para el manejo de los datos.

## Consejos para el manejo de datos

- Haga una copia de trabajo independiente de los datos o el archivo fuente sin modificaciones. Es recomendable asegurarse de que siempre pueda regresar y verificar los datos originales.
- Si está utilizando un archivo de hojas de cálculo, guarde sus cálculos en una hoja o pestaña distinta de la que contiene los datos.
- Documente los pasos de su proceso. Esto es para que pueda recrear sus pasos y determinar el punto en que se pudo haber equivocado en alguna fórmula. Esto también le ayudará a saber cómo pudo haber cambiado los datos antes de hacer los cálculos.
- Tenga mucho cuidado siempre que utilice la función "Sort Data" (Ordenar datos) y asegúrese de haberlos seleccionado todos. Para estar seguros, es mejor evitar por completo la función "Sort" (Ordenar).
- No combine celdas. Es probable que luzca mejor, pero si necesita automatizar o reorganizar los datos (por ejemplo, cambiar la configuración), entonces las celdas combinadas pueden dificultarle todo. En su lugar, utilice colores y elimine los bordes de las celdas para que la presentación de los datos sea más limpia.

Ahora que ya sabe cuáles son las buenas prácticas de higiene de datos, revisemos nuevamente la lista de centros de votación del [Módulo 2](/es/academy/reviewing-a-polling-station-list/).

## Ejercicio práctico: Analizar nuevamente la Lista de Centros de Votación utilizando Excel

En el [segundo módulo de la Academia de Datos Electorales](/en/academy/reviewing-a-polling-station-list/) analizamos una [lista de centros de votación (en formato XLS)]({{ site.url }}/\_assets/academy/exercise/Polling_Station_List_2008.xls). En teoría, se supone que el archivo contiene la lista de todos los centros de votación de un país[^1]. Abra el archivo y revise nuevamente los datos. A medida que se desplace hacia abajo, hágase las siguientes preguntas:

- ¿Pareciera que falta algo?
- ¿Los datos están estructurados de manera que tengan sentido?
- ¿Qué hay en cada fila?
- ¿Qué hay en cada columna?
- ¿Hay celdas combinadas?

La primera fila del archivo contiene los nombres de las variables. Hay seis variables en este conjunto de datos: "PS_Code", "PS_Name", "Region_Name", "District_Name", "Constituency_Name" y "Registered_Voters".

[![Image 1]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image1.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image1.png)

Ahora veamos cuántas observaciones hay en este conjunto de datos. Para hacerlo podemos desplazarnos hasta el final y restarle 1 (por la fila que contiene los nombres de las variables),

[![Image 2]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image2.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image2.png)

o bien, podemos resaltar una columna (por ejemplo, una de las variables, como los votantes registrados) y ver en la parte inferior derecha de la pantalla el número que aparece después de "Numerical Count" (Recuento numérico). "Numerical Count" (Recuento numérico) hace exactamente lo que usted imagina: únicamente cuenta los números y omite todo el texto.

[![Image 3]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image3.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image3.png)

Si por alguna razón el título "Numerical Count" (Recuento numérico) no se indica en la barra de estado inferior, haga clic en el botón derecho del mouse colocado sobre la barra y elija "Numerical Count" (Recuento numérico) como una de las estadísticas a mostrar.

Hay 20,928 observaciones para la variable llamada "Registered_Voters". Ahora nos enfocaremos en esa variable "Registered_Voters".

### Verifique sus expectativas: Variable "Registered_Voters"

La Columna F contiene el número de votantes que hay registrados en cada centro de votación (es decir, en cada fila). Antes de resumir la variable "Registered_Voters", tomemos un momento para reflexionar sobre lo que esperamos ver. Hágase algunas preguntas, como por ejemplo:

- ¿Cuáles espera que sean los posibles valores?
- ¿Cuál cree que será el punto medio o promedio?
- ¿Cuál cree que será el número mínimo de votantes que hay registrados en un centro de votación?
- ¿Espera ver alguna observación con cero? ¿Espera ver algún número negativo?
- ¿Cuál es el número máximo de votantes registrados que espera que tenga un centro de votación?
- ¿Qué valor o valores no tendrían sentido o parecerían poco probables? ¿Tendría sentido un número con decimales (por ejemplo, 12.5)? ¿Qué sería raro?

### Utilice Excel para describir la variable "Registered_Voters"

Si selecciona la columna con la variable "Registered_Voters" (Columna F), puede hacer que Excel automáticamente calcule y muestre ciertos valores en la barra de estado inferior del lado derecho para las celdas resaltadas o seleccionadas. Nuevamente, es posible que tenga que hacer clic en el botón derecho del mouse colocado sobre la barra y seleccionar todas las opciones de estadística que desea que se muestren para personalizarla.

[![Image 4]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image4.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image4.png)

En esta Lista de Centros de Votación de 2008 se puede apreciar que el número promedio de votantes registrados en todos los centros de votación es de 547.8 votantes. También se puede ver que el total de celdas llenas (es decir, el "Count" (Recuento)) es de 20,929. Excel también puede mostrarle que el valor mínimo de las celdas resaltadas es 1 y que valor máximo es 55,515. Asimismo, Excel tiene una fórmula específica para calcular cada uno de estos valores. Puede abrir una nueva pestaña de hoja de cálculo e ingresar las funciones específicas para "[average](https://support.office.com/en-nz/article/AVERAGE-function-08cc8ca2-0177-42f8-8750-a1e9ae9637a2)" (promedio), "[minimum](https://support.office.com/en-in/article/MIN-function-6a4b0dd8-7853-474e-bf22-6014a60cfbd1)" (mínimo), "[maximum](https://support.office.com/en-za/article/MAX-function-af0b7276-3817-4dbd-a0a4-ec915397dc7a)" (máximo), "[count](https://support.office.com/en-us/article/COUNT-function-47858132-8828-4041-8c5b-a5fb729bab6f)" (recuento) y "standard deviation" (desviación estándar). Esto ya lo hicimos para usted con los datos de las alturas. Observe que la desviación estándar es una de las opciones en la barra de estado inferior, pero puede ingresar la fórmula en otra pestaña, o bien:

### Utilice las herramientas para análisis (Analysis Toolpak) y haga que Excel calcule todas las estadísticas.

Si tiene instaladas "Analysis Toolpak" (las Herramientas para análisis)[^2], vaya a la pestaña "Data" (Datos), donde verá la opción "Data Analysis" (Análisis de datos) en el extremo derecho.

[![Image 5]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image5.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image5.png)

En ese menú, haga clic en "Data Analysis" (Análisis de datos), lo cual abrirá una nueva ventana.

[![Image 6]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image6.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image6.png)

En la lista que aparece debajo de "Analysis Tools" (Herramientas para análisis), elija "Descriptive Statistics" (Estadística descriptiva) y luego haga clic en "OK" (Aceptar). Esto abrirá un nuevo menú. En este nuevo menú, haga clic en la casilla a la derecha de "Input Range" (Rango de entrada).

[![Image 7]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image7.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image7.png)

Ahora podrá seleccionar el rango que quiera describir. Estamos interesados en la variable "Registered_Voters", que está en la Columna F, así que seleccionamos la parte superior de la Columna F para seleccionar toda la columna.

[![Image 8]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image8.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image8.png)

Luego, haga clic nuevamente en la casilla a la derecha de "input" (entrada) (![Input box]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/input_box.png){:class="img--inline"}) y

[![Image 9]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image9.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image9.png)

lo regresará a la ventana de "Descriptive Statistics" (Estadística descriptiva). En esa ventana, asegúrese de seleccionar la casilla que está junto a "Labels in First Row" (Rótulos en la primera fila) y seleccione la casilla junto a "Summary Statistics" (Resumen de estadísticas). También asegúrese de que esté seleccionada la opción "New Worksheet Ply" (En una hoja nueva), de manera que ponga las estadísticas en una hoja nueva. Luego haga clic en "OK" (Aceptar).

[![Image 10]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image10.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image10.png)

Ahora le mostrará la nueva pestaña con todo el resumen de las estadísticas para "Registered_Voters".

[![Image 11]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image11.png)]({{ site.url }}/\_assets/images/academy/application-summarizing-the-polling-station-data/image11.png)

Considerando lo que ahora sabe sobre el promedio, la desviación estándar y el rango, ¿cómo describiría la variable "Registered_Voters"? ¿Cree que la distribución está muy dispersa o cree que está estrechamente agrupada?

## Compare las estadísticas reales con las expectativas

Ahora que ya tiene el resumen de las estadísticas para la variable "Registered_Voters", ¿cómo respondería las siguientes preguntas? ¿Cómo se comparan las respuestas con las expectativas que tenía al inicio?

- ¿Pareciera que falta algo?
- ¿Los datos están estructurados de manera que tengan sentido?
- ¿Qué hay en cada fila?
- ¿Qué hay en cada columna?

[^1]: La lista se basa en la lista de centros de votación de 2008 en Ghana. Parte de la información puede haberse modificado y ajustado para resaltar los conceptos vistos aquí.
[^2]: Para instalarlas, seleccione la pestaña "File" (Archivo), luego elija "Options" (Opciones) casi al final de la lista, del lado izquierdo. En la nueva ventana "Excel Options" (Opciones de Excel), seleccione "Add-in" (Complementos). La opción "Analysis Toolpak" (Herramientas para análisis) debe aparecer en la lista. Selecciónela y luego haga clic en "Go" (Ir) en la parte inferior de la ventana. Aparecerá una nueva ventana llamada "Add-ins" (Complementos). Debajo de "Add-ins Available" (Complementos disponibles), seleccione la casilla que está junto a "Analysis Toolpak" (Herramientas para análisis) y luego haga clic en "OK" (Aceptar). Ahora, en la pestaña "Data" (Datos), debe aparecer "Data Analysis" (Análisis de datos) como una opción en el extremo derecho.
