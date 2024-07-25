# Structuur

## Het HTML-bestand

Een **statische webpagina** bestaat uit een tekstbestand dat meestal de **bestandsextensie** `.html` heeft. Door deze extensie herkennen zowel de browser als de teksteditor het bestand als een HTML-document.

```html
<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="UTF-8">
        <title>Hallo</title>
    </head>
    <body>
        <h1>Hallo GDM!</h1>
        <p>Mijn naam is Voornaam Naam.</p>
    </body>
</html>
```

Als de webbrowser geen specifiek bestand opvraagt aan een webserver, dan zullen de meeste webservers ervan uitgaan dat het gevraagde bestand `index.html` is. Dit hangt af van de serverinstellingen die door de serverbeheerder ingesteld zijn.

::: warning Opmerking
De **startpagina** *(Eng. home page)* van een website noem je best `index.html`.
:::

## Anatomie van een HTML-document

```html
<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="UTF-8">
        <title>Hallo</title>
    </head>
    <body>
        <h1>Hallo GDM!</h1>
        <p>Mijn naam is Voornaam Naam.</p>
    </body>
</html>
```

::: info Bronnen
- [Mozilla Developer Network: Anatomy of a HTML document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_document#Anatomy_of_a_HTML_document)
:::

### Doctype

::: tip Definitie
In het **doctype** definiëren we het type van het document. Het voornaamste doel is om de browser te beletten om te switchen naar een eigenaardige modus (Eng. quirks mode) die incompatibel is met de standaard specificaties. 
:::

`<!DOCTYPE html>` zorgt ervoor dat de browser de volledige W3C-standaard zal volgen. Enkele jaren geleden werd het doctype nog gebruikt om te linken naar een verzameling van regels die een webpagina moest volgen om te voldoen aan goede geldige HTML.

::: warning Opmerking
Het `<!DOCTYPE html>` staat helemaal bovenaan in het document.
:::

::: info Bronnen
- [Mozilla Developer Network: Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
- [Mozilla Developer Network: Quirks Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
:::

### `<html>`-element

::: tip Definitie
Het `<html>`-element bevat alle inhoud (Eng. content) op de volledige pagina. Dit element is ook gekend als het root-element.
:::

::: warning Opmerking
 - Alle andere elementen zitten ertussen vervat, die elementen noemt men **descendants** *(Ned. nakomelingen).*
 - Het `<html>`-element **moet altijd aanwezig** zijn!
:::

::: info Bronnen
- [Mozilla Developer Network: HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
:::

### `<head>`-element

::: tip Definitie
Het `<head>`-element is een container voor al de dingen die je wil toevoegen aan een webpagina, die niet worden getoond aan de bezoeker van deze webpagina. Dit element bevat de **meta**gegevens van het HTML-document. **‘Meta’** wil zeggen gegevens over het document zelf: titel, omschrijving, tekenset, stylesheetkoppelingen, ...
:::

::: warning Opmerking
 - `<head>` Een **descendant** van `<html>`. 
 - `<head>` is het **eerste child**-element van het root-element (`<html>`).  
 - `<title>` … `</title>` Bevat de titel van de html-pagina. Deze titel verschijnt in het tabblad van de browser en in de favorietenlijst.
:::

::: info Bronnen
- [Mozilla Developer Network: Head element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
- [Mozilla Developer Network: What’s in the head?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
:::

### `<body>`-element

::: tip Definitie
Het `<body>`-element bevat de **eigenlijke inhoud** van de webpagina die ja aan de bezoeker van deze webpagina wil tonen, zoals: tekst, afbeeldingen, video's, audio-bestanden, ...
:::

The `<body>` element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.

::: warning Opmerking
 - `<body>` … `</body>`
 - `<body>` is een **descendant** van `<html>`.
 - `<body>` is het **tweede child**-element van het root-element (`<html>`). 
:::

::: info Bronnen
- [Mozilla Developer Network: body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
:::