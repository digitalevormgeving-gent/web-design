# Media queries

Het streven naar de ideale gebruikerservaring op elke schermweergave.  
Er zijn drie soorten technische implementaties  

1. Fixed
2. Fluid
3. Adaptive

## Fixed

FIXED: Gebruiker laten kiezen om te switchen. We werken met vaste waardes.

- Linken naar elkaar:“mobiele versie”, “desktop versie”
- HTML-pagina’s dubbel opmaken
- Gescheiden CSS

## Fluid

FLUID: Automatisch stretchen met %

- Voor een bepaald type toestel werken
- Mobiel of tablet of desktop
- De inhoud staat telkens op dezelfde plaats en neemt de breedte naargelang beschikbare ruimte

## Adaptive 

ADAPTIVE: Media queries
- HTML blijft dezelfde
- Per schermbreedte: andere CSS-regels laden
- Mobile first 

**Mobile first:** van klein naar groot scherm
**Desktop first:** van groot naar klein scherm

### Viewport meta-tag toevoegen in HTML

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Hierdoor werkt de pagina correct op mobiele toestellen

### Media queries voor CSS

CSS inladen vanaf een bepaalde schermbreedte

Hoe moet je die query (vraag) lezen?

```css
/*mobile first, schermen worden breder*/
@media only screen and (min-width:400px) {
	body {color:red;}
}
```

Als we de pagina bekijken enkel op een scherm-toestel,  
en de breedte is op zijn minst 400px (of breder);  
dan is de tekst rood.  

```css
/*desktop first, schermen worden smaller*/
@media only screen and (max-width:1200px) {
	body {color:red;}
}
```

Als we de pagina bekijken enkel op een scherm-toestel,  
en de breedte is maximaal 1200px (of smaller);  
dan is de tekst rood.  



### Mobile First

```css
/* MOBILE FIRST*/
/* Extra Extra Small Devices (maximum width 479px), Phones, Default for Mobile-First no Media Query needed – startpositie */ 
body{font-size:30px; color:green;}

/* Extra Small Devices, Phones - schermen breder dan 480px */ 
@media only screen and (min-width : 480px) { 
    body {
        font-size:50px;color:aqua;
        } 
    }

/* Small Devices, Tablets - schermen breder dan 768px */
@media only screen and (min-width : 768px) {
     body {
         font-size:70px;color:blue;
         } 
     }

/* Medium Devices, Desktops - schermen breder dan 992px */
@media only screen and (min-width : 992px) { 
    body {
        font-size:90px;color:purple;
        } 
    }

/* Large Devices, Wide Screens - schermen breder dan 1200px */
@media only screen and (min-width : 1200px) { 
    body {
        font-size:110px;color:red;
        } 
    }

```

::: icon-sources
 - [Mozilla Developer Network: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
:::