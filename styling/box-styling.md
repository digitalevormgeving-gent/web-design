# Boxstijlen

## Background

::: icon-sources
- [Mozilla Developer Network: background](https://developer.mozilla.org/nl/docs/Web/CSS/background)
:::

### background

Met de `background`-property kan je verkort alle achterground-eigenschappen van een element toepassen, zoals de kleur, afbeelding, afmeting, herhaling, ...

- `background:` `background-color` `background-image` `background-repeat` `background-attachment` `background-position`
  1. `background-color:` `kleur`
  2. `background-image:`  
     `url(pad-naar-afbeelding)` &#124; `url("pad-naar-afbeelding")` &#124;  
     `linear-gradient()` &#124; `repeating-linear-gradient()` &#124;  
     `radial-gradient()` &#124; `repeating-radial-gradient()` &#124;  

  3. `background-repeat:` `repeat` &#124; `repeat-x` &#124; `repeat-y` &#124; `no-repeat` &#124; …
  4. `background-attachment:` `scroll` &#124; `fixed`
  5. `background-position:` `x-as y-as` &#124; `x-afstand y-afstand` &#124; `center`
      - `x-as`: `left` &#124; `center` &#124; `right`
      - `y-as`: `top` &#124; `center` &#124; `bottom`

### background-color

Hiermee pas je een achtergrondkleur toe op een element

```css
/* Afbeelding staat in de images-folder */
div {
    background-color: tomato;
}
```

### background-image

#### Afbeelding

- `background-image:`  
    `url(pad-naar-afbeelding)` &#124; `url("pad-naar-afbeelding")` &#124;  
    `linear-gradient()` &#124; `repeating-linear-gradient()` &#124;  
    `radial-gradient()` &#124; `repeating-radial-gradient()` &#124;  

Met de background-image property kan je één of meerdere achtergrondafbeeldingen op een element toepassen. Je links met behulp van `url('...')` naar het pad van de afbeelding. Deze afbeelding kan in je images-map staan of online gehost zijn.  
Je kan ook gebruik maken van een **data-uri** waarbij de afbeeldingsinformatie rechtstreeks in de *string* vervat zit.

```css
/* Afbeelding staat in de images-folder */
div {
    background-image: url('../images/panda.png');
}

/* Afbeelding is online gehost */
footer {
    background-image: url('https://picsum.photos/1000/300');
}

/* Afbeelding met behulp van een data-uri */
li {
    background-image: url('data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7');
}
```

Je kan meerdere achtergrondafbeeldingen toepassen door de `url(...)` te scheiden met een komma: `url('...'), url('...')`. De achtergrondafbeelding die als eerste komt zal bovenaan komen te staan.

<iframe height='500' scrolling='no' title='Background-Image' src='//codepen.io/fredroeg/embed/xyzNby/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

#### Kleurverloop (gradient)

Met diezelfde background-image property kan je ook een kleurverloop erop toepassen. CSS onderscheidt twee types van gradients:
- **Lineair** (startpunt-eindpunt)
    - `background-image:` `linear-gradient(richting, color-stop1, color-stop2, ...);`
- **Radiaal** (vanuit het centrum naar buiten toe)
    - `background-image:` `radial-gradient(color-stop1, color-stop2, ...);`


Standaard gaat het verloop van boven naar onder, je kan meer dan twee kleuren definiëren.  
De kleuren worden gescheiden door middel van een komma.

De standaard richting is **to bottom** en is optioneel.  

Je kan volgende richtingen definiëren:

- **Horizontaal**
    - `to left` (van rechts naar links)
    - `to right` (van links naar rechts)
- **Verticaal**
    - `to bottom` (**standaard**, boven naar onder)
    - `to top` (van onder naar boven)
- **Diagonaal**
    - `to bottom right` (linksboven->rechtsonder)
    - `to bottom left` (rechtsbocen->linksonder)
    - `to top right` (linksonder->rechtsboven)
    - `top top left` (rechtsonder->linksboven)
    - `__deg` (onder een hoek, vb `50deg` of `-75deg`)


<iframe height='500' scrolling='no' title='background-image gradient' src='//codepen.io/fredroeg/embed/OBEYbX/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

Er bestaan ook herhalende kleurverlopen (zie references hieronder).

::: icon-sources
- [Mozilla Developer Network: Repeating Linear Gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient)
- [Mozilla Developer Network: Repeating Radial Gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-radial-gradient)
:::


### background-repeat

`background-repeat:` `repeat` &#124; `repeat-x` &#124; `repeat-y` &#124; `no-repeat` &#124; …

Standaard wordt de achtergrondafbeelding herhaald over zowel de x-as als de y-as.  
Je kan dit veranderen met de `background-repeat`-property.

- `background-repeat:`
    - `repeat` (horizontaal herhalen + verticaal herhalen)
    - `repeat-x` (enkel horizontaal herhalen)
    - `repeat-y` (enkel verticaal herhalen)
    - `no-repeat` (nooit herhalen)

### background-position

`background-position:` `x-as y-as` &#124; `x-afstand y-afstand` &#124; `center`
      - `x-as`: `left` &#124; `center` &#124; `right`
      - `y-as`: `top` &#124; `center` &#124; `bottom`

Standaard wordt de achtergrondafbeelding linksboven in het element geplaatst, maar je kan het veranderen met de `background-position`-property.

<iframe height='500' scrolling='no' title='background-image position' src='//codepen.io/fredroeg/embed/qJKGpz/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

### background-size

`background-size:` `auto` &#124; `length` &#124; `cover` &#124; `contain` 

Deze property zit **niet** in de `background:` shorthand-notatie.

Een achtergrondafbeelding neemt standaard zijn originele afmeting over.  
- Als de afbeelding bijvoorbeeld 800px breed is en 600px hoog, maar de div waarop die toegepast is slechts 200x200 px groot is, zien we maar een fractie van de afbeelding, de rest is eraf gesneden.
- Is de afbeelding kleiner, dan wordt die standaard herhaald tot het element gevuld is (tenzij de `background-repeat` anders gedefinieerd is)


- `background-size:`
    - `auto` (standaard, de afbeelding wordt op zijn originele afmeting getoond)
    - `length` (vb `200px 300px`, de afbeelding neemt de ingegeven waardes over. Eerste waarde = breedte, tweede waarde = hoogte)
    - `percentage` (vb. `20% 50%`) de afbeelding neemt de ingegeven waardes over, in verhouding tot het parent element. Eerste waarde = breedte, tweede waarde = hoogte)
    - `cover` (het element wordt volledig, proportioneel gevuld met de bijgeschaalde achtergrondafbeelding. Langs de randen wordt de "overschot" weggesneden)
    - `contain` (de afbeelding wordt bijgeschaald tot de breedte en/of de hoogte de randen raakt.)

<iframe height='750' scrolling='no' title='background-image size' src='//codepen.io/fredroeg/embed/qJKGwE/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

### background-attachment

::: icon-sources
- [Mozilla Developer Network: background-attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
:::

### background-origin

::: icon-sources
- [Mozilla Developer Network: background-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)
:::

### background-clip

::: icon-sources
- [Mozilla Developer Network: background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
:::

## Object-fit en object-position

Opgelet: niet ondersteund op IE

::: icon-sources
- [Mozilla Developer Network: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [Mozilla Developer Network: object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
:::


## Box Shadow


::: icon-sources
- [Mozilla Developer Network: background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
:::

## Outline

`outline:` `<<outline-width>` `<<outline-style>>` `<<outline-color>>`
`outline-offset:` 

```css
a {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

::: icon-sources
- [Mozilla Developer Network: Outline]( https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
:::

### Border vs Outline

Borders en outlines zijn heel gelijkend, hoewel ze van elkaar verschillen op volgende vlakken:

- Een outline neemt **nooit** plaats in, het is geen onderdeel van het box model, dus zal geen invloed hebben op de positie van het element of aangrenzende elementen.
- Het bevat altijd alle zijdes, je kan niet een specifieke zijde kiezen, zoals bij een border
- Je kan een outline niet afronden (in tegenstelling tot border-radius)
- Een outline hoeft niet per se rechthoekig te zijn (maar is het meestal wel)