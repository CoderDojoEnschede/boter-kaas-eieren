# Boter, Kaas en Eieren

Hallo! Vandaag gaan we het spel *Boter Kaas en Eieren* maken, op de computer.

Op de computer kan je zelf dingen maken door het in *code* te typen. Dat noemen we ook wel *programmeren*. Wij gaan het spel *Boter Kaas en Eieren* programmeren.

Het is moeilijk om dat helemaal zelf te leren. Daarom hebben de begeleiders van de CoderDojo Enschede alvast een begin gemaakt. Hieronder vind je instructies waarmee je stap voor stap aan de slag kan.

Elke opdracht bevat uitleg, en dingen die jij zelf moet doen. De dingen die jij zelf moet doen, staan aangegeven met `▶▶▶`.

// TODO: twee onderdelen, eerst twee spelers, dan tegen de computer spelen in je eentje.

### Opdracht 0: Openen van programmeeromgeving

De code staat in Trinket. Dat is een website waarop je kan programmeren, en direct het resultaat kan bekijken.

▶▶▶ Open Trinket door op de link te klikken: // TODO trinket link

Je moet nu aan de linker kant code zien, en aan de rechter kant het Boter, Kaas en Eieren spel.

Als je aan de linker kant de code aanpast, dan verandert de website automatisch na een paar seconden aan de rechterkant.

Dat was gemakkelijk! Nu komt het echte werk!

### Opdracht 1: Een knop

Je kan het bord voor Boter Kaas en Eieren zien. De ene speler speelt met `X` en de andere speler speelt met `O`. De speler die als eerste drie op een rij heeft, heeft gewonnen.

Probeer een aantal keer op het bord te klikken. Helaas, er gebeurt niets.

Onder het spel staat *Klik 'nieuw spel' om te beginnen*. Maar je kan helemaal nergens op klikken!

Er moet een knop komen waarop je kan klikken, zodat het spel begint. Die gaan we maken.

▶▶▶ Zoek *Opdracht 1 en 2* in het bestand `tweeSpelers.html`.

Gevonden? Nu gaan we een knop maken zodat we het spel kunnen beginnen.

▶▶▶ Typ de tekst `<button>Nieuw spel</button>`.

De *tag* met *button* (het Engelse woord voor 'knop') zorg ervoor dat er een knop verschijnt.

Zie je de knop?

### Opdracht 2: Beginnen

Klik eens op de knop die je zojuist hebt gemaakt. Er gebeurt nog steeds niets. Dat is saai.

We moeten zorgen dat er iets gebeurt als we op de knop drukken. Dat doen we met een *attribuut* die vertelt wat er moet gebeuren als we op de knop klikken.

Wij maken een attribuut voor *klik*, omdat we op de knop klikken, en er dan iets moet gebeuren. Het attribuut heet *onclick* (*click* is het Engelse woord voor 'klik').

▶▶▶ Voeg binnen de eerste `<button>` van opdracht 1 een attribuut toe dat `onclick` heet. De regel moet er als volgt uitzien: `<button onclick="nieuwSpel()">Nieuw spel</button>`.

Klik nog eens op de knop. Nu gebeurt er wel iets! Het spel begint en de spelers kunnen om en om een letter plaatsen in het veld.

### Opdracht 3: Beginspeler

Klik op de knop om een nieuw spel te starten.

Er staat nu *Speler "X" is aan zet*. Maar als je op een vakje klikt, dan komt er een `O` te staan. Dat klopt niet!

We gaan de code goed maken, zodat de beginspeler `X` is.

▶▶▶ Zoek *Opdracht 3* in het bestand `tweeSpelers.js`.

▶▶▶ Verander de `'O'` naar een `'X'` zodat als eerste speler `X` aan zet is.

### Opdracht 4: Het bord

Het spel Boter Kaas en Eieren bevat een *bord*. Het bord zijn de 9 vierkantjes die je ziet, waarop je kunt klikken om een `X` of een `O` te plaatsen.

Elk vakje van het bord heeft een naam. In de code noemen we dat een *id*, oftewel een identificatienummer.

Het identificatienummer van een vakje is eerst de rij en dan de kolom. En alle getallen beginnen bij 0, niet bij 1!

Dus het vakje helemaal links boven in het bord heeft het *id* `0, 0`.

Het vakje op de onderste rij in het midden heeft het *id* `2, 1` (rij `2` en kolom `1`).

▶▶▶ Zoek *Opdracht 4* in het bestand `tweeSpelers.html`.

Hier staan alle vakjes van het bord. Ze hebben allemaal een `id` die aangeeft welke rij en welke kolom het vakje heeft.

De vakjes staan in `<table>`, elke rij is een `<tr>` en elk vakje van een rij is een `<td>`.

▶▶▶ Zoek de `<table>`.

▶▶▶ Zoek de tweede `<tr>`.

▶▶▶ Zoek de derde `<td>`. Welk *id* heeft dit vakje? Waarom?

### Opdracht 5: Wie heeft er gewonnen in de rij?

Probeer het spel eens te spelen, en expres met `X` te winnen. Dat kan bijvoorbeeld door elke `X` in de bovenste rij te zetten, en elke `O` in de onderste rij.

▶▶▶ Zoek *Opdracht 5* in het bestand `tweeSpelers.js`.

Hier staat een *functie*. Een *functie* vertelt of er iets is gebeurt.

Deze functie heet *isRijWinnaar*. De functie bepaalt of het teken dat is gezet (`X` of `O`) drie op een rij heeft.

▶▶▶ In de functie *isRijWinnaar*, voeg de rijen 1 en 2 toe onder `&& bord[rij][0] === teken`. Zorg dat de regel met `&&` begint, en dat hij eindigt met `=== teken`.

Nu staat er nog maar één ding dat fout is, de `return false`.

▶▶▶ In de functie *isRijWinnaar*, verwijder `false` en de `&&` aan het begin van de volgende regel. De regel met `bord[0][kolom]` komt dan pal achter de `return` te staan.

Uiteindelijk moet er de volgende code staan:

```javascript
function isRijWinnaar(rij, teken) {
    return bord[rij][0] === teken
        && bord[rij][1] === teken
        && bord[rij][2] === teken
}
```

Is het gelukt? Probeer nogmaals het spel te spelen, door `X` in de bovenste rij te plaatsen, en `O` en de onderste rij.

Nu moet *Speler "X" heeft gewonnen* worden weergegeven zodra de derde `X` is gezet.

### Opdracht 6: Wie heeft er gewonnen in de kolom?

We gaan nu bijna hetzelfde doen als in de vorige opdracht, maar nu voor kolommen in plaats van rijen.

Probeer het spel te spelen, door `X` in de linker kolom te plaatsen, en `O` in de rechter kolom.

▶▶▶ Zoek *Opdracht 6* in het bestand `tweeSpelers.js`.

▶▶▶ Voeg, net als in opdracht 5, de kolommen 1 en 2 toe als losse regel.

▶▶▶ Verwijder, net als in opdracht 5, de `false` en de `&&` aan het begin van de volgende regel.

Probeer nogmaals het spel te spelen, door `X` in de linker kolom te plaatsen, en `O` in de rechter kolom.

Nu moet *Speler "X" heeft gewonnen* worden weergegeven zodra de derde `X` is gezet.

### Opdracht 7: Een bord vol

Als alle vakjes vol zijn en geen van de spelers heeft drie op een rij, dan is het gelijkspel.

Probeer het spel te spelen, door `X` en `O` zo neer te zetten dat geen van de spelers drie op een rij krijgt.

Maar het spel gaat gewoon door, zelfs als het bord vol is. Alleen je kan nergens meer op klikken, want het bord is vol. Dat klopt niet!

▶▶▶ Zoek *Opdracht 7* in het bestand `tweeSpelers.js`.

Om te bepalen of alle vakjes van het bord vol zijn, is de functie *isBordVol* gemaakt. Die functie bepaalt of het bord vol is.

Als het bord vol is dan moet de functie `return true` doen. Als het bord niet vol is, dan moet de functie `return false` doen.

In de functie wordt elke rij en kolom (elk vakje) van het bord bekeken of het leeg is.

▶▶▶ Zet `return true` of `return false` neer in de functie *isBordVol*.

### Opdracht 8: Een bord leeg

▶▶▶ Zoek *Opdracht 8* in het bestand `tweeSpelers.js`.

▶▶▶ Zet `return true` of `return false` neer aan het einde van de functie *isBordVol*.

### Opdracht 9: Kleurtjes!

De letters `X` en `O` zijn een beetje saai. Ze zijn allebei zwart. We kunnen ze met *CSS* mooier maken door ze een kleurtje te geven.

▶▶▶ Zoek *Opdracht 9* in het bestand `boter-kaas-eieren-simpel.css`.

▶▶▶ Vul bij de `td .X` en `td .O`, tussen `{` en `}`, de kleur in die `X` en `O` moeten krijgen met `color: ...`. Vul op de puntjes een kleur in, bijvoorbeeld `red` (rood), `green` (groen), `yellow` (geel), `black` (zwart), `white` (wit) of `purple` (paars).

Probeer een spel te spelen. Nu moeten de `X` en `O` een kleurtje hebben als ze worden geplaatst.

### Opdracht 10: Knop aanpassen

We gaan ook de knop aanpassen zodat hij grote tekst krijgt, een ander lettertype en een rand.

▶▶▶ Zoek *Opdracht 10* in het bestand `boter-kaas-eieren-simpel.css`.

Met de CSS `font-size` kunnen we de grootte van de tekst aanpassen. Standaard is de tekst `24px` groot. `px` is een pixel, dus de grootte van een enkel lampje op je beeldscherm. Tekst van `1px` is heel klein, en tekst van `100px` is heel groot.

▶▶▶ Zet binnen de `button`, tussen de `{` en `}`, de tekstgrootte neer, bijvoorbeeld `font-size: 24px;`. Pas de waarde aan naar iets anders.

We kunnen ook het lettertype aanpassen. Het lettertype is hoe de letters eruit zien. Dit kan de CSS `font-family`.

▶▶▶ Zet binnen de `button`, tussen de `{` en `}`, de tekstgrootte neer, bijvoorbeeld `font-family: Times;`. Pas de waarde aan naar iets anders, bijvoorbeeld `Times`, `Courier`, `Arial`, `Palatino` of `Bookman`,

Ten slotte geven we de knop een dikke rand met een kleur. Dat doen we met de CSS `border`. *Border* is Engels voor 'rand'. Een `border` heeft drie waarden, de dikte, het type rand en de kleur.

▶▶▶ Zet binnen de `button`, tussen de `{` en `}`, de rand neer, bijvoorbeeld `border: 1px solid red;`.  De dikte kan elk getal zijn met `px` erachter. Het type rand kan `solid` (doorgetrokken), `dashed` (streepjes), `dotted` (puntjes) en `double` (dubbel). De kleur kan dezelfde kleuren zijn als van opdracht 9.

// TODO screenshots
