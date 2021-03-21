---
title: '2. Cómo analizar una lista de centros de votación'
lang: es
module_id: 2
permalink: '/academy/reviewing-a-polling-station-list/'
excerpt: 'En este tutorial aprenderemos a analizar y entender una lista de centros de votación. Una vez que tengamos una idea del tipo de información que contiene el conjunto de datos, vamos a utilizar una tabla dinámica de Excel para analizar los datos y, especialmente, para determinar el número de centros de votación y el número total de votantes que hay registrados en cada distrito.'
---

En este tutorial aprenderemos a analizar y entender una lista de centros de votación. Una vez que tengamos una idea del tipo de información que contiene el conjunto de datos, vamos a utilizar una tabla dinámica de Excel para analizar los datos y, especialmente, para determinar el número de centros de votación y el número total de votantes que hay registrados en cada distrito.

## Introducción

Uno de los requisitos básicos en la preparación para observar una jornada electoral es contar con una lista completa y exacta de todos los centros de votación del país antes del día de las elecciones. La lista debe incluir todos los centros en donde el Órgano de Gestión Electoral (EMB, por sus siglas en inglés), llevará a cabo las elecciones. Si está realizando una observación basada en una muestra, como una [Tabulación Paralela de Votos (PVT)](https://www.ndi.org/pvt), por sus siglas en inglés), entonces lo más probable es que la muestra la obtenga de esta lista.

En ocasiones, los EMB publican las listas de los centros de votación en formatos que dificultan el análisis. Por ejemplo, si la lista de los centros de votación se comparte en un formato que no es analizable (legible por una máquina), como puede ser un documento de PDF, entonces será necesario convertir los datos a un formato que pueda analizarse (como por ejemplo, un archivo en formato CSV, XLS o TXT). Esta conversión se puede hacer mediante la captura manual de los datos o a través de un procedimiento automatizado como escribir un archivo de órdenes (script) o el empleo de alguna herramienta de extracción de datos (data scraping) como [import.io](https://import.io/) o [ScraperWiki](https://scraperwiki.com/). De hecho, estos datos originalmente se encontraban en varios documentos PDF (como por ejemplo, el [PDF para la región Ashanti](/assets/academy/exercise/Ghana_Ashanti_example.pdf)) y nosotros los convertimos para usted a un formato legible por una máquina. Ahora que tenemos la lista en un formato que puede leerse y manipularse en Excel (u otro programa de análisis de datos), estamos listos para iniciar nuestro análisis.

## Excel y el análisis de las listas

Actualmente Excel es el software de análisis de datos que más se utiliza en todo el mundo y el que usaremos en este tutorial. Tiene la capacidad de procesar una importante cantidad de datos de manera muy rápida y fácilmente podrá manejar nuestros ~26,000 datos. En este análisis utilizaremos Excel para ver la lista de centros de votación y después analizar su distribución por distrito y región mediante el uso de la función "pivot table" (tabla dinámica), la cual permite agrupar fácilmente los datos con base en distintos campos y resumirlos de varias maneras. De esto modo, las tablas dinámicas facilitan el manejo y la revisión de los datos.

## Análisis de los datos contenidos en la lista de centros de votación

Veamos un ejemplo de una lista de centros de votación en un formato analizable. Empezaremos con la lista de centros de votación de las elecciones de 2008 en Ghana. Descargue la [lista de Centros de Votación de 2008 en formato Excel (XLS)](/assets/academy/exercise/Polling_Station_List_2008_1.xls). Vamos a utilizar Excel para crear una tabla dinámica, pero aquí está el archivo PS 2008 en formato de [Valores Separados por Comas (CSV, por sus siglas en inglés)](/assets/academy/exercise/Polling_Station_List_2008_1.csv) y en formato de [Documento Abierto (ODS, por sus siglas en inglés)](/assets/academy/exercise/Polling_Station_List_2008_1.ods), en caso de que utilice un programa distinto. Ahora que el documento está guardado y abierto en su pantalla, veamos cada fila y columna comenzando desde la parte superior izquierda. La primera fila contiene el nombre del dato que aparece debajo de él.

### "PS_Code"

En la primera columna de la izquierda verá "PS_Code." ¿Puede adivinar qué significa?

[![Image 1](/assets/images/academy/reviewing-a-polling-station-list/image1.png)](/assets/images/academy/reviewing-a-polling-station-list/image1.png)

El significado de "PS_Code" en nuestro conjunto de datos actual es "Código del Centro de Votación" (por el inglés "polling station"), es decir, el identificador único para cada centro de votación. Ahora manualmente desplácese hacia abajo por la pantalla para revisar todo el documento y note el patrón de numeración de los centros de votación.

Observe que el título de la columna ("PS_Code") se escribe como una cadena continua de letras. Muchas listas de centros de votación (y conjuntos de datos electorales en general) se exportan o extraen de la base de datos de los EMB. Uno de los principios de las bases de datos es que no puede haber espacios entre las letras. Es por esto que se escribe un guión bajo entre "PS" y "Code". Si bien Excel es capaz de procesar datos con espacios, es mejor ponerles nombres sin espacios a las columnas.

### "PS_Name"

"PS_Name" se refiere al nombre de los centros de votación expresado en palabras. Esta es la columna que debe tener más sentido para los observadores y con frecuencia la que será más útil para que los observadores sepan a dónde deben acudir el día de las elecciones.

[![Image 2](/assets/images/academy/reviewing-a-polling-station-list/image3.png)](/assets/images/academy/reviewing-a-polling-station-list/image3.png)

Por ejemplo, vea la fila 70, A00179; el observador, quien sería reclutado en la circunscripción de Adansi Asokwa del Distrito de Adansi North, tendría que encontrar la ubicación de la Pentecost Church Anitoa (Iglesia Pentecostal Anitoa), porque ese es uno de los lugares donde se llevarán a cabo las elecciones.

[![Image 3](/assets/images/academy/reviewing-a-polling-station-list/image6.png)](/assets/images/academy/reviewing-a-polling-station-list/image6.png)

### "Region_Name"

Si se desplaza hacia abajo en el conjunto de datos, verá que la columna con el título "Region_Name" (Nombre de la región) tiene la menor cantidad de nombres únicos de todos los grupos geográficos, lo cual la convierte en el nivel geográfico más amplio que hay disponible en el conjunto de datos.

[![Image 4](/assets/images/academy/reviewing-a-polling-station-list/image12.png)](/assets/images/academy/reviewing-a-polling-station-list/image12.png)

### "District_Name"

Después de la región, el distrito es la segunda entidad geográfica más amplia en este conjunto de datos.

[![Image 5](/assets/images/academy/reviewing-a-polling-station-list/image13.png)](/assets/images/academy/reviewing-a-polling-station-list/image13.png)

### "Constituency_Name"

En este ejemplo, las circunscripciones son incluso más pequeñas que los distritos. Cuando observamos estos datos en una tabla dinámica, veremos cuántas circunscripciones hay en este conjunto de datos en comparación con los distritos y las regiones.

[![Image 6](/assets/images/academy/reviewing-a-polling-station-list/image10.png)](/assets/images/academy/reviewing-a-polling-station-list/image10.png)

### "Registered_Voters"

Por último, tenemos el número oficial de votantes registrados que hay asignados a cada centro de votación. En muchos lugares hay un número máximo de votantes por cada centro de votación. En algunos países el corte puede hacerse con un máximo de 700 votantes, mientras que en otros, el número máximo en las zonas urbanas puede ser 1,000 votantes registrados o más. Estos límites se definen para facilitar y hacer más manejable la administración de las elecciones al asegurarse de que ningún centro de votación sea tan grande que se impida que los votantes emitan su voto por tener que esperar demasiado. Para fines de los conjuntos de datos empleados en este tutorial, el límite es 1,000.

[![Image 7](/assets/images/academy/reviewing-a-polling-station-list/image7.png)](/assets/images/academy/reviewing-a-polling-station-list/image7.png)

## Cómo hacer una tabla dinámica para ayudar a analizar los datos (Excel)

Crear una tabla dinámica tal vez sea la parte más fácil del ejercicio. Sin embargo, entender cómo manejar los datos puede resultar un poco más difícil. Los siguientes pasos están diseñados para usuarios de Windows y contienen capturas de pantalla tomadas de Excel 2010; si usted tiene una Mac o una versión anterior de Windows, la interfaz puede variar.

#### 1\. Seleccionar todo

Hay que seleccionar todos los datos en esta hoja. Para hacerlo, haga clic en la celda A1 ("PS_Code") y luego oprima Control+T (es decir, oprima las teclas "Ctrl" y "T" al mismo tiempo). También puede hacer clic en el recuadro del lado superior izquierdo con el pequeño triángulo.

[![Image 8](/assets/images/academy/reviewing-a-polling-station-list/image4.png)](/assets/images/academy/reviewing-a-polling-station-list/image4.png)

#### 2\. Insertar tabla

Ahora que todos los datos están seleccionados, haga clic en la pestaña "Insert" (Insertar) que se encuentra en el menú superior y luego haga clic en "Pivot Table" (Tabla dinámica) del lado izquierdo. Aparecerá una ventana que dice "Create Pivot Table" (Crear tabla dinámica).

[![Image 9](/assets/images/academy/reviewing-a-polling-station-list/image11.png)](/assets/images/academy/reviewing-a-polling-station-list/image11.png)

Deje las opciones como predeterminadas y solo haga clic en "OK" (Aceptar), y Excel creará una nueva tabla dinámica en una nueva hoja de cálculo.

[![Image 10](/assets/images/academy/reviewing-a-polling-station-list/image2.png)](/assets/images/academy/reviewing-a-polling-station-list/image2.png)

#### 3\. Ordenar por distritos

Una vez que ya se tiene la tabla dinámica en una nueva hoja, podemos comenzar a trabajar con los datos. Del lado derecho hay una ventana llamada "Pivot Table Field List" (Lista de campos de tabla dinámica). Haga clic en "District_Name" y arrástrelo hacia abajo para agregarlo al área "Row Labels" (Etiquetas de fila). Esto ordenará todo por el valor que se indica en el campo "District_Name". Observe que "District_Name" se indica ahora en la ventana inferior derecha llamada "Row Labels" (Etiquetas de fila). Si se hace correctamente, todos los distritos se cargarán en la Columna A. Desplácese hacia abajo y observe que hay 223 filas de nombres de distrito y una fila de "Grand Total" (Total general) al final (aunque aún no se muestra ningún número total). Regrese hasta arriba. Esto nos permitirá ahora agregar otros criterios basados en estos campos.

[![Image 11](/assets/images/academy/reviewing-a-polling-station-list/image14.png)](/assets/images/academy/reviewing-a-polling-station-list/image14.png)

#### 4\. Definir las unidades de votación

Ahora veamos cuántos centros de votación hay en cada distrito. Tome el campo "PS_Code" que aparece en la parte derecha y arrástrelo hasta la sección "Values" (Valores) en la parte inferior. Si todo sale bien, la tabla dinámica deberá mostrar un conteo de todas las celdas que contengan un valor para el campo "PS_Code" para cada distrito. Para verificarlo, coloque el cursor sobre los valores en la Columna B y deberá aparecer una nota con la leyenda "Count of PS_Code" (Cuenta de PS_Code). Observe que ahora el texto "Count of PS_Code" (Cuenta de PS_Code) aparece en la ventana inferior derecha en el cuadro "Values" (Valores). Si lo ha hecho correctamente, debe mostrar 407 para Ablekuma, 91 para Abura/Asebu/Kwamanskese, y así sucesivamente. Vea la imagen que se muestra más adelante.

Sin embargo, si en los totales de la Columna B solo aparecen ceros, entonces hay que indicarle a Excel que cuente el número de los distintos códigos o filas. En lugar de hacer eso, Excel está tratando de sumar los valores en esa columna, y como es un campo de texto, la suma de todo es cero. Para asegurarse de que Excel cuente los campos (en lugar de sumar los campos), necesitamos ir a "Sum of PS_Code" (Suma de PS_Code) en la ventana "Values" (Valores) y hacer clic en la flecha que indica hacia abajo. Esto nos abrirá una ventana donde hay que hacer clic en "Value field settings" (Configuración de campo de valor) y aparecerá una nueva ventana. Debajo de "Summarize Value Field By" (Resumir campo de valor por) elija "Count" (Cuenta). Si lo ha hecho correctamente, debe mostrar 407 para Ablekuma, 91 para Abura/Asebu/Kwamanskese, y así sucesivamente. Vea la siguiente imagen.

[![Image 12](/assets/images/academy/reviewing-a-polling-station-list/image8.png)](/assets/images/academy/reviewing-a-polling-station-list/image8.png)

¡Ahora ya sabe cómo hacer una tabla dinámica en Excel!

#### 5\. Definir los votantes registrados por distrito

Ahora veamos cuántos votantes hay registrados en cada distrito. Seleccione y arrastre "Registered_Voters" al cuadro "Values" (Valores). Lo que queremos es una suma de todos los valores para el número de votantes registrados. Sin embargo, en este momento es probable que Excel esté mostrando la "Count of Registered_Voters" (Cuenta de Registered_Voters (usted lo sabrá porque aparecerán los mismos números en la Columna C que los que aparecen en la Columna B para "Count of PS_Code" (Cuenta de PS_Code)). Para asegurarse de que Excel sume los campos de "Registered_Voters" (en lugar de contar las filas individuales), es necesario ir a "Count of Registered_Voters" (Cuenta de Registered_Voters) en la ventana "Values" (Valores) en la parte inferior derecha de la pantalla, y hacer clic en la flecha que indica hacia abajo. Esto nos abrirá una ventana donde hay que hacer clic en "Value Field Settings" (Configuración de campo de valor) y aparecerá una nueva ventana. Debajo de "Summarize Value Field By" (Resumir campo de valor por) elija "Sum" (Suma). Excel sumará el número de votantes registrados en cada distrito y mostrará los números grandes que puede ver a continuación.

[![Image 13](/assets/images/academy/reviewing-a-polling-station-list/image9.png)](/assets/images/academy/reviewing-a-polling-station-list/image9.png)

#### 6\. Definir la proporción de votantes registrados por distrito

Por último, veamos la distribución del porcentaje de votantes registrados que hay en cada distrito. Esto implicará primero repetir algunos de los mismos pasos a partir del paso 5 anterior. Primero agregue "Registered_Voters" al campo "Values" (Valores). Vaya al renglón "Count of Registered_Voters" (Cuenta de Registered_Voters) en la ventana "Values" (Valores) en la parte inferior derecha y haga clic en la flecha que indica hacia abajo. Luego haga clic en "Value Field Settings" (Configuración de campo de valor) para abrir una nueva ventana. En "Summarize Value Field By" (Resumir campo de valor por) elija "Sum" (Suma) y luego seleccione la pestaña "Show values as" (Mostrar valores como). En el menú desplegable, elija "Show values as percentage (%) of column total" (Mostrar valores como porcentaje (%) del total de columnas) y luego haga clic en "OK" (Aceptar). Ahora ya tiene el número de votantes registrados en cada distrito expresado como un porcentaje del número total de todos los votantes registrados.

[![Image 14](/assets/images/academy/reviewing-a-polling-station-list/image5.png)](/assets/images/academy/reviewing-a-polling-station-list/image5.png)

## Cómo usar la tabla dinámica para analizar los datos

Usar una tabla dinámica es una manera muy fácil de analizar muchos datos rápidamente. Sin embargo, si la tabla dinámica se basa en datos incorrectos, estamos en problemas. Como analista, es su trabajo revisar los datos para asegurarse de que tengan sentido y que sean exactos, o tan "limpios" como sea posible.

Por ejemplo, vea las filas 147 y 148 en su tabla dinámica. Puede ver que en la 147, hay un distrito llamado Moagduri y en la 148 uno llamado Moagdurii. ¿Esto es una coincidencia? Probablemente no. Si revisamos la hoja con los datos crudos y bajamos hasta la fila 14127, podemos ver que el nombre del distrito cambia a Moagdurii, con dos "i". Si observamos bien los datos en "Moagduri" y "Moagdurii", vemos que aparece el mismo código de centro de votación, los dos están en la misma región y circunscripción y tienen conteos muy similares de votantes registrados. Por lo tanto, cabría sospechar que el EMB simplemente se equivocó al capturar el nombre del distrito en su base de datos. En este punto, como analista, tendríamos que verificar con un colega u otra persona que conozca la situación más a detalle y verificar nuevamente los datos.

## ¿Qué ve?

Revise nuevamente la tabla dinámica y responda las siguientes preguntas:

1.  ¿Cuáles tres distritos tienen el mayor número de votantes registrados?
2.  ¿Cuáles tres distritos tienen el menor número de votantes registrados?
3.  Pregunta para punto extra: Revise la lista original. ¿Hay algo que le parezca extraño (además de los nombres de distrito Moagduri y Moagdurii)?
