# Kleursystemen

::: icon-warning
Op het web gebruikt men (voorlopig) nog altijd RGB en niet CMYK.
:::

::: icon-sources
- [Mozilla Developer Network: Kleuren](https://developer.mozilla.org/nl/docs/Learn/CSS/Introduction_to_CSS/Waarden_en_eenheden#Kleuren)
:::

## Kleurnamen

147 kleurnamen

 - `white`
 - `red`
 - `green`
 - `blue`
 - `cyan`
 - `magenta`
 - `yellow`
 - `black`
 - ...

::: icon-warning
Gebruik dit systeem liever niet. Ontwerpers willen doorgaans specifiekere en eenduidigere kleuren.
:::

## Hexadecimale kleurcode

Het hexadecimale kleursysteem wordt het meest gebruikt.

### Hexadecimaal talstelsel


| Decimaal | Hexadecimaal |
| -------: | ------------ |
|      `0` | `0`          |
|        … | …            |
|     `10` | `A`          |
|     `11` | `B`          |
|     `12` | `C`          |
|     `13` | `D`          |
|     `14` | `E`          |
|     `15` | `F`          |

### RGB

| #   | Kleurkanaal       | Minimale waarde | Maximale waarde |
| --- | ----------------- | --------------- | --------------- |
| 1   | **R**ed (rood)    | `00`            | `FF`            |
| 2   | **G**reen (groen) | `00`            | `FF`            |
| 3   | **B**lue (blauw)  | `00`            | `FF`            |


| Kleur   | Hexadecimale kleurcode | Verkorte notatie |
| ------- | ---------------------- | ---------------- |
| Zwart   | `#000000`              | `#000`           |
| Rood    | `#FF0000`              | `#F00`           |
| Geel    | `#FFFF00`              | `#FF0`           |
| Groen   | `#00FF00`              | `#0F0`           |
| Cyaan   | `#00FFFF`              | `#0FF`           |
| Blauw   | `#0000FF`              | `#00F`           |
| Magenta | `#FF00FF`              | `#F0F`           |
| Wit     | `#FFFFFF`              | `#FFF`           |


::: icon-tip
Gebruik de **verkorte notatie** als de 3 paar hexadecimale getallen elk 2 dezelfde tekens hebben, dan kan telkens 1 teken weggelaten worden.

Bv. `#FFCC33` wordt dan `#FC3`
:::

## Red-Green-Blue

### RGB

| #   | Kanaal            | Minimale waarde | Maximale waarde |
| --- | ----------------- | --------------- | --------------- |
| 1   | **R**ed   (rood)  | `0`             | `255`           |
| 2   | **G**reen (groen) | `0`             | `255`           |
| 3   | **B**lue  (blauw) | `0`             | `255`           |


```css
rgb(  0,   0,   0)
rgb(255, 255, 255)
```

### RGBa

| #   | Kanaal              | Minimale waarde          | Maximale waarde            | Betekenis                                 |
| --- | ------------------- | ------------------------ | -------------------------- | ----------------------------------------- |
| 1   | **R**ed   (rood)    | `0`                      | `255`                      |                                           |
| 2   | **G**reen (groen)   | `0`                      | `255`                      |                                           |
| 3   | **B**lue  (blauw)   | `0`                      | `255`                      |                                           |
| --- | ------------------- | ------------------------ | -------------------------- | ----------------------------------------- |
| 4   | **A**lpha (alfa)    | `0.00` (doorschijnend)   | `1.00` (ondoorschijnend)   | Van doorschijnend naar ondoorschijnend.   |


```css
rgba(  0,   0,   0, 0   )
rgba(255, 255, 255, 1.00)
```


## Hue-Saturation-Lightness

### HSL

| #   | Kanaal                         | Minimale waarde   | Maximale waarde   | Betekenis                       |
| --- | ------------------------------ | ----------------- | ----------------- | ------------------------------- |
| 1   | **H**ue (kleurtoon)            | `0`               | `359`             | Graden op de kleurencirkel.     |
| --- | ------------------------------ | ----------------- | ----------------- | ------------------------------- |
| 2   | **S**aturation (verzadiging)   | `0%`              | `100%`            | Van grijs naar zuivere kleur.   |
| 3   | **L**ightness (helderheid)     | `0%`              | `100%`            | Van zwart naar wit.             |


```css
hsl(  0, 100%,   0%)
hsl(359, 100%, 100%)
```

```css
.rood {
    background-color: hsl(  0, 100%, 50%);
}
.geel {
    background-color: hsl( 60, 100%, 50%);
}
.groen {
    background-color: hsl(120, 100%, 50%);
}
.cyaan {
    background-color: hsl(180, 100%, 50%);
}
.blauw {
    background-color: hsl(240, 100%, 50%);
}
.magenta {
    background-color: hsl(300, 100%, 50%);
}
.rood {
    background-color: hsl(359, 100%, 50%);
}
```

### HSLa

| #   | Kanaal                         | Minimale waarde   | Maximale waarde   | Betekenis                                 |
| --- | ------------------------------ | ----------------- | ----------------- | ----------------------------------------- |
| 1   | **H**ue (kleurtoon)            | `0`               | `359`             | Graden op de kleurencirkel.               |
| --- | ------------------------------ | ----------------  | ----------------- | ----------------------------------------- |
| 2   | **S**aturation (verzadiging)   | `0%`              | `100%`            | Van grijs naar zuivere kleur.             |
| 3   | **L**ightness (helderheid)     | `0%`              | `100%`            | Van zwart naar wit.                       |
| --- | ------------------------------ | ----------------- | ----------------- | ----------------------------------------- |
| 4   | **A**lpha (alpha)              | `0.00`            | `1.00`            | Van doorschijnend naar ondoorschijnend.   |


```css
hsla(  0,   0%,   0%, 0   )
hsla(359, 100%, 100%, 1.00)
```
