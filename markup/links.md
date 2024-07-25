# Linken

## Anchor

**A**nchor *(Ned. anker)*

::: tip Definitie  
`<a>` … `</a>` wordt gebruikt om een hyperlink te maken naar een andere webpagina of om naar een bepaald element te verspringen in een webpagina.
:::

Een descendant van `<body>`

```html
<a href="http://www.google.be">Google</a>
```

::: icon-warning
- Een koppeling in de `<head>` gebeurt **altijd** met een `<link href="" rel="">`, bijv. een CSS-bestand.
- Een koppeling in de `<body>` gebeurt **altijd** met een `<a href=""></a>`
- Een koppeling naar een JavaScript-bestand gebeurt altijd met een `<script src=""></script>` en dat kan zowel in de `<head>` als de `<body>`.
- Bij `<link>` en `<a>` via een `href` *(Hypertext Reference),* terwijl het bij een `<script>` via een `src` *(Eng. **s**ou**rc**e, Ned. bron)* gebeurt.
:::

| Attibuut | Waarde   | Betekenis                                                      |
| -------- | -------- | -------------------------------------------------------------- |
| `href`   | `#«id»`  | Scroll naar het element met de ID `«id»`.                      |
|          | `«uri»`  | Ga naar de URI `«uri»` (meestal een webpagina of een document) |
| `target` | `_self`  | Open in hetzelfde venster of tabblad. (Standaard)              |
|          | `_blank` | Open in een nieuw venster of tabblad.                          |


## Bookmark

We kunnen binnen onze webpagina een link leggen naar een element binnen dezelfde pagina.
Hiervoor maken we gebruik van een ID. 

```html
<a href="#articles">Go to articles </a>

<div id="articles">
     <h1>Articles</h1>``
</div>
```

De `href`-waarde van het anker-element bevat een `ID - #articles`. Wordt er op dat anker-element geklikt zal de eindgebruiker verspringen naar de plaats in de webpagina waar dit ID staat.