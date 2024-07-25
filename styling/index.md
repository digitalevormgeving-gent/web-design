# Introductie

## Wat is CSS

::: tip Definitie
CSS staat voor Cascading Stylesheet. Het is een stijlblad-taal om webpagina's op te **maken** of te **presenteren**.
:::

Een **Stylesheet** is een stijlblad en bevat opmaakstijlen. Dit is vergelijkbaar met stijlen in bv. Adobe InDesign of Microsoft Word.

n CSS verwijst **Cascading** naar de manier waarop stijlen worden toegepast en geprioritiseerd wanneer er meerdere regels zijn die op hetzelfde element van toepassing kunnen zijn. De cascade bepaalt welke stijlen worden gebruikt als er conflicterende regels aanwezig zijn. Het cascademechanisme in CSS omvat verschillende factoren, namelijk: specificiteit, belangrijkheid, bronvolgorde en overerving.


## CSS-regelset

Een regelset bestaat uit:

  1. Een of meer **selectors** gescheiden door een **komma** *(Eng. comma)* (`,`)
  2. **declaratieblok** *(Eng. declaration block)* afgebakend met **accolades** *(Eng. curly braces)* (`{`…`}`) met daartussen:
     - Een of meer **declaraties** *(Eng. declarations)*  
       Een declaratie bestaat uit:
       1. een **eigenschap** *(Eng. property)* gevolgd door een **dubbelepunt** *(Eng. colon)* (`:`)
       2. een **waarde** *(Eng. value)* gevolgd door een **puntkomma** *(Eng. semicolon)* (`;`)

::: warning Opmerking
**Commentaar** schrijf je tussen `/*` en `*/` in CSS.
:::

```css
/* Dit is een commentaarregel */
html,
body {
    font-family: Verdana, sans-serif;
    background: pink;
    /* Dit is nog een commentaarregel. */
}
```

## CSS Toevoegen

- Inline *(Bad Practice)*
- Embedded (op paginaniveau)
- Externe stylesheet (op websiteniveau) 

### Inline (Bad Practice)

```html
<p style="background-color: green;">
    Dit is tekst die op een groene achtergrondkleur te lezen is.
</p>
```

### Embedded (op paginaniveau)

```html
<head>
    <style>
        p {
            background-color: green; 
        }
    </style>
</head>
<body>
    <p>Hier staat wat tekst.</p>
</body>
```

### Externe stylesheet (op websiteniveau)

Gebruik externe stylesheets. Stop ze altijd op dezelfde plaats.

```html
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <p>Hier komt wat tekst.</p>
</body>
```

::: icon-tree  
- projectmap/
  - images/
  - css/
      - style.css
  - index.html
:::