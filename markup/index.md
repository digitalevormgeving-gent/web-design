# HTML

## Wat is HTML?

::: tip Definitie
**HTML** is een **markup-taal** om webpagina's te **structureren**.
:::

HTML is dus **geen programmeertaal**! HTML bestaat uit een verzameling van elementen die we kunnen gebruiken om onderdelen op een webpagina te omsluiten zodat deze zich **gedraagt** of **gevisualiseerd** wordt op een welbepaalde manier. 

Veronderstel de volgende inhoud:

```text
Like Graphics, Love Code and Make k3wl shit
```

Deze tekst kunnen we via HTML structureren als een paragraaf (paragraph) met behulp van het `<p>` element:

```html
<p>Like Graphics, Love Code and Make k3wl shit</p>
```

::: info Bronnen  
- [Mozilla Developer Network: Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
:::

## HTML-elementen

::: warning
HTML-elementen of tags zijn **case-insensitive**.

Dit betekent dat ze geschreven kunnen worden in hoofd- en kleine letters. Bijvoorbeeld een `<article>`-tag kan geschreven worden als `<article>`, `<ARTICLE>`, `<Article>`, ...

Toch zullen we steeds, als ***best practice*** alle tags of elementen schrijven met **kleine letters** (*Eng. lowercase)* geschreven om de leesbaarheid en de consequentie te bevorderen. 
:::

**Tweeledige elementen** en bestaan uit een **begintag** *(Eng. opening tag)* en een **eindtag** *(Eng. closing tag).* De tags omsluiten de **inhoud** *(Eng. content).* De tekst samen met de tags vormen een element.

Een begintag bestaat uit:

- `<` kleiner dan teken
- de naam van het element
- `>` groter dan teken

Een eindtag bestaat uit:

- `<` kleiner dan teken
- `/` schuine streep naar voren (Eng. forward slash)
- de naam van het element
- `>` groter dan teken

Niet alle elementen volgen het patroon van begintag, inhoud, eindtag. Sommige elementen bestaan enkel uit een **tag** *(Eng. single tag).* Deze worden meestal gebruikt om iets **toe te voegen** *(Eng. to insert)* aan of **in te sluiten** *(Eng. to embed)* in een document. Voegen we bijvoorbeeld een afbeelding toe aan een webpagina via het `<img>` element:

```html
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHA8WhTwwfxShgCFf3uhPIWZF3En7pudg2VvE4kOp408ZqBZU">
```

Dit resulteert in:

![Spider - Bron: Google search](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHA8WhTwwfxShgCFf3uhPIWZF3En7pudg2VvE4kOp408ZqBZU)

Een **zelfsluitende tag** *(Eng. self-closing tag)* is ook gekend als een **empty element**, **void element** of unaire tag. [Andere zelfsluitende tags](https://www.npmjs.com/package/html-void-elements): `<hr>`, `<image>`, `<input>`, `<link>`, `<meta>`, `<source>`, ... .

Er is ook een [XHTML](https://www.w3.org/TR/xhtml-basic/)-notatie (die de striktere regels van XML volgt) van die duidelijker is, maar tegenwoordig nog maar **weinig gebruikt** wordt.
`
Zelfsluitende tag in XHTML:

```html
<meta />
```

::: warning Opmerking
Zelfsluitende elementen hebben in XHTML een **forward slash** (`/`) als voorlaatste teken.
:::

::: danger Opgelet
- **HTML geniet de voorkeur** boven XHTML, omdat de code compacter is en ook omdat in de praktijk zelden perfecte XHTML-code geschreven werd.
- XHTML en HTML mag je **niet mengen**.
:::

::: info Bronnen  
- [Mozilla Developer Network: Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_element)
:::

### Nesting

In HTML kunnen in elementen meestal andere elementen geplaatst worden. Deze techniek heet innesten (Eng. Nesting). In het onderstaande voorbeeld willen we extra klemtoon of nadruk (Eng. emphasize) leggen op het woord **programmeren**. Dit kunnen we realiseren door dat woord te omsluiten door een `<strong>`-element. Zorg er wel voor dat alle tags juist worden afgesloten.

```html
<h1>Graduaat in het <strong>programmeren</strong>.</h1>
```

### Block- en inline elementen

HTML-elementen kunnen in twee visuele categorieën onderverdeeld worden:

- **block-level** elementen  
  Vormen een fysiek visueel blok op een webpagina. Starten op een nieuwe regel (Eng. new line). De inhoud na dit element start ook op een nieuwe regel. Blokelementen zijn meestal structurele elementen die invloed hebben op de structuur of [outline]() van de webpagina. Een blokelement kan genest worden in een ander blokelement, maar niet in een inline element.
- **inline** elementen  
  Inline elementen worden meestal genest binnen blokelementen. Bij een inline element wordt er **geen nieuwe regel gegenereerd**. Ze verschijnen meestal binnen een paragraaf van tekst. Enkele [inline elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements): `<article>`, `<em>`, `<strong>`, `<img>`, ... .


Outline voorbeeld voor de startpagina van de [Arteveldehogeschool](http://www.arteveldehogeschool.be) website:
1. Zoekveld
2. Schrijf je nu in voor volgend academiejaar!
3. Vind je opleiding
4. Interessegebied
5. Nieuws
6. Agenda
    1. Arteveldehogeschool
    2. Opleidingen
    3. Je bent
    4. Snel naar

## Attributen

HTML-elementen kunnen **attributen** hebben met een bepaalde waarde. Attributen bestaan uit een sleutel (Eng. key) en hebben meestal ook een waarde (Eng. value): `sleutel="waarde"`. De combinatie is ook gekend als **key / value pairs**. Attributen bevatten extra informatie over het element zonder dat deze als waarde verschijnt.

::: danger Opgelet  
- Attributen staan **enkel op de begintag** en **nooit** op de eindtag!
- Vergeet de spatie niet tussen de naam van het element (of het vorige attribuut) en de naam van het attribuut.
- Voeg **altijd** dubbele aanhalingstekens toe rond de waarde van het attribuut. Enkele aanhalingstekens worden ook toegelaten, maar gebruik ze niet door elkaar.
:::

In het onderstaande voorbeeld wordt de **taal** *(Eng. **lang**uage)* van het volledige HTML-document als Nederlands ingesteld met de *[ISO 639](http://www.iso.org/iso/home/standards/language_codes.htm) Part 1*-code.

```html
<html lang="nl">
<!-- … -->
</html>
```

In het volgende voorbeeld wordt de **leesrichting** *(Eng. **dir**ection)* van de taal ingesteld:

| Waarde | Betekenis     |
| -----: | ------------- |
|  `ltr` | left to right |
|  `rtl` | right to left |


```html
<p dir="ltr" lang="nl">Deze tekst is in het Nederlands.</p>
```

Het resultaat in de browser:

<p dir="ltr" lang="nl">Deze tekst is in het Nederlands.</p>

```html
<p dir="rtl" lang="ar">هذا النص باللغة العربية.</p>
```

Het resultaat in de browser:

<p dir="rtl" lang="ar">هذا النص باللغة العربية.</p>

### Boolean attributen

Boolean attributen zijn attributen die meestal geschreven worden zonder waarde en bevatten slechts een waarde, namelijk meestal de naam van het attribuut. Indien het boolean attribuut niet aanwezig is dan bevat dit als waarde het inverse van de naam van het attribuut. De waarden `true` en `false` worden niet toegelaten als waarde van een boolean attribuut.

```html
<button type="submit" disabled>This will be disabled</button>
<button type="submit" disabled="">This will be disabled</button>
<button type="submit" disabled="disabled">This will be disabled</button>
<button type="submit">This will be enabled</button>
```


::: info Bronnen  
- [Mozilla Developer Network: Boolean attributen](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Boolean_attributes)
- [Joequery Me:Boolean attributen](http://joequery.me/code/html-boolean-attributes/)
:::

### Globale attributen

Globale attributen zijn attributen die toepasbaar op alle elementen (soms zonder effect te veroorzaken).

| Attribuut | Betekenis                                                                                             |
| --------: | ----------------------------------------------------------------------------------------------------- |
|   `class` | CSS-stijlklasse(s) die op het element van toepassing zijn.                                            |
|      `id` | Unieke identifier van het element.                                                                    |
|    `lang` | Taal *(Eng. **lang**uage)* van de inhoud van het element.                                             |
|   `style` | Inline-stijlen met CSS. **Probeer dit zoveel mogelijk te vermijden!**                                 |
|   `title` | Bevat additionele informatie, meestal advies, gerelateerd aan het element waartoe het behoort.        |
|  `hidden` | Is een boolean attribuut om een indicatie te geven dat het element nog niet of niet meer relevant is. |


```html
<p id="alinea-1" class="cursief vet" lang="nl">In Gent</p>
```

::: info Bronnen  
- [Mozilla Developer Network: Global attributes](https://developer.mozilla.org/en-US/docs/Glossary/Global_attribute)
:::

## HTML-commentaar

Soms is het handig of zelfs nodig om HTML-code te becommentariëren. Door commentaar te voorzien help je de code te verduidlijken, niet enkel voor andere HTML-coders, maar ook voor je toekomstige zelf, want weet je over pakweg een jaar nog hoe je die complexe webpagina precies hebt opgebouwd? Die commentaar is enkel zichtbaar in de broncode en nooit op de webpagina zelf.

Commentaar schrijven tussen de HTML-code doe je tussen de **begintag** (`<!--`) en **eindtag** (`-->`).

```html
<!-- Dit is commentaar. Alles, ook HTML-elementen, binnen deze twee tags wordt genegeerd door de browser. -->
```

::: warning Opmerking  
Overdrijf niet met HTML-commentaar, want bij elk paginabezoek moet die ook gedownload worden terwijl dit geen enkel nut heeft voor de doorsnee websitebezoeker. Liefst wordt de commentaar verwijderd voor de website op de productieserver geplaatst wordt.  

Duidelijk geschreven code heeft weinig tot geen commentaar nodig, maar als beginner kan het wel een handige geheugensteun zijn.
:::

::: icon-tip
Omdat de browser HTML-tags binnen commentaar negeert kan je dit gebruiken om code tijdelijk uit te schakelen, bijvoorbeeld om iets uit te proberen.
:::

```html
<!--
  A set / selection of popular portfolio items
  Each item has an image, title, synopsis and a link to the correspondig detail page
-->
<section class="portfolio">
    <article class="portfolio-item">
    </article>
</section>
```

::: info Bronnen
- [BitDegree: HTML Comments](https://www.bitdegree.org/learn/html-comment/)
- [Mozilla Developer Network: HTML Comments](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#HTML_comments)
:::

## Witruimte in HTML

```html
<p>Web design is very cool.</p>
```

```html
<p>Web design        is
         very cool.</p>
```

::: info Bronnen
- [Mozilla Developer Network: Whitespace in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Whitespace_in_HTML)
:::

## Conventies

::: info Bronnen
 - [Google: Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#HTML_Style_Rules)
 - [GitHub: HTML Style Guide](https://gist.github.com/ryansechrest/8693303)
 - [BitDegree: HTML syntax tips and tricks](https://www.bitdegree.org/learn/html-syntax/)
:::

## Validatie

::: info Bronnen
- [W3: Validator](https://validator.w3.org/nu/#)
:::