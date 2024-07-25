# Selectors

## Wat doet een selector?

Met een **selector** selecteer je bepaalde elementen in de **DOM** van een webpagina. Op de selectie kan je vervolgens een bepaalde stijl toepassen.

Meerdere selectoren kunnen dezelfde **declaraties** (`{…}`) gebruiken. De selectoren scheid je dan met een **komma** (`,`).

## Soorten selectors

- Basisselectors
  1. Universal-selector
  2. Type selector
  3. `class`-selector
  4. `id`-selector
  5. Attribute-selector
  6. Attribuut-en-waarde-selector
  7. Pseudo Class-selector
  8. Pseudo Element-selector
- Combinators
  1. Descendant-combinator
  2. Child-combinator
  3. Sibling-combinator
  4. General Sibling-combinator

## Basisselectors

### Universele selector

`*` (asteri**sk**)

Selecteert **alle** elementen.

::: icon-danger
Pas deze selector spaarzaam toe, want het is zelden nodig.

Een stijl toepassen op elk element verstoort de normale werking van de **cascade**.
:::

```css
* {
    /* Hier komen de stijldeclaraties. */
}
```

### Type-selector

`elementnaam`

Selecteert **alle** HTML-elementen van dat **type** (de `elementnaam`).

```css
h1, h2, h3, h4, h5, h6,
p {
    /* Hier komen de stijldeclaraties. */
}
```


### `class`-selector

`.klassenaam` (`.`, punt)

Selecteert **alle** HTML-elementen die de **klasse** hebben in het `class`-attribuut.

```css
.mijn-class,
.mijn-andere-class {
    /* Hier komen de stijldeclaraties. */
}
```

### `id`-selector

`#id-naam` (`#`, hekje)

Selecteert **het** HTML-element dat deze `id` (**identifier**) heeft in het `id`-attribuut.

::: icon-warning
Een `id` identificeert een bepaald HTML-element op een pagina. Per webpagina kan **maar 1 element** die bepaalde `id` hebben.
:::

```css
#mijn-id,
#mijn-andere-id {
    /* Hier komen de stijldeclaraties. */
}
```

### Attribute-selector

`[naam]` (`[`…`]`, vierkante haken)

Selecteert alle HTML-elementen die het **attribuut** met de naam `naam` bevatten.

```css
[target] {
    /* Hier komen de stijldeclaraties. */
}
```

```html
<a href="https://www.arteveldehogeschool.be" target="_self">Arteveldehogeschool</a>
<a href="https://http://www.arteveldeuniversitycollege.be" target="_blank">Artevelde University College Ghent</a>
```

### Attribute&Value-selector

`[naamoperatorwaarde]` (`[`…`]`, vierkante haken)

Selecteert alle HTML-elementen die het **attribuut** met de naam `naam` bevatten die bovendien voldoet aan de **waarde** `waarde` volgens de vereisten van de operator `operator` .

| Operator | Betekenis                                                                                                |
| :------: | :------------------------------------------------------------------------------------------------------- |
|   `=`    | Exacte de waarde.                                                                                        |
|   `^=`   | Begint met de waarde.                                                                                    |
|   `|=`   | Begint met de waarde, maar enkel als het woord alleen staat of gevolgd wordt door een koppelteken (`-`). |
|   `*=`   | Bevat de waarde.                                                                                         |
|   `$=`   | Eindigt met de waarde.                                                                                   |

In dit geval alle links met een `target`-attribuut met de waarde `_blank`

```css
a[target="_blank"] {
    /* Hier komen de stijldeclaraties. */
}
```

Is van toepassing op:

```html
<a href="https://www.arteveldehogeschool.be" target="_blank">Arteveldehogeschool</a>
```

```css
a[href^="http"] {
    /* Hier komen de stijldeclaraties. */
}

img[src$=".svg"] {
    /* Hier komen de stijldeclaraties. */
}

p[class*="js"] {
    /* Hier komen de stijldeclaraties. */
}
```

### Pseudo Class-selector

`:pseudo-class` (`:`, dubbelepunt)

Selecteert de elementen waarop de pseudo class van toepassing is.

```css
a:link,
a:hover,
a:visited,
a.unselected:active {
    /* Hier komen de stijldeclaraties. */
}
```

Selecteert de `<a>`-elementen volgens toestand:

| Selector                          | Betekenis                                               |
| --------------------------------- | ------------------------------------------------------- |
| `:link`                           | Nog niet bezochte hyperlink.                            |
| `:visited`                        | Bezochte hyperlink.                                     |
| `:hover`                          | Als er over de hyperlink gezweefd wordt.                |
| `:active`                         | Terwijl er op hyperlink geklikt wordt.                  |
|                                   |                                                         |
| `:checked`                        | Aangevinkte of geselecteerde formulierelementen.        |
| `:disabled`                       | Uitgeschakelde formulierelementen.                      |
| `:selected`                       | Geselecteerde formulierelementen.                       |
|                                   |                                                         |
| `:first-child`                    | Eerste child-element.                                   |
| `:nth-child(geheel-getal)`        | Het *n*-de child-element, bv. 4de.                      |
| `:last-child`                     | Laatste child-element.                                  |
| `:nth-last-child(geheel-getal)`   | Het *n*-de laatste child-element, bv. 4de.              |
|                                   |                                                         |
| `:first-of-type`                  | Eerste child-element van dat type.                      |
| `:nth-of-type(geheel-getal)`      | Het *n*-de child-element van dat type, bv. 4de.         |
| `:last-of-type`                   | Laatste child-element van dat type.                     |
| `:nth-last-of-type(geheel-getal)` | Het *n*-de laatste child-element van dat type, bv. 4de. |


::: icon-warning
- "Hover" (van het werkwoord 'to hover', Ned. zweven) spreek je uit als 'hovver', met een korte 'o'.
- Het werkwoord 'to hoover' (met lange 'o') betekent stofzuigen en verwijst naar het stofzuigermerk [Hoover](https://www.hoover.com).
:::

::: info Bronnen
Verschil tussen `:nth-child(geheel-getal)` en `:nth-of-type(geheel-getal)` 
- [The Difference Between :nth-child and :nth-of-type](https://css-tricks.com/the-difference-between-nth-child-and-nth-of-type)
:::

```css
input[type="checkbox"]:checked,
input[type="radiobutton"]:checked,
input:disabled,
option:selected {
    /* Hier komen de stijldeclaraties. */
}
```

::: info Bronnen
- [Developer Mozilla: Pseudo Class Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
:::

### Pseudo Element-selector

`::pseudo-element` (`::`, 2 × dubbelepunt)

Selecteert het **Pseudo Element** dat bij het HTML-element hoort.

| Selector         | Betekenis                                               |
| ---------------- | ------------------------------------------------------- |
| `::after`        | Virtueel laatste child-element.                         |
| `::before`       | Virtueel eerste child-element.                          |
|                  |                                                         |
| `::first-letter` | Eerste teken van een block.                             |
| `::first-line`   | Eerste lijn van een block.                              |
|                  |                                                         |
| `::selection`    | Geselecteerde inhoud (bv. met de muis) van een element. |


```css
p::before,
h1::after,
p::selection {
    /* Hier komen de stijldeclaraties */
}
```

::: info Bronnen
- [Developer Mozilla: Pseudo Element Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
:::

### Voorbeeld 

<iframe height='358' scrolling='no' title='CSS Pseudo Classes / Pseudo Selectors' src='//codepen.io/fredroeg/embed/EbRbNP/?height=358&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/fredroeg/pen/EbRbNP/'>CSS Pseudo Classes / Pseudo Selectors</a>by Frederick Roegiers (<a href='https://codepen.io/fredroeg'>@fredroeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Samengestelde Selectors

Je kan de basisselectors samenstellen in deze volgorde:

 1. Eerst: Type-selector.
 2. In willekeurige volgorde: `id`-selector, `class`-selector(s), Attribute-selector(s) en/of Pseudo Class-selector(s).
 3. Laatst: Pseudo Element-selector.

```html
<nav>
    <a class="nav__item nav__item--primary" href="#" target="_self">lorem ipsum</a>
    <a class="nav__item nav__item--primary" href="#" target="_self">dolor sit</a>
    <a class="nav__item nav__item--primary nav__item--selected" href="#" target="_self">amet consectetur</a>
    <a class="nav__item nav__item--primary" href="#" target="_self">adipisicing elit</a>
    <a class="nav__item nav__item--primary" id="link" href="#" target="_self">maiores nostrum</a>
    <a class="nav__item nav__item--primary" href="#" target="_self">iusto eius</a>
</nav>
```

```css
a {
  display: block;
  font-family: sans-serif;
  text-decoration: none; 
}
a.nav__item:nth-child(2)[target].nav__item--primary[href="#"]::first-letter {
  text-transform: uppercase;
}
a:hover[target].nav__item#link::before {
  content: '→ '
}
```

Is van toepassing op:

```html
    <a class="nav__item nav__item--primary nav__item--selected" href="#" target="_self">amet consectetur</a>
    <a class="nav__item nav__item--primary" id="link" href="#" target="_self">maiores nostrum</a>
```

### Descendant-combinator

`voorouder nakomelingen` (` `, (spatie))

Selecteert **nakomelingen** (kinderen, kleinkinderen, achterkleinkinderen, achterachterkleinkinderen …).

```css
div span,
p a,
.mijn-class div span {
    /* … */
}
```

Selecteert alle descendant-elementen die voldoen aan de selector.

### Child-combinator

`ouder kinderen` (`>`, groter dan-teken)

Selecteert **directe nakomelingen** (kinderen).

```css
div span,
p a,
.mijn-class div span {
    /* … */
}
```

Selecteert alle child-elementen (directe descendants) die voldoen aan de selector.

### Adjacent Sibling-combinator

`oudere-broer-of-zus + jongere-broer-of-zus` (`+`, plusteken)

Selecteert **de jongere** broer of zus die **direct volgt**.

```css
h1 + p {
    /* … */
}
```

Het eerste sibling-element dat na het element komt en voldoet aan de selector. (`<p>` die direct op de `<h1>` volgt)

### General Sibling-combinator

`oudere-broer-of-zus ~ jongere-broers-of-zussen` (`~`, tilde)

Selecteert **alle jongere** broers of zussen.

```css
a.geselecteerd ~ a {
    /* … */
}
```

De sibling-elementen die na het element komen en voldoen aan de selector.

(alle volgende `<a>`-sibling-elementen na `<a>`-elementen met de klasse `.geselecteerd`, moet niet direct opvolgend zijn)

<p data-height="265" data-theme-id="light" data-slug-hash="ZBqVJJ" data-default-tab="css,result" data-user="olivierparent" data-embed-version="2" data-pen-title="ZBqVJJ" class="codepen">See the Pen <a href="http://codepen.io/olivierparent/pen/ZBqVJJ/">ZBqVJJ</a>by Olivier Parent (<a href="http://codepen.io/olivierparent">@olivierparent</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Stijlvoorrang

::: info Bronnen
- [Mozilla Developer Network: Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
:::

De **voorrang** van een stijl wordt bepaald door:

1. **Belangrijkheid** van de declaratie.
2. **Specificiteit** van de selector.
3. **Volgorde** van de declaraties.

### Volgorde

 - De laatste declaratie heeft voorrang op eerdere declaraties.
 - De laatste declaratie overschrijft de voorgaande.

### Specificiteit

#### Specificiteit van de selector.

Specifiekere selectors hebben voorrang op minder specifieke selectors.

Bij benadering kan je stellen:

 - Hoe minder elementen je met de selector kan selecteren, hoe specifieker.
 - Stijlen in een style-attribuut zijn het meest specifiek, want zijn enkel maar voor dat element.

### Belangrijkheid

Door `!important` na de waarde toe te voegen dwing je voorrang af.

Gebruik dit enkel in uiterste nood, want omzeilt de normale ‘Cascade’, wat een *bad practice* is.

```css
body {
    color: blue !important;
    color: red;
}
```

## Voorrangscijfer

Cijfer voor de voorrang van een stijl: `0,0,0,0,0`

Berekening:

 1. **!**: wordt een `!important` toegepast op de declaratie? (ja: `1`, nee: `0`)
 2. **S**: staat de declaratie in een `style`-attribuut? (ja: `1`, nee: `0`)
 3. **I**: aantal `id`-selectors (`#`)
 4. **C**: aantal `class`- (`.`), Pseudo Class- (`:`) en Attribute-selectors (`[]`)
 5. **T**: aantal Type-selectors (Element-selector of Pseudo Element-selector (`::`))

|      !       |     S      |      I      |        C        |         T          |
| :----------: | :--------: | :---------: | :-------------: | :----------------: |
| `!important` | `style=""` | `#id-naam`  |  `.klassenaam`  |     `element`      |
|              |            |             | `:pseudo-class` | `::pseudo-element` |
|              |            |             |  `[attribuut]`  |                    |
|              |            |             |                 |                    |
|  `1` of `0`  | `1` of `0` | aantal: `0` |   aantal: `0`   |    aantal: `0`     |


Voorbeelden:

| Selector of inline style                         |   !   |   S   |   I   |   C   |   T   |   Cijfer    |
| :----------------------------------------------- | :---: | :---: | :---: | :---: | :---: | :---------: |
| `p { color: #F00; }`                             |  `0`  |   -   |  `0`  |  `0`  |  `1`  | `0,0,0,0,1` |
| `p::selection { color: #FF0; }`                  |  `0`  |   -   |  `0`  |  `0`  |  `2`  | `0,0,0,0,2` |
| `p.belangrijk {}`                                |  `0`  |   -   |  `0`  |  `1`  |  `1`  | `0,0,0,1,1` |
| `p#allereerste-alinea {}`                        |  `0`  |   -   |  `1`  |  `0`  |  `0`  | `0,0,1,0,0` |
| `head + body h1#hoofd1 + p.belangrijk a:link {}` |  `0`  |   -   |  `1`  |  `2`  |  `5`  | `0,0,1,2,5` |
| `<p style="color: #F00">`                        |  `0`  |  `1`  |   -   |   -   |   -   | `0,1,0,0,0` |
| `<p style="color: #0F0 !important">`             |  `1`  |  `1`  |   -   |   -   |   -   | `1,1,0,0,1` |
| `p { color: #00F !important }`                   |  `1`  |   -   |  `0`  |  `0`  |  `1`  | `1,0,0,0,1` |


::: info Bronnen
<https://specificity.keegan.st>
:::