# Waarden

## Absolute lengte-eenheden

| Eenheid *(Eng. unit)* | Omschrijving                      |
| :-------------------: | :-------------------------------- |
|         `cm`          | centimeter                        |
|         `mm`          | millimeter                        |
|        `inch`         | inch (`1in` = `96px` = `2.54cm`)  |
|                       |                                   |
|         `px`          | pixel (`1px` = 1/96ste van `1in`) |
|         `pt`          | point (`1pt` = 1/72ste van `1in`) |
|         `pc`          | pica (`1pc`  = `12pt`)            |


## Relatieve lengte-eenheden

| Eenheid *(Eng. unit)* | Omschrijving                                                                                     |
| :-------------------: | :----------------------------------------------------------------------------------------------- |
|         `em`          | relatief ten opzichte van de fontgrootte van het element                                         |
|         `rem`         | relatief ten opzichte van de fontgrootte van het root-element                                    |
|          `%`          | relatief ten opzichte van de breedte van het element                                             |
|                       |                                                                                                  |
|         `vw`          | relatief ten opzichte van de `1%` van de breedte van de viewport                                 |
|         `vh`          | relatief ten opzichte van de `1%` van de hoogte van de viewport                                  |
|        `vmin`         | relatief ten opzichte van de kleinste waarde van de `1%` van de breedte en de `1%` van de hoogte |
|        `vmax`         | relatief ten opzichte van de grootste waarde van de `1%` van de breedte en de `1%` van de hoogte |


## Dimensies

 - `width:`  
   Breedte van een element. De `padding:` en `border-width:` worden niet meegerekend.
 - `height:`  
   Hoogte van een element. De `padding:` en `border-width:` worden niet meegerekend.
 - `min-width:`  
   De minimale breedte van een element.  
   Dit voorkomt dat het element kleiner wordt dan de opgegeven waarde.
 - `min-height:`  
   De minimale hoogte van een element.  
   Dit voorkomt dat het element kleiner wordt dan de opgegeven waarde.
 - `max-width:`  
   De maximale breedte van een element.  
   Dit voorkomt dat het element groter wordt dan de opgegeven waarde. Overschrijft de `width:` van het element.
 - `max-height:`  
   De maximale hoogte van een element.  
   Dit voorkomt dat het element groter wordt dan de opgegeven waarde. Overschrijft de `height:` van het element.