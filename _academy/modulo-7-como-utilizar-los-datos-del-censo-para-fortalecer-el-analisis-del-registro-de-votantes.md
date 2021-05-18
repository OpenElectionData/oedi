---
lang: es
title: 'Módulo 7: Cómo utilizar los datos del censo para fortalecer el análisis del
  registro de votantes'
module_id: 7
permalink: "/academy/using-census-data-to-strengthen-voter-registration-analysis/"
excerpt: |-
  En el Módulo 7 consolidará las habilidades que obtuvo en los Módulos 5 y 6 y que le permitirán realizar análisis más avanzados de los datos del registro de votantes. También introduciremos nuevos trucos que le ayudarán a hacer referencias cruzadas de datos provenientes de otras fuentes útiles, como los censos, a fin de complementar su análisis del registro de votantes. El objetivo de este módulo es que al finalizar usted: <ul><li>utilice la combinación de las funciones INDEX MATCH [ÍNDICE COINCIDIR] de Excel,
  </li> <li>domine su entendimiento de las funciones SUMIF [SUMAR.SI],</li> <li>domine las operaciones básicas de MS Excel, como los porcentajes, y</li> <li>analice las consideraciones políticas de los datos analizados.</li> </ul>
published: false

---
En el Módulo 7 consolidará las habilidades que obtuvo en los Módulos 5 y 6 y que le permitirán realizar análisis más avanzados de los datos del registro de votantes. También introduciremos nuevos trucos que le ayudarán a hacer referencias cruzadas de datos provenientes de otras fuentes útiles, como los censos, a fin de complementar su análisis del registro de votantes. El objetivo de este módulo es que al finalizar usted:

* utilice la combinación de las funciones INDEX MATCH \[ÍNDICE COINCIDIR\] de Excel,
* domine su entendimiento de las funciones SUMIF \[SUMAR.SI\],
* domine las operaciones básicas de MS Excel, como los porcentajes, y
* analice las consideraciones políticas de los datos analizados.

## ¿Cómo se relacionan los datos del censo con el registro de votantes?

Como ya mencionamos en la [Guía de datos electorales](http://openelectiondata.net/en/guide/) y en los Módulos 5 y 6, un proceso de [registro de votantes](http://openelectiondata.net/en/guide/key-categories/voter-registration/) creíble fomenta la igualdad política y promueve activamente la inclusión de las personas con derecho a votar. Cuando el proceso de registro de votantes es justo y transparente, esto puede aumentar la legitimidad de las elecciones. Por el contrario, si el proceso de registro de votantes se lleva a cabo de una manera inadecuada o no ofrece las mismas oportunidades de participación para todos, puede poner en entredicho la legitimidad de toda una elección. Las organizaciones de la sociedad civil con frecuencia utilizan las estadísticas del registro de votantes para determinar si el proceso en general fue justo e incluyente.

Cuando están disponibles, los datos del censo complementan los datos del registro de votantes al ofrecer información sobre la población con derecho a votar. Con los datos del censo, los analistas pueden evaluar las tendencias en las tasas de registro y entender hasta qué grado los distintos segmentos de una población con derecho a votar están sobre o subrepresentados en el padrón. El Módulo 7 fortalecerá su habilidad para hacer referencias cruzadas de conjuntos de datos complementarios de esta naturaleza y contribuir a este importante tipo de análisis.

## ¡Bienvenido nuevamente a Opendya!

¡La diversión de las elecciones en Opendya continúa! Como recordará, usted logró obtener un conjunto de datos del registro de votantes recopilado por la comisión electoral. El archivo contiene los datos de un ejercicio de cinco semanas que se llevó a cabo para actualizar el padrón electoral en anticipación a las elecciones de 2014. En esta ocasión, usted también logró obtener de la Agencia de Estadísticas los datos del censo sobre la población con derecho a votar de Opendya.

Aunque no es un requisito, le sugerimos terminar primero los Módulos 5 y 6 para que se familiarice con los datos y los antecedentes políticos de Opendya. Por si no ha terminado los módulos anteriores, a continuación le proporcionamos algunos antecedentes importantes que debe conocer:

* Opendya celebró elecciones nacionales en 2010 y en 2014.
* La capital de Opendya se encuentra en el distrito de Opa City (código de distrito: 47), el cual abarca tanto zonas urbanas como rurales.
* Desde las elecciones de 2010 han surgido conflictos violentos en dos distritos: Conflicteri (código de distrito: 9) y Disputana (código de distrito: 23),
* El censo se llevó a cabo antes de que se desatara la violencia en los dos distritos.
* En anticipación a las elecciones de 2014, la comisión electoral de Opendya llevó a cabo un ejercicio de cinco semanas para actualizar el padrón electoral.

## Archivos de datos

Necesitará dos archivos distintos para realizar este ejercicio:

* datos del registro de votantes de Opendya _(incluye los mismos datos crudos de los Módulos 5 y 6, pero para este análisis los encabezados de las columnas serán diferentes); y_
* datos del censo de Opendya.

Si ya terminó los Módulos 5 y/o 6 puede continuar utilizando el archivo de los datos del registro de votantes, pero necesitará descargar el nuevo archivo del censo. Si continúa utilizando el archivo existente, necesitará agregar unas cuantas columnas adicionales para realizar el análisis del Módulo 7 (tal como se indica en las capturas de pantalla del ejercicio), ya que los encabezados no tendrán ninguna información. Si lo prefiere, también puede descargar el archivo que ya incluye los encabezados de las columnas específicas para realizar el análisis de este módulo.

##   
Cómo analizar los datos del registro de votantes

Familiarícese con los datos del registro de votantes de Opendya. Seleccione la pestaña Registration_Data \[Datos de registro\] del archivo del registro de votantes.

#### District_name

La columna de la izquierda de la pestaña Registration_Data contiene los nombres de todos los distritos de Opendya. Observe que este es el único nivel geográfico que ofrece el conjunto de datos. En este punto no contamos con más información sobre si estos distritos están cerca uno del otro o si se ubican dentro de la misma unidad geográfica en un nivel más alto.