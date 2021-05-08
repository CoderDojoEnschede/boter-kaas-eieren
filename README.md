# Boter Kaas en Eieren

Simpele HTML/CSS/JavaScript versie van boter, kaas en eieren (AKA Tic-tac-toe)

Er zijn twee versies, een voor 2 spelers om de beurt, en een voor 1 speler tegen de computer. De twee versies delen de
CSS-stylesheet.

Trinket: https://trinket.io/embed/html/b9cfb3c6b4

## HTML/JavaScript

De meest simpele versie is voor 2 spelers, en is te vinden in de bestanden

* tweeSpelers.html
* tweeSpelers.js

Er is ook een versie voor 1 speler tegen de computer, die is te vinden in de bestanden

* eenSpeler.html
* eenSpeler.js

Deze twee versies bevatten nu geen gedeelde JavaScript-bestanden, ze zijn geheel onafhankelijk. Wel zijn ze op een
vergelijkbare manier opgebouwd. De opbouw is daarbij bewust rechttoe-rechtaan gehouden, zodat het niet noodzakelijk is
ingewikkelder concepten en structuren te kennen om de code te begrijpen.

De computerspeler gebruikt een simpel recursief algoritme om de beste zet te vinden. Dat betekent wel dat de speler
kansloos is om te winnen; het best mogelijke resultaat is een gelijkspel.

## CSS

Er is een basis CSS, `boter-kaas-eieren-simpel.css` die alleen de meest basale opmaak bevat,
en `boter-kaas-eieren-fancy.css` die een wat mooiere opmaak bevat met o.a. ook CSS-transities.

