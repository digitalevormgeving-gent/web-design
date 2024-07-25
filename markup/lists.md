# Lijsten

## Ongeordende lijst

::: tip Definitie  
Een **ongeordende lijst** is een lijst van **elementen** waarvan de volgorde **niet** van belang is.
:::

 - `<ul>` … `</ul>` *(`ul`: **Unordered List**)* is een *descendant* van `<body>`.
 - Bevat een of meerdere *children:* `<li>` … `</li>` *(**List Item**).*

```html
<ul>
    <li>English</li>
    <li>Nederlands</li>
</ul>
```

## Geordende lijst

::: tip Definitie  
Een **Geordende lijst** is een lijst van **elementen** waarvan de volgorde **wel** van belang is.
:::

 - `<ol>` … `</ol>` *(**Ordered List**)* is een *descendant* van `<body>`.
 - Bevat een of meerdere *children:* `<li>` … `</li>` *(**List Item**).*

```html
<ol>
    <li>English</li>
    <li>Nederlands</li>
</ol>
```

::: icon-warning
Je kan de beginwaarde van de nummering instellen met het attribuut `start=""` op de `<ol>`
:::

## Geneste Lijst

::: tip Definitie  
**Geneste lijsten** zijn een lijsten in lijsten.
:::

::: danger Opgelet
Een geneste lijst moet altijd tussen een `<li>` … `</li>` *(**List Item**)* staan, tussen de tekst.
:::

```html
<ul>
    <li>België:
        <ol>
            <li>Nederlands</li>
            <li>Frans</li>
            <li>Duits</li>
        </ol>
    </li>
    <li>Nederland:
        <ol>
            <li>Nederlands</li>
            <li>Fries</li>
        </ol>
    </li>
<ul>
```

## Lijst van beschrijvingen

 - `<dl>` … `</dl>` *(**Description List**)* is een *descendant* van `<body>`
 - Bevat een of meerdere *children:* `<dt>` … `</dt>` *(**Description Term**)*  
   die onmiddellijk gevolgd worden door een of meerdere `<dd>` … `</dd>` *(**Description Data**).* 

```html
<dl>
    <dt>Hypertext Transfer Protocol</dt>
    <dd>Protocol voor webcommunicatie.</dd>
    <dd>Afgekort als <abbr title="Hypertext Transfer Protocol">HTTP</abbr>.</dd>
    <dt>Hypertext Transfer Protocol Secure</dt>
    <dd>Protocol voor webcommunicatie over een beveiligde verbinding.</dd>
    <dd>Afgekort als <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr>.</dd>
</dl>
```