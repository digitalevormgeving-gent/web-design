# Lay-out

## Float: Zwevende elementen 

### Basis

Door een element zwevend te maken kan je dat element buiten de **normale flow** uiterst links of rechts in een omvattende blok plaatsen. Het zwevende element wordt **een blokelement** waar andere inhoud omheen loopt. Dit wordt vaak gebruikt bij het plaatsen van een afbeelding in een tekst. Door de afbeelding te laten zweven zal de tekst er mooi rond lopen. Het is aangeraden om het zwevende element altijd expliciet een width te geven, omdat het anders onvoorspelbaar kan zijn. 

Aangezien een zwevend element sowieso een block-level element is, wordt de box compleet weergegeven, inclusief paddings, borders en margins. De margins van een zwevend element en aangrenzende elementen schuiven niet in elkaar.

`float`  
- `none`  
  Standaard waarde. Het element zal niet zweven, maar weergegeven worden waar 
- `left`  
  Het element zweeft uiterst links, alle andere content zal eromheen lopen.
- `right`  
  Het element zweeft uiterst rechts, alle andere content zal eromheen lopen.

#### Voorbeeld 1
<iframe width="100%" height="500" src="//jsfiddle.net/rogerthat_be/tsyz5xos/embedded/result,css,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

#### Voorbeeld 2 (dynamisch voorbeeld)

In onderstaand voorbeeld kan je visueel het verschil zien als de afbeeldingen wel of niet de `float`-eigenschap toegewezen hebben.  
Als je op de rode knop klikt zal de tekst rond de afbeelding lopen *(class met float toegepast)*, klik je nog eens is de float terug uitgeschakeld.  
Er wordt gebruik gemaakt van Javascript om een class in of uit te schakelen.  
<iframe height='742' scrolling='no' title='Float Voorbeeld' src='//codepen.io/fredroeg/embed/bYORrw/?height=742&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

#### Zwevende elementen naast elkaar plaatsen

Je kan meerdere elementen naast elkaar plaatsen door ze allemaal een float eigenschap te geven. 

<div class="blokje"></div>
<div class="blokje"></div>
<div class="blokje"></div>
<div class="blokje"></div>
```
```css
/* aangezien elke div met class blokje de float: left property heeft, komen die naast elkaar te staan */
.blokje {
    float: left;
    width: 250px;
    height: 250px;
}
```

![Multiple Floating Elements](https://sf.rogerthat.be/1718/multiplefloats.png)

#### Clear

Als een zwevend element echter niet naast een ander zwevend element mag komen, kan je er een `clear` op toepassen.

`clear:`  
- `none`  
  Standaard waarde. Elementen mogen links en rechts zweven. 
- `left`  
  Geen zwevende elementen toegestaan aan de linkerzijde
- `right`  
  Geen zwevende elementen toegestaan aan de rechterzijde
- `both`  
  Geen zwevende elementen toegestaan aan de linkerzijde, noch aan de rechterzijde


::: icon-warning
De onderstaande, geavanceerde info is louter achtergrondinformatie omtrent het gebruik van floating elements voor lay-outs.    
Door de mogelijkheden van flexbox wordt dit voor nieuwe toepassingen nog slechts zelden gebruikt.
:::

#### Omvattend element

**Probleem:**

Wil je floating elements gebruiken om lay-outs te maken moet er rekening gehouden worden met de omvattende elementen. Indien je rond zwevende elementen een kader wil plaatsen (bijvoorbeeld een `div` met een `border`) kan dit *omvattend element* voor problemen zorgen. Browsers behandelen het omvattende element dan namelijk alsof het **nul pixels hoog** is.  

In onderstaand voorbeeld staat er een blauwe omvattende div met blauwe rand, rond de vier (zwevende) oranje blokjes. Bijgevolg komt de blauwe rand niet mooi rondom de blokjes.  
![nul pixels hoogte](https://sf.rogerthat.be/1718/geen-hoogte.png "nul pixels hoogte")

Dit hoogteprobleem kan ook opduiken als er tekst + afbeelding staat in een omvattende kader. In het onderstaande voorbeeld kan je opmerken dat enkel de tekst voor de hoogte zorgt binnen de omvattende groene kader. Er wordt geen rekening gehouden met de hoogte van de zwevende afbeelding (de `img`-tag heeft css-eigenschap `float: right;`.
![enkel de tekst neemt hoogte in](https://sf.rogerthat.be/1718/float-problem.png "enkel de tekst neemt hoogte in")

**Oplossing:**

Er is echter een oplossing voor, namelijk door een `clearfix` hack op toe te passen. Dit is een veelgebruikte hack om ervoor te zorgen dat het omvattende element rondom alle zwevende elementen spant.

Op het omvattende element wordt een `::after`-pseudo element toegepast:
```css
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
```

![clearfix](https://sf.rogerthat.be/1718/clearfix.png "clearfix")

**Voorbeeld:**

<iframe width="100%" height="500" src="//jsfiddle.net/rogerthat_be/e32LbLh0/embedded/result,css,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


# Position: Lay-out en Flow

1. Normal Flow
2. Relative Positioning
3. Absolute Positioning
4. Fixed Positioning
5. Sticky Positioning

`position:` `static` &#124; `relative` &#124; `absolute` &#124; `fixed`  &#124; `sticky`

::: icon-sources
- [Mozilla Developer Network: Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
:::

### Normal Flow

Bij de normal flow hebben alle elementen in css: `position:` `static`.

De standaardwaarde is `static`.

Gebruik deze waarde enkel als de declaratie eerder overschreven werd.

```css
p {
    position: static;
}
```

Alle paragrafen hebben een width: 400px. De rode paragraaf 4 volgt de normale flow.

### Relative Positioning

Bij een relatieve positionering kan een offset (afwijking) ten opzichte van de ‘normale’ positie in de normale flow gedeclareerd worden.

Het element krijgt in css: 

`position: relative`

Bij conflict: top en left winnen?

```css
.gepositioneerd-1 {
    position: relative;
    left:  50px; /*offset x*/
    top : -10px; /*offset y*/
}

.gepositioneerd-2 {
    position: relative;
    right : 50px; /*offset x*/
    bottom: 10px; /*offset y*/
}
```

De rode paragraaf 4 is hier relatief gepositioneerd ten opzicht van de normale positie in de flow.

De offset is top: -10px en left: 50px

### Absolute Positioning

Bij een absolute positionering wordt het element uit de flow gehaald en met een offset ten opzichte van het dichtstbijzijnde Ancestor-element (omkoepelend element) met een positionering anders dan static geplaatst. (Op zoek naar offset parent.)

Het element krijgt in css: 
`position: absolute`

```css
.gepositioneerd {
    position: absolute;
    right : 50px; /*offset x*/
    bottom: 10px; /*offset y*/
}
```

Indien er geen Ancestor-element een postionering heeft (een position anders dan static), dat wordt het absoluut gepositioneerd element ten opzichte van de body gepositioneerd. Het element (rode paragraaf 4) verdwijnt uit de flow, zodat paragraaf 5 direct op paragraaf 3 volgt.

Indien een Ancestor-element zelf een position gekregen heeft anders dan static, dan wordt de rode paragraaf gepositioneerd ten opzichte van de inhoud + padding van dichtstbijzijnde het gepositioneerd Ancestor-element.

Met absolute positionering kan je ook elementen centreren: in de x-richting of y-richting of beide.

### Fixed Positioning

Bij een fixed positionering wordt het element uit de flow gehaald en gepositioneerd ten opzichte van het browservenster.

In css:

`position: fixed`

```css
.gepositioneerd {
    position: fixed;
    right : 10px; /*offset x*/
    bottom: 10px; /*offset y*/
}
```

### Sticky Positioning


Bij een sticky positionering staat het element in een normale flow. Na het overschrijden van een bepaalde drempel wordt het `fixed` gepositioneerd.

In css:

`position: sticky`

```css
.gepositioneerd {
    position: sticky;
    top: 8px; /*offset y*/
}
```

## CSS Flexbox

Met behulp van flexbox kunnen we elementen op een webpagina **dynamisch positioneren** zonder hierbij `float` of `position` te gaan gebruiken.
Flexbox zorgt ervoor dat de `width` en `height` van child elementen automatisch wordt aangepast om op een zo optimaal mogelijke manier gebruik te maken van de ruimte in een container. Dit is bijzonder handig wanneer we **responsive en mobiel-vriendelijke** webpaginas willen ontwikkelen.
We onderscheiden twee hoofdcategorieën van elementen bij flexbox: de container en de items. 

### Basisprincipes


![Flex direction terms &copy; W3.org](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)
<sub><sup>Image from [Flex direction terms &copy; W3.org](https://www.w3.org/)</sup></sub>

De flexbox items zullen geplaatst worden op de **main axis** van **main start** tot **main end** of de **cross axis** van **cross start** tot **cross end**.

- **main axis**: De hoofdas van de flexbox container waarop de flexbox items zullen worden geplaatst. De richting van de items kan worden ingesteld met behulp van de `flexbox-direction` eigenschap.
- **main start** en **main end**: Het start- en eindpunt op de hoofdas waarop de flexbox items zullen worden geplaatst in de container.
- **main size**: De `width` & `height` van de flexbox items bepalen de grootte van de as.
- **cross axis**: De as welke loodrecht op de hoofdas (main axis) staat. De richting van deze as wordt tevens bepaald door de richting van de hoofdas.
- **cross start** en **cross end**: Het start- en eindpunt of de cross axis waartussen de flexbox items zullen worden geplaatst.
- **cross size**: De `width` & `height` van de flexbox items bepalen de grootte van de as.

### Flexbox **container** = parent

Alle eigenschappen die in volgende sectie worden besproken zijn toepasbaar op flexbox **container** elementen. Met andere woorden: het parent element die de flexbox items zal bevatten.

#### display

De standaardwaarde van de `display` eigenschap zal `block` of `inline` zijn afhankelijk van het html-element dat zal worden aangesproken.
Zet de waarde van `display` op `flex` of `inline-flex` om flexbox toe te passen voor alle elementen binnen de container (children). 

```css
.container {
  display: flex; /* of inline-flex */
}
```

In onderstaand voorbeeld zien we hoe door middel van flexbox onze items (blok 1-6) automatisch de beschikbare ruimte van onze container kunnen laten gebruiken voor het naast elkaar tonen van de blokken. 

<iframe height='400' scrolling='no' title='Flexbox: display' src='//codepen.io/lesso/embed/vQEPGb/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### flex-direction

Met deze eigenschap kunnen we instellen welke richting de items in de container moeten volgen. Standaardwaarde is hier `row` waarbij de items worden uitgezet van links naar rechts. Andere mogelijke waarden zijn: `row-reverse` &#124; `column` &#124; `column-reverse`.

```css
.container {
  display: flex; 
  flex-direction: row-reverse;
}
```

In onderstaand voorbeeld worden alle mogelijke waarden voor `flexbox-direction` getoond.

<iframe height='400' scrolling='no' title='Flexbox: flexbox-direction' src='//codepen.io/lesso/embed/QJNbEO/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### flex-wrap

Standaard zal de browser met `flex-wrap` op `no-wrap` alle items in een container proberen te doen passen op één lijn. Met de waarde op `wrap` of `wrap-reverse` te zetten kan toegestaan worden dat items op de volgende lijn(en) worden gezet.

```css
.container {
  display: flex; 
  flex-wrap: wrap;
}
```

In onderstaand voorbeeld worden alle mogelijke waarden voor `flex-wrap` getoond.

<iframe height='400' scrolling='no' title='Flexbox: flex-wrap' src='//codepen.io/lesso/embed/JeYQOr/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### justify-content

Met de `justify-content` eigenschap kan worden ingesteld hoe de items in een container moeten worden verdeeld over de **main-axis** en hoe er moet worden omgegaan met eventuele witruimte in de container. De standaardwaarde van `justify-content` is `flex-start` waarmee eventuele witruimte aan de rechtkant van de items terechtkomt. Andere mogelijke waarden voor deze eigenschap zijn: `flex-end` &#124; `center` &#124; `space-between` &#124; `space-around` &#124; `space-evenly`.

```css
.container {
  display: flex; 
  justify-content: center;
}
```

In onderstaand voorbeeld worden alle mogelijke waarden voor `justify-content` getoond.

<iframe height='400' scrolling='no' title='Flexbox: justify-content' src='//codepen.io/lesso/embed/GwpbGz/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### align-items

Met `align-items` kan worden ingesteld hoe items moeten worden geplaatst op de **cross-axis** op de huidige lijn. De default waarde hiervan is `stretch`, waardoor -standaard- de items alle beschikbare ruimte in de container zullen opvullen. We kunnen hier echter van afwijken door de waarde in te stellen op: `flex-end` &#124; `center` &#124; `flex-start` &#124; `baseline`.

```css
.container {
  display: flex; 
  align-items: center;
}
```

In onderstaand voorbeeld worden alle mogelijke waarden voor `align-items` getoond.

<iframe height='400' scrolling='no' title='Flexbox: align-items' src='//codepen.io/lesso/embed/eQJOBX/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### align-content

De `align-content` eigenschap bepaalt hoe **meerdere** lijnen van items worden verdeeld in de flexbox container wanneer er een overschot is aan witruimte. Ook bij deze eigenschap is de default waarde `stretch` waarbij de lijnen met items zich zullen strekken over alle beschikbare ruimte. De andere mogelijke waarden voor deze eigenschap zijn: `flex-start` &#124; `flex-end` &#124; `center` &#124; `space-between` &#124; `space-around`.

``` css
.container {
  display: flex; 
  flex-wrap: wrap;
  align-content: center;
}
```

In onderstaand voorbeeld worden alle mogelijke waarden voor `align-content` getoond.

<iframe height='400' scrolling='no' title='Flexbox: align-content' src='//codepen.io/lesso/embed/VVeLGp/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

### Flexbox **items** = children


Vervolgens zijn er nog een reeks eigenschappen die toepasbaar zijn op flexbox **items** elementen. Met andere woorden: de child elementen die als parent een flexbox **container** hebben.

#### order

Standaard zullen alle flexbox items de volgorde hanteren die ze hebben gekregen in de html-code. We kunnen deze volgorde echter overrulen door gebruik te maken van de eigenschap `order`.

``` css
.container {
  display: flex; 
}

.item1 {
  order: 2; 
}

.item2 {
  order: 1; 
}
```

In onderstaand voorbeeld zien we hoe van de standaard volgorde van items wordt afgeweken door gebruik te maken van `order` op de afzonderlijke items.

<iframe height='400' scrolling='no' title='Flexbox: order' src='//codepen.io/lesso/embed/KrdjgP/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### flex-grow

Met `flex-grow` kunnen we een bepaald flexbox item laten 'groeien' wanneer dit nodig zou blijken. Wanneer alle items de waarde '1' zouden krijgen voor de `flex-grow` eigenschap, zal alle ruimte in de flexbox container evenredig worden verdeeld over alle items. Passen we de waarde van `flex-grow` aan naar '2' voor één van de items, dan zal dit item dubbel zo veel beschikbare ruimte innemen.

```css
.container {
  display: flex; 
}

.item2 {
  flex-grow: 1; 
}
```

In onderstaand voorbeeld zien we hoe item 3 groeit ten opzichte van de rest door gebruik van `flex-grow`.

<iframe height='400' scrolling='no' title='Flexbox: flex-grow' src='//codepen.io/lesso/embed/NExbOL/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### flex-shrink

Met `flex-shrink` kunnen we het tegenovergestelde gedrag bekomen van `flex-grow`. Hierbij kunnen we bepaalde items laten 'krimpen' wanneer dit nodig zou zijn.

```css
.container {
  display: flex; 
}

.item2 {
  flex-shrink: 1; 
}
```

In onderstaand voorbeeld zien we hoe item 3 krimpt ten opzichte van de rest door gebruik van `flex-shrink`.

<iframe height='400' scrolling='no' title='Flexbox: flex-shrink' src='//codepen.io/lesso/embed/ZmQBNz/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### flex-basis

De `flex-basis` eigenschap kan worden ingezet om de grootte van een flexbox item in te stellen alvorens de beschikbare ruimte in de container zal worden verdeeld. Standaard heeft deze eigenschap de waarde `auto`, waarmee wordt gekeken naar de ingestelde `width` en `height`. De waarde kan de verschillende eenheden aannemen zoals %, px, em, etc. 

```css
.container {
  display: flex; 
}

.item2 {
  flex-basis: 200px; 
}
```

In onderstaand voorbeeld zien we hoe item 3 een aangepaste grootte krijgt toegewezen door gebruik te maken van `flex-basis`.

<iframe height='400' scrolling='no' title='Flexbox: flex-basis' src='//codepen.io/lesso/embed/wQMoVE/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

#### align-self

Met `align-self` kan de default positie van een flexbox item (zie eigenschap `align-items`) worden overschreven. We kunnen met andere woorden één of meerdere items er laten uitspringen.

```css
.container {
  display: flex;
  align-items: flex-end;
}

.item2 {
  align-self: center; 
}
```

In onderstaand voorbeeld zien we hoe item 3 telkens een andere positie toegewezen krijgt door gebruik te maken van `align-self`.

<iframe height='400' scrolling='no' title='Flexbox: align-self' src='//codepen.io/lesso/embed/aQdpZB/?height=407&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

### Samenvatting


#### Flex Container (parent-element)

- `display:` `flex` &#124; `inline-flex`
- `justify-content:` `flex-start` &#124; `flex-end` &#124; `center` &#124; `space-between` &#124; `space-around` &#124; `space-evenly` 
  Uitlijning op de **main-axis** (in de richting van de `flex-direction`).
- `align-items:` `flex-start` &#124; `flex-end` &#124; `center` &#124; `baseline` &#124; `stretch`  
  Uitlijning op de **cross-axis** (dwars op de richting van de `flex-direction`).  
  `row`: van boven naar onder  
  `column`: in de schrijfrichting, afhankelijk of het HTML-attribuut `dir`{:.a}  de waarde `ltr` of `rtl` is.
- `align-content:` `flex-start` &#124; `flex-end` &#124; `center` &#124; `space-between` &#124; `space-around`  &#124; `stretch`  
   Uitlijning op de **cross-axis**, vergelijkbaar met `justify-content`.  
   Heeft enkel effect met een `flex-wrap:` `wrap` of `wrap-reverse`
- `flex-flow:` `flex-direction` `flex-wrap`
   1. `flex-direction:` `row` &#124; `row-reverse` &#124; `column` &#124; `column-reverse`
   2. `flex-wrap:` `nowrap` &#124; `wrap` &#124; `wrap-reverse`

#### Flex Items (child-elementen)

- `align-self:` `auto` &#124; `flex-start` &#124; `flex-end` &#124; `center` &#124; `baseline` &#124; `stretch`  
  Overschrijft `align-items` voor een specifiek element.
- `flex:` `flex-grow` `flex-shrink` `flex-basis` &#124;  
  `flex-grow` `flex-basis` &#124; `flex-grow` `flex-shrink` &#124;  
  `flex-basis` &#124; `flex-grow`
  1. `flex-grow:` `groeifactor` &#124; `0` &#124; `.5` &#124; `1` &#124; `1.5` &#124; `2` &#124; …
  2. `flex-shrink:` `krimpfactor` &#124; `0` &#124; `.5` &#124; `1` &#124; `1.5` &#124; `2` &#124; …
  3. `flex-basis:` `afmeting-met-eenheid` &#124; `auto` &#124; `content` &#124; `100%` &#124; `123px` &#124; …
- `order:` … `-2` &#124; `-1` &#124; `0` &#124; `1` &#124; `2` &#124; …


::: icon-sources
- [MDN: CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- [Flexbox Froggy](http://flexboxfroggy.com)
- [Flexbox Playground](https://demo.agektmr.com/flexbox/)
- [Flexy Boxes](http://the-echoplex.net/flexyboxes/)
- [W3C / CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/)
- [CSS Tricks / A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
:::


## CSS Grid Layout

::: icon-sources
- [Grid Garden](http://cssgridgarden.com)
- [W3C / CSS Grid Layout Module](https://www.w3.org/TR/css-grid/)
- [CSS Tricks / A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
:::

### Grid Container (parent-element)

- `display:` `grid` &#124; `inline-grid` &#124; `subgrid`
- `grid-template:` `none` &#124; `grid-template-rows` `/` `grid-template-columns`
  1. `grid-template-rows:` `trackgrootte` …  &#124; `[lijnnaam]` `trackgrootte` … &#124; … `repeat(herhalingen, eigenschappen)`  …
  2. `grid-template-columns:` `trackgrootte` …  &#124; `[lijnnaam]` `trackgrootte` … &#124; … `repeat(herhalingen, eigenschappen)`  …
- `grid-template-area:` `"gridgebiednamen-per-rij-gescheiden-door-spaties"` …  
   `gridgebiednamen` kunnen zijn: `gridgebiednaam` &#124; `.` (lege gridcel) &#124; `none` (geen gridgebied)
- `grid-gap:` `grid-row-gap` `grid-column-gap`
  1. `grid-row-gap:`
  2. `grid-column-gap:`
- `justify-items:` `start` &#124; `end` &#124; `center` &#124; `stretch`
  Uitlijning op de **row-axis** (rijas).
- `align-items:` `start` &#124; `end` &#124; `center` &#124; `stretch`
  Uitlijning op de **column-axis** (kolomas).
- `justify-content:` `start` &#124; `end` &#124; `center` &#124; `stretch` &#124; `space-around` &#124; `space-between` &#124; `space-evenly`
  Uitlijning op de **row-axis** (rijas).
- `align-content:` `start` &#124; `end` &#124; `center` &#124; `stretch` &#124; `space-around` &#124; `space-between` &#124; `space-evenly`
  Uitlijning op de **column-axis** (kolomas).

### Grid Items (child-elementen)

- `grid-area:` `grid-row-start` `/` `grid-column-start` `/` `grid-row-end` `/` `grid-column-end`.
  1. `grid-row:` `grid-row-start` `/` `grid-row-end`
    1. `grid-row-start:` `geheel-getal`
    2. `grid-row-end:` `geheel-getal`
  2. `grid-column:` `grid-column-start` `/` `grid-column-end`
    1. `grid-column-start:` `geheel-getal`
    2. `grid-column-end:` `geheel-getal`
- `justify-self:`
- `align-self:`
- `order:` … &#124; `-2` &#124; `-1` &#124; `0` &#124; `1` &#124; `2` &#124; …